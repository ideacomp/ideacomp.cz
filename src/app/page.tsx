import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { services, content } from "@/lib/sitemap";
import Header from "@/components/header";
import Footer from "@/components/footer";
import HeroBanner from "../components/hero";
import { TypewriterEffectSmooth } from "@/components/ui/typewriter";
import TypewriterText from "@/components/ui/typewriter-mobile";


const Home = () => {
	return (
		<div className="min-h-screen bg-slate-950">
			<Header />

			{/* Hero Section */}
			<section 
				className="pt-24 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden min-h-[600px] flex items-start"
				aria-labelledby="hero-heading"
			>
				<HeroBanner />

				<div className="max-w-7xl mx-auto relative">
					<div className="text-center maw-w-screen">
						{/* Static text for small screens */}
						<div className="block sm:hidden">
							<TypewriterText
								speed={80}
								className=" text-4xl pb-1 font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 mt-10 mb-6"
							>
								{content.hero.title}
							</TypewriterText>
						</div>

						{/* Typewriter effect for medium screens and larger */}
						<div className="hidden sm:block">
							<TypewriterEffectSmooth
								words={content.hero.title.split(" ").map((w: string) => ({
									text: w,
									className: "text-5xl md:text-7xl font-bold",
								}))}
								className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 pb-4"
								cursorClassName="bg-white/50"
							/>
						</div>
						<p className="text-lg sm:text-xl sm:mt-0 md:text-2xl text-gray-300 mb-12 max-w-screen sm:max-w-4xl mx-auto leading-relaxed">
							{content.hero.subtitle}
						</p>
						<div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
							<Link
								href={content.hero.ctaButtons.primary.href}
								className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-xl flex items-center gap-2"
								aria-label="Get started with Ideacomp - Contact us for your software development project"
							>
								{content.hero.ctaButtons.primary.text}
								<ArrowRight size={20} aria-hidden="true" />
							</Link>
						</div>
					</div>
				</div>
			</section>

			{/* Services Section */}
			<section 
				className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/50"
				aria-labelledby="services-heading"
			>
				<div className="max-w-7xl mx-auto">
					<header className="text-center mb-16">
						<h2 id="services-heading" className="text-4xl md:text-5xl font-bold text-white mb-6">
							Your Ideas,{" "}
							<span className="text-cyan-400">Engineered to Last</span>
						</h2>
					</header>

					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" role="list">
						{services.map((service, index) => {
							// Define different gradients for each service
							const gradients = [
								"from-cyan-400 to-blue-500", // Custom App Development
								"from-emerald-400 to-teal-500", // AI & Machine Learning
								"from-orange-400 to-red-500", // Cloud & DevOps
							];
							const shadowColors = [
								"group-hover:shadow-cyan-400/25",
								"group-hover:shadow-emerald-400/25",
								"group-hover:shadow-orange-400/25",
							];
							const hoverBorderColors = [
								"hover:border-cyan-400/50",
								"hover:border-emerald-400/50",
								"hover:border-orange-400/50",
							];

							return (
								<article
									key={index}
									role="listitem"
									className={`bg-slate-800/50 backdrop-blur-sm border border-slate-700 p-8 rounded-xl ${hoverBorderColors[index]} transition-all duration-300 group hover:transform hover:scale-105`}
								>
									<div
										className={`w-12 h-12 bg-gradient-to-r ${gradients[index]} rounded-lg flex items-center justify-center mb-6 group-hover:shadow-lg ${shadowColors[index]}`}
										aria-hidden="true"
									>
										<service.icon className="text-white" size={24} />
									</div>
									<h3 className="text-xl font-semibold text-white mb-4">
										{service.title}
									</h3>
									<p className="text-gray-400 leading-relaxed">
										{service.description}
									</p>
								</article>
							);
						})}
					</div>
				</div>
			</section>

			{/* Client Work Preview */}
			<section 
				className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/50"
				aria-labelledby="client-work-heading"
			>
				<div className="max-w-7xl mx-auto">
					<header className="text-center mb-16">
						<h2 id="client-work-heading" className="text-4xl md:text-5xl font-bold text-white mb-6">
							{content.sections.clientWork.title.split(" ").map((word, index) =>
								word === "Extraordinary" ? (
									<span key={index} className="text-cyan-400">
										{word}
									</span>
								) : (
									word + " "
								)
							)}
						</h2>
					</header>
					<div className="text-center mb-12">
						<div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 rounded-xl p-8 max-w-2xl mx-auto">
							<h3 className="text-2xl font-bold text-white mb-4">
								Building the Future{" "}
								<span className="bg-gradient-to-r from-purple-500  to-pink-500 bg-clip-text text-transparent">
									Together
								</span>
							</h3>
							<p className="text-gray-300 mb-6 leading-relaxed">
								We deliver reliable, future-ready IT solutions. Partner with us
								and gain a trusted ally who turns challenges into opportunities.
							</p>
						</div>
					</div>
					<div className="text-center">
						<Link
							href={content.sections.clientWork.cta.href}
							className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
							aria-label="Become a founding client - Start your project with Ideacomp"
						>
							{content.sections.clientWork.cta.text}
							<ArrowRight size={20} aria-hidden="true" />
						</Link>
					</div>
				</div>
			</section>


			<Footer />
		</div>
	);
};

export default Home;
