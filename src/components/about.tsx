"use client";

import React from "react";
import { useLanguage } from "./language-provider";

export default function About() {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-20 bg-white dark:bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            {t("about.title")}
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            {t("about.subtitle")}
          </p>
        </div>

        <div className="max-w-4xl mx-auto text-center">
          <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
            {t("about.description")}
          </p>
        </div>
      </div>
    </section>
  );
}
