import { useTranslation } from "react-i18next";

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };

  return (
    <div className="flex justify-end p-4">
      <button onClick={() => changeLanguage("es")} className="mr-2 flex items-center space-x-1">
        <img src="https://flagcdn.com/w40/es.png" alt="Español" className="w-5 h-5" />
        <span>ES</span>
      </button>
      <button onClick={() => changeLanguage("en")} className="flex items-center space-x-1">
        <img src="https://flagcdn.com/w40/us.png" alt="English" className="w-5 h-5" />
        <span>EN</span>
      </button>
    </div>
  );
};

export default LanguageSwitcher;