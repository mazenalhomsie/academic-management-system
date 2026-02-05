
import { mockData } from '../lib/mockData';

function StatCard({ title, value, change, positive }: { title: string; value: string | number; change: string; positive: boolean }) {
    return (
        <div className="bg-white dark:bg-zinc-900 p-6 rounded-2xl border border-gray-100 dark:border-zinc-800 shadow-sm">
            <div className="flex justify-between items-start mb-4">
                <h3 className="text-gray-500 dark:text-gray-400 text-sm font-medium">{title}</h3>
                <span className={`text-xs font-medium px-2 py-1 rounded-full ${positive ? 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400' : 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400'}`}>
                    {change}
                </span>
            </div>
            <div className="text-3xl font-bold text-gray-900 dark:text-white">{value}</div>
        </div>
    );
}

export default function AdminDashboard() {
    const { users, auditLogs, subjects } = mockData;
    const activeUsers = users.filter(u => u.status === 'active').length;
    const studentCount = users.filter(u => u.role === 'student').length;
    const teacherCount = users.filter(u => u.role === 'teacher').length;

    return (
        <div className="space-y-8">
            <div>
                <h1 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
                    System Overview
                </h1>
                <p className="text-gray-600 dark:text-gray-400 mt-2">
                    Monitoring {users.length} total users across {subjects.length} active departments.
                </p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <StatCard title="Total Users" value={users.length} change="+12% this month" positive={true} />
                <StatCard title="Active Students" value={studentCount} change="+5% this week" positive={true} />
                <StatCard title="Active Faculty" value={teacherCount} change="Stable" positive={true} />
                <StatCard title="System Load" value="28%" change="-2% vs avg" positive={true} />
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
                {/* Main Column: Recent Activity */}
                <div className="lg:col-span-2 space-y-8">
                    <section className="bg-white dark:bg-zinc-900 rounded-3xl border border-gray-100 dark:border-zinc-800 overflow-hidden shadow-sm">
                        <div className="p-6 border-b border-gray-100 dark:border-zinc-800 flex justify-between items-center">
                            <h2 className="text-lg font-bold">System Audit Logs</h2>
                            <button className="text-sm text-blue-600 dark:text-blue-400 font-medium hover:underline">View All Logs</button>
                        </div>
                        <div className="divide-y divide-gray-100 dark:divide-zinc-800">
                            {auditLogs.map((log) => (
                                <div key={log.id} className="p-4 flex items-start gap-4 hover:bg-gray-50 dark:hover:bg-zinc-800/50 transition-colors">
                                    <div className={`mt-1 w-2 h-2 rounded-full shrink-0 ${log.status === 'success' ? 'bg-emerald-500' : log.status === 'warning' ? 'bg-orange-500' : 'bg-red-500'}`}></div>
                                    <div className="flex-1 min-w-0">
                                        <p className="text-sm font-medium text-gray-900 dark:text-white">
                                            {log.action} <span className="text-gray-400 font-normal">by {log.user}</span>
                                        </p>
                                        <p className="text-xs text-gray-500 dark:text-gray-400 truncate">{log.details}</p>
                                    </div>
                                    <div className="text-xs text-gray-400 whitespace-nowrap">{log.timestamp}</div>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Quick Actions */}
                    <div className="grid sm:grid-cols-3 gap-4">
                        <button className="p-4 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 text-white shadow-lg shadow-blue-500/20 hover:scale-[1.02] transition-transform text-left">
                            <div className="mb-2 opacity-80">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6"><path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="8.5" cy="7" r="4" /><line x1="20" y1="8" x2="20" y2="14" /><line x1="23" y1="11" x2="17" y2="11" /></svg>
                            </div>
                            <span className="font-bold text-sm">Add User</span>
                        </button>
                        <button className="p-4 rounded-xl bg-gradient-to-br from-purple-500 to-purple-600 text-white shadow-lg shadow-purple-500/20 hover:scale-[1.02] transition-transform text-left">
                            <div className="mb-2 opacity-80">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /><line x1="16" y1="13" x2="8" y2="13" /><line x1="16" y1="17" x2="8" y2="17" /><polyline points="10 9 9 9 8 9" /></svg>
                            </div>
                            <span className="font-bold text-sm">Post Notice</span>
                        </button>
                        <button className="p-4 rounded-xl bg-white dark:bg-zinc-800 border border-gray-200 dark:border-zinc-700 hover:border-gray-300 dark:hover:border-zinc-600 transition-colors text-left text-gray-900 dark:text-white">
                            <div className="mb-2 text-gray-400">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6"><path d="M21 12V7H5a2 2 0 0 1 0-4h14v4" /><path d="M3 5v14a2 2 0 0 0 2 2h16v-5" /><path d="M18 12a2 2 0 0 0 0 4h4v-4Z" /></svg>
                            </div>
                            <span className="font-medium text-sm">Backup DB</span>
                        </button>
                    </div>
                </div>

                {/* Side Column: Server Status */}
                <div className="space-y-8">
                    <section className="bg-white dark:bg-zinc-900 rounded-3xl border border-gray-100 dark:border-zinc-800 p-6 shadow-sm">
                        <h2 className="text-lg font-bold mb-4">Server Health</h2>
                        <div className="space-y-4">
                            <div>
                                <div className="flex justify-between text-sm mb-1">
                                    <span className="text-gray-500">CPU Usage</span>
                                    <span className="font-medium text-emerald-500">12%</span>
                                </div>
                                <div className="h-2 bg-gray-100 dark:bg-zinc-800 rounded-full overflow-hidden">
                                    <div className="h-full w-[12%] bg-emerald-500 rounded-full"></div>
                                </div>
                            </div>
                            <div>
                                <div className="flex justify-between text-sm mb-1">
                                    <span className="text-gray-500">Memory</span>
                                    <span className="font-medium text-blue-500">48%</span>
                                </div>
                                <div className="h-2 bg-gray-100 dark:bg-zinc-800 rounded-full overflow-hidden">
                                    <div className="h-full w-[48%] bg-blue-500 rounded-full"></div>
                                </div>
                            </div>
                            <div>
                                <div className="flex justify-between text-sm mb-1">
                                    <span className="text-gray-500">Storage</span>
                                    <span className="font-medium text-purple-500">71%</span>
                                </div>
                                <div className="h-2 bg-gray-100 dark:bg-zinc-800 rounded-full overflow-hidden">
                                    <div className="h-full w-[71%] bg-purple-500 rounded-full"></div>
                                </div>
                            </div>
                        </div>

                        <div className="mt-6 pt-6 border-t border-gray-100 dark:border-zinc-800">
                            <div className="flex items-center gap-3">
                                <div className="w-3 h-3 bg-emerald-500 rounded-full animate-pulse"></div>
                                <span className="text-sm font-medium text-gray-600 dark:text-gray-300">All Systems Operational</span>
                            </div>
                        </div>
                    </section>

                    <section className="bg-indigo-900 rounded-3xl p-6 text-white relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-3xl -mr-16 -mt-16"></div>
                        <h3 className="text-lg font-bold mb-2 relative">New Version Available</h3>
                        <p className="text-indigo-200 text-sm mb-4 relative">v2.1.0 is ready to deploy. Includes security patches.</p>
                        <button className="bg-white text-indigo-900 px-4 py-2 rounded-lg text-sm font-bold relative hover:bg-indigo-50 transition-colors">
                            Update Now
                        </button>
                    </section>
                </div>
            </div>
        </div>
    );
}
