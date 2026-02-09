
export default function StudentDirectory() {
    return (
        <div className="space-y-6">
            <div>
                <h1 className="text-2xl font-bold text-gray-900 dark:text-white">My Students</h1>
                <p className="text-gray-600 dark:text-gray-400 mt-1">Directory of all students enrolled in your Computer Science courses.</p>
            </div>

            <div className="bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 rounded-2xl shadow-sm">
                <div className="p-4 border-b border-gray-100 dark:border-zinc-800 flex gap-4">
                    <input
                        type="text"
                        placeholder="Search by name or ID..."
                        className="flex-1 bg-gray-50 dark:bg-zinc-800 border-none rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-purple-500"
                    />
                    <select className="bg-gray-50 dark:bg-zinc-800 border-none rounded-lg px-4 py-2 outline-none">
                        <option>All Courses</option>
                        <option>CS301</option>
                        <option>CS305</option>
                    </select>
                </div>

                <div className="divide-y divide-gray-100 dark:divide-zinc-800">
                    {[1, 2, 3, 4, 5, 6].map(i => (
                        <div key={i} className="p-4 flex items-center justify-between hover:bg-gray-50 dark:hover:bg-zinc-800/20 transition-colors">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-100 to-blue-100 dark:from-purple-900/30 dark:to-blue-900/30 flex items-center justify-center text-purple-600 dark:text-purple-300 font-bold">
                                    S{i}
                                </div>
                                <div>
                                    <h3 className="font-bold text-gray-900 dark:text-white">Student Name {i}</h3>
                                    <p className="text-sm text-gray-500">ID: 20260{i} • Year 3</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-6">
                                <div className="hidden md:block text-right">
                                    <div className="text-xs text-gray-400 uppercase tracking-wider font-semibold">Performance</div>
                                    <div className="font-bold text-emerald-500">Excellent (A-)</div>
                                </div>
                                <div className="flex gap-2">
                                    <button className="p-2 text-gray-400 hover:text-blue-500 transition-colors" title="Send Email">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><rect width="20" height="16" x="2" y="4" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" /></svg>
                                    </button>
                                    <button className="p-2 text-gray-400 hover:text-purple-500 transition-colors" title="View Profile">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" /><circle cx="12" cy="12" r="3" /></svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
