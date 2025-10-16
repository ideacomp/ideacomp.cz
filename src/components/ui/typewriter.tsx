"use client";

import { cn } from "@/lib/utils";
import { motion, stagger, useAnimate, useInView } from "motion/react";
import { useEffect } from "react";

export const TypewriterEffect = ({
	words,
	className,
	cursorClassName,
}: {
	words: {
		text: string;
		className?: string;
	}[];
	className?: string;
	cursorClassName?: string;
}) => {
	// split text inside of words into array of characters
	const wordsArray = words.map((word) => {
		return {
			...word,
			text: word.text.split(""),
		};
	});

	const [scope, animate] = useAnimate();
	const isInView = useInView(scope);
	useEffect(() => {
		if (isInView) {
			animate(
				"span",
				{
					display: "inline-block",
					opacity: 1,
					width: "fit-content",
				},
				{
					duration: 0.1,
					delay: stagger(0.02),
					ease: "easeInOut",
				}
			);
		}
	}, [isInView]);

	const renderWords = () => {
		return (
			<motion.div ref={scope} className="inline">
				{wordsArray.map((word, idx) => {
					return (
						<div key={`word-${idx}`} className="inline-block ">
							{word.text.map((char, index) => (
								<motion.span
									initial={{}}
									key={`char-${index}`}
									className={cn("hidden opacity-0", word.className)}
								>
									{char}
								</motion.span>
							))}
							&nbsp;
						</div>
					);
				})}
			</motion.div>
		);
	};
	return (
		<div
			className={cn(
				"text-base sm:text-xl md:text-3xl lg:text-5xl font-bold text-center",
				className
			)}
		>
			<span className="inline">{renderWords()}</span>
			<motion.span
				initial={{
					opacity: 0,
				}}
				animate={{
					opacity: 1,
				}}
				transition={{
					duration: 0.5,
					repeat: Infinity,
					repeatType: "reverse",
				}}
				className={cn(
					"inline-block rounded-sm w-[4px] h-4 md:h-6 lg:h-10 bg-blue-500",
					cursorClassName
				)}
			></motion.span>
		</div>
	);
};

export const TypewriterEffectSmooth = ({
	words,
	className,
	cursorClassName,
}: {
	words: {
		text: string;
		className?: string;
	}[];
	className?: string;
	cursorClassName?: string;
}) => {
	// split text inside of words into array of characters
	const wordsArray = words.map((word) => {
		return {
			...word,
			text: word.text.split(""),
		};
	});
	const renderWords = () => {
		return (
			<div>
				{wordsArray.map((word, idx) => {
					return (
						<div key={`word-${idx}`} className="inline-block mr-4">
							{word.text.map((char, index) => (
								<span key={`char-${index}`} className={cn(word.className)}>
									{char}
								</span>
							))}
						</div>
					);
				})}
			</div>
		);
	};

	return (
		<div className={cn("flex justify-center items-center mt-10 mb-4")}>
			<motion.div
				className="overflow-hidden"
				initial={{
					width: "0%",
				}}
				whileInView={{
					width: "fit-content",
				}}
				transition={{
					duration: 1.7,
					ease: "linear",
					delay: 0.4,
				}}
			>
				<div
					className={cn(
						"text-xs sm:text-base md:text-xl lg:text:3xl xl:text-5xl font-bold pb-2",
						className
					)}
					style={{
						whiteSpace: "nowrap",
					}}
				>
					{renderWords()}
				</div>
			</motion.div>
			<motion.span
				initial={{
					opacity: 0,
				}}
				animate={{
					opacity: 1,
				}}
				transition={{
					duration: 0.8,
					repeat: 3,
					repeatType: "reverse",
				}}
				className={cn(
					"block rounded-sm w-[4px] h-4 sm:h-6 md:h-12 bg-blue-500",
					cursorClassName
				)}
			></motion.span>
		</div>
	);
};
