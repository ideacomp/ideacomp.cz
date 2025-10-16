import { socialLinks } from "@/lib/sitemap";
import Link from "next/link";
import Image from "next/image";
import { Clock, Mail } from "lucide-react";
const Footer = () => {
	const currentYear = new Date().getFullYear();

	return (
		<footer className="bg-slate-900 border-t border-slate-800/50 relative overflow-hidden">
			<div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800/80 to-slate-950"></div>
			<div className="absolute inset-0 bg-gradient-to-tr from-cyan-950/10 via-transparent to-blue-950/10"></div>
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
				<div className="grid grid-cols-1 md:grid-cols-4 gap-8">
					{" "}
					{/* Logo and Description */}
					<div className="col-span-1 md:col-span-2">
						<div className="flex items-center space-x-3 mb-4">
							<Image
								src="/logo.png"
								alt="Ideacomp Logo"
								width={32}
								height={32}
								className="rounded-lg"
							/>
							<span className="text-white font-semibold text-xl">Ideacomp</span>
						</div>
						<p className="text-gray-400 max-w-md">
							We turn vision into reality by combining creativity, technology
							and trust.
						</p>
						<div className="flex flex-col space-x-4 mt-4 gap-y-2">
							<p className="flex text-gray-400 gap-2 text-sm">
								<Mail className="text-sm text-cyan-400 " /> info@ideacomp.cz
							</p>
							<p className="flex text-gray-400 gap-2 text-sm">
								<Clock className="text-sm text-cyan-400 " /> Mon-Fri 9:00 -
								17:00 UTC+1
							</p>
						</div>
					</div>
					{/* Navigation Links */}
					<div>
						<h3 className="text-white font-semibold mb-4">Navigation</h3>
						<ul className="space-y-2">
							<li>
								<Link
									href="/"
									className="text-gray-400 hover:text-cyan-400 transition-colors"
								>
									Home
								</Link>
							</li>

							<li>
								<Link
									href="/solutions"
									className="text-gray-400 hover:text-cyan-400 transition-colors"
								>
									Our Solutions
								</Link>
							</li>

							<li>
								<Link
									href="/contact"
									className="text-gray-400 hover:text-cyan-400 transition-colors"
								>
									Contact
								</Link>
							</li>
						</ul>
					</div>
				</div>

				<div className="border-t border-slate-800 mt-12 pt-8">
					<p className="text-gray-400 text-center">
						© {currentYear} Ideacomp s.r.o. All Rights Reserved.
					</p>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
