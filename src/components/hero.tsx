"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

const HeroBanner = () => {
	const [currentImage, setCurrentImage] = useState(0);

	const images = [
		"/bg1.avif",
		"/bg2.avif",
		"/bg3.avif",
		"/bg4.avif",
		"/bg5.avif",
	];

	useEffect(() => {
		const interval = setInterval(() => {
			setCurrentImage((prev) => (prev + 1) % images.length);
		}, 8000);

		return () => clearInterval(interval);
	}, [images.length]);

	return (
		<div className="absolute inset-0 overflow-hidden">
			{images.map((image, index) => (
				<div
					key={index}
					className={`absolute inset-0 transition-opacity duration-4000 ${
						index === currentImage ? "opacity-100" : "opacity-0"
					}`}
				>
					<Image
						src={image}
						alt={`Hero background ${index + 1}`}
						className="w-full h-full object-cover"
						width={1920}
						height={800}
						priority
						loading="eager"
						fetchPriority="high"
						placeholder="blur"
						blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wAARCAAMABQDASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwCnHdw/Z2gcnJcYHtn/AOsa0LW4iMe6VgvJ59BnimXttHFC1wozJH8y55ANU7G5kZXV8MACwyOhwea0jVa0NPqznCVToiW+1kQXBjtwkiAD5sE80UaXNJcWYkmfe25hkgetFJ1JGajG2x//2Q=="
						quality={100}
					/>
					<div className="absolute inset-0 bg-gradient-to-br from-slate-950/75 via-slate-950/45 to-slate-950/75"></div>
				</div>
			))}
			<div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-blue-500/10"></div>
			{/* Animated Angled Grid Overlay */}
			<div className="absolute inset-0 overflow-hidden">
				<div
					className="absolute inset-[-100px] opacity-20 animate-[grid-move_5s_linear_infinite]"
					style={{
						backgroundImage: `
										linear-gradient(rgba(148, 163, 184, 0.4) 1px, transparent 1px),
										linear-gradient(90deg, rgba(148, 163, 184, 0.4) 1px, transparent 1px)
           								 `,
						backgroundSize: "40px 40px",
						transform: "rotate(-15deg)",
						transformOrigin: "center",
					}}
				/>
			</div>
		</div>
	);
};

export default HeroBanner;
