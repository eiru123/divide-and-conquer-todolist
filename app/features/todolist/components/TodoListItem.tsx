import { Button } from '~/common/components/ui/button';
import { Card } from '~/common/components/ui/card';
import { PencilIcon, Sparkles, Trash2Icon } from 'lucide-react';
import { Checkbox } from '~/common/components/ui/checkbox';

interface TodoListItemProps {
	task: {
		done: boolean;
		title: string;
		content: string;
	};
	onDelete: () => void;
}

export default function TodoListItem({ task, onDelete }: TodoListItemProps) {
	return (
		<Card className='w-full max-w-2xl p-4'>
			<div className='flex items-center justify-between py-2'>
				<div className='flex items-center gap-2'>
					<Checkbox checked={task.done} onCheckedChange={() => {}} />
					<div className='flex flex-col gap-1'>
						<p
							className={`text-lg font-bold ${task.done ? 'line-through' : ''}`}
						>
							{task.title}
						</p>
						<p className={`${task.done ? 'line-through' : ''}`}>
							{task.content}
						</p>
					</div>
				</div>
				<div className='flex items-center gap-2'>
					<Button variant='outline' onClick={() => {}}>
						<PencilIcon className='w-4 h-4' />
					</Button>
					<Button variant='outline' onClick={() => {}}>
						<Sparkles className='w-4 h-4' />
					</Button>
					<Button onClick={onDelete}>
						<Trash2Icon className='w-4 h-4' />
					</Button>
				</div>
			</div>
		</Card>
	);
}
