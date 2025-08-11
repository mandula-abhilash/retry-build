"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Lock,
  Check,
  ArrowRight,
  Zap,
  Users,
  Target,
  Shield,
  Calendar,
  ExternalLink,
  Star,
  TrendingUp,
  Database,
  Code,
  Lightbulb,
  BarChart3,
} from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-gray-100 bg-white/95 backdrop-blur-md sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center space-x-4">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-lg">R</span>
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-bold text-primary tracking-tight">
                  retry.build
                </span>
              </div>
            </div>
            <div className="flex items-center space-x-6">
              <div className="hidden md:flex items-center space-x-2 text-sm text-gray-600">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span>3 new blueprints today</span>
              </div>
              <Button
                variant="outline"
                size="sm"
                className="hidden sm:inline-flex border-gray-200 hover:border-primary/30"
              >
                Browse Free
              </Button>
              <Button
                size="sm"
                className="shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Unlock Pro
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-blue-50/30"></div>
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/5 rounded-full blur-3xl"></div>

        <div className="relative max-w-5xl mx-auto text-center">
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
            research. No speculation, no wishful thinking - just structured
            ideas with clear execution paths, realistic timelines, and
            actionable next steps.
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

      {/* Value Proposition */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6 tracking-tight">
              Why retry.build Exists
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Most builders fail not from lack of technical skill, but from lack
              of strategic clarity. We replace impulsive 'vibe coding' with{" "}
              <strong>evidence-based blueprints</strong> that protect your time,
              energy, and motivation.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-primary/10 to-primary/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Target className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-xl font-bold">
                  Strategic Clarity
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600">
                  Replace guesswork with research-backed direction and clear
                  market positioning.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-secondary/10 to-secondary/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="h-8 w-8 text-secondary" />
                </div>
                <CardTitle className="text-xl font-bold">
                  Consistent Progress
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600">
                  Structured roadmaps that maintain momentum through inevitable
                  challenges.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-accent/10 to-accent/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-8 w-8 text-accent" />
                </div>
                <CardTitle className="text-xl font-bold">
                  Energy Protection
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600">
                  Avoid burnout from false starts with validated ideas and
                  realistic timelines.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Feature Comparison */}
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
                  <CardTitle className="text-2xl font-bold">
                    Pro Access
                  </CardTitle>
                  <div className="text-right">
                    <div className="text-3xl font-bold text-primary">
                      ₹1,000
                    </div>
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
                    <strong>Note:</strong> Not every idea includes every field;
                    we only show what's genuinely useful for that idea. The
                    value is in the depth and clarity of the fields you do get.
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

      {/* Process */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6 tracking-tight">
              Strategic Execution Process
            </h2>
            <p className="text-xl text-gray-600">
              From discovery to deployment
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center relative">
              <div className="w-20 h-20 bg-gradient-to-br from-primary to-primary/80 text-white rounded-2xl flex items-center justify-center mx-auto mb-6 text-2xl font-bold shadow-lg">
                01
              </div>
              <h3 className="text-2xl font-bold mb-4">Discover & Filter</h3>
              <p className="text-gray-600 leading-relaxed">
                Browse by industry, complexity, market size, or technical
                requirements. Find ideas that match your skills and timeline.
              </p>
              {/* Connection line */}
              <div className="hidden md:block absolute top-10 left-full w-12 h-0.5 bg-gradient-to-r from-primary/30 to-transparent transform translate-x-4"></div>
            </div>

            <div className="text-center relative">
              <div className="w-20 h-20 bg-gradient-to-br from-secondary to-secondary/80 text-white rounded-2xl flex items-center justify-center mx-auto mb-6 text-2xl font-bold shadow-lg">
                02
              </div>
              <h3 className="text-2xl font-bold mb-4">Analyze & Plan</h3>
              <p className="text-gray-600 leading-relaxed">
                Access complete market research, technical specifications, and
                strategic roadmaps. Export to your preferred project management
                tool.
              </p>
              {/* Connection line */}
              <div className="hidden md:block absolute top-10 left-full w-12 h-0.5 bg-gradient-to-r from-secondary/30 to-transparent transform translate-x-4"></div>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-accent to-accent/80 text-white rounded-2xl flex items-center justify-center mx-auto mb-6 text-2xl font-bold shadow-lg">
                03
              </div>
              <h3 className="text-2xl font-bold mb-4">Execute & Scale</h3>
              <p className="text-gray-600 leading-relaxed">
                Follow structured implementation phases with clear milestones.
                Build with confidence using validated market assumptions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Sample Blueprint */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6 tracking-tight">
              Blueprint Preview
            </h2>
            <p className="text-xl text-gray-600">See what's behind the lock</p>
          </div>

          <Card className="relative overflow-hidden border-2 border-gray-100 shadow-xl">
            <div className="absolute top-6 right-6 z-10">
              <Badge
                variant="secondary"
                className="bg-gray-100 text-primary border border-primary/20 shadow-sm"
              >
                <Lock className="h-4 w-4 mr-2" />
                Pro Access Required
              </Badge>
            </div>

            <CardHeader className="bg-gradient-to-r from-gray-50 to-white pb-8">
              <CardTitle className="text-3xl font-bold mb-2">
                Healthcare Noise Monitoring Platform
              </CardTitle>
              <CardDescription className="text-lg text-gray-600 mb-6">
                IoT-enabled solution for reducing noise levels in hospital
                environments, improving patient recovery and staff wellbeing.
              </CardDescription>
              <div className="flex flex-wrap gap-3">
                <Badge variant="outline" className="px-3 py-1">
                  Healthcare
                </Badge>
                <Badge variant="outline" className="px-3 py-1">
                  IoT
                </Badge>
                <Badge variant="outline" className="px-3 py-1">
                  B2B SaaS
                </Badge>
                <Badge variant="outline" className="px-3 py-1">
                  16-20 weeks
                </Badge>
                <Badge variant="outline" className="px-3 py-1">
                  $2M+ market
                </Badge>
              </div>
            </CardHeader>

            <CardContent className="p-8">
              <div className="bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5 p-8 rounded-2xl border-2 border-dashed border-primary/20 relative overflow-hidden">
                <div className="absolute inset-0 bg-white/60 backdrop-blur-sm"></div>
                <div className="relative z-10">
                  <div className="flex items-center justify-center space-x-3 text-primary mb-6">
                    <Lock className="h-6 w-6" />
                    <span className="text-xl font-bold">
                      Unlock Complete Blueprint
                    </span>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6 mb-8 text-sm">
                    <div className="space-y-3">
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-primary rounded-full"></div>
                        <span className="font-semibold">
                          Market Analysis & Sizing
                        </span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-secondary rounded-full"></div>
                        <span className="font-semibold">
                          Technical Architecture
                        </span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-accent rounded-full"></div>
                        <span className="font-semibold">Revenue Models</span>
                      </div>
                    </div>
                    <div className="space-y-3">
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-primary rounded-full"></div>
                        <span className="font-semibold">
                          Implementation Roadmap
                        </span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-secondary rounded-full"></div>
                        <span className="font-semibold">Risk Assessment</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-accent rounded-full"></div>
                        <span className="font-semibold">Growth Strategy</span>
                      </div>
                    </div>
                  </div>

                  <div className="text-center">
                    <Button
                      size="lg"
                      className="px-8 py-3 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                    >
                      View Complete Analysis →
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Target Audience */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6 tracking-tight">
              Built for Strategic Builders
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-br from-primary/10 to-primary/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Code className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-lg">Technical Founders</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm">
                  Who need market validation before building
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-br from-secondary/10 to-secondary/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Target className="h-8 w-8 text-secondary" />
                </div>
                <CardTitle className="text-lg">Indie Hackers</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm">
                  Seeking clarity before committing time
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-br from-accent/10 to-accent/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-accent" />
                </div>
                <CardTitle className="text-lg">Agency Teams</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm">
                  Converting expertise into products
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-br from-primary/10 to-secondary/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <BarChart3 className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-lg">Strategic Investors</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm">
                  Identifying early-stage opportunities
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Final CTA */}
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

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center space-x-4 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-xl">R</span>
              </div>
              <span className="text-3xl font-bold tracking-tight">
                retry.build
              </span>
            </div>
            <p className="text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Professional-grade strategic intelligence for builders who value
              their time. We provide structure, not promises - so you can
              execute with confidence and maintain momentum.
            </p>
          </div>

          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>&copy; 2025 retry.build. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
