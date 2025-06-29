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
		{ title: 'Register' },
		{ name: 'description', content: 'Create a new account' },
	];
};

export const loader = async () => {
	return {};
};

export default function RegisterPage() {
	return (
		<main className='w-full flex flex-col items-center justify-center min-h-screen'>
			<Card className='w-full max-w-md'>
				<CardHeader>
					<CardTitle>Register</CardTitle>
					<CardDescription>Create a new account to get started</CardDescription>
				</CardHeader>
				<CardContent className='space-y-4'>
					<div className='space-y-2'>
						<label htmlFor='name' className='text-sm font-medium'>
							Name
						</label>
						<Input id='name' type='text' placeholder='Your name' />
					</div>
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
					<div className='space-y-2'>
						<label htmlFor='confirmPassword' className='text-sm font-medium'>
							Confirm Password
						</label>
						<Input
							id='confirmPassword'
							type='password'
							placeholder='••••••••'
						/>
					</div>
					<Button className='w-full'>Register</Button>
					<p className='text-center text-sm text-gray-600'>
						Already have an account?{' '}
						<a href='/login' className='text-blue-600 hover:underline'>
							Login
						</a>
					</p>
				</CardContent>
			</Card>
		</main>
	);
}
