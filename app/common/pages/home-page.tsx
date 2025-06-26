import { Button } from '../components/ui/button';
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from '../components/ui/card';
import { Input } from '../components/ui/input';
import type { Route } from './+types/home-page';

export const meta: Route.MetaFunction = () => {
	return [
		{ title: 'Home' },
		{
			name: 'description',
			content: 'Welcome to divide and conquer your to-do list',
		},
	];
};

export default function HomePage() {
	return (
		<main className='w-full flex flex-col items-center justify-center mt-10 space-y-10'>
			<Card className='w-full max-w-2xl p-4'>
				<CardHeader className='p-0'>
					<CardTitle>
						<h2 className='text-2xl font-bold'>To-Do List</h2>
					</CardTitle>
					<CardDescription className='space-y-0'>
						{Array.from({ length: 10 }).map((_, index) => (
							<Card
								key={index}
								className='w-full max-w-2xl p-4 first:rounded-b-none last:rounded-t-none not-first:not-last:rounded-none -mt-px first:mt-0'
							>
								<div className='flex items-center justify-between py-2'>
									<p>Task {index + 1}</p>
									<Button>Delete</Button>
								</div>
							</Card>
						))}
					</CardDescription>
				</CardHeader>
				<div className='flex items-center justify-center'>
					<Input
						className='w-full rounded-r-none'
						placeholder='Add a new task'
					/>
					<Button className='rounded-l-none'>Add</Button>
				</div>
			</Card>
		</main>
	);
}
