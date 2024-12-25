import React from "react";
import { routes } from "../data/routes";
import { Mountain, Clock, ArrowUp, ChevronRight } from "lucide-react";
import { Link as ScrollLink } from "react-scroll";

export default function ClimbingRoutes() {
  return (
    <div className="pt-16">
      <div className="bg-gradient-to-r from-[#422006] to-green-900 text-white py-20 flex items-center justify-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold mb-4">Climbing Routes</h1>
          <p className="text-xl text-gray-300">
            Discover our carefully curated climbing experiences in the Atlas
            Mountains
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 gap-12">
          {routes.map((route) => (
            <div
              key={route.id}
              className="bg-white rounded-2xl shadow-xl overflow-hidden"
            >
              <div className="grid md:grid-cols-2">
                <div className="relative h-64 md:h-auto">
                  <img
                    src={route.image}
                    alt={route.name}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </div>
                <div className="p-8">
                  <div className="flex items-center gap-4 mb-4">
                    <span
                      className={`px-4 py-1 rounded-full text-sm font-medium ${
                        route.difficulty === "Advanced"
                          ? "bg-red-100 text-red-800"
                          : route.difficulty === "Moderate"
                          ? "bg-yellow-100 text-yellow-800"
                          : "bg-green-100 text-green-800"
                      }`}
                    >
                      {route.difficulty}
                    </span>
                  </div>

                  <h2 className="text-2xl font-bold mb-4">{route.name}</h2>

                  <div className="grid grid-cols-3 gap-4 mb-6">
                    <div className="flex items-center gap-2">
                      <Clock className="h-5 w-5 text-slate-600" />
                      <span className="text-sm text-gray-600">
                        {route.duration}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <ArrowUp className="h-5 w-5 text-slate-600" />
                      <span className="text-sm text-gray-600">
                        {route.elevation}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Mountain className="h-5 w-5 text-slate-600" />
                      <span className="text-sm text-gray-600">
                        {route.details.startPoint}
                      </span>
                    </div>
                  </div>

                  <p className="text-gray-600 mb-6">{route.description}</p>

                  <div className="space-y-4">
                    <div>
                      <h3 className="font-semibold mb-2">Best Season</h3>
                      <p className="text-gray-600">
                        {route.details.bestSeason}
                      </p>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">Highlights</h3>
                      <ul className="grid grid-cols-2 gap-2">
                        {route.details.highlights.map((highlight, index) => (
                          <li
                            key={index}
                            className="flex items-center gap-2 text-gray-600"
                          >
                            <ChevronRight className="h-4 w-4 text-slate-400" />
                            <span className="text-sm">{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <ScrollLink
                    to="plans"
                    smooth={true}
                    duration={800}
                    offset={-50} // Optional: Adjust scroll position to account for sticky headers
                    className="mt-8 inline-block bg-slate-800 text-white px-6 py-3 rounded-lg font-semibold hover:bg-slate-700 transition-colors cursor-pointer"
                  >
                    Book This Route
                  </ScrollLink>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
