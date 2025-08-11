"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check, X, Eye, Lock, Zap } from "lucide-react";
import React from "react";

export default function FeatureComparison() {
  const features = [
    {
      category: "Basic Information",
      items: [
        { name: "Blueprint Title & Description", free: true, pro: true },
        { name: "Industry Tags & Categories", free: true, pro: true },
        { name: "Estimated Timeline", free: true, pro: true },
        { name: "Complexity Level", free: true, pro: true },
      ],
    },
    {
      category: "Strategic Intelligence",
      items: [
        { name: "Problem & Solution Analysis", free: false, pro: true },
        { name: "Target User Profiles", free: false, pro: true },
        { name: "Market Size & Opportunity", free: false, pro: true },
        { name: "Revenue Models & Pricing", free: false, pro: true },
      ],
    },
    {
      category: "Technical Guidance",
      items: [
        { name: "MVP Feature Specifications", free: false, pro: true },
        { name: "Recommended Tech Stack", free: false, pro: true },
        { name: "Architecture Suggestions", free: false, pro: true },
        { name: "Implementation Roadmap", free: false, pro: true },
      ],
    },
    {
      category: "Risk & Growth",
      items: [
        { name: "Risk Assessment & Mitigation", free: false, pro: true },
        { name: "Competitive Differentiators", free: false, pro: true },
        { name: "Success Metrics & KPIs", free: false, pro: true },
        { name: "Scaling Considerations", free: false, pro: true },
      ],
    },
  ];

  return (
    <section className="py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 via-white to-blue-50/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-5xl font-bold text-gray-900 mb-8 tracking-tight">
            Choose Your Access Level
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Start with free exploration, upgrade when you're ready to execute
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {/* Free Tier */}
          <div className="relative bg-white rounded-3xl border-2 border-gray-200 p-8 shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col">
            <div className="text-center mb-8 flex-grow">
              <Badge
                variant="outline"
                className="mt-4 mb-6 px-4 py-2 text-sm font-medium border-gray-300 text-gray-600 h-10 flex items-center justify-center"
              >
                <Eye className="w-4 h-4 mr-2" />
                Exploration
              </Badge>
              <h3 className="text-3xl font-bold text-gray-900 mb-2">Free</h3>
              <p className="text-gray-600">
                Perfect for browsing and discovery
              </p>
              <p className="text-gray-600">
                Explore the vault, get inspired. Upgrade when you want the full
                picture.{" "}
              </p>
            </div>
            <Button
              variant="outline"
              size="lg"
              className="w-full mb-6 py-4 text-lg font-semibold border-2 border-gray-200 hover:border-gray-300 h-14"
            >
              Start Exploring
            </Button>
            <div className="space-y-4 pb-10">
              <div className="flex items-center space-x-3">
                <Check className="h-5 w-5 text-green-500 flex-shrink-0" />
                <span className="text-gray-700">
                  Browse all blueprint titles
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Check className="h-5 w-5 text-green-500 flex-shrink-0" />
                <span className="text-gray-700">View basic descriptions</span>
              </div>
              <div className="flex items-center space-x-3">
                <Check className="h-5 w-5 text-green-500 flex-shrink-0" />
                <span className="text-gray-700">
                  Filter by industry & complexity
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <X className="h-5 w-5 text-gray-400 flex-shrink-0" />
                <span className="text-gray-500">Strategic analysis locked</span>
              </div>
            </div>
          </div>

          {/* Pro Tier */}
          <div className="relative bg-gradient-to-br from-primary via-primary/95 to-secondary text-white rounded-3xl p-8 shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:-translate-y-1 flex flex-col">
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
              <Badge className="bg-gradient-to-r from-accent to-muted text-primary px-6 py-2 text-sm font-bold shadow-lg border-2 border-white/20">
                <Zap className="w-4 h-4 mr-2" />
                Most Popular
              </Badge>
            </div>
            <div className="text-center mb-8 pt-4 flex-grow">
              <Badge
                variant="secondary"
                className="mb-6 px-4 py-2 text-sm font-medium bg-white/20 text-white border-white/30 h-10 flex items-center justify-center"
              >
                <Lock className="w-4 h-4 mr-2" />
                Professional
              </Badge>
              <div className="flex items-baseline justify-center space-x-2 mb-2">
                <span className="text-5xl font-bold">₹1,000</span>
                <span className="text-xl opacity-80">/month</span>
              </div>
              <p className="text-white/90">Complete strategic intelligence</p>
              <p className="text-white/90">
                {" "}
                Clarity for the next step. Full blueprint fields across every
                idea.
              </p>
            </div>
            <Button
              size="lg"
              variant="secondary"
              className="w-full mb-6 py-4 text-lg font-semibold bg-white text-primary hover:bg-white/90 shadow-lg h-14"
            >
              Unlock Full Access
            </Button>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Check className="h-5 w-5 text-accent flex-shrink-0" />
                <span>Everything in Free, plus:</span>
              </div>
              <div className="flex items-center space-x-3">
                <Check className="h-5 w-5 text-accent flex-shrink-0" />
                <span>Complete market analysis</span>
              </div>
              <div className="flex items-center space-x-3">
                <Check className="h-5 w-5 text-accent flex-shrink-0" />
                <span>Technical implementation guides</span>
              </div>
              <div className="flex items-center space-x-3">
                <Check className="h-5 w-5 text-accent flex-shrink-0" />
                <span>Risk assessment & mitigation</span>
              </div>
              <div className="flex items-center space-x-3">
                <Check className="h-5 w-5 text-accent flex-shrink-0" />
                <span>Daily new blueprints (3-4/day)</span>
              </div>
            </div>
          </div>
        </div>

        {/* Feature Comparison Table */}
        <div className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden">
          <div className="bg-gradient-to-r from-gray-50 to-white px-8 py-6 border-b border-gray-100">
            <h3 className="text-2xl font-bold text-gray-900 text-center">
              Detailed Feature Comparison
            </h3>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-100">
                  <th className="text-left py-4 px-8 font-semibold text-gray-900">
                    Features
                  </th>
                  <th className="text-center py-4 px-6 font-semibold text-gray-600">
                    Free
                  </th>
                  <th className="text-center py-4 px-6 font-semibold text-primary">
                    Pro
                  </th>
                </tr>
              </thead>
              <tbody>
                {features.map((category, categoryIndex) => (
                  <React.Fragment key={categoryIndex}>
                    <tr className="bg-gray-50/50">
                      <td colSpan={3} className="py-4 px-8">
                        <div className="flex items-center space-x-3">
                          <div className="w-2 h-2 bg-primary rounded-full"></div>
                          <span className="font-bold text-gray-900 text-lg">
                            {category.category}
                          </span>
                        </div>
                      </td>
                    </tr>
                    {category.items.map((item, itemIndex) => (
                      <tr
                        key={itemIndex}
                        className="border-b border-gray-50 hover:bg-gray-50/30 transition-colors"
                      >
                        <td className="py-4 px-8 text-gray-700">{item.name}</td>
                        <td className="py-4 px-6 text-center">
                          {item.free ? (
                            <Check className="h-5 w-5 text-green-500 mx-auto" />
                          ) : (
                            <X className="h-5 w-5 text-gray-300 mx-auto" />
                          )}
                        </td>
                        <td className="py-4 px-6 text-center">
                          <Check className="h-5 w-5 text-primary mx-auto" />
                        </td>
                      </tr>
                    ))}
                  </React.Fragment>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Start exploring for free, upgrade when you find blueprints worth
            executing. Cancel anytime, no long-term commitments.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              variant="outline"
              size="lg"
              className="px-8 py-3 text-lg font-semibold border-2 border-gray-200 hover:border-primary/30"
            >
              Browse Free Blueprints
            </Button>
            <Button
              size="lg"
              className="px-8 py-3 text-lg font-semibold bg-gradient-to-r from-primary to-secondary shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Start Pro Trial
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
