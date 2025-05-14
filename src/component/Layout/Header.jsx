import { AppBar, Box, Button, Container, Toolbar, Typography, IconButton, Menu, MenuItem } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { useEffect, useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';

function Header() {
  const { t, i18n } = useTranslation();
  const [anchorEl, setAnchorEl] = useState(null); // برای مدیریت منوی همبرگری

  useEffect(() => {
    const storedLanguage = localStorage.getItem('language') || 'fa';
    i18n.changeLanguage(storedLanguage);
    document.documentElement.lang = storedLanguage;
    document.documentElement.dir = storedLanguage === 'fa' ? 'rtl' : 'ltr';
  }, [i18n]);

  const changeLanguage = (lng) => {
    localStorage.setItem('language', lng);
    i18n.changeLanguage(lng);
    document.documentElement.lang = lng;
    document.documentElement.dir = lng === 'fa' ? 'rtl' : 'ltr';
  };

  const isRtl = i18n.language === 'fa';

  // باز و بسته کردن منوی همبرگری
  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const navItems = [
    { label: t('Authors'), path: '/authors' },
    { label: t('home'), path: '/' },
    { label: t('aboutUs'), path: '/about' },
    { label: t('services'), path: '/services' },
    { label: t('blog'), path: '/blog' },
    { label: t('contactUs'), path: '/contact' },
  ];

  return (
    <AppBar
      position="sticky"
      sx={{
        backdropFilter: 'blur(5px)',
        WebkitBackdropFilter: 'blur(5px)',
        boxShadow: 'none',
        backgroundColor: 'rgba(17, 3, 65, 0.4)',
      }}
    >
      <Container maxWidth="lg">
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          {/* عنوان Planets Blog */}
          <Typography
            component="h3"
            variant="h4" // کوچک‌تر برای موبایل
            fontWeight="700"
            className={isRtl ? 'font-yekan' : 'font-nunito'}
            sx={{ flexGrow: { xs: 1, sm: 0 } }} // در موبایل فضای بیشتری بگیره
          >
            {t('planetsBlog')}
          </Typography>

          {/* دکمه‌های ناوبری - نمایش در دسکتاپ */}
          <Box sx={{ display: { xs: 'none', sm: 'flex' }, gap: 2 }}>
            {navItems.map((item) => (
              <Button key={item.label} color="inherit" href={item.path}>
                {item.label}
              </Button>
            ))}
          </Box>

          {/* منوی همبرگری - نمایش در موبایل */}
          <Box sx={{ display: { xs: 'flex', sm: 'none' }, alignItems: 'center' }}>
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={handleMenuOpen}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleMenuClose}
              anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
              transformOrigin={{ vertical: 'top', horizontal: 'right' }}
            >
              {navItems.map((item) => (
                <MenuItem key={item.label} onClick={handleMenuClose}>
                  <Button color="inherit" href={item.path}>
                    {item.label}
                  </Button>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          {/* پرچم‌ها */}
          <Box className={`flex gap-1 sm:gap-2 ${isRtl ? 'mr-1 sm:mr-4' : 'ml-1 sm:ml-4'}`}>
            <button
              type="button"
              className="flex w-7 h-7 rounded-lg"
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
              className="flex w-7 h-7 rounded-lg"
              onClick={() => changeLanguage('fa')}
            >
              <img
                src="/images/flags/FA.svg"
                alt="پرچم فارسی"
                className="w-7 h-7 object-cover rounded-lg"
              />
            </button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Header;