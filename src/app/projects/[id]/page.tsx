import Link from "next/link";
import { getProjectBySlug, getAllProjectSlugs } from "@/lib/projects";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  return getAllProjectSlugs().map((slug) => ({
    id: slug,
  }));
}

export default async function ProjectDetailPage({ params }: { params: { id: string } }) {
  const { id } = (await params) as { id: string };
  const project = getProjectBySlug(id);

  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[var(--background)] px-4 sm:px-6 lg:px-8 py-16 sm:py-24 transition-colors duration-500 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-indigo-500/10 via-transparent to-indigo-500/10 pointer-events-none"></div>

      <div className="relative max-w-4xl mx-auto">
        {/* Back Button */}
          <div className="mb-8">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium text-indigo-600 dark:text-indigo-400 hover:bg-indigo-100 dark:hover:bg-indigo-900/30 transition-colors"
          >
            ← Back to Projects
          </Link>
          </div>

        <div className="bg-white dark:bg-[var(--surface-elevated)] rounded-2xl border border-gray-200 dark:border-white/10 shadow-lg p-8 sm:p-10">
          {/* Top gradient accent */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-indigo-500 via-indigo-600 to-indigo-500 rounded-t-2xl"></div>

          {/* Title and GitHub Link */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-4">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
              {project.title}
            </h1>
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-sm sm:text-base font-medium bg-gradient-to-r from-gray-900 to-gray-800 dark:from-gray-700 dark:to-gray-600 text-white hover:shadow-lg transition-all duration-300 whitespace-nowrap"
              >
                <span>🔗</span>
                View on GitHub
              </a>
            )}
          </div>

          {/* Description */}
          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 mb-2 font-medium">
            {project.desc}
          </p>

          {/* Category Badge */}
          <div className="mb-8">
            <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-indigo-100 dark:bg-indigo-900/40 text-indigo-700 dark:text-indigo-300">
              {project.category === "full-stack"
                ? "💻 Full-Stack"
                : project.category === "distributed-systems"
                  ? "🔗 Distributed Systems"
                  : "📱 IoT Solutions"}
            </span>
          </div>

          {/* Divider */}
          <div className="h-px bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 dark:from-white/10 dark:via-white/20 dark:to-white/10 mb-8"></div>

          {/* Overview Section */}
          <div className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-3">
              <span className="w-1.5 h-8 bg-indigo-600 dark:bg-indigo-400 rounded-full"></span>
              Overview
            </h2>
            <p className="text-gray-700 dark:text-gray-300 text-base sm:text-lg leading-relaxed">
              {project.details.overview}
            </p>
          </div>

          {/* Architecture Section */}
          {project.details.architecture && (
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-3">
                <span className="w-1.5 h-8 bg-indigo-600 dark:bg-indigo-400 rounded-full"></span>
                System Architecture
              </h2>
              <p className="text-gray-700 dark:text-gray-300 text-base sm:text-lg leading-relaxed">
                {project.details.architecture}
              </p>
            </div>
          )}

          {/* Setup Section */}
          <div className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-3">
              <span className="w-1.5 h-8 bg-indigo-600 dark:bg-indigo-400 rounded-full"></span>
              Setup & Implementation
            </h2>
            <p className="text-gray-700 dark:text-gray-300 text-base sm:text-lg leading-relaxed">
              {project.details.setup}
            </p>
          </div>

          {/* Technologies Section */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-5 flex items-center gap-3">
              <span className="w-1.5 h-8 bg-indigo-600 dark:bg-indigo-400 rounded-full"></span>
              Technologies Used
            </h2>
            <div className="flex flex-wrap gap-3">
              {project.details.technologies.map((tech, idx) => (
                <span
                  key={idx}
                  className="px-4 py-2 rounded-lg text-sm font-medium bg-indigo-100 text-indigo-700 dark:bg-indigo-900/50 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-500/30 hover:shadow-md transition-all"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Bottom GitHub Link */}
          {project.github && (
            <div className="mt-10 pt-8 border-t border-gray-200 dark:border-white/10">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-6 py-3 rounded-lg text-base font-medium bg-gradient-to-r from-indigo-600 to-indigo-700 hover:from-indigo-700 hover:to-indigo-800 text-white shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <span>✨</span>
                Explore Repository
              </a>
            </div>
          )}
        </div>

        {/* Related Projects */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
            Explore More Projects
          </h3>
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-base font-medium text-white bg-gradient-to-r from-indigo-600 to-indigo-700 hover:from-indigo-700 hover:to-indigo-800 shadow-lg hover:shadow-xl transition-all duration-300"
          >
            View All Projects →
          </Link>
        </div>
      </div>
    </main>
  );
}
