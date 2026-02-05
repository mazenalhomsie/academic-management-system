
import Link from 'next/link';
import { mockData } from '../lib/mockData';

// Reusable Icon Component (same as landing page, extracted for local use)
function Icon({ path, className = "w-5 h-5" }: { path: string; className?: string }) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
            <path d={path} />
        </svg>
    );
}

const icons = {
    home: "M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",
    book: "M4 19.5A2.5 2.5 0 0 1 6.5 17H20 M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z",
    calendar: "M8 2v4 M16 2v4 M3 10h18 M5 4h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z",
    fileText: "M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z M14 2v6h6",
    user: "M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2",
    logOut: "M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4 M16 17l5-5-5-5 M21 12H9",
};

export default function StudentLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const user = mockData.currentUser;

    const navItems = [
        { label: 'Dashboard', href: '/student', icon: icons.home },
        { label: 'My Grades', href: '/student/grades', icon: icons.fileText },
        { label: 'Schedule', href: '/student/schedule', icon: icons.calendar },
        { label: 'Courses', href: '/student/courses', icon: icons.book },
        { label: 'Profile', href: '/student/profile', icon: icons.user },
    ];

    return (
        <div className="flex min-h-screen bg-gray-50 dark:bg-black">
            {/* Sidebar */}
            <aside className="w-64 bg-white dark:bg-zinc-900 border-r border-gray-200 dark:border-zinc-800 hidden md:flex flex-col">
                <div className="h-16 flex items-center px-6 border-b border-gray-200 dark:border-zinc-800">
                    <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
                        Damascus<span className="text-gray-700 dark:text-gray-300">Portal</span>
                    </span>
                </div>

                <div className="p-4 flex-1">
                    <div className="mb-6 flex items-center gap-3 p-3 rounded-xl bg-blue-50 dark:bg-blue-900/20 border border-blue-100 dark:border-blue-900/30">
                        <div className="w-10 h-10 rounded-full bg-blue-200 dark:bg-blue-800 flex items-center justify-center text-blue-700 dark:text-blue-200 font-bold">
                            {user.name.charAt(0)}
                        </div>
                        <div>
                            <p className="text-sm font-semibold text-gray-900 dark:text-gray-100">{user.name}</p>
                            <p className="text-xs text-gray-500 dark:text-gray-400 capitalize">{user.role}</p>
                        </div>
                    </div>

                    <nav className="space-y-1">
                        {navItems.map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-zinc-800 transition-all font-medium text-sm"
                            >
                                <Icon path={item.icon} />
                                {item.label}
                            </Link>
                        ))}
                    </nav>
                </div>

                <div className="p-4 border-t border-gray-200 dark:border-zinc-800">
                    <button className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20 transition-all font-medium text-sm">
                        <Icon path={icons.logOut} />
                        Sign Out
                    </button>
                </div>
            </aside>

            {/* Main Content */}
            <main className="flex-1 overflow-auto">
                <header className="h-16 bg-white/80 dark:bg-black/80 backdrop-blur border-b border-gray-200 dark:border-zinc-800 md:hidden flex items-center px-4 justify-between sticky top-0 z-10">
                    <span className="font-bold">Damascus Portal</span>
                    {/* Mobile menu trigger would go here */}
                    <div className="w-8 h-8 rounded-full bg-gray-200 dark:bg-zinc-800"></div>
                </header>
                <div className="p-4 md:p-8 max-w-7xl mx-auto">
                    {children}
                </div>
            </main>
        </div>
    );
}
