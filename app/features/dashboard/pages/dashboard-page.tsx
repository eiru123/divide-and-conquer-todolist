import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from '~/common/components/ui/card';

export const meta = () => {
	return [
		{ title: 'Dashboard' },
		{ name: 'description', content: 'Dashboard overview' },
	];
};

export const loader = async () => {
	return {};
};

export default function DashboardPage() {
	return (
		<main className='w-full flex flex-col items-center justify-center mt-10 space-y-10'>
			<div className='w-full max-w-4xl'>
				<h1 className='text-4xl font-bold mb-6'>Dashboard</h1>

				<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
					<Card>
						<CardHeader>
							<CardTitle>Total Tasks</CardTitle>
							<CardDescription>Your task overview</CardDescription>
						</CardHeader>
						<CardContent>
							<p className='text-3xl font-bold'>24</p>
						</CardContent>
					</Card>

					<Card>
						<CardHeader>
							<CardTitle>Completed Tasks</CardTitle>
							<CardDescription>Tasks completed today</CardDescription>
						</CardHeader>
						<CardContent>
							<p className='text-3xl font-bold text-green-600'>12</p>
						</CardContent>
					</Card>

					<Card>
						<CardHeader>
							<CardTitle>Pending Tasks</CardTitle>
							<CardDescription>Tasks remaining</CardDescription>
						</CardHeader>
						<CardContent>
							<p className='text-3xl font-bold text-orange-600'>12</p>
						</CardContent>
					</Card>
				</div>
			</div>
		</main>
	);
}
