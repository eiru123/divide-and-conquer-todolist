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
		{ title: 'Todo List' },
		{ name: 'description', content: 'Manage your tasks' },
	];
};

export const loader = async () => {
	return {};
};

export default function TodolistPage() {
	return (
		<main className='w-full flex flex-col items-center justify-center mt-10 space-y-10'>
			<div className='w-full max-w-2xl'>
				<h1 className='text-4xl font-bold mb-6'>Todo List</h1>

				<Card className='mb-6'>
					<CardHeader>
						<CardTitle>Add New Task</CardTitle>
						<CardDescription>
							Create a new task to add to your list
						</CardDescription>
					</CardHeader>
					<CardContent>
						<div className='flex space-x-2'>
							<Input
								placeholder='Enter task description...'
								className='flex-1'
							/>
							<Button>Add Task</Button>
						</div>
					</CardContent>
				</Card>

				<Card>
					<CardHeader>
						<CardTitle>My Tasks</CardTitle>
						<CardDescription>Your current tasks</CardDescription>
					</CardHeader>
					<CardContent className='space-y-0'>
						{Array.from({ length: 5 }).map((_, index) => (
							<Card
								key={index}
								className='w-full p-4 first:rounded-b-none last:rounded-t-none not-first:not-last:rounded-none -mt-px first:mt-0'
							>
								<div className='flex items-center justify-between py-2'>
									<div className='flex items-center space-x-2'>
										<input type='checkbox' className='h-4 w-4' />
										<p>Task {index + 1}</p>
									</div>
									<Button variant='outline' size='sm'>
										Delete
									</Button>
								</div>
							</Card>
						))}
					</CardContent>
				</Card>
			</div>
		</main>
	);
}
