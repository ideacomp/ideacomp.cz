import {
	Code,
	Smartphone,
	Brain,
	Cloud,
	Database,
	Shield,
	CheckCircle,
	Braces,
	ExternalLink,
} from "lucide-react";

import { ComponentType } from "react";

// Export icons for use in components
export {
	Code,
	Smartphone,
	Brain,
	Cloud,
	Database,
	Shield,
	CheckCircle,
	ExternalLink,
};

// Navigation data
export interface NavigationItem {
	name: string;
	href: string;
}

export const navigation: NavigationItem[] = [
	{ name: "Home", href: "/" },
	{ name: "Our Solutions", href: "/solutions" },
	{ name: "Contact", href: "/contact" },
];

// Services data
export interface Service {
	icon: ComponentType<{ className?: string; size?: number }>;
	title: string;
	description: string;
}

export const services: Service[] = [
	{
		icon: Brain,
		title: "AI & Machine Learning Solutions",
		description: "Efficiency powered by AI.",
	},
	{
		icon: Code,
		title: "Custom Apps Development",
		description: "From idea to app.",
	},
	{
		icon: Braces,
		title: "Outsourcing & Team Augmentation",
		description: "You focus on business, we handle the tech.",
	},
];

// Featured projects data
export interface FeaturedProject {
	id: number;
	title: string;
	image: string;
	category: string;
}

export const featuredProjects: FeaturedProject[] = [
	// Currently empty - we're building our first client projects!
];

// Client Work data
export interface ClientProject {
	id: number;
	title: string;
	client: string;
	category: string;
	image: string;
	challenge: string;
	solution: string;
	results: string;
	testimonial: string;
	testimonialAuthor: string;
	technologies: string[];
}

// Solutions data
export interface Solution {
	icon: ComponentType<{ className?: string; size?: number }>;
	title: string;
	description: string;
	detailedDescription: string;
	features: {
		name: string;
		gif: string;
		description: string;
	}[];
	gradient: string;
	gifUrl: string;
}

//TODO: Outsourcing, Cybersecurity

