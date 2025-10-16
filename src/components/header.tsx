"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { navigation } from "@/lib/sitemap";

const Header = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const pathname = usePathname();

	const isActive = (path: string) => pathname === path;

	return (
		<header className="fixed top-0 w-full bg-slate-900/95 backdrop-blur-md border-b border-slate-800 z-[11]">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex justify-between items-center py-4">
					{" "}
					{/* Logo */}
					<Link href="/" className="flex items-center space-x-3">
						<Image
							src="/logo.png"
							alt="Ideacomp Logo"
							width={35}
							height={35}
							className="rounded-lg"
							priority
						/>
						<span className="text-white font-semibold text-xl">Ideacomp</span>
					</Link>
					{/* Desktop Navigation */}{" "}
					<nav className="hidden md:flex space-x-8">
						{navigation.map((item) => (
							<Link
								key={item.name}
								href={item.href}
								className={`px-3 py-2 text-sm font-medium transition-colors duration-200 ${
									isActive(item.href)
										? "text-cyan-400 border-b-2 border-cyan-400"
										: "text-gray-300  hover:text-white"
								}`}
							>
								{item.name}
							</Link>
						))}
					</nav>
					{/* Mobile menu button */}
					<div className="md:hidden">
						<button
							onClick={() => setIsMenuOpen(!isMenuOpen)}
							className="text-gray-300 hover:text-white p-2"
							aria-label={
								isMenuOpen ? "Close navigation menu" : "Open navigation menu"
							}
							aria-expanded={isMenuOpen}
						>
							{isMenuOpen ? <X size={24} /> : <Menu size={24} />}
						</button>
					</div>
				</div>

				{/* Mobile Navigation */}
				{isMenuOpen && (
					<div className="md:hidden border-t border-slate-800">
						{" "}
						<div className="px-2 pt-2 pb-3 space-y-1">
							{navigation.map((item) => (
								<Link
									key={item.name}
									href={item.href}
									className={`block px-3 py-2 text-base font-medium transition-colors duration-200 ${
										isActive(item.href)
											? "text-cyan-400 bg-slate-800"
											: "text-gray-300 hover:text-white hover:bg-slate-800"
									}`}
									onClick={() => setIsMenuOpen(false)}
								>
									{item.name}
								</Link>
							))}
						</div>
					</div>
				)}
			</div>
		</header>
	);
};

export default Header;
