
export type Role = 'student' | 'teacher' | 'admin';

export interface User {
    id: string;
    name: string;
    email: string;
    role: Role;
    avatar?: string;
    status: 'active' | 'inactive';
    lastLogin?: string;
}

export interface Student extends User {
    role: 'student';
    gradeLevel: string;
    gpa: number;
}

export interface Teacher extends User {
    role: 'teacher';
    department: string;
}

export interface Subject {
    id: string;
    name: string;
    code: string;
    teacherId: string;
    schedule: string;
}

export interface Grade {
    studentId: string;
    subjectId: string;
    score: number;
    maxScore: number;
    grade: string; // A, B, C...
    feedback?: string;
}

export interface Announcement {
    id: string;
    title: string;
    content: string;
    date: string;
    author: string;
    priority: 'high' | 'normal' | 'low';
}

export interface AuditLog {
    id: string;
    action: string;
    user: string;
    details: string;
    timestamp: string;
    status: 'success' | 'warning' | 'error';
}

// Mock Database
export const mockData = {
    currentUser: {
        id: 's1',
        name: 'Mazen Al-Salem',
        email: 'mazen@damascus.edu',
        role: 'student',
        gradeLevel: 'Year 3',
        gpa: 3.8,
        avatar: '/avatars/mazen.jpg',
        status: 'active',
        lastLogin: '2 mins ago'
    } as Student,

    currentTeacher: {
        id: 't1',
        name: 'Dr. Sarah Yasmin',
        email: 'sarah@damascus.edu',
        role: 'teacher',
        department: 'Computer Science',
        avatar: '/avatars/sarah.jpg',
        status: 'active',
        lastLogin: '1 hour ago'
    } as Teacher,

    subjects: [
        { id: 'sub1', name: 'Advanced Algorithms', code: 'CS301', teacherId: 't1', schedule: 'Mon/Wed 10:00 AM' },
        { id: 'sub2', name: 'Database Systems', code: 'CS302', teacherId: 't2', schedule: 'Tue/Thu 1:00 PM' },
        { id: 'sub3', name: 'Web Architecture', code: 'CS305', teacherId: 't1', schedule: 'Fri 9:00 AM' },
    ] as Subject[],

    grades: [
        { studentId: 's1', subjectId: 'sub1', score: 88, maxScore: 100, grade: 'A-', feedback: 'Excellent work on sorting algorithms' },
        { studentId: 's1', subjectId: 'sub2', score: 92, maxScore: 100, grade: 'A', feedback: 'Perfect ERD design' },
    ] as Grade[],

    announcements: [
        { id: 'a1', title: 'Midterm Exam Schedule Released', content: 'The Spring 2026 midterm schedule is now available in the downloads section.', date: '2026-02-04', author: 'Registrar Office', priority: 'high' },
        { id: 'a2', title: 'Guest Lecture: AI in Healthcare', content: 'Join us this Thursday for a special session with Dr. Hani.', date: '2026-02-02', author: 'CS Department', priority: 'normal' },
    ] as Announcement[],

    // Admin Data
    users: [
        { id: 'u1', name: 'Mazen Al-Salem', email: 'mazen@damascus.edu', role: 'student', status: 'active', lastLogin: '2 mins ago' },
        { id: 'u2', name: 'Dr. Sarah Yasmin', email: 'sarah@damascus.edu', role: 'teacher', status: 'active', lastLogin: '1 hour ago' },
        { id: 'u3', name: 'Admin User', email: 'admin@damascus.edu', role: 'admin', status: 'active', lastLogin: 'Just now' },
        { id: 'u4', name: 'John Doe', email: 'john@damascus.edu', role: 'student', status: 'inactive', lastLogin: '5 days ago' },
        { id: 'u5', name: 'Prof. Ahmed', email: 'ahmed@damascus.edu', role: 'teacher', status: 'active', lastLogin: 'Yesterday' },
    ] as User[],

    auditLogs: [
        { id: 'l1', action: 'Grade Modification', user: 'Dr. Sarah Yasmin', details: 'Updated grade for CS301 / Student s1', timestamp: '10:42 AM', status: 'success' },
        { id: 'l2', action: 'User Created', user: 'Admin User', details: 'Registered new student: Rami K.', timestamp: '09:15 AM', status: 'success' },
        { id: 'l3', action: 'Login Failed', user: 'Unknown', details: 'Repeated failed login attempts for user admin', timestamp: 'Yesterday', status: 'warning' },
        { id: 'l4', action: 'System Backup', user: 'System', details: 'Weekly automated backup completed', timestamp: 'Yesterday', status: 'success' },
    ] as AuditLog[]
};
