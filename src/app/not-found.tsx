import Link from "next/link";
import { Home, Search, ArrowRight } from "lucide-react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Page Not Found (404) - Ideacomp",
	description: "The page you're looking for doesn't exist. Explore our software development solutions, contact us, or return to our homepage.",
	robots: {
		index: false,
		follow: true,
	},
};

export default function NotFound() {
	return (
		<div className="min-h-screen bg-slate-950 flex flex-col">
			<Header />

			<main className="pt-24 pb-5 flex-grow flex items-center justify-center px-4 sm:px-6 lg:px-8">
				<article className="max-w-2xl w-full text-center">
					<header className="mb-8">
						<h1 className="text-9xl font-bold text-cyan-400 mb-4" aria-label="Error 404">404</h1>
						<h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
							Page Not Found
						</h2>
						<p className="text-gray-300 text-lg mb-8 leading-relaxed">
							Sorry, we couldn&apos;t find the page you&apos;re looking for. The
							page might have been moved, deleted, or you entered the wrong URL.
							Let&apos;s get you back on track.
						</p>
					</header>

					<div className="space-y-6">
						<Link
							href="/"
							className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
							aria-label="Return to Ideacomp homepage"
						>
							<Home size={20} aria-hidden="true" />
							Go Home
						</Link>

						<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-3xl mx-auto">
							<Link
								href="/solutions"
								className="group bg-slate-800/50 border border-slate-700 hover:border-cyan-400/50 p-6 rounded-xl transition-all duration-300 hover:transform hover:scale-105"
								aria-label="Explore our software development solutions"
							>
								<h3 className="text-white font-semibold mb-2 group-hover:text-cyan-400 transition-colors">
									Our Solutions
								</h3>
								<p className="text-gray-400 text-sm mb-3">
									Discover our custom software development services
								</p>
								<ArrowRight size={16} className="text-cyan-400 group-hover:translate-x-1 transition-transform" />
							</Link>

							<Link
								href="/contact"
								className="group bg-slate-800/50 border border-slate-700 hover:border-cyan-400/50 p-6 rounded-xl transition-all duration-300 hover:transform hover:scale-105"
								aria-label="Get in touch with our development team"
							>
								<h3 className="text-white font-semibold mb-2 group-hover:text-cyan-400 transition-colors">
									Contact Us
								</h3>
								<p className="text-gray-400 text-sm mb-3">
									Start your project with a free consultation
								</p>
								<ArrowRight size={16} className="text-cyan-400 group-hover:translate-x-1 transition-transform" />
							</Link>

							<Link
								href="/"
								className="group bg-slate-800/50 border border-slate-700 hover:border-cyan-400/50 p-6 rounded-xl transition-all duration-300 hover:transform hover:scale-105 sm:col-span-2 lg:col-span-1"
								aria-label="Learn about Ideacomp software development company"
							>
								<h3 className="text-white font-semibold mb-2 group-hover:text-cyan-400 transition-colors">
									About Ideacomp
								</h3>
								<p className="text-gray-400 text-sm mb-3">
									Learn about our mission and expertise
								</p>
								<ArrowRight size={16} className="text-cyan-400 group-hover:translate-x-1 transition-transform" />
							</Link>
						</div>
					</div>

					<footer className="mt-12 text-gray-400">
						<p className="text-sm">
							If you believe this is an error or need help finding what you&apos;re looking for, please{" "}
							<Link
								href="/contact"
								className="text-cyan-400 hover:text-cyan-300 underline transition-colors duration-200"
								aria-label="Contact our support team for assistance"
							>
								contact our support team
							</Link>
						</p>
					</footer>
				</article>
			</main>

			<Footer />
		</div>
	);
}
