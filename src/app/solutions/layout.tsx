import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Smart Solutions For Real Growth - Custom Software Development",
	description:
		"Discover Ideacomp's comprehensive software solutions: Custom App Development, AI & Machine Learning, Cloud & DevOps. Transform your business with scalable, secure technology solutions tailored for startups and enterprises.",
	keywords: [
		"custom app development",
		"AI machine learning solutions", 
		"cloud DevOps services",
		"digital transformation",
		"MVP development",
		"enterprise software solutions",
		"startup technology consulting",
		"business automation",
		"scalable software architecture",
		"modern web applications",
		"mobile app development",
		"cloud migration services",
		"software consulting Prague",
		"Czech Republic software development"
	],
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			"max-video-preview": -1,
			"max-image-preview": "large",
			"max-snippet": -1,
		},
	},
	openGraph: {
		title: "Smart Solutions For Real Growth - Custom Software Development | Ideacomp",
		description:
			"Discover comprehensive software solutions: Custom App Development, AI & Machine Learning, Cloud & DevOps. Transform your business with scalable technology.",
		url: "https://ideacomp.cz/solutions",
		type: "website",
		images: [
			{
				url: "/landscape_logo.png",
				width: 1996,
				height: 868,
				alt: "Ideacomp Software Solutions - Custom Development, AI, Cloud & DevOps",
				type: "image/png"
			},
		],
	},
	twitter: {
		card: "summary_large_image",
		title: "Smart Solutions For Real Growth - Custom Software Development | Ideacomp",
		description:
			"Discover comprehensive software solutions: Custom App Development, AI & Machine Learning, Cloud & DevOps. Transform your business with scalable technology.",
		images: {
			url: "/landscape_logo.png",
			alt: "Ideacomp Software Solutions"
		},
	},
	alternates: {
		canonical: "https://ideacomp.cz/solutions",
	},
};

export default function SolutionsLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return children;
}
