"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check, ArrowRight, Star } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Existing backgrounds (bottom stack) */}
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-gray-50 via-white to-blue-50/30" />
      <div className="absolute top-0 left-1/4 w-96 h-96 z-0 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 z-0 bg-secondary/10 rounded-full blur-3xl" />

      {/* Always-visible subtle grid overlay (no Tailwind arbitrary props) */}
      <div
        className="absolute inset-0 z-10 pointer-events-none"
        style={{
          backgroundImage: `
            repeating-linear-gradient(
              to right,
              rgba(17, 24, 39, 0.06) 0px,
              rgba(17, 24, 39, 0.06) 0px,
              transparent 1px,
              transparent 22px
            ),
            repeating-linear-gradient(
              to bottom,
              rgba(17, 24, 39, 0.06) 0px,
              rgba(17, 24, 39, 0.06) 0px,
              transparent 1px,
              transparent 22px
            )
          `,
          backgroundSize: "32px 32px",
        }}
      />

      {/* Content */}
      <div className="relative z-20 max-w-5xl mx-auto text-center">
        <div className="mb-8">
          <Badge
            variant="outline"
            className="px-4 py-2 text-sm font-medium border-primary/20 text-primary"
          >
            <Star className="w-4 h-4 mr-2" />
            Trusted by 500+ builders
          </Badge>
        </div>

        <h1 className="text-6xl sm:text-7xl font-bold text-gray-900 mb-8 leading-[1.1] tracking-tight">
          Clarity over chaos.
          <br />
          <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Ideas you can execute.
          </span>
        </h1>

        <p className="text-xl text-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed font-medium">
          A meticulously curated vault of SaaS blueprints backed by market
          research. No speculation, no wishful thinking - just structured ideas
          with clear execution paths, realistic timelines, and actionable next
          steps.
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
          <Button
            size="lg"
            className="px-10 py-4 text-lg font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 bg-gradient-to-r from-primary to-primary/90"
          >
            Explore Blueprints
            <ArrowRight className="ml-3 h-5 w-5" />
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="px-10 py-4 text-lg font-semibold border-2 border-gray-200 hover:border-primary/30 hover:bg-gray-50"
          >
            <span className="text-gray-900">View Pricing - ₹1,000/month</span>
          </Button>
        </div>

        <div className="flex items-center justify-center space-x-8 text-sm text-gray-500">
          <div className="flex items-center space-x-2">
            <Check className="w-4 h-4 text-green-500" />
            <span>No credit card required</span>
          </div>
          <div className="flex items-center space-x-2">
            <Check className="w-4 h-4 text-green-500" />
            <span>Cancel anytime</span>
          </div>
          <div className="flex items-center space-x-2">
            <Check className="w-4 h-4 text-green-500" />
            <span>Daily updates</span>
          </div>
        </div>
      </div>
    </section>
  );
}
