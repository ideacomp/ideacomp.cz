import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
	const baseUrl = "https://ideacomp.cz";
	const currentDate = new Date().toISOString();

	return [
		{
			url: baseUrl,
			lastModified: currentDate,
			changeFrequency: "weekly",
			priority: 1,
		},
		{
			url: `${baseUrl}/solutions`,
			lastModified: currentDate,
			changeFrequency: "weekly", 
			priority: 0.9,
		},
		{
			url: `${baseUrl}/contact`,
			lastModified: currentDate,
			changeFrequency: "monthly",
			priority: 0.8,
		},
		// Add specific solution pages for better indexing
		{
			url: `${baseUrl}/solutions#custom-app-development`,
			lastModified: currentDate,
			changeFrequency: "monthly",
			priority: 0.7,
		},
		{
			url: `${baseUrl}/solutions#ai-machine-learning`,
			lastModified: currentDate,
			changeFrequency: "monthly", 
			priority: 0.7,
		},
		{
			url: `${baseUrl}/solutions#cloud-devops`,
			lastModified: currentDate,
			changeFrequency: "monthly",
			priority: 0.7,
		},
	];
}
