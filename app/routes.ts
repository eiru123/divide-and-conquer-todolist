import { type RouteConfig, index, route } from '@react-router/dev/routes';

export default [
	index('common/pages/home-page.tsx'),
	route('/dashboard', 'features/dashboard/pages/dashboard-page.tsx'),
	route('/login', 'features/auth/pages/login-page.tsx'),
	route('/register', 'features/auth/pages/register-page.tsx'),
	route('/todolist', 'features/todolist/pages/todolist-page.tsx'),
	route('/calendar', 'features/calendar/pages/calendar-page.tsx'),
	route('/ai-advice', 'features/ai-advice/pages/ai-advice-page.tsx'),
	route('/settings', 'features/settings/pages/settings-page.tsx'),
] satisfies RouteConfig;