export const solutionsData: Solution[] = [
	{
		icon: Brain,
		title: "AI & Machine Learning",
		description:
			"Smart solutions that turn complex data into valuable insights.",
		detailedDescription:
			"We implement cutting-edge AI and machine learning solutions that transform your data into actionable insights, automate processes, and enhance decision-making capabilities.",
		features: [
			{
				name: "Predictive Analytics",
				gif: "/predictive_analytics.avif",
				description:
					"Predictive analytics & forecasting for data-driven decisions",
			},
			{
				name: "Process Analysis",
				gif: "/process_analysis.avif",
				description: "Process analysis solutions for workflow optimization",
			},
			{
				name: "Process Automation",
				gif: "/ai_automation.avif",
				description: "Process automation for increased efficiency and accuracy",
			},
		],
		gradient: "from-emerald-500 to-teal-500",
		gifUrl: "/ai_automation.avif",
	},
	{
		icon: Shield,
		title: "Cybersecurity Solutions",
		description:
			"Protecting your digital assets with comprehensive security strategies.",
		detailedDescription:
			"We provide comprehensive cybersecurity solutions to protect your digital assets, ensure compliance, and maintain the integrity of your systems and data.",
		features: [
			{
				name: "Firewall (Sophos, Fortigate, Palo Alto)",
				gif: "/firewall.mp4",
				description: "Firewall setup & management for robust network security",
			},
			{
				name: "Network Security",
				gif: "/network_security.avif",
				description:
					"Network security assessments to identify and mitigate vulnerabilities",
			},
			{
				name: "Incident Response",
				gif: "/incident_response.avif",
				description: "Incident response planning for rapid threat mitigation",
			},
		],
		gradient: "from-yellow-500 to-amber-500",
		gifUrl: "/network_security.avif",
	},
	{
		icon: Code,
		title: "Custom Web Development",
		description: "Full-cycle web development tailored to your business goals.",
		detailedDescription:
			"Our web development services encompass everything from initial concept to deployment and maintenance. We specialize in creating modern, scalable web applications using the latest technologies and best practices.",
		features: [
			{
				name: "Frontend Development",
				gif: "/frontend.avif",
				description: "React and Next.js frontends with modern UI/UX design",
			},
			{
				name: "Backend Development",
				gif: "/backend.avif",
				description:
					"Node.js, Python and Go backends with robust API architecture",
			},
			{
				name: "Responsive Design",
				gif: "/responsive_layout.avif",
				description: "Responsive design & PWAs optimized for all devices",
			},
		],
		gradient: "from-blue-500 to-cyan-500",
		gifUrl: "/frontend.avif",
	},
	{
		icon: Braces,
		title: "Outsourcing & Team Augmentation",
		description:
			"Access top talent for your projects with our flexible outsourcing solutions.",
		detailedDescription:
			"Scale your development capabilities with our experienced team members who integrate seamlessly with your existing workflow and deliver high-quality results.",
		features: [
			{
				name: "Helpdesk - End User Support",
				gif: "/helpdesk.avif",
				description: "Helpdesk & end-user support for seamless IT operations",
			},
			{
				name: "Network Management - ManageEngine",
				gif: "/network_management.avif",
				description: "Network management & monitoring for optimal performance",
			},
			{
				name: "Server Management",
				gif: "/server-management.avif",
				description: "Server management & maintenance for reliable operations",
			},
		],
		gradient: "from-gray-500 to-slate-500",
		gifUrl: "/helpdesk.avif",
	},
	{
		icon: Smartphone,
		title: "Mobile App Development",
		description:
			"Native and cross-platform mobile apps that engage and retain users.",
		detailedDescription:
			"We build high-performance mobile applications that provide exceptional user experiences across iOS and Android platforms, utilizing both native and cross-platform technologies.",
		features: [
			{
				name: "Native Development",
				gif: "/native_app.avif",
				description: "iOS & Android native development for optimal performance",
			},
			{
				name: "Cross-Platform Apps",
				gif: "/cross_platform.avif",
				description:
					"React Native & Flutter for efficient multi-platform deployment",
			},
			{
				name: "Offline-First Functionality",
				gif: "/offline_first.avif",
				description:
					"Offline-first apps with seamless user experiences regardless of connectivity",
			},
		],
		gradient: "from-purple-500 to-pink-500",
		gifUrl: "/native_app.avif",
	},

	{
		icon: Cloud,
		title: "Cloud & DevOps",
		description:
			"Modern infrastructure and automation for scalable, reliable systems.",
		detailedDescription:
			"Our cloud and DevOps services ensure your applications are scalable, reliable, and efficiently managed through modern infrastructure practices and automation.",
		features: [
			{
				name: "Cloud Platforms",
				gif: "/cloud.avif",
				description:
					"AWS, Azure, and Google Cloud infrastructure setup and management",
			},
			{
				name: "Containerization",
				gif: "/containers.avif",
				description: "Docker & Kubernetes for scalable container orchestration",
			},
			{
				name: "CI/CD Automation",
				gif: "/pipeline.avif",
				description: "CI/CD pipeline automation for streamlined deployments",
			},
		],
		gradient: "from-orange-500 to-red-500",
		gifUrl: "/cloud.avif",
	},
];

// Process steps data
export interface ProcessStep {
	step: string;
	title: string;
	description: string;
}

// Industries data
export interface Industry {
	name: string;
	icon: string;
}

export const industries: Industry[] = [
	{ name: "Healthcare", icon: "🏥" },
	{ name: "Education", icon: "🎓" },
	{ name: "Manufacturing", icon: "🏭" },
	{ name: "Government", icon: "🏛️" },
	{ name: "Media & Entertainment", icon: "🎬" },
	{ name: "Non-Profit", icon: "❤️" },
];

// Products page data
export interface ProductDetail {
	name: string;
	subtitle: string;
	description: string;
	features: string[];
	gradient: string;
	cta: {
		primary: string;
		secondary: string;
	};
	image: string;
	badge?: string;
	isLive: boolean;
}

export interface PricingPlan {
	name: string;
	price: string;
	period: string;
	features: string[];
	isPopular?: boolean;
	buttonText: string;
	buttonStyle: "primary" | "secondary";
}

