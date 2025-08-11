"use client";

import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

export default function FinalCTA() {
  return (
    <section className="py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-900 via-primary to-secondary text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>

      <div className="relative max-w-5xl mx-auto text-center">
        <h2 className="text-5xl font-bold mb-8 tracking-tight">
          Stop guessing. Start building.
        </h2>
        <p className="text-xl mb-12 opacity-90 max-w-3xl mx-auto leading-relaxed">
          Join strategic builders who've replaced uncertainty with structured
          execution. Every blueprint is a shortcut to market-validated
          direction.
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
          <Button
            size="lg"
            variant="secondary"
            className="px-10 py-4 text-lg font-semibold shadow-xl hover:shadow-2xl transition-all duration-300"
          >
            Explore Free Blueprints
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="px-10 py-4 text-lg font-semibold border-2 border-white/50 text-white bg-white/10 hover:bg-white/20 hover:border-white/70 hover:text-white backdrop-blur-sm"
          >
            Unlock Pro Access - ₹1,000/month
          </Button>
        </div>

        <div className="flex items-center justify-center space-x-8 text-sm opacity-75">
          <div className="flex items-center space-x-2">
            <Check className="w-4 h-4" />
            <span>500+ builders trust us</span>
          </div>
          <div className="flex items-center space-x-2">
            <Check className="w-4 h-4" />
            <span>Daily blueprint updates</span>
          </div>
          <div className="flex items-center space-x-2">
            <Check className="w-4 h-4" />
            <span>Cancel anytime</span>
          </div>
        </div>
      </div>
    </section>
  );
}
