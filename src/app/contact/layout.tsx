import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Contact Us - Let's Build Something Great Together",
	description:
		"Ready to transform your business? Contact Ideacomp today for a free consultation. Get expert software development advice, project quotes, and start building your digital solution within 4 hours response time.",
	keywords: [
		"contact Ideacomp",
		"software development consultation",
		"free project consultation",
		"get software quote",
		"start development project",
		"business technology consultation",
		"custom software inquiry",
		"digital transformation consultation",
		"Prague software company contact",
		"Czech Republic developers",
		"project requirements discussion",
		"software development estimate",
		"technology consulting services",
		"startup development consultation",
		"enterprise software consultation"
	],
	authors: [{ name: "Ideacomp", url: "https://ideacomp.cz" }],
	creator: "Ideacomp s.r.o.",
	publisher: "Ideacomp s.r.o.",
	formatDetection: {
		email: true,
		address: true,
		telephone: true,
	},
	metadataBase: new URL("https://ideacomp.cz"),
	alternates: {
		canonical: "https://ideacomp.cz/contact",
	},
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
		title: "Contact Us - Let's Build Something Great Together | Ideacomp",
		description:
			"Ready to transform your business? Contact Ideacomp today for a free consultation. Get expert software development advice and start your project with 4 hours response time.",
		url: "https://ideacomp.cz/contact",
		siteName: "Ideacomp",
		locale: "en_US",
		type: "website",
		images: [
			{
				url: "/landscape_logo.png",
				width: 1996,
				height: 868,
				alt: "Contact Ideacomp - Custom Software Development Consultation",
				type: "image/png"
			},
		],
	},
	twitter: {
		card: "summary_large_image",
		title: "Contact Us - Let's Build Something Great Together | Ideacomp",
		description:
			"Ready to transform your business? Contact Ideacomp today for a free consultation. Get expert software development advice and start your project.",
		images: {
			url: "/landscape_logo.png",
			alt: "Contact Ideacomp - Software Development Consultation"
		},
	},
};

export default function ContactLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return children;
}
