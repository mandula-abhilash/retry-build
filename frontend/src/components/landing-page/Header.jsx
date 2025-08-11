"use client";

import { Button } from "@/components/ui/button";
import RetryTile from "@/components/landing-page/RetryTile";

export default function Header() {
  return (
    <header className="border-b border-gray-100 bg-white/95 backdrop-blur-md sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center space-x-4">
            <div className="w-10 h-10">
              <RetryTile />
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
  );
}
