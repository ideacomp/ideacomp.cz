"use client";

import { Mail, MessageCircle, Clock, ArrowRight, Loader2 } from "lucide-react";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import DotGrid from "@/components/backgrounds/DotGrid/DotGrid";
import { Vortex } from "@/components/backgrounds/vortex";

const Contact = () => {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		company: "",
		projectType: "",
		budget: "",
		message: "",
	});
	const [showSuccessMessage, setShowSuccessMessage] = useState(false);
	const [showErrorMessage, setShowErrorMessage] = useState(false);
	const [isSubmitting, setIsSubmitting] = useState(false);

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		setIsSubmitting(true);
		setShowErrorMessage(false);
		setShowSuccessMessage(false);
		try {
			// EmailJS configuration from environment variables
			const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
			const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
			const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

			if (!serviceId || !templateId || !publicKey) {
				throw new Error(
					"EmailJS configuration is missing. Please check your environment variables."
				);
			}

			// Template parameters that will be sent to your email template
			const templateParams = {
				from_name: formData.name,
				from_email: formData.email,
				company: formData.company,
				project_type: formData.projectType,
				budget: formData.budget,
				message: formData.message,
				to_email: "info@ideacomp.cz", // Your email address
			};

			// Send email using EmailJS
			await emailjs.send(serviceId, templateId, templateParams, publicKey);

			// Reset form and show success message
			setFormData({
				name: "",
				email: "",
				company: "",
				projectType: "",
				budget: "",
				message: "",
			});
			setShowSuccessMessage(true);

			// Hide success message after 8 seconds
			setTimeout(() => {
				setShowSuccessMessage(false);
			}, 8000);
		} catch (error) {
			console.error("Email sending failed:", error);
			setShowErrorMessage(true);

			// Hide error message after 8 seconds
			setTimeout(() => {
				setShowErrorMessage(false);
			}, 8000);
		} finally {
			setIsSubmitting(false);
		}
	};

	const handleInputChange = (
		e: React.ChangeEvent<
			HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
		>
	) => {
		setFormData((prev) => ({
			...prev,
			[e.target.name]: e.target.value,
		}));
	};

	return (
		<div className="min-h-screen bg-slate-950">
			<Header />
			{/* Hero Section */}
			<section className="pt-24 lg:pb-20 px-4 sm:px-6 w-full lg:px-8 relative overflow-hidden lg:min-h-[300px] flex items-start">
				<div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-blue-500/10">
					<Vortex
						backgroundColor="transparent"
						particleCount={200}
						rangeSpeed={0.5}
						rangeY={800}
						colors={["#ffffff"]}
					></Vortex>
				</div>
				<div className="max-w-7xl mx-auto relative">
					<div className="text-center">
						<h1 className="text-4xl sm:text-5xl md:text-7xl mt-10 font-bold text-white mb-6 animate-fade-in">
							Let&rsquo;s Build{" "}
							<span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
								Something Great
							</span>
						</h1>
						<p className="sm:text-xl text-lg md:text-2xl text-gray-300 mb-6 lg:mb-12 max-w-4xl mx-auto leading-relaxed">
							Your vision deserves a reliable tech partner. Let&apos;s start the
							conversation.
						</p>
					</div>
				</div>
			</section>{" "}
			{/* Contact Form Section */}
			<section className="pt-20 pb-6 px-4 sm:px-6 lg:px-8 bg-slate-900/50">
				<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 lg:pb-20 pb-6">
					<div className="">
						{/* Contact Form */}
						<div className="lg:col-span-2 max-w-3xl mx-auto">
							<Card className="bg-slate-900/50 border-slate-700">
								<CardHeader>
									<CardTitle className="text-white text-2xl">
										Tell Us About Your Project
									</CardTitle>
								</CardHeader>
								<CardContent className="space-y-6">
									{showSuccessMessage && (
										<div className="bg-green-900/20 border border-green-500/30 text-green-400 p-4 rounded-lg">
											🎉 Message sent successfully! We&apos;ll get back to you
											within 4 hours.
										</div>
									)}

									{showErrorMessage && (
										<div className="bg-red-900/20 border border-red-500/30 text-red-400 p-4 rounded-lg">
											❌ Failed to send message. Please try again or email us
											directly at info@ideacomp.cz
										</div>
									)}

									<form onSubmit={handleSubmit} className="space-y-6">
										<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
											<div className="space-y-2">
												<Label htmlFor="name" className="text-white">
													Name *
												</Label>
												<Input
													id="name"
													name="name"
													type="text"
													value={formData.name}
													onChange={handleInputChange}
													className="bg-slate-800 border-slate-600 text-white"
													placeholder="Your full name"
													required
												/>
											</div>
											<div className="space-y-2">
												<Label htmlFor="email" className="text-white">
													Email *
												</Label>
												<Input
													id="email"
													name="email"
													type="email"
													value={formData.email}
													onChange={handleInputChange}
													className="bg-slate-800 border-slate-600 text-white"
													placeholder="your@email.com"
													required
												/>
											</div>
										</div>

										<div className="space-y-2">
											<Label htmlFor="company" className="text-white">
												Company/Organization
											</Label>
											<Input
												id="company"
												name="company"
												type="text"
												value={formData.company}
												onChange={handleInputChange}
												className="bg-slate-800 border-slate-600 text-white"
												placeholder="Your company name (optional)"
											/>
										</div>

										<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
											<div className="space-y-2">
												<Label htmlFor="projectType" className="text-white">
													Project Type *
												</Label>
												<select
													id="projectType"
													name="projectType"
													value={formData.projectType}
													onChange={handleInputChange}
													className="w-full px-3 py-2 bg-slate-800 border border-slate-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
													required
												>
													<option value="">Select project type</option>
													<option value="web-app">Web Application</option>
													<option value="mobile-app">Mobile App</option>
													<option value="ai-ml">AI/ML Solution</option>
													<option value="cloud-devops">Cloud/DevOps</option>
													<option value="consultation">Consultation</option>
													<option value="other">Other</option>
												</select>
											</div>
											<div className="space-y-2">
												<Label htmlFor="budget" className="text-white">
													Budget Range
												</Label>
												<select
													id="budget"
													name="budget"
													value={formData.budget}
													onChange={handleInputChange}
													className="w-full px-3 py-2 bg-slate-800 border border-slate-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
												>
													<option value="">Select budget range</option>
													<option value="under-10k">Under $10,000</option>
													<option value="10k-25k">$10,000 - $25,000</option>
													<option value="25k-50k">$25,000 - $50,000</option>
													<option value="50k-100k">$50,000 - $100,000</option>
													<option value="100k-plus">$100,000+</option>
													<option value="discuss">Let&apos;s discuss</option>
												</select>
											</div>
										</div>

										<div className="space-y-2">
											<Label htmlFor="message" className="text-white">
												Project Details *
											</Label>
											<Textarea
												id="message"
												name="message"
												value={formData.message}
												onChange={handleInputChange}
												rows={5}
												className="bg-slate-800 border-slate-600 text-white"
												placeholder="Tell us about your project goals, timeline, and any specific requirements..."
												required
											/>
										</div>

										<Button
											type="submit"
											disabled={isSubmitting}
											className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white py-3 disabled:opacity-50 disabled:cursor-not-allowed"
											size="lg"
											aria-label={
												isSubmitting
													? "Sending your message, please wait"
													: "Send your message to Ideacomp"
											}
										>
											{isSubmitting ? (
												<>
													<Loader2 className="mr-2 h-4 w-4 animate-spin" />
													Sending Message...
												</>
											) : (
												<>
													Send Message
													<ArrowRight className="ml-2" size={20} />
												</>
											)}
										</Button>
									</form>
								</CardContent>
							</Card>
						</div>
					</div>
				</div>
			</section>
			{/* Footer */}
			<Footer />
		</div>
	);
};

export default Contact;
