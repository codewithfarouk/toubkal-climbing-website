import { ArrowRight, ShieldCheck, Briefcase, Mountain } from "lucide-react";
import Gallery from "./Gallery";
import Contact from "./Contact";
import Routes from "./Routes";
import { Link as ScrollLink } from "react-scroll";
import Plans from "./Plans";

export default function Home() {
  return (
    <div className="space-y-20" id="top">
      {/* Hero Section */}
      <div className="relative h-screen">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b"
            alt="Toubkal Mountain"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="text-white text-center md:text-left">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Conquer North Africa's Highest Peak
            </h1>
            <p className="text-xl md:text-2xl mb-8">
              Professional guided climbs in the Atlas Mountains of Morocco
            </p>
            <ScrollLink
              to="contact"
              smooth={true}
              duration={800}
              offset={-50} // Optional: Adjust scroll position to account for sticky headers
              className="mt-8 inline-flex items-center bg-[#422006] text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors cursor-pointer"
            >
              Start your adventure now
              <ArrowRight className="ml-2 h-5 w-5" />
            </ScrollLink>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Why Choose Toubkal Climbers?
          </h2>
          <p className="text-lg text-gray-600">
            Experience unmatched professionalism and safety on every climb.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "Expert Guides",
              description:
                "Certified mountain guides with years of experience in the Atlas Mountains.",
              icon: <ShieldCheck className="h-10 w-10 text-[#422006]" />,
            },
            {
              title: "All-Inclusive Packages",
              description:
                "From equipment to accommodation, we take care of everything.",
              icon: <Briefcase className="h-10 w-10 text-[#422006]" />,
            },
            {
              title: "Safety First",
              description:
                "Modern safety equipment and emergency protocols for peace of mind.",
              icon: <Mountain className="h-10 w-10 text-[#422006]" />,
            },
          ].map((feature, index) => (
            <div
              key={index}
              className="p-8 bg-white rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300"
            >
              <div className="flex justify-center mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-center">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-center">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Routes Section */}
      <Routes />

      {/* CTA Section */}
      <div className="bg-[#422006] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Start Your Climbing Adventure?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Contact us today to plan your perfect mountain expedition
          </p>
          <ScrollLink
            to="contact"
            smooth={true}
            duration={800}
            offset={-50} // Optional: Adjust scroll position to account for sticky headers
            className="mt-8 inline-block bg-slate-800 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors cursor-pointer"
          >
            Book This Route
          </ScrollLink>
        </div>
      </div>

      {/* Gallery Section */}
      <Gallery />
       {/* Plans Section */}
       <Plans />
      {/* Gallery Section */}
      <Contact />
    </div>
  );
}
