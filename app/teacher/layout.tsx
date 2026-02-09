
import Link from 'next/link';
import { mockData } from '../lib/mockData';

// Reusable Icon Component
function Icon({ path, className = "w-5 h-5" }: { path: string; className?: string }) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
            <path d={path} />
        </svg>
    );
}

const icons = {
    home: "M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",
    users: "M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2 M16 3.13a4 4 0 0 1 0 7.75 M23 21v-2a4 4 0 0 0-3-3.87 M16 3.13a4 4 0 0 1 0 7.75",
    book: "M4 19.5A2.5 2.5 0 0 1 6.5 17H20 M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z",
    edit: "M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7 M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z",
    logOut: "M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4 M16 17l5-5-5-5 M21 12H9",
};

export default function TeacherLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const user = mockData.currentTeacher;

    const navItems = [
        { label: 'Dashboard', href: '/teacher', icon: icons.home },
        { label: 'My Subjects', href: '/teacher/subjects', icon: icons.book },
        { label: 'Grade Input', href: '/teacher/grades', icon: icons.edit },
        { label: 'Students', href: '/teacher/students', icon: icons.users },
        { label: 'Profile', href: '/teacher/profile', icon: icons.users }, // Using users icon as placeholder or find a better user icon if available
    ];

    return (
        <div className="flex min-h-screen bg-gray-50 dark:bg-black">
            {/* Sidebar */}
            <aside className="w-64 bg-white dark:bg-zinc-900 border-r border-gray-200 dark:border-zinc-800 hidden md:flex flex-col">
                <div className="h-16 flex items-center px-6 border-b border-gray-200 dark:border-zinc-800">
                    <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-indigo-600">
                        Damascus<span className="text-gray-700 dark:text-gray-300">Staff</span>
                    </span>
                </div>

                <div className="p-4 flex-1">
                    <div className="mb-6 flex items-center gap-3 p-3 rounded-xl bg-purple-50 dark:bg-purple-900/20 border border-purple-100 dark:border-purple-900/30">
                        <div className="w-10 h-10 rounded-full bg-purple-200 dark:bg-purple-800 flex items-center justify-center text-purple-700 dark:text-purple-200 font-bold">
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
                                className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 hover:bg-purple-50 dark:hover:bg-zinc-800 transition-all font-medium text-sm"
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
                    <span className="font-bold">Damascus Staff</span>
                    <div className="w-8 h-8 rounded-full bg-gray-200 dark:bg-zinc-800"></div>
                </header>
                <div className="p-4 md:p-8 max-w-7xl mx-auto">
                    {children}
                </div>
            </main>
        </div>
    );
}
