
import { mockData } from '../../lib/mockData';

export default function StudentGrades() {
    const { grades, subjects } = mockData;

    // Simple progress utility
    const getProgressColor = (score: number) => {
        if (score >= 90) return 'bg-emerald-500';
        if (score >= 80) return 'bg-blue-500';
        if (score >= 70) return 'bg-yellow-500';
        return 'bg-red-500';
    };

    return (
        <div className="space-y-6">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-4">
                <div>
                    <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Academic Performance</h1>
                    <p className="text-gray-600 dark:text-gray-400 mt-1">Detailed breakdown of your grades for Spring 2026.</p>
                </div>
                <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-xl border border-blue-100 dark:border-blue-900/30 w-full md:w-auto mt-4 md:mt-0">
                    <div className="text-sm text-blue-800 dark:text-blue-300 font-medium">Semester GPA</div>
                    <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">3.82</div>
                </div>
            </div>

            <div className="grid gap-6">
                {subjects.map((subject) => {
                    // Find grades for this subject
                    const subjectGrades = grades.filter(g => g.subjectId === subject.id);
                    const totalScore = subjectGrades.reduce((sum, g) => sum + g.score, 0);
                    const maxPossible = subjectGrades.reduce((sum, g) => sum + g.maxScore, 0);
                    const percentage = maxPossible > 0 ? Math.round((totalScore / maxPossible) * 100) : 0;

                    return (
                        <div key={subject.id} className="bg-white dark:bg-zinc-900 rounded-2xl border border-gray-200 dark:border-zinc-800 overflow-hidden shadow-sm">
                            {/* Header */}
                            <div className="p-6 border-b border-gray-100 dark:border-zinc-800 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                                <div>
                                    <h2 className="text-xl font-bold text-gray-900 dark:text-white flex items-center gap-2">
                                        {subject.name}
                                        <span className="text-sm font-normal text-gray-500 bg-gray-100 dark:bg-zinc-800 px-2 py-0.5 rounded-md border border-gray-200 dark:border-zinc-700">
                                            {subject.code}
                                        </span>
                                    </h2>
                                    <p className="text-sm text-gray-500 mt-1">Instructor: Dr. Sarah Yasmin</p>
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className="text-right">
                                        <div className="text-sm text-gray-500">Current Grade</div>
                                        <div className="text-2xl font-bold text-gray-900 dark:text-white">{percentage}% <span className="text-base font-medium text-gray-400">/ A</span></div>
                                    </div>
                                    <div className="w-12 h-12 rounded-full border-4 border-emerald-500 flex items-center justify-center font-bold text-sm">
                                        {percentage}
                                    </div>
                                </div>
                            </div>

                            {/* Assessments Table */}
                            <div className="p-6">
                                <table className="w-full text-left text-sm">
                                    <thead className="bg-gray-50 dark:bg-zinc-800/50 text-gray-500 dark:text-gray-400 font-medium border-b border-gray-100 dark:border-zinc-800">
                                        <tr>
                                            <th className="pb-3 md:w-1/3">Assessment</th>
                                            <th className="pb-3">Score</th>
                                            <th className="pb-3 text-right">Weight</th>
                                            <th className="pb-3 hidden md:table-cell">Feedback</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-gray-100 dark:divide-zinc-800">
                                        {subjectGrades.length > 0 ? (
                                            subjectGrades.map((grade, idx) => (
                                                <tr key={idx} className="group">
                                                    <td className="py-4 font-medium text-gray-900 dark:text-white">
                                                        Midterm Exam
                                                        <div className="md:hidden text-xs font-normal text-gray-500 mt-1">
                                                            {grade.feedback || 'No feedback provided.'}
                                                        </div>
                                                    </td>
                                                    <td className="py-4">
                                                        <div className="flex items-center gap-3">
                                                            <span className="font-semibold">{grade.score}/{grade.maxScore}</span>
                                                            <div className="h-1.5 w-24 bg-gray-100 dark:bg-zinc-800 rounded-full overflow-hidden hidden sm:block">
                                                                <div
                                                                    className={`h-full rounded-full ${getProgressColor((grade.score / grade.maxScore) * 100)}`}
                                                                    style={{ width: `${(grade.score / grade.maxScore) * 100}%` }}
                                                                ></div>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td className="py-4 text-right text-gray-500">30%</td>
                                                    <td className="py-4 hidden md:table-cell text-gray-500 dark:text-gray-400 relative">
                                                        {grade.feedback ? (
                                                            <div className="flex items-center gap-2">
                                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 text-blue-500"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" /></svg>
                                                                <span className="truncate max-w-[200px]">{grade.feedback}</span>
                                                            </div>
                                                        ) : (
                                                            <span className="text-gray-400 italic">No feedback</span>
                                                        )}
                                                    </td>
                                                </tr>
                                            ))
                                        ) : (
                                            <tr>
                                                <td colSpan={4} className="py-8 text-center text-gray-500 italic">
                                                    No grades recorded yet.
                                                </td>
                                            </tr>
                                        )}
                                        {/* Placeholder Rows for future assessments */}
                                        <tr className="opacity-50">
                                            <td className="py-4">Final Project</td>
                                            <td className="py-4 text-gray-400">- / 100</td>
                                            <td className="py-4 text-right">30%</td>
                                            <td className="py-4 hidden md:table-cell"></td>
                                        </tr>
                                        <tr className="opacity-50">
                                            <td className="py-4">Final Exam</td>
                                            <td className="py-4 text-gray-400">- / 100</td>
                                            <td className="py-4 text-right">40%</td>
                                            <td className="py-4 hidden md:table-cell"></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
