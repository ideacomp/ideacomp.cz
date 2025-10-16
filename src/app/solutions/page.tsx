"use client";
import Link from "next/link";
import {
	ArrowRight,
	ChevronDown,
	ChevronRight,
	ChevronLeft,
	Cross,
	Play,
	X,
	Pause,
} from "lucide-react";
import Image from "next/image";

import Header from "@/components/header";
import Footer from "@/components/footer";
import { solutionsData, industries, content, CheckCircle } from "@/lib/sitemap";
import React, { useState, useEffect, useRef } from "react";
import { useAutoProgression, useSolutionState } from "./hooks";
import {
	Dialog,
	DialogContent,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";

import { Vortex } from "@/components/backgrounds/vortex";
import { cn } from "@/lib/utils";

// Carousel Component for Solution Features
const FeatureCarousel = ({
	solution,
	solutionIndex,
}: {
	solution: (typeof solutionsData)[0];
	solutionIndex: number;
}) => {
	const [isPaused, setIsPaused] = useState(false);
	const { currentIndex, progress, goToIndex, goToNext, goToPrevious } =
		useAutoProgression({
			itemCount: solution.features.length,
			interval: 5000,
			isActive: !isPaused,
		});

	const [isTransitioning, setIsTransitioning] = useState(false);
	const [displayIndex, setDisplayIndex] = useState(0);
	const [imageKey, setImageKey] = useState(0);

	// Handle smooth transitions and force WebP restart
	useEffect(() => {
		if (currentIndex !== displayIndex) {
			setIsTransitioning(true);
			const timer = setTimeout(() => {
				setDisplayIndex(currentIndex);
				setIsTransitioning(false);
				// Force image reload by updating key
				setImageKey((prev) => prev + 1);
			}, 250); // Half of the transition duration
			return () => clearTimeout(timer);
		}
	}, [currentIndex, displayIndex]);

	const currentFeature = solution.features[displayIndex];

	return (
		<div className="relative h-150 w-full bg-slate-800 rounded-b-lg ">
			{/* Image Container with slide effect - covers entire component */}
			<div
				className="flex transition-transform duration-500 ease-in-out  h-full w-[300%]"
				style={{
					transform: `translateX(-${displayIndex * (100 / 3)}%)`,
				}}
			>
				{solution.features.map((feature, idx) => (
					<div
						key={idx}
						className="relative w-full h-full  bg-slate-900 flex items-center justify-center"
					>
						{feature.gif.endsWith(".mp4") ? (
							<video
								key={`${solutionIndex}-${idx}-${
									displayIndex === idx ? imageKey : "inactive"
								}`}
								src={feature.gif}
								className="w-full h-full object-cover solution-gif"
								autoPlay
								muted
								playsInline
							/>
						) : (
							<Image
								key={`${solutionIndex}-${idx}-${
									displayIndex === idx ? imageKey : "inactive"
								}`}
								src={feature.gif}
								alt={`${feature.name} Demo`}
								className="w-full h-full center solution-gif"
								loading="lazy"
								unoptimized
								width={1280}
								height={600}
							/>
						)}
					</div>
				))}
			</div>

			{/* Dark overlay for better text readability */}
			<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />

			{/* Feature Description overlaid on image */}
			<div className="absolute inset-0 flex flex-col justify-end p-8">
				<div
					className={`transition-all duration-500 ease-in-out transform ${
						isTransitioning
							? "opacity-0 translate-y-2"
							: "opacity-100 translate-y-0"
					}`}
				>
					<h4 className="text-2xl font-semibold text-white mb-4 drop-shadow-lg">
						{currentFeature.name}
					</h4>
					<p className="text-gray-200 leading-relaxed text-lg drop-shadow-md mb-16">
						{currentFeature.description}
					</p>
				</div>
			</div>

			{/* Carousel Controls */}
			<div className="absolute inset-x-4 bottom-4 flex items-center justify-between z-10">
				<button
					onClick={(e) => {
						e.stopPropagation();
						goToPrevious();
					}}
					className="bg-slate-800/80 backdrop-blur-sm text-white p-2 rounded-full hover:bg-slate-700/80 transition-all duration-200 hover:scale-110 group"
				>
					<ChevronLeft
						size={20}
						className="group-hover:text-cyan-400 transition-colors duration-200"
					/>
				</button>

				<div className="flex gap-2">
					{solution.features.map((_, idx) => (
						<button
							key={idx}
							onClick={(e) => {
								e.stopPropagation();
								goToIndex(idx);
							}}
							className={`w-3 h-3 rounded-full transition-all duration-300 hover:scale-125 relative overflow-hidden ${
								idx === currentIndex
									? "bg-cyan-400 shadow-lg shadow-cyan-400/50"
									: "bg-slate-500 hover:bg-slate-400"
							}`}
						>
							{/* Active progress ring */}
							{idx === currentIndex && (
								<div
									className="absolute inset-0 border-2 border-white/30 rounded-full"
									style={{
										transform: `scale(${1 + progress * 0.3})`,
										opacity: 1 - progress * 0.5,
									}}
								/>
							)}
						</button>
					))}
				</div>

				<button
					onClick={(e) => {
						e.stopPropagation();
						goToNext();
					}}
					className="bg-slate-800/80 backdrop-blur-sm text-white p-2 rounded-full hover:bg-slate-700/80 transition-all duration-200 hover:scale-110 group"
				>
					<ChevronRight
						size={20}
						className="group-hover:text-cyan-400 transition-colors duration-200"
					/>
				</button>
			</div>
		</div>
	);
};

const Solutions = () => {
	// State for mobile dialog-based interface
	const [selectedSolution, setSelectedSolution] = useState<number | null>(null);
	const [expandedFeature, setExpandedFeature] = useState<string | null>(null);
	const [progress, setProgress] = useState(0);
	const [isAutoProgressing, setIsAutoProgressing] = useState(true);
	const [isManuallyPaused, setIsManuallyPaused] = useState(false);
	const [hasInitialized, setHasInitialized] = useState(false);
	const [gifKey, setGifKey] = useState(0);
	const intervalRef = useRef<NodeJS.Timeout | null>(null);
	const progressIntervalRef = useRef<NodeJS.Timeout | null>(null);

	// State for desktop carousel-based interface
	const {
		expandedSolution,
		isCarouselPaused,
		openSolution,
		closeSolution,
		pauseCarousel,
		resumeCarousel,
	} = useSolutionState();

	// Auto-progression logic for mobile dialogs
	useEffect(() => {
		if (selectedSolution === null || !isAutoProgressing || !expandedFeature) {
			// Clean up any existing progress interval
			if (progressIntervalRef.current) {
				clearInterval(progressIntervalRef.current);
				progressIntervalRef.current = null;
			}
			return;
		}

		const currentSolution = solutionsData[selectedSolution];
		const currentExpandedIndex = parseInt(expandedFeature.split("-")[1]);

		// Clean up any existing interval before starting a new one
		if (progressIntervalRef.current) {
			clearInterval(progressIntervalRef.current);
		}

		// Reset progress and start animation
		setProgress(0);
		let progressValue = 0;

		progressIntervalRef.current = setInterval(() => {
			progressValue += 2; // 2% every 100ms = 5 seconds total
			setProgress(progressValue);

			if (progressValue >= 100) {
				if (progressIntervalRef.current) {
					clearInterval(progressIntervalRef.current);
					progressIntervalRef.current = null;
				}

				// Move to next feature
				const nextIndex =
					(currentExpandedIndex + 1) % currentSolution.features.length;
				setExpandedFeature(`${selectedSolution}-${nextIndex}`);
				// Force GIF restart for auto-progression
				setGifKey((prev) => prev + 1);
			}
		}, 100);

		return () => {
			if (progressIntervalRef.current) {
				clearInterval(progressIntervalRef.current);
				progressIntervalRef.current = null;
			}
		};
	}, [selectedSolution, expandedFeature, isAutoProgressing]);

	// Initialize with first feature when solution opens
	useEffect(() => {
		if (
			selectedSolution !== null &&
			expandedFeature === null &&
			!hasInitialized
		) {
			setExpandedFeature(`${selectedSolution}-0`);
			setProgress(0);
			setHasInitialized(true);
		}
	}, [selectedSolution, expandedFeature, hasInitialized]);

	// Cleanup on solution change
	useEffect(() => {
		const currentInterval = intervalRef.current;
		const currentProgressInterval = progressIntervalRef.current;

		return () => {
			if (currentInterval) {
				clearInterval(currentInterval);
			}
			if (currentProgressInterval) {
				clearInterval(currentProgressInterval);
			}
		};
	}, []);

	const handleFeatureClick = (solutionIndex: number, featureIndex: number) => {
		const featureKey = `${solutionIndex}-${featureIndex}`;
		const isCurrentlyExpanded = expandedFeature === featureKey;

		// Toggle the expanded state
		setExpandedFeature(isCurrentlyExpanded ? null : featureKey);
		setProgress(0);
		// Force GIF restart by updating key
		setGifKey((prev) => prev + 1);

		// If closing an expanded feature, pause auto-progression
		if (isCurrentlyExpanded) {
			setIsAutoProgressing(false);
			setIsManuallyPaused(true);
		} else {
			// Only temporarily pause auto-progression if not manually paused
			if (!isManuallyPaused) {
				setIsAutoProgressing(false);
				setTimeout(() => {
					setIsAutoProgressing(true);
				}, 2000); // Resume after 2 seconds
			}
		}
	};

	// Progress Circle Component
	const ProgressCircle = ({
		progress,
		isActive,
	}: {
		progress: number;
		isActive: boolean;
	}) => {
		if (!isActive) return null;

		const radius = 8;
		const circumference = 2 * Math.PI * radius;
		const strokeDashoffset = circumference - (progress / 100) * circumference;

		return (
			<div className="relative w-5 h-5 shrink-0">
				<svg className="w-5 h-5 transform -rotate-90" viewBox="0 0 20 20">
					<circle
						cx="10"
						cy="10"
						r={radius}
						stroke="currentColor"
						strokeWidth="2"
						fill="transparent"
						className="text-slate-600"
					/>
					<circle
						cx="10"
						cy="10"
						r={radius}
						stroke="currentColor"
						strokeWidth="2"
						fill="transparent"
						strokeDasharray={circumference}
						strokeDashoffset={strokeDashoffset}
						className="text-cyan-400 transition-all duration-100 ease-linear"
					/>
				</svg>
			</div>
		);
	};
	return (
		<div className="min-h-screen bg-slate-950">
			<Header />
			{/* Hero Section */}
			<section className="pt-24 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden min-h-[600px]  flex items-start">
				<div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-blue-500/10">
					<Vortex
						backgroundColor="transparent"
						particleCount={200}
						rangeSpeed={0.4}
						rangeY={800}
						colors={["#ffffff"]}
						className="flex items-center flex-col justify-center px-2 md:px-10 w-full h-full"
					></Vortex>
				</div>
				<div className="max-w-7xl mx-auto relative z-[10]">
					<div className="text-center">
						<h1 className="text-4xl sm:text-5xl md:text-7xl mt-10 font-bold text-white mb-6 animate-fade-in">
							Smart Solutions For{" "}
							<span className="bg-gradient-to-r bg-clip-text from-cyan-400 to-blue-500 text-transparent">
								Real Growth
							</span>
						</h1>

						<p className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
							{content.sections.solutions.page.subtitle}
						</p>
						<Link
							href={content.sections.solutions.page.cta.primary.href}
							className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-xl inline-flex items-center gap-2"
							aria-label="Get started with our solutions - Contact us to discuss your project"
						>
							{content.sections.solutions.page.cta.primary.text}
							<ArrowRight size={20} />
						</Link>
					</div>
				</div>
			</section>{" "}
			{/* Solutions Grid */}
			<section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/50">
				<div className="max-w-7xl mx-auto">
					<div className="text-center mb-16">
						<h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
							Smart Tech, <span className="text-cyan-400">Real Results</span>
						</h2>
					</div>

					{/* Mobile: Dialog-based Solutions Grid */}
					<div className="md:hidden">
						<div className="grid grid-cols-1 gap-8">
							{solutionsData.map((solution, index) => (
								<Dialog key={index}>
									<DialogTrigger asChild>
										<div
											className="bg-slate-800/50  backdrop-blur-sm border border-slate-700 p-8 rounded-xl hover:border-cyan-400/50 transition-all duration-300 group hover:transform hover:scale-105 cursor-pointer"
											onClick={() => {
												setSelectedSolution(index);
												setExpandedFeature(null);
												setProgress(0);
												setIsAutoProgressing(true);
												setIsManuallyPaused(false);
												setHasInitialized(false);
											}}
										>
											<div
												className={`w-12 h-12 bg-gradient-to-r ${solution.gradient} rounded-lg flex items-center justify-center mb-6 group-hover:shadow-lg group-hover:shadow-cyan-400/25`}
											>
												<solution.icon className="text-white" size={24} />
											</div>
											<h3 className="text-xl font-semibold text-white mb-4">
												{solution.title}
											</h3>
											<p className="text-gray-400 mb-6 leading-relaxed">
												{solution.description}
											</p>
											<ul className="space-y-2 mb-4">
												{solution.features.map((feature, idx) => (
													<li
														key={idx}
														className="flex items-center gap-2 text-gray-300 text-sm"
													>
														<CheckCircle
															size={16}
															className="text-cyan-400 shrink-0"
														/>
														{feature.name}
													</li>
												))}
											</ul>
										</div>
									</DialogTrigger>
									<DialogTitle className="sr-only">
										{solution.title} - Detailed View
									</DialogTitle>
									<DialogContent
										showCloseButton
										className="min-w-screen h-[100%] md:min-w-[90%] md:h-[90%] rounded-none md:rounded-lg overflow-hidden max-w-none p-0 bg-slate-900 border-none flex flex-col"
									>
										{/* Top section - Demo GIF/Video (visible on mobile only) */}
										<div className="md:hidden min-h-48 h-[30%] bg-slate-800 flex items-center justify-center overflow-hidden z-[9000] flex-shrink-0">
											{(() => {
												const mediaSrc = expandedFeature
													? solution.features[
															parseInt(expandedFeature.split("-")[1])
													  ]?.gif
													: solution.gifUrl;

												return mediaSrc?.endsWith(".mp4") ? (
													<video
														key={
															expandedFeature
																? `${selectedSolution}-${expandedFeature}-mobile-${gifKey}`
																: `${selectedSolution}-main-mobile-${gifKey}`
														}
														src={mediaSrc}
														className="w-full h-full object-cover animate-slide-in-right"
														autoPlay
														muted
														playsInline
													/>
												) : (
													<Image
														key={
															expandedFeature
																? `${selectedSolution}-${expandedFeature}-mobile-${gifKey}`
																: `${selectedSolution}-main-mobile-${gifKey}`
														}
														loading="lazy"
														src={mediaSrc}
														alt={
															expandedFeature
																? `${
																		solution.features[
																			parseInt(expandedFeature.split("-")[1])
																		]?.name
																  } Demo`
																: `${solution.title} Demo`
														}
														width={800}
														height={600}
														className="w-full h-full object-cover animate-slide-in-right"
														unoptimized
													/>
												);
											})()}
										</div>

										<div className="flex flex-1 overflow-hidden">
											{/* Left side - Solution details */}
											<div className="md:flex-[2] flex-1 flex flex-col overflow-hidden">
												<div className="flex-1 p-4 overflow-y-auto">
													<div
														className={`w-16 h-16 bg-gradient-to-r ${solution.gradient} rounded-lg flex items-center justify-center mb-6`}
													>
														<solution.icon className="text-white" size={32} />
													</div>
													<h2 className="text-2xl font-bold text-white mb-6 md:mb-4">
														{solution.title}
													</h2>
													<p className="text-base text-gray-300 mb-6 md:mb-4 leading-relaxed">
														{solution.detailedDescription}
													</p>

													<div className="flex items-center justify-between mb-6 md:mb-4">
														<h3 className="text-lg md:text-xl font-semibold text-white">
															Key Features
														</h3>
														<button
															onClick={() => {
																const newAutoProgressingState =
																	!isAutoProgressing;
																setIsAutoProgressing(newAutoProgressingState);
																setIsManuallyPaused(!newAutoProgressingState);
															}}
															className={`px-3 py-1 rounded-md text-sm font-medium transition-colors ${
																isAutoProgressing
																	? "bg-cyan-500/20 text-cyan-400 border border-cyan-500/30"
																	: "bg-slate-700/50 text-gray-400 border border-slate-600"
															}`}
															title={
																isAutoProgressing
																	? "Disable auto-progression"
																	: "Enable auto-progression"
															}
														>
															{isAutoProgressing ? "⏸ Auto" : "▶ Auto"}
														</button>
													</div>
													<div className="space-y-3 mb-8">
														{solution.features.map((feature, idx) => (
															<div
																key={idx}
																className="border border-slate-700 rounded-lg overflow-hidden"
															>
																<button
																	onClick={() => handleFeatureClick(index, idx)}
																	className="w-full flex items-center justify-between gap-3 text-gray-300 p-4 md:p-3 hover:bg-slate-800/50 transition-colors"
																>
																	<div className="flex items-center gap-3">
																		<CheckCircle
																			size={20}
																			className="text-cyan-400 shrink-0"
																		/>
																		<span className="text-base text-left">
																			{feature.name}
																		</span>
																	</div>
																	<div className="flex items-center gap-2">
																		<ProgressCircle
																			progress={progress}
																			isActive={
																				expandedFeature === `${index}-${idx}` &&
																				isAutoProgressing
																			}
																		/>
																		{expandedFeature === `${index}-${idx}` ? (
																			<ChevronDown
																				size={20}
																				className="text-cyan-400 shrink-0"
																			/>
																		) : (
																			<ChevronRight
																				size={20}
																				className="text-cyan-400 shrink-0"
																			/>
																		)}
																	</div>
																</button>
																{expandedFeature === `${index}-${idx}` && (
																	<div className="border-t border-slate-700 bg-slate-800/30">
																		<div className="md:p-2 p-4 px-4">
																			<p className="text-gray-300">
																				{feature.description}
																			</p>
																		</div>
																	</div>
																)}
															</div>
														))}
													</div>
												</div>
											</div>

											{/* Right side - Demo GIF/Video (hidden on mobile, visible on tablet+) */}
											<div className="hidden md:flex md:flex-[3] flex-1 bg-slate-800 items-center justify-center p-0 z-[9000] overflow-hidden">
												{(() => {
													const mediaSrc = expandedFeature
														? solution.features[
																parseInt(expandedFeature.split("-")[1])
														  ]?.gif
														: solution.gifUrl;

													return mediaSrc?.endsWith(".mp4") ? (
														<video
															key={
																expandedFeature
																	? `${selectedSolution}-${expandedFeature}-desktop-${gifKey}`
																	: `${selectedSolution}-main-desktop-${gifKey}`
															}
															src={mediaSrc}
															className="w-full h-full object-cover animate-slide-in-right solution-gif"
															autoPlay
															loop
															muted
															playsInline
														/>
													) : (
														<Image
															key={
																expandedFeature
																	? `${selectedSolution}-${expandedFeature}-desktop-${gifKey}`
																	: `${selectedSolution}-main-desktop-${gifKey}`
															}
															loading="lazy"
															src={mediaSrc}
															unoptimized
															alt={
																expandedFeature
																	? `${
																			solution.features[
																				parseInt(expandedFeature.split("-")[1])
																			]?.name
																	  } Demo`
																	: `${solution.title} Demo`
															}
															width={800}
															height={600}
															className="w-full h-full object-cover animate-slide-in-right solution-gif"
														/>
													);
												})()}
											</div>
										</div>
									</DialogContent>
								</Dialog>
							))}
						</div>
					</div>

					{/* Desktop: Carousel-based Solutions Grid */}
					<div className="hidden md:block">
						<div className="grid md:grid-rows-3 lg:grid-rows-2 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative">
							{solutionsData.map((solution, index) => {
								// Only render the expanded solution when one is expanded
								if (expandedSolution !== null && expandedSolution !== index) {
									return null;
								}

								return (
									<div
										key={index}
										className={`
											relative bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl 
											hover:border-cyan-400/50 transition-all duration-500 ease-out cursor-pointer overflow-hidden
											${
												expandedSolution === index
													? "fixed z-10 bg-slate-800/95 border-cyan-400/50 col-span-full row-span-full mx-auto"
													: "hover:transform hover:scale-105"
											}
										`}
										style={{
											transitionProperty: "all",
											transitionDuration: "500ms",
											transitionTimingFunction:
												"cubic-bezier(0.4, 0.0, 0.2, 1)",
										}}
										onClick={() =>
											expandedSolution === index
												? closeSolution()
												: openSolution(index)
										}
									>
										{/* Card Header */}
										<div className="p-4">
											<div className="flex items-center justify-between mb">
												<div
													className={cn(
														"flex items-start gap-4 flex-col",
														expandedSolution === index &&
															"flex-row items-center w-full"
													)}
												>
													<div
														className={`w-12 h-12 bg-gradient-to-r ${solution.gradient}  rounded-lg flex items-center justify-center group-hover:shadow-lg group-hover:shadow-cyan-400/25`}
													>
														<solution.icon className="text-white" size={24} />
													</div>
													<div>
														<h3 className="text-xl font-semibold text-white">
															{solution.title}
														</h3>
														{expandedSolution !== index && (
															<p className="text-gray-400 leading-relaxed mt-2">
																{solution.description}
															</p>
														)}
													</div>
													{expandedSolution == index && (
														<div className="ml-auto flex">
															<X
																onClick={closeSolution}
																size={20}
																className="text-white hover:text-cyan-400 transition-colors duration-200 cursor-pointer"
															/>
														</div>
													)}

													{expandedSolution !== index &&
														solution.features.map((f) => {
															return (
																<div key={f.name} className="flex items-center">
																	<CheckCircle
																		size={15}
																		className="inline-block mr-2  text-cyan-400"
																	/>
																	<span className="text-gray-400 text-base">
																		{f.name}
																	</span>
																</div>
															);
														})}
												</div>
												{expandedSolution === index && (
													<button
														onClick={(e) => {
															e.stopPropagation();
															closeSolution();
														}}
														className="text-gray-400 hover:text-white transition-all  duration-200 p-2 cursor-pointer rounded-lg hover:scale-110 opacity-0 animate-fade-in"
														style={{ animationDelay: "0.3s" }}
													>
														<X />
													</button>
												)}
											</div>
										</div>

										{/* Expanded State - Detailed Content */}
										{expandedSolution === index && (
											<div className="row-span-full col-span-full h-full flex flex-col">
												<FeatureCarousel
													solution={solution}
													solutionIndex={index}
												/>
											</div>
										)}
									</div>
								);
							})}
						</div>
					</div>
				</div>
			</section>{" "}
			{/* Industries Section */}
			<section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/50">
				<div className="max-w-7xl mx-auto">
					<div className="text-center mb-16">
						<h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
							{content.sections.solutions.industries.title
								.split(" ")
								.map((word, index) =>
									word === "Serve" ? (
										<span key={index} className="text-cyan-400">
											{word}
										</span>
									) : (
										word + " "
									)
								)}
						</h2>
						<p className="text-xl text-gray-300 max-w-3xl mx-auto">
							{content.sections.solutions.industries.subtitle}
						</p>
					</div>

					<div className="grid grid-cols-2 md:grid-cols-3 gap-6">
						{industries.map((industry, index) => (
							<div
								key={index}
								className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 p-6 rounded-xl hover:border-cyan-400/50 transition-all duration-300 text-center group hover:transform hover:scale-105"
							>
								<div className="text-4xl mb-4">{industry.icon}</div>
								<h3 className="text-white font-semibold">{industry.name}</h3>
							</div>
						))}
					</div>
				</div>
			</section>{" "}
			{/* CTA Section */}
			<section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/50">
				<div className="max-w-7xl mx-auto text-center">
					<h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
						{content.sections.solutions.finalCta.title
							.split(" ")
							.map((word, index) =>
								word === "Business?" ? (
									<span key={index} className="text-cyan-400">
										{word}
									</span>
								) : (
									word + " "
								)
							)}
					</h2>
					<p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
						{content.sections.solutions.finalCta.subtitle}
					</p>
					<div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
						<Link
							href={content.sections.solutions.finalCta.buttons.primary.href}
							className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-xl flex items-center gap-2"
							aria-label="Start your project - Contact Ideacomp to begin working together"
						>
							{content.sections.solutions.finalCta.buttons.primary.text}
							<ArrowRight size={20} />
						</Link>
					</div>
				</div>
			</section>
			<Footer />
		</div>
	);
};

export default Solutions;
