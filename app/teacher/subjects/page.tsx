
import { mockData } from '../../lib/mockData';

export default function MySubjects() {
    const { currentTeacher, subjects } = mockData;
    const mySubjects = subjects.filter(s => s.teacherId === currentTeacher.id);

    return (
        <div className="space-y-6">
            <div>
                <h1 className="text-2xl font-bold text-gray-900 dark:text-white">My Courses</h1>
                <p className="text-gray-600 dark:text-gray-400 mt-1">Manage curriculum and materials for {mySubjects.length} active courses.</p>
            </div>

            <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
                {mySubjects.map((subject) => (
                    <div key={subject.id} className="bg-white dark:bg-zinc-900 rounded-2xl border border-gray-200 dark:border-zinc-800 overflow-hidden hover:shadow-lg transition-shadow group">
                        <div className="h-32 bg-gradient-to-r from-purple-500 to-indigo-600 p-6 flex flex-col justify-end relative">
                            <div className="absolute top-4 right-4 bg-white/20 backdrop-blur rounded-lg px-2 py-1 text-white text-xs font-medium">
                                {subject.code}
                            </div>
                            <h2 className="text-xl font-bold text-white mb-1 relative z-10">{subject.name}</h2>
                            <p className="text-purple-100 text-sm relative z-10">{subject.schedule}</p>

                            {/* Decorative Circles */}
                            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-3xl -mr-16 -mt-16"></div>
                        </div>

                        <div className="p-6">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="flex -space-x-3">
                                    {[1, 2, 3, 4].map(i => (
                                        <div key={i} className="w-8 h-8 rounded-full border-2 border-white dark:border-zinc-900 bg-gray-200 dark:bg-zinc-700 flex items-center justify-center text-xs text-gray-500">
                                            {/* Avatar placeholder */}
                                        </div>
                                    ))}
                                    <div className="w-8 h-8 rounded-full border-2 border-white dark:border-zinc-900 bg-gray-100 dark:bg-zinc-800 flex items-center justify-center text-xs font-medium text-gray-500">
                                        +42
                                    </div>
                                </div>
                                <div className="text-sm text-gray-500">46 Students Enrolled</div>
                            </div>

                            <div className="grid grid-cols-2 gap-3 mb-6">
                                <button className="flex items-center justify-center gap-2 p-2 rounded-lg bg-purple-50 dark:bg-purple-900/20 text-purple-700 dark:text-purple-300 text-sm font-medium hover:bg-purple-100 dark:hover:bg-purple-900/30 transition-colors">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /><line x1="16" y1="13" x2="8" y2="13" /><line x1="16" y1="17" x2="8" y2="17" /><polyline points="10 9 9 9 8 9" /></svg>
                                    Syllabus
                                </button>
                                <button className="flex items-center justify-center gap-2 p-2 rounded-lg bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 text-sm font-medium hover:bg-blue-100 dark:hover:bg-blue-900/30 transition-colors">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" /><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" /></svg>
                                    Resources
                                </button>
                            </div>

                            <button className="w-full py-2 rounded-lg border border-gray-200 dark:border-zinc-700 font-medium text-sm hover:border-purple-500 hover:text-purple-600 dark:hover:text-purple-400 transition-colors">
                                Manage Course
                            </button>
                        </div>
                    </div>
                ))}

                {/* Add New Course Card */}
                <button className="border-2 border-dashed border-gray-200 dark:border-zinc-800 rounded-2xl flex flex-col items-center justify-center p-6 text-gray-400 hover:border-purple-500 hover:text-purple-500 hover:bg-purple-50 dark:hover:bg-purple-900/10 transition-all group min-h-[300px]">
                    <div className="w-16 h-16 rounded-full bg-gray-50 dark:bg-zinc-800 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                        </svg>
                    </div>
                    <span className="font-medium">Create New Course</span>
                </button>
            </div>
        </div>
    );
}
