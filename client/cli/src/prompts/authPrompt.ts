// NPM Modules
// @ts-ignore
import { prompt } from "enquirer";
import crypto from "crypto";
import * as fs from "fs";
import { getAppDataPath } from "../utils/appdata-path";
import { join } from "path";
import { authenticator } from "otplib";

const algorithm = 'aes-256-ctr';
const IV_LENGTH = 16;
const filePath = getAppDataPath(["IAmQuiteHungry", "cli", "credentials"], true)

let directPassword: string | undefined;
let inDecryptionPhase: boolean = false;

async function encryptData(file: string, authenticationData: { username?: string, password?: string, otp?: string, apiKey?: string }) {
	const key = (await createAuthenticationPasswordPrompt(file)).password;
	const text = JSON.stringify(authenticationData, null, 4);

	let iv = crypto.randomBytes(IV_LENGTH);
	const cipher = crypto.createCipheriv(algorithm, crypto.scryptSync(key, 'salt', 32), iv);
	let encrypted = cipher.update(text);
	encrypted = Buffer.concat([encrypted, cipher.final()]);
	fs.writeFileSync(file, iv.toString('hex') + ':' + encrypted.toString('hex'), {
		encoding: 'utf-8'
	})
}

async function decryptData(file: string): Promise<{ username?: string, password?: string, otp?: string }> {
	if (!fs.existsSync(file)) {
		throw Error(file + " does not exist")
	}
	const key = (await createAuthenticationPasswordPrompt(file)).password;
	const text = fs.readFileSync(file, 'utf-8')

	let textParts = text.split(':');
	let iv = Buffer.from(<string>textParts.shift(), 'hex');
	let encryptedText = Buffer.from(textParts.join(':'), 'hex');
	let decipher = crypto.createDecipheriv(algorithm, crypto.scryptSync(key, 'salt', 32), iv);
	let decrypted = decipher.update(encryptedText);
	decrypted = Buffer.concat([decrypted, decipher.final()]);
	return JSON.parse(decrypted.toString());
}

export async function createAuthenticationPasswordPrompt(file: string): Promise<{ password: string }> {

	if (directPassword) {
		return { password: directPassword }
	}

	try {
		if (!inDecryptionPhase) {
			inDecryptionPhase = true;
			let decryptedData = await decryptData(join(filePath, "/auth.txt"))
			directPassword = decryptedData.password
			inDecryptionPhase = false;
			return <{ password: string }>decryptedData
		}
	} catch (e) {

	}

	const question = [
		{
			type: 'password',
			name: 'password',
			message: `What is your password for ${file}?`
		}
	];

	let basicData = <{ password: string }>await prompt(question);
	if (!fs.existsSync(file)) {
		directPassword = basicData.password
		await encryptData(join(filePath, "/auth.txt"), basicData)
	}
	return basicData
}

export async function createMigrosAuthenticationPrompt(): Promise<{ username: string, password: string }> {

	try {
		let decryptedData = await decryptData(join(filePath, "/migros_basic.txt"))
		return <{ username: string, password: string }>decryptedData
	} catch (e) {

	}

	const question = [
		{
			type: 'input',
			name: 'username',
			message: 'Migros: What is your username?'
		},
		{
			type: 'password',
			name: 'password',
			message: 'Migros: What is your password?'
		}
	];

	let basicData = <{ username: string, password: string }>await prompt(question);
	await encryptData(join(filePath, "/migros_basic.txt"), basicData)
	return basicData
}

export async function createBringAuthenticationPrompt(): Promise<{ mail: string, password: string }> {

	try {
		let decryptedData = await decryptData(join(filePath, "/bring_basic.txt"))
		return <{ mail: string, password: string }>decryptedData
	} catch (e) {

	}

	const question = [
		{
			type: 'input',
			name: 'mail',
			message: 'Bring: What is your E-Mail?'
		},
		{
			type: 'password',
			name: 'password',
			message: 'Bring: What is your password?'
		}
	];

	let basicData = <{ mail: string, password: string }>await prompt(question);
	await encryptData(join(filePath, "/bring_basic.txt"), basicData)
	return basicData
}

export async function createMigrosAuthenticationOTPPrompt(): Promise<{ otp: string }> {

	try {
		let decryptedData = await decryptData(join(filePath, "/migros_otp.txt"))
		let otpData = <{ otp: string }>decryptedData
		return {
			otp: authenticator.generate(otpData.otp)
		}
	} catch (e) {

	}

	const question = [
		{
			type: 'input',
			name: 'otp',
			message: 'Migros: What is your One Time Password Authentication Key?'
		}
	];

	let otpData = <{ otp: string }>await prompt(question);
	await encryptData(join(filePath, "/migros_otp.txt"), otpData)
	return {
		otp: authenticator.generate(otpData.otp)
	}
}

export async function createSpoonacularAuthenticationPrompt(): Promise<{ apiKey: string }> {

	try {
		let decryptedData = await decryptData(join(filePath, "/spoonacular_key.txt"))
		return <{ apiKey: string }>decryptedData
	} catch (e) {

	}

	const question = [
		{
			type: 'password',
			name: 'apiKey',
			message: 'Spoonacular: What is your api key?'
		}
	];

	let basicData = <{ apiKey: string }>await prompt(question);
	await encryptData(join(filePath, "/spoonacular_key.txt"), basicData)
	return basicData
}
