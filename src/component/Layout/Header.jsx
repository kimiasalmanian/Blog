import { AppBar, Button, Container, Toolbar, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

function Header() {
  const { t, i18n } = useTranslation();

  // بارگذاری اولیه زبان از localStorage
  useEffect(() => {
    const storedLanguage = localStorage.getItem('language') || 'fa';
    i18n.changeLanguage(storedLanguage);
    document.documentElement.lang = storedLanguage;
  }, [i18n]);

  const changeLanguage = (lng) => {
    localStorage.setItem('language', lng);
    i18n.changeLanguage(lng);
    document.documentElement.lang = lng;
   
  };

  const isRtl = i18n.language === 'fa';

  return (
    <>
      <AppBar position="sticky" >
        <Container maxWidth="lg">
          <Toolbar className={`flex space-x-4 ${isRtl ? 'space-x-reverse rtl' : 'ltr'}`}>
            <Typography
              component="h1"
              variant="h5"
              fontWeight="bold"
              className={isRtl ? 'font-yekan' : 'font-nunito'}
            >
              {t('planetsBlog')}
            </Typography>
            <div className={`flex space-x-4 `}>
            <Button color="inherit" >
                {t('Authors')}
              </Button>
              <Button  color="inherit">
                {t('home')}
              </Button>
              <Button  color="inherit" >
                {t('aboutUs')}
              </Button>
              <Button color="inherit">
                {t('services')}
              </Button>
              <Button color="inherit" >
                {t('blog')}
              </Button>
              <Button color="inherit" >
                {t('contactUs')}
              </Button>
            </div>
            <div className={`flex gap-4 ${isRtl ? 'rtl' : 'ltr'} hx-5`}>
             
              <button
                type="button"
                className={`flex w-7 h-7 rounded-lg 
                `}
                onClick={() => changeLanguage('en')}
              >
                <img
                  src="/images/flags/EN.svg"
                  alt="English flag"
                  className="w-7 h-7 object-cover rounded-lg"
                />
              </button>
              <button
                type="button"
                className={`flex w-7 h-7 rounded-lg`}
                onClick={() => changeLanguage('fa')}
              >
                <img
                  src="/images/flags/FA.svg"
                  alt="پرچم فارسی"
                  className="w-7 h-7 object-cover rounded-lg"
                />
              </button>
            </div>
          </Toolbar>
        </Container>
      </AppBar>
      <h1 className={`text-xl ${isRtl ? 'rtl' : 'ltr'}`}>{t('headerTitle')}</h1>
    </>
  );
}

export default Header;