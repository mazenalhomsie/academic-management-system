
'use client';

import { useState } from 'react';
import Link from 'next/link';

// Icon utility
function Icon({ path, className = "w-5 h-5" }: { path: string; className?: string }) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
            <path d={path} />
        </svg>
    );
}

const icons = {
    book: "M4 19.5A2.5 2.5 0 0 1 6.5 17H20 M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z",
    chart: "M12 20V10 M18 20V4 M6 20v-4",
    users: "M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2 M16 3.13a4 4 0 0 1 0 7.75 M23 21v-2a4 4 0 0 0-3-3.87 M16 3.13a4 4 0 0 1 0 7.75",
    shield: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z",
    calendar: "M8 2v4 M16 2v4 M3 10h18 M5 4h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z",
    check: "M22 11.08V12a10 10 0 1 1-5.93-9.14 M22 4L12 14.01l-3-3",
    download: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4 M7 10l5 5 5-5 M12 15V3",
    lock: "M19 11H5a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7a2 2 0 0 0-2-2zm-7 0V7a5 5 0 0 1 10 0v4",
    globe: "M22 12A10 10 0 1 1 12 2a10 10 0 0 1 10 10z M2 12h20",
    chevronDown: "M6 9l6 6 6-6"
};

export default function MegaMenu() {
    const [activeMenu, setActiveMenu] = useState<string | null>(null);

    const portals = [
        { title: "Student Portal", href: "/student", icon: icons.book, desc: "Access grades & schedule" },
        { title: "Teacher Dashboard", href: "/teacher", icon: icons.users, desc: "Manage classes & grading" },
        { title: "Administration", href: "/admin", icon: icons.shield, desc: "System control panel" },
    ];

    const features = [
        { title: "Grading System", href: "#", icon: icons.chart, desc: "Real-time GPA calculation" },
        { title: "Attendance", href: "#", icon: icons.check, desc: "Digital check-in tracking" },
        { title: "Scheduling", href: "#", icon: icons.calendar, desc: "Conflict-free timetables" },
        { title: "Security", href: "#", icon: icons.lock, desc: "Enterprise-grade RBAC" },
    ];

    const resources = [
        { title: "Documentation", href: "#", icon: icons.book },
        { title: "System Status", href: "#", icon: icons.chart },
        { title: "Download App", href: "#", icon: icons.download },
        { title: "Support Center", href: "#", icon: icons.globe },
    ];

    return (
        <nav className="fixed top-0 w-full z-50 bg-white/90 dark:bg-black/90 backdrop-blur-md border-b border-gray-200 dark:border-gray-800" onMouseLeave={() => setActiveMenu(null)}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-2 z-50">
                        <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                            <Icon path={icons.book} className="w-5 h-5 text-white" />
                        </div>
                        <span className="font-bold text-xl tracking-tight text-gray-900 dark:text-white">Damascus Institute</span>
                    </Link>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center space-x-8">
                        <button
                            className={`flex items-center gap-1 text-sm font-medium transition-colors ${activeMenu === 'portals' ? 'text-blue-600 dark:text-blue-400' : 'text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400'}`}
                            onMouseEnter={() => setActiveMenu('portals')}
                        >
                            Portals <Icon path={icons.chevronDown} className={`w-4 h-4 transition-transform ${activeMenu === 'portals' ? 'rotate-180' : ''}`} />
                        </button>
                        <button
                            className={`flex items-center gap-1 text-sm font-medium transition-colors ${activeMenu === 'features' ? 'text-blue-600 dark:text-blue-400' : 'text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400'}`}
                            onMouseEnter={() => setActiveMenu('features')}
                        >
                            Features <Icon path={icons.chevronDown} className={`w-4 h-4 transition-transform ${activeMenu === 'features' ? 'rotate-180' : ''}`} />
                        </button>
                        <button
                            className={`flex items-center gap-1 text-sm font-medium transition-colors ${activeMenu === 'resources' ? 'text-blue-600 dark:text-blue-400' : 'text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400'}`}
                            onMouseEnter={() => setActiveMenu('resources')}
                        >
                            Resources <Icon path={icons.chevronDown} className={`w-4 h-4 transition-transform ${activeMenu === 'resources' ? 'rotate-180' : ''}`} />
                        </button>
                    </div>

                    {/* CTA */}
                    <div className="z-50">
                        <Link href="/login" className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-full text-sm font-medium transition-all shadow-lg shadow-blue-600/20">
                            System Access
                        </Link>
                    </div>
                </div>
            </div>

            {/* Mega Menu Dropdown */}
            <div
                className={`absolute top-16 left-0 w-full bg-white dark:bg-zinc-900 border-b border-gray-200 dark:border-zinc-800 transition-all duration-300 ease-in-out overflow-hidden ${activeMenu ? 'max-h-96 opacity-100 visible' : 'max-h-0 opacity-0 invisible'
                    }`}
                onMouseEnter={() => setActiveMenu(activeMenu)}
                onMouseLeave={() => setActiveMenu(null)}
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">

                    {/* Portals Content */}
                    {activeMenu === 'portals' && (
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 animation-fade-in">
                            <div className="col-span-2 grid grid-cols-2 gap-6">
                                {portals.map((item) => (
                                    <Link key={item.title} href={item.href} className="flex gap-4 p-3 rounded-xl hover:bg-gray-50 dark:hover:bg-zinc-800 transition-colors group">
                                        <div className="w-10 h-10 rounded-lg bg-blue-50 dark:bg-blue-900/20 flex items-center justify-center text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform">
                                            <Icon path={item.icon} />
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 transition-colors">{item.title}</h4>
                                            <p className="text-sm text-gray-500 dark:text-gray-400">{item.desc}</p>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/10 dark:to-indigo-900/10 rounded-2xl p-6 flex flex-col justify-end">
                                <h4 className="font-bold text-lg mb-2 text-gray-900 dark:text-white">New Teacher Tools</h4>
                                <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">Version 2.0 now includes easy grade importing from Excel.</p>
                                <Link href="/teacher" className="text-sm font-semibold text-blue-600 dark:text-blue-400 hover:underline">Check it out &rarr;</Link>
                            </div>
                        </div>
                    )}

                    {/* Features Content */}
                    {activeMenu === 'features' && (
                        <div className="grid grid-cols-4 gap-8">
                            {features.map((item) => (
                                <Link key={item.title} href={item.href} className="group p-4 rounded-xl hover:bg-gray-50 dark:hover:bg-zinc-800 transition-colors border border-transparent hover:border-gray-100 dark:hover:border-zinc-700">
                                    <div className="mb-3 w-8 h-8 rounded bg-gray-100 dark:bg-zinc-700 flex items-center justify-center text-gray-600 dark:text-gray-300 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                                        <Icon path={item.icon} className="w-4 h-4" />
                                    </div>
                                    <h4 className="font-bold text-gray-900 dark:text-white mb-1">{item.title}</h4>
                                    <p className="text-xs text-gray-500 dark:text-gray-400">{item.desc}</p>
                                </Link>
                            ))}
                        </div>
                    )}

                    {/* Resources Content */}
                    {activeMenu === 'resources' && (
                        <div className="grid grid-cols-4 gap-6">
                            {resources.map((item) => (
                                <Link key={item.title} href={item.href} className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-zinc-800 transition-colors text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">
                                    <Icon path={item.icon} className="w-5 h-5" />
                                    <span className="font-medium">{item.title}</span>
                                </Link>
                            ))}
                        </div>
                    )}

                </div>
            </div>
        </nav>
    );
}