export interface Testimonial {
	rating: number;
	text: string;
	author: {
		name: string;
		title: string;
		company: string;
		initials: string;
	};
	gradient: string;
}

export const socialLinks = [
	{
		name: "GitHub",
		href: "https://github.com/ideacomp",
	},
];
export const content = {
	hero: {
		title: "Driven by Ideas",
		subtitle:
			"We turn vision into reality by combining creativity, technology and trust. We build solutions that empower people, businesses and communities.",
		ctaButtons: {
			primary: {
				text: "Explore Our Solutions",
				href: "/solutions",
			},
		},
	},
	sections: {
		services: {
			title: "Your Vision, Engineered",
			subtitle: "",
		},
		clientWork: {
			title: "Let’s Create Something Extraordinary",
			subtitle:
				"We’re a growing team dedicated to delivering outstanding solutions. Join our early clients and benefit from tailored rates as we build our portfolio.",
			cta: {
				text: "Yes, I'm in",
				href: "/contact",
			},
			page: {
				title: "Partner With Us From Day One",
				subtitle:
					"We're just getting started, and we'd love for you to be part of our journey. As founding clients, you'll get exceptional value and help shape our story.",
			},
		},
		solutions: {
			title: "Smart Tech, Real Results",
			subtitle:
				"From strategy to execution, we solve business-critical problems with innovative technology.",
			page: {
				title: "Solutions That Drive Impact",
				subtitle:
					"From idea to execution, we craft technology that empowers your business and accelerates success.",
				cta: {
					primary: {
						text: "Start Your Project",
						href: "/contact",
					},
				},
			},
			process: {
				title: "Our Process",
				subtitle:
					"A proven methodology that ensures successful project delivery from start to finish.",
			},
			industries: {
				title: "Industries We Serve",
				subtitle:
					"Our expertise spans across multiple industries, delivering tailored solutions for diverse business needs.",
			},
			finalCta: {
				title: "Ready to Transform Your Business?",
				subtitle:
					"Let's discuss how our solutions can help you achieve your goals and drive innovation in your industry.",
				buttons: {
					primary: {
						text: "Get In Touch",
						href: "/contact",
					},
				},
			},
		},
	},
};

// Technical Showcase / Portfolio data
export interface PortfolioProject {
	id: number;
	title: string;
	developer: string;
	description: string;
	technologies: string[];
	highlights: string[];
	image: string;
	liveUrl?: string;
	githubUrl?: string;
	category: string;
	featured: boolean;
}

// Example portfolio projects
export const portfolioProjects: PortfolioProject[] = [
	{
		id: 1,
		title: "Vlad's Interactive Portfolio",
		developer: "Vlad",
		description:
			"A cutting-edge interactive portfolio featuring 3D animations, glassmorphism UI, and advanced navigation systems. Demonstrates mastery across 21+ technologies with 90%+ proficiency in frontend development.",
		technologies: [
			"React",
			"TypeScript",
			"Three.js",
			"Vite",
			"Tailwind CSS",
			"Framer Motion",
		],
		highlights: [
			"Interactive 3D environment with Three.js",
			"Advanced glassmorphism effects and responsive design",
			"Multiple navigation systems (keyboard, dots, sections)",
			"Founder & Lead Developer at Asuna Labs",
		],
		image: "/portfolio-vlad.png",
		liveUrl: "https://vlad.systems",
		githubUrl: "", // Add if available
		category: "Full-Stack Development",
		featured: true,
	},
	{
		id: 2,
		title: "JustFossa's Portfolio",
		developer: "JustFossa",
		description:
			"A creative portfolio showcasing advanced web technologies with a focus on performance and user experience. Features a unique design and smooth animations.",
		technologies: [
			"React",
			"Next.js",
			"TypeScript",
			"Tailwind CSS",
			"Framer Motion",
		],
		highlights: [
			"Advanced full-stack development expertise",
			"Modern UI/UX implementation",
			"Seamless animations and transitions",
		],
		image: "/portfolio-teammate.png",
		liveUrl: "https://justfossa.lol",
		githubUrl: "https://github.com/JustFossa/justfossa.lol",
		category: "Full-Stack Development",
		featured: true,
	},
];
