"use client";

import { useState } from "react";
import Link from "next/link";
import Header from "@/components/landing-page/Header";
import Footer from "@/components/landing-page/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

import {
  ArrowLeft,
  Clock,
  Users,
  Target,
  TrendingUp,
  Zap,
  DollarSign,
  CheckCircle,
  AlertTriangle,
  Lightbulb,
  BarChart3,
} from "lucide-react";
import sampleData from "@/data/sampleBlueprint.json";

export default function SampleBlueprintPage() {
  const [activeSection, setActiveSection] = useState("overview");

  const priorityColors = {
    1: "bg-red-100 text-red-800 border-red-200",
    2: "bg-yellow-100 text-yellow-800 border-yellow-200",
    3: "bg-green-100 text-green-800 border-green-200",
  };

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

            <div className="flex flex-wrap gap-2 mb-6">
              {sampleData.tags.map((tag, index) => (
                <Badge key={index} variant="outline" className="capitalize">
                  {tag.replace("-", " ")}
                </Badge>
              ))}
            </div>

            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              {sampleData.title_simple}
            </h1>

            <p className="text-xl text-gray-600 mb-8 leading-relaxed max-w-4xl">
              {sampleData.description}
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
              <div className="text-center p-4 bg-white rounded-lg shadow-sm border">
                <Clock className="w-6 h-6 text-primary mx-auto mb-2" />
                <div className="text-sm font-semibold text-gray-900">
                  {sampleData.effort_level}
                </div>
                <div className="text-xs text-gray-500">Timeline</div>
              </div>
              <div className="text-center p-4 bg-white rounded-lg shadow-sm border">
                <Target className="w-6 h-6 text-secondary mx-auto mb-2" />
                <div className="text-sm font-semibold text-gray-900">
                  {sampleData.technical_complexity}
                </div>
                <div className="text-xs text-gray-500">Complexity</div>
              </div>
              <div className="text-center p-4 bg-white rounded-lg shadow-sm border">
                <Users className="w-6 h-6 text-accent mx-auto mb-2" />
                <div className="text-sm font-semibold text-gray-900">
                  {sampleData.target_audience_type}
                </div>
                <div className="text-xs text-gray-500">Market</div>
              </div>
              <div className="text-center p-4 bg-white rounded-lg shadow-sm border">
                <TrendingUp className="w-6 h-6 text-primary mx-auto mb-2" />
                <div className="text-sm font-semibold text-gray-900">
                  {sampleData.market_size.split(":")[1]?.trim() || "$0.5-1.5B"}
                </div>
                <div className="text-xs text-gray-500">Market Size</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-4 gap-8">
            {/* Sidebar Navigation */}
            <div className="lg:col-span-1">
              <div className="sticky top-8">
                <Card className="p-4">
                  <h3 className="font-semibold mb-4">Blueprint Sections</h3>
                  <nav className="space-y-2">
                    {[
                      { id: "overview", label: "Overview", icon: Target },
                      {
                        id: "problem",
                        label: "Problem & Solution",
                        icon: Lightbulb,
                      },
                      {
                        id: "market",
                        label: "Market Analysis",
                        icon: BarChart3,
                      },
                      {
                        id: "technical",
                        label: "Technical Details",
                        icon: Zap,
                      },
                      {
                        id: "execution",
                        label: "Execution Plan",
                        icon: CheckCircle,
                      },
                      {
                        id: "pricing",
                        label: "Pricing Strategy",
                        icon: DollarSign,
                      },
                      {
                        id: "risks",
                        label: "Risks & Validation",
                        icon: AlertTriangle,
                      },
                    ].map((item) => (
                      <button
                        key={item.id}
                        onClick={() => setActiveSection(item.id)}
                        className={`w-full text-left px-3 py-2 rounded-lg transition-colors flex items-center space-x-2 ${
                          activeSection === item.id
                            ? "bg-primary text-white"
                            : "hover:bg-gray-100 text-gray-700"
                        }`}
                      >
                        <item.icon className="w-4 h-4" />
                        <span className="text-sm">{item.label}</span>
                      </button>
                    ))}
                  </nav>
                </Card>
              </div>
            </div>

            {/* Main Content Area */}
            <div className="lg:col-span-3 space-y-8">
              {/* Overview Section */}
              {activeSection === "overview" && (
                <div className="space-y-6">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center space-x-2">
                        <Target className="w-5 h-5 text-primary" />
                        <span>Unique Value Proposition</span>
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-lg font-medium text-primary mb-6">
                        "{sampleData.uvp_statement}"
                      </p>
                      <div className="space-y-4">
                        <div className="p-4 bg-gray-50 rounded-lg">
                          <h4 className="font-semibold mb-3 text-gray-900">
                            Target Users
                          </h4>
                          <p className="text-gray-600 text-sm leading-relaxed">
                            {sampleData.target_users}
                          </p>
                        </div>
                        <div className="p-4 bg-blue-50 rounded-lg">
                          <h4 className="font-semibold mb-3 text-gray-900">
                            Platform & Scope
                          </h4>
                          <div className="grid sm:grid-cols-2 gap-3 text-sm">
                            <div>
                              <span className="font-medium text-gray-700">
                                Platform:
                              </span>
                              <span className="text-gray-600 ml-2">
                                {sampleData.ideal_platform}
                              </span>
                            </div>
                            <div>
                              <span className="font-medium text-gray-700">
                                Market:
                              </span>
                              <span className="text-gray-600 ml-2">
                                {sampleData.target_audience_type}
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Key Differentiators</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="grid gap-3">
                        {sampleData.key_differentiators.map((diff, index) => (
                          <div
                            key={index}
                            className="flex items-start space-x-3"
                          >
                            <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-700">{diff}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              )}

              {/* Problem & Solution Section */}
              {activeSection === "problem" && (
                <div className="space-y-6">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center space-x-2">
                        <AlertTriangle className="w-5 h-5 text-red-500" />
                        <span>Problem Statement</span>
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-700 leading-relaxed">
                        {sampleData.problem_statement}
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center space-x-2">
                        <Lightbulb className="w-5 h-5 text-yellow-500" />
                        <span>Solution Overview</span>
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-700 leading-relaxed mb-4">
                        {sampleData.solution_overview}
                      </p>
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <h4 className="font-semibold mb-2">Why Now?</h4>
                        <p className="text-gray-600 text-sm">
                          {sampleData.why_now}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              )}

              {/* Market Analysis Section */}
              {activeSection === "market" && (
                <div className="space-y-6">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center space-x-2">
                        <BarChart3 className="w-5 h-5 text-primary" />
                        <span>Market Opportunity</span>
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="grid gap-4">
                        <div>
                          <h4 className="font-semibold mb-2">Market Size</h4>
                          <p className="text-gray-700">
                            {sampleData.market_size}
                          </p>
                        </div>
                        <div>
                          <h4 className="font-semibold mb-2">
                            Target Audience
                          </h4>
                          <p className="text-gray-700">
                            {sampleData.target_audience_type}
                          </p>
                        </div>
                        <div>
                          <h4 className="font-semibold mb-2">
                            Geographic Scope
                          </h4>
                          <p className="text-gray-700">
                            {sampleData.market_scope_and_region}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Competitive Landscape</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {sampleData.competitive_analysis.map((comp, index) => (
                          <div
                            key={index}
                            className="border-l-4 border-primary/20 pl-4"
                          >
                            <h4 className="font-semibold text-gray-900">
                              {comp.competitor}
                            </h4>
                            <p className="text-gray-600 text-sm">
                              {comp.notes}
                            </p>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Success Story</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                        <p className="text-gray-700 italic">
                          "{sampleData.success_story}"
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              )}

              {/* Technical Details Section */}
              {activeSection === "technical" && (
                <div className="space-y-6">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center space-x-2">
                        <Zap className="w-5 h-5 text-primary" />
                        <span>Technology Stack</span>
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="grid sm:grid-cols-2 gap-4">
                        <div>
                          <h4 className="font-semibold mb-3">
                            Core Technologies
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {sampleData.core_technology_stack.map(
                              (tech, index) => (
                                <Badge
                                  key={index}
                                  variant="outline"
                                  className="text-xs"
                                >
                                  {tech}
                                </Badge>
                              )
                            )}
                          </div>
                        </div>
                        <div>
                          <h4 className="font-semibold mb-3">Required Team</h4>
                          <div className="space-y-2">
                            {sampleData.required_skills_or_team.map(
                              (skill, index) => (
                                <div
                                  key={index}
                                  className="flex items-center space-x-2"
                                >
                                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                                  <span className="text-sm text-gray-700">
                                    {skill}
                                  </span>
                                </div>
                              )
                            )}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>MVP Feature Set</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 mb-4">
                        {sampleData.mvp_scope_description}
                      </p>
                      <div className="space-y-3">
                        {sampleData.mvp_feature_set.map((feature, index) => (
                          <div
                            key={index}
                            className="flex items-start space-x-3"
                          >
                            <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                            <span className="text-gray-700 text-sm">
                              {feature}
                            </span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Feature Priorities</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        {sampleData.core_features_priority.map(
                          (item, index) => (
                            <div
                              key={index}
                              className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
                            >
                              <span className="text-gray-700">
                                {item.feature}
                              </span>
                              <Badge className={priorityColors[item.priority]}>
                                Priority {item.priority}
                              </Badge>
                            </div>
                          )
                        )}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              )}

              {/* Execution Plan Section */}
              {activeSection === "execution" && (
                <div className="space-y-6">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center space-x-2">
                        <CheckCircle className="w-5 h-5 text-green-500" />
                        <span>Development Timeline</span>
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {sampleData.timeline.map((phase, index) => (
                          <div
                            key={index}
                            className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg"
                          >
                            <div className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center text-sm font-bold">
                              {index + 1}
                            </div>
                            <div className="flex-1">
                              <h4 className="font-semibold text-gray-900">
                                {phase.phase}
                              </h4>
                              <p className="text-sm text-gray-600">
                                {phase.duration}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Execution Phases</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {sampleData.execution_plan.map((phase, index) => (
                          <div
                            key={index}
                            className="border-l-4 border-secondary/30 pl-4"
                          >
                            <h4 className="font-semibold text-gray-900">
                              {phase.phase}
                            </h4>
                            <p className="text-gray-600 text-sm">
                              {phase.deliverables}
                            </p>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Onboarding Strategy</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        {sampleData.onboarding_strategy.map((step, index) => (
                          <div
                            key={index}
                            className="flex items-start space-x-3"
                          >
                            <div className="w-6 h-6 bg-accent text-white rounded-full flex items-center justify-center text-xs font-bold mt-0.5">
                              {index + 1}
                            </div>
                            <span className="text-gray-700 text-sm">
                              {step}
                            </span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              )}

              {/* Pricing Strategy Section */}
              {activeSection === "pricing" && (
                <div className="space-y-6">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center space-x-2">
                        <DollarSign className="w-5 h-5 text-green-500" />
                        <span>Pricing Tiers</span>
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="grid gap-4">
                        {sampleData.pricing_strategy.map((tier, index) => (
                          <div
                            key={index}
                            className="p-4 border rounded-lg hover:shadow-md transition-shadow"
                          >
                            <div className="flex justify-between items-start">
                              <div>
                                <h4 className="font-semibold text-gray-900">
                                  {tier.tier}
                                </h4>
                                <p className="text-2xl font-bold text-primary">
                                  {tier.price}
                                </p>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Revenue Models</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="grid sm:grid-cols-2 gap-4">
                        {sampleData.monetization_model.map((model, index) => (
                          <div
                            key={index}
                            className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg"
                          >
                            <TrendingUp className="w-4 h-4 text-primary" />
                            <span className="text-gray-700">{model}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Upsell Opportunities</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        {sampleData.potential_upsells.map((upsell, index) => (
                          <div
                            key={index}
                            className="flex items-start space-x-3"
                          >
                            <Zap className="w-4 h-4 text-yellow-500 mt-1 flex-shrink-0" />
                            <span className="text-gray-700 text-sm">
                              {upsell}
                            </span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Business Model Insights</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        {sampleData.business_model_insights.map(
                          (insight, index) => (
                            <div
                              key={index}
                              className="flex items-start space-x-3"
                            >
                              <Lightbulb className="w-4 h-4 text-yellow-500 mt-1 flex-shrink-0" />
                              <span className="text-gray-700 text-sm">
                                {insight}
                              </span>
                            </div>
                          )
                        )}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              )}

              {/* Risks & Validation Section */}
              {activeSection === "risks" && (
                <div className="space-y-6">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center space-x-2">
                        <AlertTriangle className="w-5 h-5 text-red-500" />
                        <span>Risks & Challenges</span>
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {sampleData.risks_and_challenges.map((risk, index) => (
                          <div
                            key={index}
                            className="p-4 bg-red-50 border border-red-200 rounded-lg"
                          >
                            <p className="text-gray-700 text-sm">{risk}</p>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Validation Steps</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        {sampleData.validation_steps.map((step, index) => (
                          <div
                            key={index}
                            className="flex items-start space-x-3"
                          >
                            <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                            <span className="text-gray-700 text-sm">
                              {step}
                            </span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Key Performance Indicators</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="grid sm:grid-cols-2 gap-3">
                        {sampleData.kpis.map((kpi, index) => (
                          <div
                            key={index}
                            className="flex items-center space-x-3 p-3 bg-blue-50 rounded-lg"
                          >
                            <BarChart3 className="w-4 h-4 text-blue-500" />
                            <span className="text-gray-700 text-sm">{kpi}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Early Traction Strategy</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        {sampleData.early_traction_and_validation.map(
                          (strategy, index) => (
                            <div
                              key={index}
                              className="flex items-start space-x-3"
                            >
                              <Target className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                              <span className="text-gray-700 text-sm">
                                {strategy}
                              </span>
                            </div>
                          )
                        )}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary via-primary/95 to-secondary text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            This is just the beginning
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Unlock 500+ blueprints like this with complete strategic
            intelligence, technical roadmaps, and market validation frameworks.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              variant="secondary"
              className="px-8 py-4 text-lg font-semibold"
            >
              Get Pro Access - ₹1,000/month
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="px-8 py-4 text-lg font-semibold border-2 border-white/50 text-white bg-white/10 hover:bg-white/20 hover:border-white/70 hover:text-white"
            >
              Back to Home
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
