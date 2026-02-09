
import { mockData } from '../../lib/mockData';

export default function GradeBook() {
    const { currentTeacher, subjects } = mockData;
    const mySubjects = subjects.filter(s => s.teacherId === currentTeacher.id);

    return (
        <div className="space-y-6">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                    <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Grade Input</h1>
                    <p className="text-gray-600 dark:text-gray-400 mt-1">Record assessment scores and finalize term grades.</p>
                </div>
                <div className="flex gap-3">
                    <select className="bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-purple-500">
                        {mySubjects.map(s => <option key={s.id}>{s.name} ({s.code})</option>)}
                    </select>
                    <button className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg font-medium shadow-md">
                        Publish Grades
                    </button>
                </div>
            </div>

            <div className="bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 rounded-2xl overflow-hidden shadow-sm">
                <div className="overflow-x-auto">
                    <table className="w-full text-left text-sm">
                        <thead className="bg-gray-50 dark:bg-zinc-800/50 text-gray-500 font-medium">
                            <tr>
                                <th className="px-6 py-4">Student ID</th>
                                <th className="px-6 py-4">Full Name</th>
                                <th className="px-6 py-4">Attendance</th>
                                <th className="px-6 py-4 w-32">Midterm (30%)</th>
                                <th className="px-6 py-4 w-32">Project (30%)</th>
                                <th className="px-6 py-4 w-32">Final (40%)</th>
                                <th className="px-6 py-4 w-24">Total</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100 dark:divide-zinc-800">
                            {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                                <tr key={i} className="hover:bg-gray-50 dark:hover:bg-zinc-800/20 transition-colors group">
                                    <td className="px-6 py-4 font-mono text-gray-500">20260{i}</td>
                                    <td className="px-6 py-4 font-medium text-gray-900 dark:text-white">Student Name {i}</td>
                                    <td className="px-6 py-4">
                                        <span className={`px-2 py-1 rounded text-xs font-medium ${i % 3 === 0 ? 'bg-yellow-100 text-yellow-700' : 'bg-green-100 text-green-700'}`}>
                                            {i % 3 === 0 ? '85%' : '98%'}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4">
                                        <input type="number" className="w-full bg-transparent border-b border-transparent hover:border-gray-300 focus:border-purple-500 outline-none text-center" defaultValue={80 + i} />
                                    </td>
                                    <td className="px-6 py-4">
                                        <input type="number" className="w-full bg-transparent border-b border-transparent hover:border-gray-300 focus:border-purple-500 outline-none text-center" defaultValue={75 + i} />
                                    </td>
                                    <td className="px-6 py-4">
                                        <input type="number" className="w-full bg-transparent border-b border-transparent hover:border-gray-300 focus:border-purple-500 outline-none text-center" placeholder="-" />
                                    </td>
                                    <td className="px-6 py-4 font-bold text-gray-900 dark:text-white text-center">
                                        {Math.round((80 + i) * 0.3 + (75 + i) * 0.3)}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
