// resources/js/Pages/Landing.jsx
import React from 'react';
import { Head } from '@inertiajs/inertia-react';

export default function Landing() {
  return (
    <>
      <Head title="Home" />
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-600 to-purple-700 text-white py-24">
          <div className="max-w-6xl mx-auto px-6 text-center">
            <h1 className="text-5xl font-bold mb-4">Become a Developer. Faster.</h1>
            <p className="text-xl mb-8">Live coding bootcamps, real projects, no fluff. Start your journey today.</p>
            <a
              href="/register"
              className="bg-white text-blue-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
            >
              Join Now
            </a>
          </div>
        </section>

        {/* Features */}
        <section className="py-20">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-12">What You'll Get</h2>
            <div className="grid md:grid-cols-3 gap-10">
              <FeatureCard
                title="Live Training"
                description="Daily instructor-led live coding sessions with hands-on practice."
              />
              <FeatureCard
                title="Project-Based Learning"
                description="Build real-world projects that simulate the work environment."
              />
              <FeatureCard
                title="Team Collaboration"
                description="Work in teams, share code, and gain experience like a real job."
              />
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="bg-blue-700 text-white py-16">
          <div className="max-w-6xl mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="mb-6">Apply now and start your journey to becoming a developer.</p>
            <a
              href="/register"
              className="bg-white text-blue-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
            >
              Apply Now
            </a>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gray-100 text-gray-700 py-6 text-center text-sm">
          © {new Date().getFullYear()} Bootcamp Platform. All rights reserved.
        </footer>
      </div>
    </>
  );
}

function FeatureCard({ title, description }) {
  return (
    <div className="bg-white shadow-md p-6 rounded-xl text-center">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}
