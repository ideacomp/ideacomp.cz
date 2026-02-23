import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import StructuredData from "@/components/structured-data";
import GoogleAnalytics from "@/components/google-analytics";

export const metadata: Metadata = {
	title: {
		default: "Ideacomp: Driven by Ideas | Custom Software & Digital Solutions",
		template: "%s | Ideacomp - Custom Software Development"
	},
	description:
		"Transform your business with Ideacomp's cutting-edge software development, mobile apps, web applications, DevOps solutions, and machine learning services. We build scalable, secure, and innovative digital solutions for modern teams.",
	keywords: [
		"software development",
		"mobile app development", 
		"web applications",
		"DevOps solutions",
		"machine learning",
		"AI development",
		"custom software",
		"digital transformation",
		"cloud solutions",
		"technology consulting",
		"scalable applications",
		"enterprise software",
		"startup development",
		"Czech Republic software company",
		"Prague software development",
		"European tech company"
	],
	authors: [{ name: "Ideacomp", url: "https://ideacomp.cz" }],
	creator: "Ideacomp s.r.o.",
	publisher: "Ideacomp s.r.o.",
	category: "Technology",
	classification: "Software Development Company",
	formatDetection: {
		email: true,
		address: true,
		telephone: true,
	},
	metadataBase: new URL("https://ideacomp.cz"),
	alternates: {
		canonical: "https://ideacomp.cz/",
		languages: {
			'en': 'https://ideacomp.cz/',
			'x-default': 'https://ideacomp.cz/'
		}
	},
	openGraph: {
		title: "Ideacomp: Driven by Ideas | Custom Software Development",
		description:
			"Transform your business with cutting-edge software development, mobile apps, web applications, and AI solutions. Partner with Ideacomp for innovative digital transformation.",
		url: "https://ideacomp.cz",
		siteName: "Ideacomp",
		locale: "en_US",
		type: "website",
		images: [
			{
				url: "/landscape_logo.png",
				width: 1996,
				height: 868,
				alt: "Ideacomp - Custom Software Development Company - Driven by Ideas",
				type: "image/png"
			},
		],
	},
	twitter: {
		card: "summary_large_image",
		site: "@ideacomp",
		creator: "@ideacomp",
		title: "Ideacomp: Driven by Ideas | Custom Software Development",
		description:
			"Transform your business with cutting-edge software development, mobile apps, web applications, and AI solutions. Partner with Ideacomp for digital transformation.",
		images: {
			url: "/landscape_logo.png",
			alt: "Ideacomp - Custom Software Development Company"
		},
	},
	robots: {
		index: true,
		follow: true,
		nocache: false,
		googleBot: {
			index: true,
			follow: true,
			noimageindex: false,
			"max-video-preview": -1,
			"max-image-preview": "large",
			"max-snippet": -1,
		},
	},
	verification: {
		google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
		yandex: process.env.NEXT_PUBLIC_YANDEX_VERIFICATION,
		other: {
			"msvalidate.01": process.env.NEXT_PUBLIC_BING_VERIFICATION || "",
		}
	},
	other: {
		"geo.region": "CZ",
		"geo.placename": "Prague",
		"geo.position": "50.0755;14.4378",
		"ICBM": "50.0755, 14.4378",
		"theme-color": "#0891b2",
		"msapplication-TileColor": "#0891b2",
		"apple-mobile-web-app-capable": "yes",
		"apple-mobile-web-app-status-bar-style": "black-translucent",
		"mobile-web-app-capable": "yes"
	}
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" suppressHydrationWarning>
			<head>
				<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
				<link rel="canonical" href="https://ideacomp.cz/" />
				
				{/* Preconnect to external domains */}
				<link rel="preconnect" href="https://fonts.googleapis.com" />
				<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
				<link rel="dns-prefetch" href="https://images.unsplash.com" />
				<link rel="dns-prefetch" href="https://www.googletagmanager.com" />
				<link rel="dns-prefetch" href="https://api.emailjs.com" />
				
				{/* Preload critical resources */}
				<link rel="preload" href="/landscape_logo.png" as="image" type="image/png" />
				<link rel="preload" href="/logo.png" as="image" type="image/png" />
				
				{/* Favicon and app icons */}
				<link rel="icon" href="/favicon.ico" sizes="any" />
				<link rel="icon" href="/logo.png" type="image/png" />
				<link rel="apple-touch-icon" href="/logo.png" />
				<link rel="manifest" href="/manifest.json" />
				
				{/* Additional meta tags for better SEO */}
				<meta name="application-name" content="Ideacomp" />
				<meta name="apple-mobile-web-app-title" content="Ideacomp" />
				<meta name="format-detection" content="telephone=yes, date=no, email=yes, address=yes" />
				<meta name="mobile-web-app-capable" content="yes" />
				<meta name="apple-mobile-web-app-capable" content="yes" />
				<meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
				<meta name="theme-color" content="#0891b2" />
				<meta name="msapplication-TileColor" content="#0891b2" />
				<meta name="color-scheme" content="dark light" />
				  <Script
			          data-site-id="1k5cqZeUhBPsYOzs"
			          data-domain="ideacomp.cz"
			          src="https://cdn.engagetrack.net/sdk.js"
			          strategy="afterInteractive"
			        />
			</head>
			<body>
				<GoogleAnalytics/>
				<StructuredData />
				<ThemeProvider
					attribute="class"
					defaultTheme="system"
					enableSystem
					disableTransitionOnChange
				>
					{children}
				</ThemeProvider>
			</body>
		</html>
	);
}
