"use client";

import React from "react";
import { useLanguage } from "./language-provider";

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section
      id="home"
      className="pt-16 pb-20 bg-gradient-to-br from-gray-50 to-white dark:from-black dark:to-gray-900"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Main heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            {t("hero.title")}
          </h1>

          {/* Subtitle */}
          <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-10">
            {t("hero.subtitle")}
          </p>

          {/* CTA button */}
          <a
            href="#contact"
            className="inline-flex items-center justify-center px-8 py-4 bg-red-500 hover:bg-red-600 text-white font-medium rounded-lg transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            {t("hero.cta")}
            <svg
              className="ml-2 w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </a>

          {/* Stats */}
          <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                {t("hero.stats.projects")}
              </div>
              <div className="text-gray-600 dark:text-gray-300">
                {t("hero.stats.projectsLabel")}
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                {t("hero.stats.experience")}
              </div>
              <div className="text-gray-600 dark:text-gray-300">
                {t("hero.stats.experienceLabel")}
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                {t("hero.stats.satisfaction")}
              </div>
              <div className="text-gray-600 dark:text-gray-300">
                {t("hero.stats.satisfactionLabel")}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
