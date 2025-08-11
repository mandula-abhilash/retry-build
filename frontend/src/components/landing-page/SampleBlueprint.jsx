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
import { Lock } from "lucide-react";

export default function SampleBlueprint() {
  return (
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
  );
}
