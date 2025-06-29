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
		{ title: 'AI Chat' },
		{ name: 'description', content: 'Chat with AI assistant' },
	];
};

export const loader = async () => {
	return {};
};

export default function AiChatPage() {
	return (
		<main className='w-full flex flex-col items-center justify-center mt-10 space-y-10 h-screen'>
			<div className='w-full max-w-4xl h-full flex flex-col'>
				<h1 className='text-4xl font-bold mb-6'>AI Chat Assistant</h1>

				<Card className='flex-1 flex flex-col'>
					<CardHeader>
						<CardTitle>Chat with AI</CardTitle>
						<CardDescription>
							Get help with your tasks and productivity
						</CardDescription>
					</CardHeader>
					<CardContent className='flex-1 flex flex-col'>
						<div className='flex-1 border rounded-lg p-4 mb-4 overflow-y-auto bg-gray-50'>
							<div className='space-y-4'>
								<div className='flex justify-start'>
									<div className='bg-blue-500 text-white rounded-lg px-4 py-2 max-w-xs'>
										Hello! How can I help you with your tasks today?
									</div>
								</div>
								<div className='flex justify-end'>
									<div className='bg-gray-300 text-black rounded-lg px-4 py-2 max-w-xs'>
										Hi! I need help organizing my tasks.
									</div>
								</div>
								<div className='flex justify-start'>
									<div className='bg-blue-500 text-white rounded-lg px-4 py-2 max-w-xs'>
										I'd be happy to help! What kind of tasks are you working
										with?
									</div>
								</div>
							</div>
						</div>
						<div className='flex space-x-2'>
							<Input placeholder='Type your message...' className='flex-1' />
							<Button>Send</Button>
						</div>
					</CardContent>
				</Card>
			</div>
		</main>
	);
}
