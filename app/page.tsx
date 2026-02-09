import Link from "next/link";
import MegaMenu from "./components/layout/MegaMenu";

function Icon({ path, className = "w-6 h-6" }: { path: string; className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d={path} />
    </svg>
  );
}

const icons = {
  shield: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z",
  users: "M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2 M16 3.13a4 4 0 0 1 0 7.75 M23 21v-2a4 4 0 0 0-3-3.87 M16 3.13a4 4 0 0 1 0 7.75",
  book: "M4 19.5A2.5 2.5 0 0 1 6.5 17H20 M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z",
  chart: "M12 20V10 M18 20V4 M6 20v-4",
  lock: "M19 11H5a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7a2 2 0 0 0-2-2zm-7 0V7a5 5 0 0 1 10 0v4",
  globe: "M22 12A10 10 0 1 1 12 2a10 10 0 0 1 10 10z M2 12h20 M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z",
};

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-black text-gray-900 dark:text-gray-100 selection:bg-blue-500 selection:text-white">
      {/* Navigation */}
      <MegaMenu />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-blue-500/20 rounded-full blur-[100px] opacity-50 dark:opacity-30 mix-blend-multiply dark:mix-blend-screen animate-pulse"></div>
          <div className="absolute bottom-0 right-0 w-[800px] h-[600px] bg-purple-500/20 rounded-full blur-[100px] opacity-50 dark:opacity-30 mix-blend-multiply dark:mix-blend-screen"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">
            Academic Excellence <br /> Digitized.
          </h1>
          <p className="max-w-2xl mx-auto text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-10 leading-relaxed">
            A comprehensive academic management system automating the entire student-teacher-administration workflow with security and efficiency.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="px-8 py-3.5 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-semibold shadow-lg shadow-blue-600/30 transition-all hover:scale-105">
              Get Started
            </button>
            <button className="px-8 py-3.5 rounded-full bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 hover:bg-gray-50 dark:hover:bg-zinc-800 text-gray-900 dark:text-white font-semibold transition-all">
              View Documentation
            </button>
          </div>
        </div>
      </section>

      {/* Login Portals */}
      <section className="py-20 bg-white dark:bg-zinc-900/50 relative border-t border-gray-100 dark:border-zinc-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Select Your Portal</h2>
            <p className="text-gray-600 dark:text-gray-400">Secure access for every role in the institution.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Student Portal",
                href: "/student",
                icon: icons.book,
                description: "Access grades, schedules, announcement, and academic records.",
                bgClass: "bg-blue-500/10 group-hover:bg-blue-500/20",
                iconBgClass: "bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400"
              },
              {
                title: "Teacher Dashboard",
                href: "/teacher",
                icon: icons.users,
                description: "Manage subjects, input grades, and track student progress.",
                bgClass: "bg-purple-500/10 group-hover:bg-purple-500/20",
                iconBgClass: "bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400"
              },
              {
                title: "Administration",
                href: "/admin", // Placeholder for now
                icon: icons.shield,
                description: "Full control over users, permissions, and institutional data.",
                bgClass: "bg-emerald-500/10 group-hover:bg-emerald-500/20",
                iconBgClass: "bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400"
              },
            ].map((role) => (
              <div key={role.title} className="group relative p-8 rounded-3xl bg-gray-50 dark:bg-zinc-900 border border-gray-100 dark:border-zinc-800 hover:border-gray-200 dark:hover:border-zinc-700 transition-all hover:shadow-2xl hover:shadow-gray-200/50 dark:hover:shadow-black/50 overflow-hidden">
                <div className={`absolute top-0 right-0 w-32 h-32 rounded-full blur-3xl -mr-16 -mt-16 transition-all ${role.bgClass}`}></div>

                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-6 ${role.iconBgClass}`}>
                  <Icon path={role.icon} />
                </div>

                <h3 className="text-xl font-bold mb-3">{role.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-6">{role.description}</p>

                <Link href={role.href} className="inline-flex items-center font-medium text-sm hover:underline underline-offset-4 decoration-2">
                  Access Portal <span className="ml-1 opacity-100 translate-x-0 group-hover:translate-x-1 transition-transform">→</span>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Designed for Modern Academia</h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
                Built with efficiency and security in mind, providing a seamless experience for over 500+ users.
              </p>

              <div className="space-y-6">
                {[
                  { title: "Role-Based Access Control", desc: "Granular permissions for Admins, Teachers, and Students.", icon: icons.lock },
                  { title: "Real-time Grading System", desc: "Instant mark input and grade calculation for teachers.", icon: icons.chart },
                  { title: "Global Accessibility", desc: "Cross-browser compatible interface with Arabic language support.", icon: icons.globe },
                ].map((feature) => (
                  <div key={feature.title} className="flex gap-4">
                    <div className="shrink-0 w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 flex items-center justify-center">
                      <Icon path={feature.icon} className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg">{feature.title}</h4>
                      <p className="text-gray-600 dark:text-gray-400">{feature.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              {/* Abstract Dashboard Graphic */}
              <div className="relative rounded-2xl bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 shadow-2xl p-6 rotate-2 hover:rotate-0 transition-all duration-500 ease-out z-10 lg:ml-10">
                <div className="flex items-center gap-4 mb-6 border-b border-gray-100 dark:border-zinc-800 pb-4">
                  <div className="w-10 h-10 rounded-full bg-gray-200 dark:bg-zinc-800"></div>
                  <div>
                    <div className="w-32 h-4 bg-gray-200 dark:bg-zinc-800 rounded mb-2"></div>
                    <div className="w-20 h-3 bg-gray-100 dark:bg-zinc-800 rounded"></div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="h-24 rounded-xl bg-blue-50 dark:bg-blue-900/10 border border-blue-100 dark:border-blue-900/20 p-4">
                    <div className="w-16 h-4 bg-blue-200 dark:bg-blue-900/50 rounded mb-2"></div>
                    <div className="w-full h-8 bg-blue-100 dark:bg-blue-900/30 rounded"></div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="h-20 rounded-xl bg-purple-50 dark:bg-purple-900/10 border border-purple-100 dark:border-purple-900/20"></div>
                    <div className="h-20 rounded-xl bg-emerald-50 dark:bg-emerald-900/10 border border-emerald-100 dark:border-emerald-900/20"></div>
                  </div>
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-600 to-purple-600 rounded-2xl blur-3xl opacity-20 -z-10 transform translate-y-4 translate-x-4"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-blue-600 dark:bg-blue-900 overflow-hidden relative">
        <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -ml-20 -mt-20"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl -mr-20 -mb-20"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
            {[
              { value: "500+", label: "Active Users" },
              { value: "30+", label: "Academic Tables" },
              { value: "99.9%", label: "System Uptime" },
              { value: "60%", label: "Faster Load Times" },
            ].map((stat, i) => (
              <div key={i} className="p-4">
                <div className="text-4xl md:text-5xl font-bold mb-2">{stat.value}</div>
                <div className="text-blue-100 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 bg-gray-50 dark:bg-zinc-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Streamlined Academic Workflow</h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Our system simplifies complex administrative tasks into three easy steps.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { step: "01", title: "Registration", desc: "Admins register students and assign courses with role-based security.", color: "blue" },
              { step: "02", title: "Engagement", desc: "Teachers upload materials and grades, while students access content instantly.", color: "purple" },
              { step: "03", title: "Analytics", desc: "Real-time reporting on performance and attendance for data-driven decisions.", color: "emerald" },
            ].map((item, i) => (
              <div key={i} className="relative p-8 bg-white dark:bg-zinc-900 rounded-3xl border border-gray-200 dark:border-zinc-800 shadow-sm hover:shadow-xl transition-shadow">
                <div className={`text-6xl font-bold text-${item.color}-100 dark:text-${item.color}-900/20 absolute top-4 right-4`}>{item.step}</div>
                <h3 className="text-xl font-bold mb-3 relative z-10">{item.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 relative z-10">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12 text-center">Trusted by the Faculty</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-8 rounded-3xl bg-gradient-to-br from-gray-50 to-gray-100 dark:from-zinc-900 dark:to-zinc-800/50 border border-gray-200 dark:border-zinc-800">
              <div className="flex gap-1 text-yellow-500 mb-4">
                {[1, 2, 3, 4, 5].map(i => <Icon key={i} path="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" className="w-5 h-5 fill-current" />)}
              </div>
              <p className="text-lg text-gray-700 dark:text-gray-300 italic mb-6">
                "The database query optimization reduced our page load times by 60%. It's incredibly fast and reliable."
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold">D</div>
                <div>
                  <div className="font-bold">Dr. Hassan</div>
                  <div className="text-sm text-gray-500">Head of IT Dept</div>
                </div>
              </div>
            </div>
            <div className="p-8 rounded-3xl bg-gradient-to-br from-gray-50 to-gray-100 dark:from-zinc-900 dark:to-zinc-800/50 border border-gray-200 dark:border-zinc-800">
              <div className="flex gap-1 text-yellow-500 mb-4">
                {[1, 2, 3, 4, 5].map(i => <Icon key={i} path="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" className="w-5 h-5 fill-current" />)}
              </div>
              <p className="text-lg text-gray-700 dark:text-gray-300 italic mb-6">
                "Managing student grades used to take days. Now I can input scores for my entire class in minutes."
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center text-purple-600 font-bold">S</div>
                <div>
                  <div className="font-bold">Sarah Yasmin</div>
                  <div className="text-sm text-gray-500">Senior Lecturer</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white dark:bg-zinc-950 border-t border-gray-200 dark:border-zinc-800 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-gray-500 text-sm">© 2026 Damascus Institute. All rights reserved.</p>
          <div className="flex items-center gap-6 text-gray-500">
            <Link href="#" className="hover:text-blue-600 text-sm">Privacy Policy</Link>
            <Link href="#" className="hover:text-blue-600 text-sm">Terms of Service</Link>
            <Link href="#" className="hover:text-blue-600 text-sm">Support</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
