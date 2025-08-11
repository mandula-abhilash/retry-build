import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Lock, Check, ArrowRight, Zap, Users, Target, Shield, Calendar, ExternalLink } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">R</span>
              </div>
              <span className="text-xl font-semibold text-gray-900">retry.build</span>
              <Badge variant="secondary" className="text-xs">
                Calm Progress
              </Badge>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-sm text-gray-600 hidden md:block">New today: 3 blueprints</span>
              <Button variant="outline" size="sm" className="hidden sm:inline-flex">Browse Free</Button>
              <Button size="sm">Unlock Pro</Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Clarity over chaos.
            <br />
            <span className="text-blue-600">Ideas you can actually build.</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            A calm, research-backed vault of SaaS blueprints. No hype, no "vibes"—just structured ideas with market notes, tech suggestions, and realistic next steps. New blueprints added daily.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-6">
            <Button size="lg" className="px-8 py-3 text-lg">
              Browse Free Ideas
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="outline" size="lg" className="px-8 py-3 text-lg">
              Unlock Full Access – ₹1,000/month
            </Button>
          </div>
          <p className="text-sm text-gray-500">
            From real product experience. Not promises—starting points.
          </p>
        </div>
      </section>

      {/* Anti-Hype Positioning */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Why retry.build Exists</h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Most people don't fail for lack of code—they fail for lack of clarity. "Vibe coding" feels productive… until weeks pass and motivation dips. <strong>retry.build</strong> replaces fuzzy "feel-good" starts with <strong>evidence-first idea blueprints</strong> so you can move steadily, reduce false starts, and protect your energy.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Clarity beats hustle</h3>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <ArrowRight className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Progress > vibes</h3>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Calm, consistent execution wins</h3>
            </div>
          </div>
        </div>
      </section>

      {/* What You Get */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">What You Get</h2>
            <p className="text-lg text-gray-600">Free vs Pro comparison</p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Free Tier */}
            <Card className="relative">
              <CardHeader>
                <CardTitle className="text-2xl">Free (taste)</CardTitle>
                <CardDescription>Explore the vault structure</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Check className="h-5 w-5 text-green-500" />
                  <span>Title, short description, tags, effort level</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Check className="h-5 w-5 text-green-500" />
                  <span>A peek at the blueprint structure (blurred sections)</span>
                </div>
              </CardContent>
            </Card>

            {/* Pro Tier */}
            <Card className="relative border-blue-200 bg-blue-50/50">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <Badge className="bg-blue-600">Most Popular</Badge>
              </div>
              <CardHeader>
                <CardTitle className="text-2xl">Pro (everything)</CardTitle>
                <CardDescription>Complete research blueprints</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                {[
                  "Problem & Solution: precise problem framing and why it matters now",
                  "Target Users: who buys, who uses, and their buying triggers",
                  "Tech Stack Suggestions: recommended stack + feasibility notes",
                  "Market & Monetization: scope, pricing models, and expansion paths",
                  "MVP Feature Set & Timelines: what to build first, in what order",
                  "Risks & Differentiators: what to watch and how to stand apart",
                  "Compliance notes (when relevant)",
                  "Growth ideas & early traction playbooks",
                  "Exports to Notion/Trello/Asana to keep you moving"
                ].map((feature, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <Check className="h-5 w-5 text-blue-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">{feature}</span>
                  </div>
                ))}
                <div className="pt-4 border-t">
                  <p className="text-sm text-gray-600">
                    <strong>P.S.</strong> New blueprints drop daily (3–4/day), across domains and complexity levels.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">How It Works</h2>
            <p className="text-lg text-gray-600">Clarity-First Workflow</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">1</div>
              <h3 className="text-xl font-semibold mb-2">Browse & shortlist</h3>
              <p className="text-gray-600">by niche, market size, complexity, or stack</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">2</div>
              <h3 className="text-xl font-semibold mb-2">Unlock details</h3>
              <p className="text-gray-600">to see the entire research blueprint</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">3</div>
              <h3 className="text-xl font-semibold mb-2">Move forward</h3>
              <p className="text-gray-600">with a concrete plan (and zero guesswork)</p>
            </div>
          </div>
          
          <div className="mt-12 p-6 bg-blue-50 rounded-lg text-center">
            <p className="text-gray-700 italic">
              retry.build is designed to grow with you. Today, you get the best <strong>idea discovery</strong> experience. Members will always be first to see what's next.
            </p>
          </div>
        </div>
      </section>

      {/* Sample Idea Preview */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Sample Idea</h2>
            <p className="text-lg text-gray-600">Locked Preview</p>
          </div>
          
          <Card className="relative overflow-hidden">
            <div className="absolute top-4 right-4">
              <Badge variant="secondary" className="bg-yellow-100 text-yellow-800">
                <Lock className="h-3 w-3 mr-1" />
                Locked
              </Badge>
            </div>
            <CardHeader>
              <CardTitle className="text-2xl">Quieter Shifts for Nurses</CardTitle>
              <CardDescription className="text-lg">
                Software that reduces noise for nursing teams.
              </CardDescription>
              <div className="flex flex-wrap gap-2 mt-4">
                <Badge variant="outline">healthcare</Badge>
                <Badge variant="outline">nursing</Badge>
                <Badge variant="outline">noise-monitoring</Badge>
                <Badge variant="outline">Effort: 16–20 weeks</Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg border-2 border-dashed border-blue-200">
                <div className="flex items-center justify-center space-x-2 text-blue-600 mb-4">
                  <Lock className="h-5 w-5" />
                  <span className="font-semibold">Unlock to see:</span>
                </div>
                <p className="text-gray-700 text-center">
                  full problem/solution, market & pricing, MVP scope & timeline, tech stack, compliance notes, risks, growth plays, and exportable roadmap.
                </p>
                <div className="mt-4 text-center">
                  <Button className="bg-blue-600 hover:bg-blue-700">
                    See market size, pricing, MVP, and stack →
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Who It's For */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Who It's For</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                <Zap className="h-6 w-6 text-red-600" />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Builders stuck in the vibe-coding loop</h3>
                <p className="text-gray-600">who want a steady plan</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                <Target className="h-6 w-6 text-green-600" />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Indie hackers</h3>
                <p className="text-gray-600">who want clarity before code</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                <Users className="h-6 w-6 text-blue-600" />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Agencies</h3>
                <p className="text-gray-600">turning expertise into products</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                <Calendar className="h-6 w-6 text-purple-600" />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Investors/strategists</h3>
                <p className="text-gray-600">scanning early opportunities</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Pricing</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Free</CardTitle>
                <CardDescription>Get started with basic access</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Check className="h-5 w-5 text-green-500" />
                  <span>Browse the vault</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Check className="h-5 w-5 text-green-500" />
                  <span>View limited fields on each idea</span>
                </div>
                <Button variant="outline" className="w-full mt-6">
                  Start Free
                </Button>
              </CardContent>
            </Card>

            <Card className="border-blue-200 bg-blue-50/50 relative">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <Badge className="bg-blue-600">Recommended</Badge>
              </div>
              <CardHeader>
                <CardTitle className="text-2xl">Pro</CardTitle>
                <div className="flex items-baseline space-x-2">
                  <span className="text-3xl font-bold">₹1,000</span>
                  <span className="text-gray-600">/month</span>
                </div>
                <CardDescription>Full access to all blueprints</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Check className="h-5 w-5 text-blue-500" />
                  <span>Unlock all details on every idea</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Check className="h-5 w-5 text-blue-500" />
                  <span>Access the full archive</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Check className="h-5 w-5 text-blue-500" />
                  <span>Early access to new drops</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Check className="h-5 w-5 text-blue-500" />
                  <span>Save & tag favorites</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Check className="h-5 w-5 text-blue-500" />
                  <span>Export to your project tools</span>
                </div>
                <Button className="w-full mt-6 bg-blue-600 hover:bg-blue-700">
                  Unlock Full Access
                </Button>
                <div className="text-center space-y-2 text-sm text-gray-600">
                  <p>₹1,000/month ≈ ₹33/day—less than a coffee for clarity that saves weeks.</p>
                  <p className="text-xs">We don't promise outcomes. We provide researched starting points so you can execute with confidence.</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">Build with clarity. Sustain your momentum.</h2>
          <p className="text-xl mb-8 opacity-90">
            Join builders who are swapping vibe coding for calm, consistent progress.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="px-8 py-3 text-lg">
              Browse Free Ideas
            </Button>
            <Button size="lg" variant="outline" className="px-8 py-3 text-lg border-white text-white hover:bg-white hover:text-blue-600">
              Unlock Full Access – ₹1,000/month
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">R</span>
              </div>
              <span className="text-xl font-semibold">retry.build</span>
            </div>
            <p className="text-gray-400 max-w-2xl mx-auto">
              A healthier builder environment. Low-noise guidance, realistic timelines, structured next steps. 
              We're not giving medical advice. We're giving structure—so you can work calmly and consistently.
            </p>
          </div>
          
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400 text-sm">
            <p>&copy; 2025 retry.build. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}