
import Link from 'next/link';

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
    settings: "M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.38a2 2 0 0 0-.73-2.73l-.15-.1a2 2 0 0 1-1-1.72v-.51a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z",
    shield: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z",
    activity: "M22 12h-4l-3 9L9 3l-3 9H2",
    logOut: "M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4 M16 17l5-5-5-5 M21 12H9",
};

export default function AdminLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const navItems = [
        { label: 'Dashboard', href: '/admin', icon: icons.home },
        { label: 'User Management', href: '/admin/users', icon: icons.users },
        { label: 'System Logs', href: '/admin/logs', icon: icons.activity },
        { label: 'Settings', href: '/admin/settings', icon: icons.settings },
    ];

    return (
        <div className="flex min-h-screen bg-gray-50 dark:bg-black">
            {/* Sidebar */}
            <aside className="w-64 bg-zinc-900 border-r border-zinc-800 hidden md:flex flex-col text-white">
                <div className="h-16 flex items-center px-6 border-b border-zinc-800">
                    <span className="text-xl font-bold flex items-center gap-2">
                        <div className="bg-emerald-500 rounded p-1">
                            <Icon path={icons.shield} className="w-4 h-4 text-black" />
                        </div>
                        Damascus<span className="text-zinc-400">Admin</span>
                    </span>
                </div>

                <div className="p-4 flex-1">
                    <div className="mb-6 px-3 py-2">
                        <p className="text-xs font-semibold text-zinc-500 uppercase tracking-wider mb-2">Platform</p>
                        <div className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded-full bg-emerald-500 flex items-center justify-center text-black font-bold">
                                A
                            </div>
                            <div>
                                <p className="text-sm font-semibold">Administrator</p>
                                <p className="text-xs text-emerald-500">Super User</p>
                            </div>
                        </div>
                    </div>

                    <nav className="space-y-1">
                        {navItems.map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-zinc-400 hover:text-white hover:bg-zinc-800 transition-all font-medium text-sm"
                            >
                                <Icon path={item.icon} />
                                {item.label}
                            </Link>
                        ))}
                    </nav>
                </div>

                <div className="p-4 border-t border-zinc-800">
                    <button className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-red-400 hover:bg-red-500/10 transition-all font-medium text-sm">
                        <Icon path={icons.logOut} />
                        Sign Out
                    </button>
                </div>
            </aside>

            {/* Main Content */}
            <main className="flex-1 overflow-auto">
                <header className="h-16 bg-white/80 dark:bg-black/80 backdrop-blur border-b border-gray-200 dark:border-zinc-800 md:hidden flex items-center px-4 justify-between sticky top-0 z-10">
                    <span className="font-bold">Damascus Admin</span>
                    <div className="w-8 h-8 rounded-full bg-emerald-500"></div>
                </header>
                <div className="p-4 md:p-8 max-w-7xl mx-auto">
                    {children}
                </div>
            </main>
        </div>
    );
}
