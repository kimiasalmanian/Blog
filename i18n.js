// src/i18n.js
import i18n from "i18next";
import Backend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

i18n
  .use(Backend) // لود فایل‌های ترجمه از public/locales
  .use(LanguageDetector) // تشخیص زبان مرورگر
  .use(initReactI18next) // ادغام با React
  .init({
    fallbackLng: "fa", // زبان پیش‌فرض: فارسی
    supportedLngs: ["fa", "en"], // زبان‌های پشتیبانی‌شده
    backend: {
      loadPath: "/locales/{{lng}}.json", // مسیر فایل‌های ترجمه
    },
    load: "languageOnly", // فقط زبان (مثل fa یا en)
    debug: false, // برای توسعه
    interpolation: {
      escapeValue: false, // برای React نیازی به escape نیست
    },
  });

export default i18n;