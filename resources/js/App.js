// import './App.css';
import { Link, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import "flag-icon-css/css/flag-icons.min.css"
import Test from './components/Test';
import Home from './pages/Home';
import { useTranslation } from 'react-i18next';
import i18next from "i18next";
import cookies from 'js-cookie';
import { useEffect } from 'react';

import { DropdownButton, Dropdown } from 'react-bootstrap';
import { BsGlobe } from "react-icons/bs"

const languages = [
  {
    code: 'en',
    name:'English',
    country_code:'gb',
  },
  {
    code: 'bn',
    name:'বাংলাদেশ',
    country_code:'bd',
  },
  {
    code: 'ar',
    name: 'العربية',
    country_code:'sa',
    dir: 'rtl',
  }
];

function App() {

  const currentLanguageCode = cookies.get('i18next') || 'en'
  const currentLanguage = languages.find((l) => l.code === currentLanguageCode)

  const { t } = useTranslation();

  useEffect(() => {
    document.body.dir = currentLanguage.dir || 'ltr'
    document.title    = t('title')
  }, [currentLanguage, t])


  return (
    <div className="App">
     
     <div className='AppNavbar'>
          <div>
              <Link to='/'>{ t('home') }</Link>
          </div>
          <div>
              <Link to='/test'> Click Me</Link>
          </div>

          <DropdownButton
              variant="link"
              title={<BsGlobe/>}
              id="input-group-dropdown-1"
            >
              <Dropdown.Item>
              <span>{t('language')}</span>
              </Dropdown.Item>
              {
                languages.map(({code, name, country_code})=>(
                  <Dropdown.Item key={country_code} 
                  onClick={() => i18next.changeLanguage(code)}
                    disabled={code === currentLanguageCode}
                  >
                    <span className={`flag-icon flag-icon-${country_code} mx-2`}></span>
                    {name}</Dropdown.Item>
                ))
              }
            </DropdownButton>
     </div>

      <Routes>
        <Route path='/' element={<Home />}  />
          <Route path='/test' element={<Test />} />
      </Routes>
    </div>
  );
}

export default App;
