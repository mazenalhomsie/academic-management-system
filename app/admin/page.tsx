
import Link from "next/link";

export default function AdminPlaceholder() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 dark:bg-black text-center px-4">
            <div className="w-16 h-16 bg-emerald-100 dark:bg-emerald-900/30 rounded-2xl flex items-center justify-center text-emerald-600 dark:text-emerald-400 mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
            </div>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Admin Portal</h1>
            <p className="text-gray-600 dark:text-gray-400 max-w-md mb-8">
                The administration dashboard is currently under development. Check back later for user management and system settings.
            </p>
            <Link href="/" className="px-6 py-3 rounded-full bg-gray-900 dark:bg-white text-white dark:text-black font-medium text-sm hover:opacity-90 transition-opacity">
                Return Home
            </Link>
        </div>
    );
}
