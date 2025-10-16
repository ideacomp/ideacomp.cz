import Script from "next/script";

export default function StructuredData() {
	const organizationSchema = {
		"@context": "https://schema.org",
		"@type": "Organization",
		"@id": "https://ideacomp.cz/#organization",
		name: "Ideacomp s.r.o.",
		legalName: "Ideacomp s.r.o.",
		url: "https://ideacomp.cz",
		logo: {
			"@type": "ImageObject",
			url: "https://ideacomp.cz/landscape_logo.png",
			width: 1996,
			height: 868,
			caption: "Ideacomp - Custom Software Development Company"
		},
		image: "https://ideacomp.cz/landscape_logo.png",
		description:
			"Transform your business with Ideacomp's cutting-edge software development, mobile apps, web applications, DevOps solutions, and machine learning services. We build scalable, secure, and innovative digital solutions for modern teams.",
		slogan: "Driven by Ideas",
		foundingDate: "2024",
		numberOfEmployees: "2-10",
		industry: "Software Development",
		naics: "541511",
		knowsAbout: [
			"Software Development",
			"Mobile App Development", 
			"Web Applications",
			"DevOps",
			"Machine Learning",
			"Artificial Intelligence",
			"Cloud Computing",
			"Digital Transformation"
		],
		sameAs: [
			"https://github.com/ideacomp"
		],
		contactPoint: [
			{
				"@type": "ContactPoint",
				contactType: "customer service",
				url: "https://ideacomp.cz/contact",
				availableLanguage: ["English", "Czech"],
				areaServed: "Worldwide"
			},
			{
				"@type": "ContactPoint", 
				contactType: "sales",
				email: "info@ideacomp.cz",
				availableLanguage: ["English", "Czech"],
				areaServed: "Worldwide"
			}
		],
		address: {
			"@type": "PostalAddress",
			addressCountry: "CZ",
			addressLocality: "Prague",
			addressRegion: "Prague"
		},
		geo: {
			"@type": "GeoCoordinates",
			latitude: "50.0755",
			longitude: "14.4378"
		},
		areaServed: {
			"@type": "Place",
			name: "Worldwide"
		},
		makesOffer: [
			{
				"@type": "Offer",
				name: "Custom App Development",
				description: "Native and cross-platform mobile applications, progressive web apps, and desktop applications"
			},
			{
				"@type": "Offer", 
				name: "AI & Machine Learning",
				description: "Predictive analytics, process automation, intelligent data analysis, and AI-powered solutions"
			},
			{
				"@type": "Offer",
				name: "Cloud & DevOps",
				description: "Cloud migration, infrastructure management, CI/CD pipelines, and DevOps consulting"
			}
		]
	};

	const websiteSchema = {
		"@context": "https://schema.org",
		"@type": "WebSite",
		"@id": "https://ideacomp.cz/#website",
		name: "Ideacomp",
		alternateName: "Ideacomp s.r.o.",
		url: "https://ideacomp.cz",
		description:
			"Transform your business with cutting-edge software development, mobile apps, web applications, DevOps solutions, and machine learning services.",
		inLanguage: "en-US",
		isPartOf: {
			"@id": "https://ideacomp.cz/#organization"
		},
		about: {
			"@id": "https://ideacomp.cz/#organization"
		},
		publisher: {
			"@id": "https://ideacomp.cz/#organization"
		},
		copyrightHolder: {
			"@id": "https://ideacomp.cz/#organization"
		},
		copyrightYear: "2024",
		potentialAction: {
			"@type": "SearchAction",
			target: {
				"@type": "EntryPoint",
				urlTemplate: "https://ideacomp.cz/search?q={search_term_string}"
			},
			"query-input": "required name=search_term_string"
		}
	};

	const serviceSchema = {
		"@context": "https://schema.org",
		"@type": "ProfessionalService",
		"@id": "https://ideacomp.cz/#service",
		name: "Custom Software Development Services",
		provider: {
			"@id": "https://ideacomp.cz/#organization"
		},
		description:
			"We provide comprehensive software development services including custom applications, mobile apps, web applications, DevOps solutions, and machine learning services for startups and enterprises.",
		serviceType: "Software Development",
		category: "Technology Services",
		areaServed: {
			"@type": "Place",
			name: "Worldwide"
		},
		audience: {
			"@type": "Audience",
			audienceType: "Business"
		},
		hasOfferCatalog: {
			"@type": "OfferCatalog",
			name: "Software Development Services",
			itemListElement: [
				{
					"@type": "Offer",
					"@id": "https://ideacomp.cz/solutions#custom-app-development",
					name: "Custom App Development",
					description: "Native and cross-platform mobile applications, progressive web apps, and desktop applications tailored to your business needs.",
					category: "Mobile & Web Development",
					areaServed: "Worldwide"
				},
				{
					"@type": "Offer",
					"@id": "https://ideacomp.cz/solutions#ai-machine-learning", 
					name: "AI & Machine Learning",
					description: "Predictive analytics, process automation, intelligent data analysis, and AI-powered solutions to drive business growth.",
					category: "Artificial Intelligence",
					areaServed: "Worldwide"
				},
				{
					"@type": "Offer",
					"@id": "https://ideacomp.cz/solutions#cloud-devops",
					name: "Cloud & DevOps",
					description: "Cloud migration, infrastructure management, CI/CD pipelines, and DevOps consulting for scalable operations.",
					category: "Cloud Computing",
					areaServed: "Worldwide"
				}
			]
		}
	};

	const breadcrumbSchema = {
		"@context": "https://schema.org",
		"@type": "BreadcrumbList",
		itemListElement: [
			{
				"@type": "ListItem",
				position: 1,
				name: "Home",
				item: "https://ideacomp.cz"
			},
			{
				"@type": "ListItem", 
				position: 2,
				name: "Solutions",
				item: "https://ideacomp.cz/solutions"
			},
			{
				"@type": "ListItem",
				position: 3, 
				name: "Contact",
				item: "https://ideacomp.cz/contact"
			}
		]
	};

	return (
		<>
			<Script
				id="organization-schema"
				type="application/ld+json"
				dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
			/>
			<Script
				id="website-schema"
				type="application/ld+json"
				dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
			/>
			<Script
				id="service-schema"
				type="application/ld+json"
				dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
			/>
			<Script
				id="breadcrumb-schema"
				type="application/ld+json"
				dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
			/>
		</>
	);
}
