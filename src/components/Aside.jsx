import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Aside = () => {
  const { t } = useTranslation();

  return (
    <aside className="bg-gradient-to-r from-teal-700 via-teal-800 to-teal-900 p-4 rounded-lg shadow-md text-white h-full flex flex-col justify-center items-center">
      <h1 className="font-bold text-center text-xl sm:text-2xl">{t("asideTitle")}</h1>
      <ul className="space-y-3 mt-4">
        <li>
          <Link
            to="/localidades"
            className="block hover:text-yellow-300 font-semibold text-lg sm:text-xl"
          >
            {t("asideLocality")}
          </Link>
        </li>
        <li>
          <Link
            to="/festividades"
            className="block hover:text-yellow-300 font-semibold text-lg sm:text-xl"
          >
            {t("asideFest")}
          </Link>
        </li>
        <li>
          <Link
            to="/flora"
            className="block hover:text-yellow-300 font-semibold text-lg sm:text-xl"
          >
            {t("asideFlora")}
          </Link>
        </li>
        <li>
          <Link
            to="/fauna"
            className="block hover:text-yellow-300 font-semibold text-lg sm:text-xl"
          >
            {t("asideFauna")}
          </Link>
        </li>
        <li>
          <Link
            to="/galeria"
            className="block hover:text-yellow-300 font-semibold text-lg sm:text-xl"
          >
            {t("asidePhotos")}
          </Link>
        </li>
      </ul>
    </aside>
  );
};

export default Aside;