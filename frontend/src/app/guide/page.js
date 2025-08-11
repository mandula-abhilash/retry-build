"use client";

import Link from "next/link";
import Header from "@/components/landing-page/Header";
import Footer from "@/components/landing-page/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  ArrowLeft,
  Target,
  Users,
  TrendingUp,
  Code,
  DollarSign,
  Shield,
  Lightbulb,
  BarChart3,
  Clock,
  Zap,
  CheckCircle,
  AlertTriangle,
  Star,
  Globe,
  Settings,
} from "lucide-react";

export default function BlueprintGuidePage() {
  const fieldCategories = [
    {
      category: "Basic Information",
      icon: Target,
      color: "text-primary",
      fields: [
        {
          name: "Title",
          description:
            "A clear, concise name that immediately communicates what the product does.",
          why: "Helps you quickly identify and remember the concept. Essential for pitching and branding.",
        },
        {
          name: "Description",
          description:
            "A brief overview of the product's core functionality and benefits.",
          why: "Your elevator pitch. Should hook interest in 30 seconds or less.",
        },
        {
          name: "Tags",
          description:
            "Industry, technology, and category labels for easy filtering and discovery.",
          why: "Helps you find blueprints that match your expertise and interests.",
        },
        {
          name: "Effort Level",
          description:
            "Estimated time from start to MVP launch (e.g., '16-20 weeks').",
          why: "Critical for planning and resource allocation. Helps you choose projects that fit your timeline.",
        },
      ],
    },
    {
      category: "Problem & Solution",
      icon: Lightbulb,
      color: "text-yellow-500",
      fields: [
        {
          name: "Problem Statement",
          description:
            "Detailed explanation of the pain point this product solves.",
          why: "Understanding the problem deeply is crucial for building the right solution and communicating value.",
        },
        {
          name: "Solution Overview",
          description:
            "How your product addresses the problem, including key features and approach.",
          why: "Your product strategy in a nutshell. Guides all development decisions.",
        },
        {
          name: "Target Users",
          description:
            "Primary buyers, daily users, and secondary stakeholders.",
          why: "Defines your customer segments and helps prioritize features for each group.",
        },
        {
          name: "UVP Statement",
          description:
            "Your unique value proposition - what makes you different and better.",
          why: "Your competitive advantage distilled into one powerful sentence.",
        },
      ],
    },
    {
      category: "Market Intelligence",
      icon: BarChart3,
      color: "text-blue-500",
      fields: [
        {
          name: "Market Size",
          description: "Total addressable market size and revenue potential.",
          why: "Validates there's enough opportunity to build a sustainable business.",
        },
        {
          name: "Target Audience Type",
          description:
            "Business model (B2B, B2C) and customer segments (SMB, Enterprise, etc.).",
          why: "Determines your sales strategy, pricing model, and go-to-market approach.",
        },
        {
          name: "Competitive Analysis",
          description:
            "Key competitors and their strengths/weaknesses compared to your approach.",
          why: "Helps you position effectively and identify opportunities for differentiation.",
        },
        {
          name: "Early Adopter Profile",
          description:
            "Characteristics of customers most likely to try your product first.",
          why: "Your initial target for validation and early traction.",
        },
      ],
    },
    {
      category: "Technical Specifications",
      icon: Code,
      color: "text-green-500",
      fields: [
        {
          name: "Technical Complexity",
          description:
            "Difficulty level (Low, Medium, High) based on technical challenges.",
          why: "Helps you assess if the project matches your team's capabilities.",
        },
        {
          name: "Core Technology Stack",
          description:
            "Recommended technologies, frameworks, and tools for implementation.",
          why: "Saves research time and provides a proven technical foundation.",
        },
        {
          name: "MVP Feature Set",
          description:
            "Essential features needed for the minimum viable product.",
          why: "Defines your launch scope and helps avoid feature creep.",
        },
        {
          name: "Required Skills or Team",
          description:
            "Key roles and expertise needed to execute successfully.",
          why: "Helps you plan hiring or identify skill gaps to address.",
        },
      ],
    },
    {
      category: "Execution & Timeline",
      icon: Clock,
      color: "text-purple-500",
      fields: [
        {
          name: "Timeline",
          description:
            "Phase-by-phase breakdown with duration estimates for each stage.",
          why: "Provides a realistic roadmap and helps set expectations with stakeholders.",
        },
        {
          name: "Execution Plan",
          description: "Key phases with specific deliverables and milestones.",
          why: "Your project management blueprint - what to build when.",
        },
        {
          name: "Validation Steps",
          description:
            "Specific actions to prove market demand before full development.",
          why: "Reduces risk by validating assumptions early and cheaply.",
        },
        {
          name: "Onboarding Strategy",
          description: "How to get new customers up and running successfully.",
          why: "Critical for retention and reducing churn in early stages.",
        },
      ],
    },
    {
      category: "Business Model",
      icon: DollarSign,
      color: "text-green-600",
      fields: [
        {
          name: "Monetization Model",
          description:
            "How you'll make money (subscription, usage-based, one-time, etc.).",
          why: "Your revenue strategy - determines pricing, sales process, and growth potential.",
        },
        {
          name: "Pricing Strategy",
          description:
            "Specific pricing tiers and target price points for different customer segments.",
          why: "Helps you model revenue and position against competitors.",
        },
        {
          name: "Potential Upsells",
          description:
            "Additional products or services to increase customer lifetime value.",
          why: "Identifies opportunities to grow revenue from existing customers.",
        },
        {
          name: "Business Model Insights",
          description:
            "Strategic advice on sales approach, contract terms, and growth tactics.",
          why: "Practical wisdom to accelerate your go-to-market success.",
        },
      ],
    },
    {
      category: "Risk Assessment",
      icon: Shield,
      color: "text-red-500",
      fields: [
        {
          name: "Risks and Challenges",
          description: "Potential obstacles and how to mitigate them.",
          why: "Helps you prepare for common pitfalls and plan contingencies.",
        },
        {
          name: "Regulatory Compliance",
          description:
            "Legal and compliance requirements for your industry/market.",
          why: "Avoids costly legal issues and ensures you build compliant solutions.",
        },
        {
          name: "Scalability Considerations",
          description:
            "Technical and business challenges you'll face as you grow.",
          why: "Helps you architect for scale and avoid expensive rewrites later.",
        },
      ],
    },
    {
      category: "Growth & Marketing",
      icon: TrendingUp,
      color: "text-indigo-500",
      fields: [
        {
          name: "Marketing Channels",
          description:
            "Most effective ways to reach and acquire your target customers.",
          why: "Focuses your marketing efforts on channels most likely to work.",
        },
        {
          name: "Growth Hacks",
          description:
            "Creative, low-cost strategies to accelerate user acquisition.",
          why: "Gives you unfair advantages and viral growth opportunities.",
        },
        {
          name: "KPIs",
          description:
            "Key metrics to track success and identify problems early.",
          why: "Helps you measure progress and make data-driven decisions.",
        },
        {
          name: "Success Story",
          description:
            "A realistic example of what success looks like for this blueprint.",
          why: "Provides a concrete vision of the outcome you're working toward.",
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary/5 via-white to-secondary/5">
        <div className="max-w-6xl mx-auto">
          <div className="mb-8">
            <Link
              href="/"
              className="inline-flex items-center text-primary hover:text-primary/80 transition-colors mb-6"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Link>

            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Blueprint Field Guide
            </h1>

            <p className="text-xl text-gray-600 mb-8 leading-relaxed max-w-4xl">
              Understanding every field in our strategic blueprints and why each
              one matters for your success.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/sample">
                <Button size="lg" className="px-8 py-3 text-lg font-semibold">
                  View Sample Blueprint
                </Button>
              </Link>
              <Button
                variant="outline"
                size="lg"
                className="px-8 py-3 text-lg font-semibold"
              >
                Get Pro Access - ₹1,000/month
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Why Every Field Matters
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Each blueprint contains 50+ carefully researched fields. Here's
              what each category tells you and why it's essential for execution
              success.
            </p>
          </div>

          <div className="space-y-12">
            {fieldCategories.map((category, categoryIndex) => (
              <div key={categoryIndex}>
                <div className="flex items-center space-x-3 mb-6">
                  <div
                    className={`w-12 h-12 rounded-2xl bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center`}
                  >
                    <category.icon className={`w-6 h-6 ${category.color}`} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">
                      {category.category}
                    </h3>
                    <p className="text-gray-600">
                      Essential information for this aspect of your blueprint
                    </p>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  {category.fields.map((field, fieldIndex) => (
                    <Card
                      key={fieldIndex}
                      className="border-0 shadow-md hover:shadow-lg transition-all duration-300"
                    >
                      <CardHeader className="pb-3">
                        <CardTitle className="text-lg font-semibold text-gray-900 flex items-center space-x-2">
                          <div className="w-2 h-2 bg-primary rounded-full"></div>
                          <span>{field.name}</span>
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-3">
                        <div>
                          <h4 className="text-sm font-semibold text-gray-700 mb-1">
                            What it is:
                          </h4>
                          <p className="text-sm text-gray-600">
                            {field.description}
                          </p>
                        </div>
                        <div className="bg-primary/5 p-3 rounded-lg">
                          <h4 className="text-sm font-semibold text-primary mb-1">
                            Why it matters:
                          </h4>
                          <p className="text-sm text-gray-700">{field.why}</p>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                {categoryIndex < fieldCategories.length - 1 && (
                  <Separator className="mt-12" />
                )}
              </div>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="mt-16 text-center bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl border">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to See It All in Action?
            </h3>
            <p className="text-lg text-gray-600 mb-6 max-w-2xl mx-auto">
              Every Pro blueprint contains all these fields, meticulously
              researched and ready to guide your execution.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/sample">
                <Button
                  variant="outline"
                  size="lg"
                  className="px-8 py-3 text-lg font-semibold"
                >
                  Explore Sample Blueprint
                </Button>
              </Link>
              <Button size="lg" className="px-8 py-3 text-lg font-semibold">
                Get Pro Access - ₹1,000/month
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
