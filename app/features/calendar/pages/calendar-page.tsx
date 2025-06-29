import { Button } from '~/common/components/ui/button';
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from '~/common/components/ui/card';

export const meta = () => {
	return [
		{ title: 'Calendar' },
		{ name: 'description', content: 'View your tasks on calendar' },
	];
};

export const loader = async () => {
	return {};
};

export default function CalendarPage() {
	const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
	const currentDate = new Date();
	const currentMonth = currentDate.getMonth();
	const currentYear = currentDate.getFullYear();

	return (
		<main className='w-full flex flex-col items-center justify-center mt-10 space-y-10'>
			<div className='w-full max-w-4xl'>
				<h1 className='text-4xl font-bold mb-6'>Calendar</h1>

				<Card>
					<CardHeader>
						<CardTitle className='flex items-center justify-between'>
							<span>
								{new Date(currentYear, currentMonth).toLocaleDateString(
									'en-US',
									{ month: 'long', year: 'numeric' }
								)}
							</span>
							<div className='flex space-x-2'>
								<Button variant='outline' size='sm'>
									Previous
								</Button>
								<Button variant='outline' size='sm'>
									Next
								</Button>
							</div>
						</CardTitle>
						<CardDescription>Your task calendar view</CardDescription>
					</CardHeader>
					<CardContent>
						<div className='grid grid-cols-7 gap-2 mb-4'>
							{days.map((day) => (
								<div
									key={day}
									className='text-center font-semibold p-2 text-sm'
								>
									{day}
								</div>
							))}
						</div>
						<div className='grid grid-cols-7 gap-2'>
							{Array.from({ length: 35 }).map((_, index) => (
								<div
									key={index}
									className='h-20 border rounded p-1 text-sm hover:bg-gray-50'
								>
									<div className='font-medium'>{(index % 31) + 1}</div>
									{index % 7 === 0 && (
										<div className='text-xs text-blue-600 mt-1'>Task</div>
									)}
								</div>
							))}
						</div>
					</CardContent>
				</Card>
			</div>
		</main>
	);
}
