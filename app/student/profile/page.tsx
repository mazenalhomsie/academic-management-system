
'use client';

import { useState } from 'react';
import { mockData } from '../../lib/mockData';

export default function StudentProfile() {
    const { currentUser } = mockData;
    const [activeTab, setActiveTab] = useState('personal');

    return (
        <div className="space-y-6">
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white">My Profile</h1>

            <div className="grid lg:grid-cols-3 gap-8">
                {/* Left Column: User Card */}
                <div className="space-y-6">
                    <div className="bg-white dark:bg-zinc-900 rounded-2xl border border-gray-200 dark:border-zinc-800 p-6 flex flex-col items-center text-center">
                        <div className="w-24 h-24 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-3xl font-bold text-blue-600 dark:text-blue-400 mb-4">
                            {currentUser.name.charAt(0)}
                        </div>
                        <h2 className="text-xl font-bold text-gray-900 dark:text-white">{currentUser.name}</h2>
                        <p className="text-gray-500 text-sm mb-4">Computer Science • Year 3</p>
                        <div className="flex gap-2 w-full">
                            <button className="flex-1 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium transition-colors">
                                Edit Avatar
                            </button>
                        </div>
                    </div>

                    <div className="bg-white dark:bg-zinc-900 rounded-2xl border border-gray-200 dark:border-zinc-800 p-6 space-y-4">
                        <h3 className="font-bold text-gray-900 dark:text-white">Academic Status</h3>
                        <div className="flex justify-between text-sm border-b border-gray-100 dark:border-zinc-800 pb-2">
                            <span className="text-gray-500">Student ID</span>
                            <span className="font-mono">{currentUser.id.toUpperCase()}2026</span>
                        </div>
                        <div className="flex justify-between text-sm border-b border-gray-100 dark:border-zinc-800 pb-2">
                            <span className="text-gray-500">GPA</span>
                            <span className="font-bold text-emerald-500">{currentUser.gpa}</span>
                        </div>
                        <div className="flex justify-between text-sm pb-2">
                            <span className="text-gray-500">Status</span>
                            <span className="px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400 text-xs font-medium uppercase">Active</span>
                        </div>
                    </div>
                </div>

                {/* Right Column: Settings Forms */}
                <div className="lg:col-span-2 bg-white dark:bg-zinc-900 rounded-2xl border border-gray-200 dark:border-zinc-800 overflow-hidden">
                    <div className="border-b border-gray-200 dark:border-zinc-800 flex">
                        <button
                            onClick={() => setActiveTab('personal')}
                            className={`px-6 py-4 text-sm font-medium border-b-2 transition-colors ${activeTab === 'personal' ? 'border-blue-500 text-blue-600 dark:text-blue-400' : 'border-transparent text-gray-500 hover:text-gray-700 dark:hover:text-gray-300'}`}
                        >
                            Personal Information
                        </button>
                        <button
                            onClick={() => setActiveTab('security')}
                            className={`px-6 py-4 text-sm font-medium border-b-2 transition-colors ${activeTab === 'security' ? 'border-blue-500 text-blue-600 dark:text-blue-400' : 'border-transparent text-gray-500 hover:text-gray-700 dark:hover:text-gray-300'}`}
                        >
                            Security
                        </button>
                        <button
                            onClick={() => setActiveTab('notifications')}
                            className={`px-6 py-4 text-sm font-medium border-b-2 transition-colors ${activeTab === 'notifications' ? 'border-blue-500 text-blue-600 dark:text-blue-400' : 'border-transparent text-gray-500 hover:text-gray-700 dark:hover:text-gray-300'}`}
                        >
                            Notifications
                        </button>
                    </div>

                    <div className="p-6">
                        {activeTab === 'personal' && (
                            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Full Name</label>
                                        <input type="text" defaultValue={currentUser.name} className="w-full px-3 py-2 rounded-lg border border-gray-300 dark:border-zinc-700 bg-transparent focus:ring-2 focus:ring-blue-500 outline-none" />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Email Address</label>
                                        <input type="email" defaultValue={currentUser.email} disabled className="w-full px-3 py-2 rounded-lg border border-gray-300 dark:border-zinc-700 bg-gray-50 dark:bg-zinc-800 text-gray-500 cursor-not-allowed" />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Phone Number</label>
                                        <input type="tel" defaultValue="+963 944 123 456" className="w-full px-3 py-2 rounded-lg border border-gray-300 dark:border-zinc-700 bg-transparent focus:ring-2 focus:ring-blue-500 outline-none" />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Date of Birth</label>
                                        <input type="date" defaultValue="2003-05-15" className="w-full px-3 py-2 rounded-lg border border-gray-300 dark:border-zinc-700 bg-transparent focus:ring-2 focus:ring-blue-500 outline-none" />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Address</label>
                                    <textarea defaultValue="Al-Mazzeh, Damascus, Syria" rows={3} className="w-full px-3 py-2 rounded-lg border border-gray-300 dark:border-zinc-700 bg-transparent focus:ring-2 focus:ring-blue-500 outline-none"></textarea>
                                </div>
                                <div className="flex justify-end">
                                    <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium transition-colors">Save Changes</button>
                                </div>
                            </form>
                        )}

                        {activeTab === 'security' && (
                            <div className="space-y-6">
                                <div className="space-y-4">
                                    <h3 className="font-medium text-gray-900 dark:text-white">Change Password</h3>
                                    <div className="space-y-2">
                                        <label className="text-sm text-gray-500">Current Password</label>
                                        <input type="password" className="w-full md:w-1/2 px-3 py-2 rounded-lg border border-gray-300 dark:border-zinc-700 bg-transparent focus:ring-2 focus:ring-blue-500 outline-none" />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm text-gray-500">New Password</label>
                                        <input type="password" className="w-full md:w-1/2 px-3 py-2 rounded-lg border border-gray-300 dark:border-zinc-700 bg-transparent focus:ring-2 focus:ring-blue-500 outline-none" />
                                    </div>
                                    <button className="bg-gray-900 dark:bg-white text-white dark:text-black px-6 py-2 rounded-lg font-medium transition-colors">Update Password</button>
                                </div>
                                <div className="pt-6 border-t border-gray-100 dark:border-zinc-800">
                                    <h3 className="font-medium text-red-600 mb-2">Danger Zone</h3>
                                    <p className="text-sm text-gray-500 mb-4">Once you delete your account, there is no going back. Please be certain.</p>
                                    <button className="border border-red-200 text-red-600 hover:bg-red-50 dark:hover:bg-red-900/10 px-4 py-2 rounded-lg text-sm font-medium transition-colors">Request Account Deletion</button>
                                </div>
                            </div>
                        )}

                        {activeTab === 'notifications' && (
                            <div className="space-y-6">
                                {[
                                    { title: "Grade Updates", desc: "Get notified when a new grade is posted." },
                                    { title: "Announcements", desc: "Receive email updates for new institutional announcements." },
                                    { title: "Assignment Reminders", desc: "Get reminded 24 hours before a deadline." },
                                    { title: "Login Alerts", desc: "Get notified of any new login to your account." },
                                ].map((item, i) => (
                                    <div key={i} className="flex items-center justify-between py-2">
                                        <div>
                                            <h4 className="font-medium text-gray-900 dark:text-white">{item.title}</h4>
                                            <p className="text-sm text-gray-500">{item.desc}</p>
                                        </div>
                                        <label className="relative inline-flex items-center cursor-pointer">
                                            <input type="checkbox" defaultChecked className="sr-only peer" />
                                            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                                        </label>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
