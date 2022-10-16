// NPM Modules
// @ts-ignore
import { prompt } from "enquirer";

export async function createAuthenticationPrompt(): Promise<{ username: string, password: string }> {

	const question = [
		{
			type: 'input',
			name: 'username',
			message: 'What is your username?'
		},
		{
			type: 'password',
			name: 'password',
			message: 'What is your password?'
		}
	];

	return await prompt(question);
}
