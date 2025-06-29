import { Button } from '~/common/components/ui/button';
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from '~/common/components/ui/card';
import { Input } from '~/common/components/ui/input';

export const meta = () => {
	return [
		{ title: 'Login' },
		{ name: 'description', content: 'Login to your account' },
	];
};

export const loader = async () => {
	return {};
};

export default function LoginPage() {
	return (
		<main className='w-full flex flex-col items-center justify-center min-h-screen'>
			<Card className='w-full max-w-md'>
				<CardHeader>
					<CardTitle>Login</CardTitle>
					<CardDescription>
						Enter your credentials to access your account
					</CardDescription>
				</CardHeader>
				<CardContent className='space-y-4'>
					<div className='space-y-2'>
						<label htmlFor='email' className='text-sm font-medium'>
							Email
						</label>
						<Input id='email' type='email' placeholder='your@email.com' />
					</div>
					<div className='space-y-2'>
						<label htmlFor='password' className='text-sm font-medium'>
							Password
						</label>
						<Input id='password' type='password' placeholder='••••••••' />
					</div>
					<Button className='w-full'>Login</Button>
					<p className='text-center text-sm text-gray-600'>
						Don't have an account?{' '}
						<a href='/register' className='text-blue-600 hover:underline'>
							Register
						</a>
					</p>
				</CardContent>
			</Card>
		</main>
	);
}
