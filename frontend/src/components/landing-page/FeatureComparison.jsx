"use client";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Lock,
  Check,
  Lightbulb,
  Users,
  Target,
  Shield,
  TrendingUp,
  Database,
  Code,
  BarChart3,
} from "lucide-react";

export default function FeatureComparison() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6 tracking-tight">
            Complete Blueprint Access
          </h2>
          <p className="text-xl text-gray-600">
            Free exploration vs. full strategic intelligence
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Free Tier */}
          <Card className="border-2 border-gray-100 shadow-lg">
            <CardHeader className="bg-gray-50 rounded-t-lg">
              <div className="flex items-center justify-between">
                <CardTitle className="text-2xl font-bold">
                  Free Access
                </CardTitle>
                <Badge variant="outline" className="text-sm">
                  Exploration
                </Badge>
              </div>
              <CardDescription className="text-lg">
                Discover the blueprint structure
              </CardDescription>
            </CardHeader>
            <CardContent className="p-8 space-y-6">
              <div className="flex items-start space-x-4">
                <Check className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                <div>
                  <p className="font-semibold">
                    Title, short description, tags, effort
                  </p>
                  <p className="text-gray-600 text-sm">
                    Basic overview to evaluate fit
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Lock className="h-6 w-6 text-gray-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-gray-600">
                    Enriched fields hidden
                  </p>
                  <p className="text-gray-500 text-sm">
                    Upgrade to see problem/solution, MVP, monetization, stack,
                    risks, and more
                  </p>
                </div>
              </div>
              <Button
                variant="outline"
                className="w-full mt-8 py-3 text-lg font-semibold"
              >
                Start Exploring
              </Button>
            </CardContent>
          </Card>

          {/* Pro Tier */}
          <Card className="border-2 border-primary/20 shadow-xl bg-gradient-to-br from-white to-primary/5 relative">
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
              <Badge className="bg-gradient-to-r from-primary to-secondary text-white px-6 py-2 text-sm font-semibold shadow-lg">
                Professional
              </Badge>
            </div>
            <CardHeader className="bg-gradient-to-r from-primary/5 to-secondary/5 rounded-t-lg pt-8">
              <div className="flex items-center justify-between">
                <CardTitle className="text-2xl font-bold">Pro Access</CardTitle>
                <div className="text-right">
                  <div className="text-3xl font-bold text-primary">₹1,000</div>
                  <div className="text-gray-600 text-sm">/month</div>
                </div>
              </div>
              <CardDescription className="text-lg">
                Complete strategic intelligence
              </CardDescription>
            </CardHeader>
            <CardContent className="p-8 space-y-4">
              {[
                {
                  icon: Lightbulb,
                  title: "Problem & Solution",
                  desc: "Clear framing, why it matters now",
                },
                {
                  icon: Users,
                  title: "Target Users",
                  desc: "Who buys/uses; buying triggers",
                },
                {
                  icon: BarChart3,
                  title: "Market Scope & Monetization",
                  desc: "Models and pricing strategy where relevant",
                },
                {
                  icon: Target,
                  title: "MVP Feature Set",
                  desc: "Effort/timeline with practical buildability",
                },
                {
                  icon: Code,
                  title: "Tech Stack Suggestions",
                  desc: "Practical, buildable recommendations",
                },
                {
                  icon: Shield,
                  title: "Risks & Differentiators",
                  desc: "What could go wrong and what sets you apart",
                },
                {
                  icon: TrendingUp,
                  title: "Execution Plan",
                  desc: "Validation steps and scalability considerations",
                },
                {
                  icon: Database,
                  title: "Success Criteria",
                  desc: "KPIs and compliance notes when applicable",
                },
              ].map((feature, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <feature.icon className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-sm">{feature.title}</p>
                    <p className="text-gray-600 text-xs">{feature.desc}</p>
                  </div>
                </div>
              ))}
              <div className="pt-6 border-t border-gray-100">
                <p className="text-sm text-gray-600 mb-6">
                  <strong>Note:</strong> Not every idea includes every field; we
                  only show what's genuinely useful for that idea. The value is
                  in the depth and clarity of the fields you do get.
                </p>
                <p className="text-xs text-gray-500 mb-6">
                  New blueprints drop daily (3-4/day), across domains and
                  complexity levels.
                </p>
                <Button className="w-full py-4 text-lg font-semibold bg-gradient-to-r from-primary to-secondary shadow-lg hover:shadow-xl transition-all duration-300">
                  Unlock Full Access
                </Button>

                <p className="text-xs text-center text-gray-400 mt-2">
                  <strong>Transparency:</strong> We don't promise outcomes. We
                  provide well-structured, research-backed fields so you can
                  execute with confidence.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
