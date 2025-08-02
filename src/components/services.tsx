"use client";

import React from "react";
import { useLanguage } from "./language-provider";

export default function Services() {
  const { t } = useLanguage();

  const services = [
    {
      title: t("services.residential"),
      description:
        "Custom homes and renovations designed to your specifications.",
      icon: (
        <svg
          className="w-12 h-12 text-red-500"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M12 2L2 9v11h20V9l-10-7zM12 4.5L19 10v9H5v-9l7-5.5z" />
          <path d="M9 14h6v4H9z" />
        </svg>
      ),
    },
    {
      title: t("services.commercial"),
      description:
        "Office buildings, retail spaces, and industrial facilities.",
      icon: (
        <svg
          className="w-12 h-12 text-red-500"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M4 4h16v16H4V4zm2 2v12h12V6H6z" />
          <path d="M8 8h8v2H8V8zm0 4h8v2H8v-2z" />
        </svg>
      ),
    },
    {
      title: t("services.renovation"),
      description: "Transform existing spaces with expert renovation services.",
      icon: (
        <svg
          className="w-12 h-12 text-red-500"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
        </svg>
      ),
    },
  ];

  return (
    <section id="services" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            {t("services.title")}
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            {t("services.subtitle")}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white dark:bg-black rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-200 dark:border-gray-800"
            >
              <div className="flex justify-center mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                {service.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
