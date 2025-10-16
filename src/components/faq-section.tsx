'use client'

import { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'
import Script from 'next/script'

interface FAQItem {
  question: string
  answer: string
}

interface FAQSectionProps {
  faqs: FAQItem[]
  title?: string
  className?: string
}

export default function FAQSection({
  faqs,
  title = "Frequently Asked Questions",
  className = ""
}: FAQSectionProps) {
  const [openItems, setOpenItems] = useState<number[]>([])

  const toggleItem = (index: number) => {
    setOpenItems(prev =>
      prev.includes(index)
        ? prev.filter(i => i !== index)
        : [...prev, index]
    )
  }

  // Generate FAQ structured data
  const faqStructuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  }

  return (
    <section className={`py-20 px-4 sm:px-6 lg:px-8 ${className}`} aria-labelledby="faq-heading">
      <div className="max-w-4xl mx-auto">
        <header className="text-center mb-16">
          <h2 id="faq-heading" className="text-4xl md:text-5xl font-bold text-white mb-6">
            {title}
          </h2>
          <p className="text-xl text-gray-300">
            Get answers to common questions about our software development services
          </p>
        </header>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl overflow-hidden"
            >
              <button
                onClick={() => toggleItem(index)}
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-slate-700/30 transition-colors duration-200"
                aria-expanded={openItems.includes(index)}
                aria-controls={`faq-answer-${index}`}
              >
                <h3 className="text-lg font-semibold text-white pr-4">
                  {faq.question}
                </h3>
                {openItems.includes(index) ? (
                  <ChevronUp size={20} className="text-cyan-400 flex-shrink-0" aria-hidden="true" />
                ) : (
                  <ChevronDown size={20} className="text-cyan-400 flex-shrink-0" aria-hidden="true" />
                )}
              </button>

              {openItems.includes(index) && (
                <div
                  id={`faq-answer-${index}`}
                  className="px-6 pb-4 border-t border-slate-700"
                  role="region"
                  aria-labelledby={`faq-question-${index}`}
                >
                  <p className="text-gray-300 leading-relaxed pt-4">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* FAQ Structured Data */}
      <Script
        id="faq-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }}
      />
    </section>
  )
}

// Common FAQs for software development
export const commonFAQs: FAQItem[] = [
  {
    question: "What types of software development services do you offer?",
    answer: "We offer comprehensive software development services including custom mobile app development, web applications, AI & machine learning solutions, cloud & DevOps services, and digital transformation consulting. Our expertise spans native and cross-platform development, progressive web apps, and enterprise-grade solutions."
  },
  {
    question: "How long does it typically take to develop a custom software solution?",
    answer: "Development timelines vary based on project complexity and requirements. Simple applications typically take 2-3 months, while complex enterprise solutions may take 6-12 months. We provide detailed project timelines during our initial consultation and maintain transparent communication throughout the development process."
  },
  {
    question: "Do you work with startups or only established companies?",
    answer: "We work with both startups and established enterprises. For startups, we specialize in MVP development, rapid prototyping, and scalable architecture design. For enterprises, we focus on digital transformation, system integration, and large-scale application development."
  },
  {
    question: "What is your development process like?",
    answer: "We follow an agile development methodology with regular sprints, continuous integration, and frequent client communication. Our process includes discovery & planning, design & prototyping, development & testing, deployment, and ongoing maintenance & support."
  },
  {
    question: "Do you provide ongoing support and maintenance?",
    answer: "Yes, we offer comprehensive post-launch support including bug fixes, security updates, performance optimization, feature enhancements, and technical support. We provide flexible maintenance packages tailored to your specific needs and budget."
  },
  {
    question: "What technologies do you specialize in?",
    answer: "We specialize in modern technologies including React, Next.js, Node.js, Python, TypeScript, React Native, Flutter, AWS, Google Cloud, Docker, Kubernetes, and various AI/ML frameworks. We stay current with the latest technologies to deliver cutting-edge solutions."
  },
  {
    question: "How do you ensure the security of the applications you develop?",
    answer: "Security is a top priority in our development process. We implement industry best practices including secure coding standards, regular security audits, encryption, authentication & authorization systems, and compliance with relevant regulations like GDPR."
  },
  {
    question: "Can you help migrate our existing system to modern technologies?",
    answer: "Absolutely! We specialize in legacy system modernization, cloud migration, and technology stack upgrades. We assess your current system, create a migration strategy, and execute the transition with minimal disruption to your business operations."
  }
]