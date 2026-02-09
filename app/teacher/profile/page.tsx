
'use client';

import { useState } from 'react';
import { mockData } from '../../lib/mockData';

export default function TeacherProfile() {
    const { currentTeacher } = mockData;
    const [activeTab, setActiveTab] = useState('professional');

    return (
        <div className="space-y-6">
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Staff Profile</h1>

            <div className="grid lg:grid-cols-3 gap-8">
                {/* Left Column: User Card */}
                <div className="space-y-6">
                    <div className="bg-white dark:bg-zinc-900 rounded-2xl border border-gray-200 dark:border-zinc-800 p-6 flex flex-col items-center text-center">
                        <div className="w-24 h-24 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center text-3xl font-bold text-purple-600 dark:text-purple-400 mb-4">
                            {currentTeacher.name.charAt(0)}
                        </div>
                        <h2 className="text-xl font-bold text-gray-900 dark:text-white">{currentTeacher.name}</h2>
                        <p className="text-gray-500 text-sm mb-4">{currentTeacher.department}</p>
                        <div className="flex gap-2 w-full">
                            <button className="flex-1 py-2 rounded-lg bg-purple-600 hover:bg-purple-700 text-white text-sm font-medium transition-colors">
                                Update Photo
                            </button>
                        </div>
                    </div>

                    <div className="bg-white dark:bg-zinc-900 rounded-2xl border border-gray-200 dark:border-zinc-800 p-6 space-y-4">
                        <h3 className="font-bold text-gray-900 dark:text-white">Faculty Status</h3>
                        <div className="flex justify-between text-sm border-b border-gray-100 dark:border-zinc-800 pb-2">
                            <span className="text-gray-500">Employee ID</span>
                            <span className="font-mono">{currentTeacher.id.toUpperCase()}FAC</span>
                        </div>
                        <div className="flex justify-between text-sm border-b border-gray-100 dark:border-zinc-800 pb-2">
                            <span className="text-gray-500">Department</span>
                            <span className="font-medium text-purple-600">{currentTeacher.department}</span>
                        </div>
                        <div className="flex justify-between text-sm pb-2">
                            <span className="text-gray-500">Tenure</span>
                            <span className="px-2 py-0.5 rounded-full bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400 text-xs font-medium uppercase">Full Time</span>
                        </div>
                    </div>
                </div>

                {/* Right Column: Settings Forms */}
                <div className="lg:col-span-2 bg-white dark:bg-zinc-900 rounded-2xl border border-gray-200 dark:border-zinc-800 overflow-hidden">
                    <div className="border-b border-gray-200 dark:border-zinc-800 flex">
                        <button
                            onClick={() => setActiveTab('professional')}
                            className={`px-6 py-4 text-sm font-medium border-b-2 transition-colors ${activeTab === 'professional' ? 'border-purple-500 text-purple-600 dark:text-purple-400' : 'border-transparent text-gray-500 hover:text-gray-700 dark:hover:text-gray-300'}`}
                        >
                            Professional Info
                        </button>
                        <button
                            onClick={() => setActiveTab('account')}
                            className={`px-6 py-4 text-sm font-medium border-b-2 transition-colors ${activeTab === 'account' ? 'border-purple-500 text-purple-600 dark:text-purple-400' : 'border-transparent text-gray-500 hover:text-gray-700 dark:hover:text-gray-300'}`}
                        >
                            Account Settings
                        </button>
                    </div>

                    <div className="p-6">
                        {activeTab === 'professional' && (
                            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Display Name</label>
                                        <input type="text" defaultValue={currentTeacher.name} className="w-full px-3 py-2 rounded-lg border border-gray-300 dark:border-zinc-700 bg-transparent focus:ring-2 focus:ring-purple-500 outline-none" />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Academic Title</label>
                                        <select className="w-full px-3 py-2 rounded-lg border border-gray-300 dark:border-zinc-700 bg-transparent focus:ring-2 focus:ring-purple-500 outline-none">
                                            <option>Professor</option>
                                            <option>Associate Professor</option>
                                            <option selected>Lecturer</option>
                                            <option>Teaching Assistant</option>
                                        </select>
                                    </div>
                                    <div className="col-span-2 space-y-2">
                                        <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Office Hours</label>
                                        <textarea defaultValue="Mon/Wed: 1:00 PM - 3:00 PM (Room 304)" rows={2} className="w-full px-3 py-2 rounded-lg border border-gray-300 dark:border-zinc-700 bg-transparent focus:ring-2 focus:ring-purple-500 outline-none"></textarea>
                                        <p className="text-xs text-gray-500">Visible to students in your course syllabus.</p>
                                    </div>
                                </div>

                                <div className="pt-4 border-t border-gray-100 dark:border-zinc-800">
                                    <h4 className="font-medium mb-4">Contact Information</h4>
                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Work Email</label>
                                            <input type="email" defaultValue={currentTeacher.email} disabled className="w-full px-3 py-2 rounded-lg border border-gray-300 dark:border-zinc-700 bg-gray-50 dark:bg-zinc-800 text-gray-500 cursor-not-allowed" />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Office Phone</label>
                                            <input type="tel" defaultValue="x4022" className="w-full px-3 py-2 rounded-lg border border-gray-300 dark:border-zinc-700 bg-transparent focus:ring-2 focus:ring-purple-500 outline-none" />
                                        </div>
                                    </div>
                                </div>

                                <div className="flex justify-end">
                                    <button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-lg font-medium transition-colors">Save Profile</button>
                                </div>
                            </form>
                        )}

                        {activeTab === 'account' && (
                            <div className="space-y-6">
                                <div className="flex items-center justify-between py-4 border-b border-gray-100 dark:border-zinc-800">
                                    <div>
                                        <h4 className="font-medium text-gray-900 dark:text-white">Two-Factor Authentication</h4>
                                        <p className="text-sm text-gray-500">Add an extra layer of security to your account.</p>
                                    </div>
                                    <button className="text-purple-600 hover:underline text-sm font-medium">Enable 2FA</button>
                                </div>

                                <div className="space-y-4">
                                    <h3 className="font-medium text-gray-900 dark:text-white">Change Password</h3>
                                    <div className="grid md:grid-cols-2 gap-4">
                                        <div className="space-y-2">
                                            <label className="text-sm text-gray-500">Current Password</label>
                                            <input type="password" className="w-full px-3 py-2 rounded-lg border border-gray-300 dark:border-zinc-700 bg-transparent focus:ring-2 focus:ring-purple-500 outline-none" />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-sm text-gray-500">New Password</label>
                                            <input type="password" className="w-full px-3 py-2 rounded-lg border border-gray-300 dark:border-zinc-700 bg-transparent focus:ring-2 focus:ring-purple-500 outline-none" />
                                        </div>
                                    </div>
                                    <div className="flex justify-end">
                                        <button className="text-gray-500 hover:text-gray-700 text-sm font-medium px-4">Forgot Password?</button>
                                        <button className="bg-gray-900 dark:bg-white text-white dark:text-black px-6 py-2 rounded-lg font-medium transition-colors">Update Password</button>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
