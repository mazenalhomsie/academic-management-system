
import { mockData } from '../lib/mockData';

function StatCard({ title, value, label, colorClass }: { title: string; value: string | number; label: string; colorClass: string }) {
    return (
        <div className="bg-white dark:bg-zinc-900 p-6 rounded-2xl border border-gray-100 dark:border-zinc-800 shadow-sm">
            <h3 className="text-gray-500 dark:text-gray-400 text-sm font-medium mb-1">{title}</h3>
            <div className={`text-3xl font-bold mb-1 ${colorClass}`}>{value}</div>
            <p className="text-xs text-gray-400">{label}</p>
        </div>
    );
}

export default function StudentDashboard() {
    const { currentUser, grades, announcements, subjects } = mockData;

    // Calculate Average Score just for show
    const averageScore = Math.round(grades.reduce((acc, curr) => acc + curr.score, 0) / grades.length);

    return (
        <div className="space-y-8">
            {/* Header */}
            <div>
                <h1 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
                    Welcome back, {currentUser.name.split(' ')[0]}! 👋
                </h1>
                <p className="text-gray-600 dark:text-gray-400 mt-2">
                    Here is what's happening with your academic progress today.
                </p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <StatCard
                    title="Current GPA"
                    value={currentUser.gpa}
                    label="Last updated: Yesterday"
                    colorClass="text-emerald-600 dark:text-emerald-400"
                />
                <StatCard
                    title="Average Score"
                    value={`${averageScore}%`}
                    label="Across all subjects"
                    colorClass="text-blue-600 dark:text-blue-400"
                />
                <StatCard
                    title="Active Courses"
                    value={subjects.length}
                    label="Spring Semester 2026"
                    colorClass="text-purple-600 dark:text-purple-400"
                />
                <StatCard
                    title="Attendance"
                    value="96%"
                    label="Excellent standing"
                    colorClass="text-orange-600 dark:text-orange-400"
                />
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
                {/* Main Column */}
                <div className="lg:col-span-2 space-y-8">

                    {/* Recent Grades */}
                    <section className="bg-white dark:bg-zinc-900 rounded-3xl border border-gray-100 dark:border-zinc-800 overflow-hidden shadow-sm">
                        <div className="p-6 border-b border-gray-100 dark:border-zinc-800 flex justify-between items-center">
                            <h2 className="text-lg font-bold">Recent Grades</h2>
                            <button className="text-sm text-blue-600 dark:text-blue-400 font-medium hover:underline">View All</button>
                        </div>
                        <div className="divide-y divide-gray-100 dark:divide-zinc-800">
                            {grades.map((grade, i) => {
                                const subject = subjects.find(s => s.id === grade.subjectId);
                                return (
                                    <div key={i} className="p-6 flex items-center justify-between hover:bg-gray-50 dark:hover:bg-zinc-800/50 transition-colors">
                                        <div className="flex items-center gap-4">
                                            <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-blue-900/10 flex items-center justify-center text-blue-600 dark:text-blue-400 font-bold text-sm">
                                                {grade.grade}
                                            </div>
                                            <div>
                                                <h4 className="font-semibold text-gray-900 dark:text-white">{subject?.name || 'Unknown Subject'}</h4>
                                                <p className="text-sm text-gray-500 dark:text-gray-400">{subject?.code}</p>
                                            </div>
                                        </div>
                                        <div className="text-right">
                                            <div className="font-bold text-gray-900 dark:text-white">{grade.score}/{grade.maxScore}</div>
                                            <div className="text-xs text-gray-400">Feedback available</div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </section>

                    {/* Schedule Preview */}
                    <section className="bg-white dark:bg-zinc-900 rounded-3xl border border-gray-100 dark:border-zinc-800 overflow-hidden shadow-sm">
                        <div className="p-6 border-b border-gray-100 dark:border-zinc-800">
                            <h2 className="text-lg font-bold">Today's Schedule</h2>
                        </div>
                        <div className="p-6">
                            <div className="flex gap-4 p-4 rounded-xl bg-blue-50 dark:bg-blue-900/10 border border-blue-100 dark:border-blue-900/20 mb-4">
                                <div className="shrink-0 w-16 text-center">
                                    <div className="font-bold text-blue-700 dark:text-blue-400">10:00</div>
                                    <div className="text-xs text-blue-600/70 dark:text-blue-400/70">AM</div>
                                </div>
                                <div className="w-px bg-blue-200 dark:bg-blue-800"></div>
                                <div>
                                    <h4 className="font-bold text-blue-900 dark:text-blue-100">Advanced Algorithms</h4>
                                    <p className="text-sm text-blue-700 dark:text-blue-300">Room 304 • Dr. Sarah Yasmin</p>
                                </div>
                            </div>
                            <p className="text-center text-sm text-gray-500 mt-4">No more classes for today.</p>
                        </div>
                    </section>

                </div>

                {/* Side Column */}
                <div className="space-y-8">
                    {/* Announcements */}
                    <section className="bg-white dark:bg-zinc-900 rounded-3xl border border-gray-100 dark:border-zinc-800 overflow-hidden shadow-sm">
                        <div className="p-6 border-b border-gray-100 dark:border-zinc-800">
                            <h2 className="text-lg font-bold">Announcements</h2>
                        </div>
                        <div className="p-6 space-y-6">
                            {announcements.map((ann) => (
                                <div key={ann.id} className="relative pl-6 border-l-2 border-gray-200 dark:border-zinc-700">
                                    <div className={`absolute -left-[5px] top-1.5 w-2.5 h-2.5 rounded-full ${ann.priority === 'high' ? 'bg-red-500' : 'bg-blue-500'}`}></div>
                                    <p className="text-xs text-gray-400 mb-1">{ann.date}</p>
                                    <h4 className="font-semibold text-sm mb-1">{ann.title}</h4>
                                    <p className="text-xs text-gray-500 dark:text-gray-400 line-clamp-3">{ann.content}</p>
                                </div>
                            ))}
                            <button className="w-full py-2 text-sm text-center text-gray-500 hover:text-blue-600 transition-colors">
                                View Archive
                            </button>
                        </div>
                    </section>

                    {/* Quick Actions */}
                    <section>
                        <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4">Quick Actions</h3>
                        <div className="grid grid-cols-2 gap-4">
                            <button className="p-4 rounded-xl bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 hover:border-blue-500 dark:hover:border-blue-500 hover:shadow-lg hover:shadow-blue-500/10 transition-all text-left group">
                                <div className="mb-2 text-gray-400 group-hover:text-blue-500 transition-colors">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="7 10 12 15 17 10" /><line x1="12" y1="15" x2="12" y2="3" /></svg>
                                </div>
                                <span className="text-sm font-medium">Download Transcript</span>
                            </button>
                            <button className="p-4 rounded-xl bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 hover:border-purple-500 dark:hover:border-purple-500 hover:shadow-lg hover:shadow-purple-500/10 transition-all text-left group">
                                <div className="mb-2 text-gray-400 group-hover:text-purple-500 transition-colors">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" /><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" /></svg>
                                </div>
                                <span className="text-sm font-medium">Course Catalog</span>
                            </button>
                        </div>
                    </section>

                </div>
            </div>
        </div>
    );
}
