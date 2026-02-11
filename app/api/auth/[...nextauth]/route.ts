
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions = {
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                email: { label: "Email", type: "email" },
                password: { label: "Password", type: "password" }
            },
            async authorize(credentials, req) {
                // In a real app, this would query your Prisma database.
                // For now, we simulate secure role-based access.

                if (!credentials?.email || !credentials?.password) return null;

                const { email, password } = credentials;

                // Mock User DB (Replace with Prisma query later)
                if (email === "admin@damascus.edu" && password === "admin123") {
                    return { id: "u3", name: "Admin User", email, role: "admin" };
                }
                if (email === "sarah@damascus.edu" && password === "teacher123") {
                    return { id: "u2", name: "Dr. Sarah Yasmin", email, role: "teacher" };
                }
                if (email === "mazen@damascus.edu" && password === "student123") {
                    return { id: "u1", name: "Mazen Al-Salem", email, role: "student" };
                }

                return null;
            }
        })
    ],
    callbacks: {
        async jwt({ token, user }: { token: any; user: any }) {
            if (user) {
                token.role = user.role;
                token.id = user.id;
            }
            return token;
        },
        async session({ session, token }: { session: any; token: any }) {
            if (session?.user) {
                session.user.role = token.role;
                session.user.id = token.id;
            }
            return session;
        }
    },
    pages: {
        signIn: '/login', // Custom login page
    },
    session: {
        strategy: "jwt" as const,
    },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
