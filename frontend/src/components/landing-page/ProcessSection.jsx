"use client";

export default function ProcessSection() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6 tracking-tight">
            Strategic Execution Process
          </h2>
          <p className="text-xl text-gray-600">From discovery to deployment</p>
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
  );
}
