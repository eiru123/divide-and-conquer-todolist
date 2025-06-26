import { Link } from 'react-router';
import { Button } from './ui/button';

export default function Navigation() {
	return (
		<nav className='flex items-center justify-between'>
			<Button variant='ghost' asChild>
				<Link to='/'>Home</Link>
			</Button>
			<Button variant='ghost' asChild>
				<Link to='/chat'>Chat</Link>
			</Button>
			<Button variant='ghost' asChild>
				<Link to='/calendar'>Calendar</Link>
			</Button>
			<Button variant='ghost' asChild>
				<Link to='/dashboard'>Dashboard</Link>
			</Button>
			<Button variant='ghost' asChild>
				<Link to='/settings'>Settings</Link>
			</Button>
		</nav>
	);
}
