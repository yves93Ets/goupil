"use client";

import React from "react";
import { useLanguage } from "./language-provider";
import Image from "next/image";

export default function Projects() {
  const { t } = useLanguage();

  const projects = [
    {
      id: 1,
      titleKey: "projects.items.office.title",
      categoryKey: "projects.items.office.category",
      image: "https://picsum.photos/600/400?random=1",
    },
    {
      id: 2,
      titleKey: "projects.items.villa.title",
      categoryKey: "projects.items.villa.category",
      image: "https://picsum.photos/600/400?random=2",
    },
    {
      id: 3,
      titleKey: "projects.items.warehouse.title",
      categoryKey: "projects.items.warehouse.category",
      image: "https://picsum.photos/600/400?random=3",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            {t("projects.title")}
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            {t("projects.subtitle")}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-white dark:bg-black rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-200 dark:border-gray-800"
            >
              <div className="relative h-64">
                <Image
                  src={project.image}
                  alt={t(project.titleKey)}
                  fill
                  className="object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-red-500/90 text-white">
                    {t(project.categoryKey)}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {t(project.titleKey)}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  {t("projects.description")}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="#projects"
            className="inline-flex items-center justify-center px-8 py-4 bg-red-500 hover:bg-red-600 text-white font-medium rounded-lg transition-colors duration-200"
          >
            {t("projects.viewAll")}
          </a>
        </div>
      </div>
    </section>
  );
}
