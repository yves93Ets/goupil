"use client";

import React from "react";
import { useLanguage } from "./language-provider";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-white text-gray-900 py-12 border-t border-gray-200 dark:bg-black dark:text-white dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <div className="w-8 h-8 bg-red-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">H</span>
            </div>
            <span className="text-xl font-semibold">
              {t("footer.companyName")}
            </span>
          </div>
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            {t("footer.description")}
          </p>
          <p className="text-gray-500 dark:text-gray-500 text-sm">
            {t("footer.copyright")}
          </p>
        </div>
      </div>
    </footer>
  );
}
