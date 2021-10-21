import { Suspense } from "react";
import "./App.css";
import { Select } from "antd";
import i18n from "i18next";
import { initReactI18next, useTranslation } from "react-i18next";
// ---------------------------------------------------------------
const translationsEn = { welcome: "Welcome!!!" };
const translationVi = { welcome: "Xin chào!!!" };

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: translationsEn },
    vi: { translation: translationVi },
  },
  lng: "en",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});
// ---------------------------------------------------------------
const App = () => {
  const { t } = useTranslation();

  const onChange = (e) => {
    i18n.changeLanguage(e);
  };

  return (
    <Suspense fallback="Loading...">
      <div className="App">
        <header className="App-header">
          <h1>{t("welcome")}</h1>
          <Select
            style={{ width: "120px", textAlign: "left" }}
            name="language"
            onChange={onChange}
            placeholder="English"
          >
            <option value="en">English</option>
            <option value="vi">Vietnamese</option>
          </Select>
        </header>
      </div>
    </Suspense>
  );
};

export default App;
