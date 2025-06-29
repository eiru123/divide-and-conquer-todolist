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
		{ title: 'Settings' },
		{ name: 'description', content: 'Manage your account settings' },
	];
};

export const loader = async () => {
	return {};
};

export default function SettingsPage() {
	return (
		<main className='w-full flex flex-col items-center justify-center mt-10 space-y-10'>
			<div className='w-full max-w-2xl'>
				<h1 className='text-4xl font-bold mb-6'>Settings</h1>

				<div className='space-y-6'>
					<Card>
						<CardHeader>
							<CardTitle>Profile Settings</CardTitle>
							<CardDescription>
								Manage your personal information
							</CardDescription>
						</CardHeader>
						<CardContent className='space-y-4'>
							<div className='space-y-2'>
								<label htmlFor='displayName' className='text-sm font-medium'>
									Display Name
								</label>
								<Input
									id='displayName'
									placeholder='Your display name'
									defaultValue='John Doe'
								/>
							</div>
							<div className='space-y-2'>
								<label htmlFor='email' className='text-sm font-medium'>
									Email
								</label>
								<Input
									id='email'
									type='email'
									placeholder='your@email.com'
									defaultValue='john@example.com'
								/>
							</div>
							<Button>Save Profile</Button>
						</CardContent>
					</Card>

					<Card>
						<CardHeader>
							<CardTitle>Preferences</CardTitle>
							<CardDescription>Customize your experience</CardDescription>
						</CardHeader>
						<CardContent className='space-y-4'>
							<div className='flex items-center justify-between'>
								<div>
									<p className='font-medium'>Dark Mode</p>
									<p className='text-sm text-gray-600'>Switch to dark theme</p>
								</div>
								<input type='checkbox' className='h-4 w-4' />
							</div>
							<div className='flex items-center justify-between'>
								<div>
									<p className='font-medium'>Email Notifications</p>
									<p className='text-sm text-gray-600'>
										Receive task reminders via email
									</p>
								</div>
								<input type='checkbox' className='h-4 w-4' defaultChecked />
							</div>
							<div className='flex items-center justify-between'>
								<div>
									<p className='font-medium'>Auto-save</p>
									<p className='text-sm text-gray-600'>
										Automatically save changes
									</p>
								</div>
								<input type='checkbox' className='h-4 w-4' defaultChecked />
							</div>
							<Button>Save Preferences</Button>
						</CardContent>
					</Card>

					<Card>
						<CardHeader>
							<CardTitle>Account</CardTitle>
							<CardDescription>Manage your account</CardDescription>
						</CardHeader>
						<CardContent className='space-y-4'>
							<Button variant='outline'>Change Password</Button>
							<Button variant='outline'>Export Data</Button>
							<Button variant='destructive'>Delete Account</Button>
						</CardContent>
					</Card>
				</div>
			</div>
		</main>
	);
}
