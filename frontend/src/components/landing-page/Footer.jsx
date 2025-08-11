"use client";

import RetryTile from "@/components/landing-page/RetryTile";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center space-x-4 mb-6">
            <div className="w-12 h-12">
              <RetryTile />
            </div>
            <span className="text-3xl font-bold tracking-tight">
              retry.build
            </span>
          </div>
          <p className="text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Professional-grade strategic intelligence for builders who value
            their time. We provide structure, not promises - so you can execute
            with confidence and maintain momentum.
          </p>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
          <p>&copy; 2025 retry.build. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
