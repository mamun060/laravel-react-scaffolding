import React, { Suspense }  from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from "react-router-dom";

import i18n, { use } from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpApi from 'i18next-http-backend';



i18n
.use(initReactI18next)
.use(LanguageDetector)
.use(HttpApi)
.init({
  supportedLngs:['en','bn','fr','ar'],
  fallbackLng: "en",
  interpolation: {
    escapeValue: false
  },
  detection: {
    order: ['path','cookie', 'htmlTag', 'localStorage', 'sessionStorage', 'navigator', 'querystring', 'subdomain'],
    caches: ['localStorage', 'cookie'],
  },
  backend: {
    loadPath: '/locales/{{lng}}/translation.json',
  },
  // react:{
  //   useSuspense: false
  // }
});


const loadingMarkup = (
    <div className="py-4 text-center">
      <h3>Loading..</h3>
    </div>
  )


ReactDOM.render(
    <Suspense fallback={loadingMarkup}>
        <BrowserRouter>
            <App /> 
        </BrowserRouter>
    </Suspense>,
    document.getElementById('root')
);
