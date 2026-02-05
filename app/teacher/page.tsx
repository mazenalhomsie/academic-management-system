
import { mockData } from '../lib/mockData';

export default function TeacherDashboard() {
    const { currentTeacher, subjects } = mockData;

    return (
        <div className="space-y-8">
            {/* Header */}
            <div className="flex justify-between items-end">
                <div>
                    <h1 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
                        Hello, {currentTeacher.name}
                    </h1>
                    <p className="text-gray-600 dark:text-gray-400 mt-2">
                        Managing <span className="font-semibold text-gray-900 dark:text-white">Computer Science Department</span>
                    </p>
                </div>
                <button className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg font-medium text-sm transition-colors shadow-lg shadow-purple-600/20">
                    + New Assignment
                </button>
            </div>

            {/* Stats Overview */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="p-6 rounded-2xl bg-gradient-to-br from-purple-500 to-indigo-600 text-white shadow-lg">
                    <p className="text-purple-100 text-sm font-medium mb-1">Total Students</p>
                    <h3 className="text-3xl font-bold">142</h3>
                    <p className="text-purple-200 text-xs mt-2">Across 3 subjects</p>
                </div>
                <div className="p-6 rounded-2xl bg-white dark:bg-zinc-900 border border-gray-100 dark:border-zinc-800 shadow-sm">
                    <p className="text-gray-500 dark:text-gray-400 text-sm font-medium mb-1">Pending Grades</p>
                    <h3 className="text-3xl font-bold text-gray-900 dark:text-white">28</h3>
                    <p className="text-orange-500 text-xs mt-2 font-medium">Needs attention</p>
                </div>
                <div className="p-6 rounded-2xl bg-white dark:bg-zinc-900 border border-gray-100 dark:border-zinc-800 shadow-sm">
                    <p className="text-gray-500 dark:text-gray-400 text-sm font-medium mb-1">Upcoming Classes</p>
                    <h3 className="text-3xl font-bold text-gray-900 dark:text-white">2</h3>
                    <p className="text-blue-500 text-xs mt-2 font-medium">Today</p>
                </div>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
                {/* Main: Quick Grade Input */}
                <div className="lg:col-span-2 space-y-6">
                    <div className="flex items-center justify-between">
                        <h2 className="text-lg font-bold">Quick Grade Input</h2>
                        <select className="bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-700 rounded-lg px-3 py-1.5 text-sm outline-none focus:ring-2 focus:ring-purple-500">
                            {subjects.filter(s => s.teacherId === currentTeacher.id).map(s => (
                                <option key={s.id}>{s.name} ({s.code})</option>
                            ))}
                        </select>
                    </div>

                    <div className="bg-white dark:bg-zinc-900 rounded-2xl border border-gray-100 dark:border-zinc-800 overflow-hidden shadow-sm">
                        <table className="w-full text-sm text-left">
                            <thead className="bg-gray-50 dark:bg-zinc-800/50 text-gray-500 dark:text-gray-400 font-medium">
                                <tr>
                                    <th className="px-6 py-4">Student Name</th>
                                    <th className="px-6 py-4">ID</th>
                                    <th className="px-6 py-4">Assignment</th>
                                    <th className="px-6 py-4 w-32">Grade (0-100)</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-100 dark:divide-zinc-800">
                                {[1, 2, 3, 4, 5].map((i) => (
                                    <tr key={i} className="hover:bg-gray-50 dark:hover:bg-zinc-800/50 transition-colors group">
                                        <td className="px-6 py-4 font-medium text-gray-900 dark:text-white">
                                            Student {i}
                                        </td>
                                        <td className="px-6 py-4 text-gray-500">202600{i}</td>
                                        <td className="px-6 py-4 text-gray-500">Midterm Exam</td>
                                        <td className="px-6 py-4">
                                            <input
                                                type="number"
                                                placeholder="-"
                                                className="w-full bg-gray-50 dark:bg-zinc-800 border border-gray-200 dark:border-zinc-700 rounded px-2 py-1 text-center focus:ring-2 focus:ring-purple-500 outline-none transition-all"
                                            />
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                        <div className="p-4 border-t border-gray-100 dark:border-zinc-800 bg-gray-50 dark:bg-zinc-900/50 flex justify-end">
                            <button className="bg-gray-900 dark:bg-white text-white dark:text-black px-4 py-2 rounded-lg text-sm font-medium hover:opacity-90 transition-opacity">
                                Save Grades
                            </button>
                        </div>
                    </div>
                </div>

                {/* Sidebar: Schedule */}
                <div className="space-y-6">
                    <h2 className="text-lg font-bold">Today's Schedule</h2>
                    <div className="space-y-4">
                        {subjects.filter(s => s.teacherId === currentTeacher.id).map((s, i) => (
                            <div key={s.id} className="p-5 rounded-2xl border border-gray-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 relative overflow-hidden group hover:border-purple-500 transition-colors">
                                <div className="absolute top-0 right-0 w-20 h-20 bg-purple-500/5 rounded-full blur-2xl -mr-10 -mt-10 group-hover:bg-purple-500/10 transition-colors"></div>
                                <div className="relative">
                                    <div className="flex justify-between items-start mb-2">
                                        <span className="text-xs font-bold px-2 py-1 rounded bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300">
                                            Room 30{i + 1}
                                        </span>
                                        <span className="text-xs text-gray-500">10:00 AM</span>
                                    </div>
                                    <h3 className="font-bold text-gray-900 dark:text-white mb-1">{s.name}</h3>
                                    <p className="text-xs text-gray-500 dark:text-gray-400">{s.code} • 45 Students</p>
                                </div>
                            </div>
                        ))}
                        <div className="p-4 rounded-xl border border-dashed border-gray-300 dark:border-zinc-700 text-center text-sm text-gray-500">
                            No more classes scheduled.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
