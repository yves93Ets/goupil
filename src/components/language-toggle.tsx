"use client";

import React, { useEffect, useState } from "react";
import { useLanguage } from "./language-provider";

export function LanguageToggle() {
  const { language, setLanguage } = useLanguage();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <button
        className="px-3 py-2 text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors duration-200"
        aria-label="Toggle language"
      >
        EN
      </button>
    );
  }

  return (
    <button
      onClick={() => setLanguage(language === "en" ? "fr" : "en")}
      className="px-3 py-2 text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors duration-200"
      aria-label="Toggle language"
    >
      {language === "en" ? "FR" : "EN"}
    </button>
  );
}
