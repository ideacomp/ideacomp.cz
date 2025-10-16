import { useState, useEffect, useRef } from "react";

interface UseAutoProgressionProps {
	itemCount: number;
	interval: number;
	isActive: boolean;
}

interface UseAutoProgressionReturn {
	currentIndex: number;
	progress: number;
	goToIndex: (index: number) => void;
	goToNext: () => void;
	goToPrevious: () => void;
}

export const useAutoProgression = ({
	itemCount,
	interval,
	isActive,
}: UseAutoProgressionProps): UseAutoProgressionReturn => {
	const [currentIndex, setCurrentIndex] = useState(0);
	const [progress, setProgress] = useState(0);
	const progressIntervalRef = useRef<NodeJS.Timeout | null>(null);

	const goToIndex = (index: number) => {
		if (index >= 0 && index < itemCount) {
			setCurrentIndex(index);
			setProgress(0);
		}
	};

	const goToNext = () => {
		setCurrentIndex((prev) => (prev + 1) % itemCount);
		setProgress(0);
	};

	const goToPrevious = () => {
		setCurrentIndex((prev) => (prev - 1 + itemCount) % itemCount);
		setProgress(0);
	};

	// Auto-progression effect
	useEffect(() => {
		if (!isActive || itemCount === 0) {
			if (progressIntervalRef.current) {
				clearInterval(progressIntervalRef.current);
				progressIntervalRef.current = null;
			}
			return;
		}

		// Clean up any existing interval
		if (progressIntervalRef.current) {
			clearInterval(progressIntervalRef.current);
		}

		// Reset progress and start new interval
		setProgress(0);
		let progressValue = 0;
		const incrementAmount = 100 / (interval / 50); // Update every 50ms

		progressIntervalRef.current = setInterval(() => {
			progressValue += incrementAmount;
			setProgress(progressValue);

			if (progressValue >= 100) {
				if (progressIntervalRef.current) {
					clearInterval(progressIntervalRef.current);
					progressIntervalRef.current = null;
				}
				goToNext();
			}
		}, 50);

		return () => {
			if (progressIntervalRef.current) {
				clearInterval(progressIntervalRef.current);
				progressIntervalRef.current = null;
			}
		};
	}, [currentIndex, isActive, itemCount, interval]);

	// Cleanup on unmount
	useEffect(() => {
		return () => {
			if (progressIntervalRef.current) {
				clearInterval(progressIntervalRef.current);
			}
		};
	}, []);

	return {
		currentIndex,
		progress,
		goToIndex,
		goToNext,
		goToPrevious,
	};
};
