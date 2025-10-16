import { useState } from "react";

interface UseSolutionStateReturn {
	expandedSolution: number | null;
	isCarouselPaused: boolean;
	openSolution: (index: number) => void;
	closeSolution: () => void;
	pauseCarousel: () => void;
	resumeCarousel: () => void;
}

export const useSolutionState = (): UseSolutionStateReturn => {
	const [expandedSolution, setExpandedSolution] = useState<number | null>(null);
	const [isCarouselPaused, setIsCarouselPaused] = useState(false);

	const openSolution = (index: number) => {
		setExpandedSolution(index);
		setIsCarouselPaused(false);
	};

	const closeSolution = () => {
		setExpandedSolution(null);
		setIsCarouselPaused(false);
	};

	const pauseCarousel = () => {
		setIsCarouselPaused(true);
	};

	const resumeCarousel = () => {
		setIsCarouselPaused(false);
	};

	return {
		expandedSolution,
		isCarouselPaused,
		openSolution,
		closeSolution,
		pauseCarousel,
		resumeCarousel,
	};
};
