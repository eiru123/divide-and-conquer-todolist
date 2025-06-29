import { Button } from '../components/ui/button';
import {
	Card,
	CardDescription,
	CardHeader,
	CardTitle,
} from '../components/ui/card';
import { Input } from '../components/ui/input';
import TodoListItem from '../../features/todolist/components/TodoListItem';
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
		<Card className='w-full max-w-2xl h-full flex flex-col p-6 gap-0 overflow-auto'>
			{/* 고정 헤더 */}
			<CardHeader className='p-0 pb-4 flex-shrink-0'>
				<CardTitle>
					<h2 className='text-2xl font-bold'>To-Do List</h2>
				</CardTitle>
			</CardHeader>

			{/* 스크롤 가능한 콘텐츠 영역 */}
			<CardDescription
				className='flex-1 overflow-auto space-y-1 min-h-0 [&::-webkit-scrollbar]:hidden'
				style={{
					scrollbarWidth: 'none',
					msOverflowStyle: 'none',
				}}
			>
				{Array.from({ length: 20 }).map((_, index) => (
					<TodoListItem
						key={index}
						task={{
							done: index % 2 === 0,
							title: `Task ${index + 1}`,
							content: `Task ${index + 1} content`,
						}}
						onDelete={() => console.log(`Delete task ${index + 1}`)}
					/>
				))}
			</CardDescription>

			{/* 고정 하단 입력 영역 */}
			<div className='flex items-center gap-2 pt-4 border-t flex-shrink-0'>
				<Input className='flex-1' placeholder='Add a new task' />
				<Button>Add</Button>
			</div>
		</Card>
	);
}
