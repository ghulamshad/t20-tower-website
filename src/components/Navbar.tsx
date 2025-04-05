import React, { useState, useEffect, useCallback, memo } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  AppBar, 
  Toolbar, 
  Button, 
  IconButton, 
  Drawer, 
  List, 
  ListItem, 
  ListItemText, 
  Box,
  useMediaQuery,
  useTheme
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { styled } from '@mui/material/styles';

// Styled components for MUI customization
const StyledAppBar = styled(AppBar)(() => ({
  background: 'transparent',
  boxShadow: 'none',
  transition: 'all 0.3s ease',
  '&.scrolled': {
    background: 'rgba(0, 0, 0, 0.85)',
    backdropFilter: 'blur(10px)',
    WebkitBackdropFilter: 'blur(10px)',
    boxShadow: '0 8px 30px rgba(0, 0, 0, 0.2)',
  }
}));

const Logo = styled(Link)(() => ({
  fontSize: '2.2rem',
  fontWeight: 700,
  color: 'var(--color-white)',
  textDecoration: 'none',
  fontFamily: 'var(--font-primary)',
  letterSpacing: '1.5px',
  transition: 'transform 0.3s ease',
  '&:hover': {
    transform: 'translateY(-4px)',
  },
  '& span': {
    color: 'var(--color-accent)',
  }
}));



const StyledDrawer = styled(Drawer)(() => ({
  '& .MuiDrawer-paper': {
    width: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.95)',
    backdropFilter: 'blur(10px)',
    WebkitBackdropFilter: 'blur(10px)',
    padding: '6rem 2rem 2rem',
  }
}));




// Navigation links data
const navLinks = [
  { path: '/', label: 'Home' },
  { path: '/about', label: 'About' },
  { path: '/amenities', label: 'Amenities' },
  { path: '/floorplans', label: 'Floor Plans' },
  { path: '/gallery', label: 'Gallery' }
];

// Memoized navigation link component
const NavLink = memo(({ to, label, isActive, onClick }: { to: string; label: string; isActive: boolean; onClick?: () => void }) => (
  <Box sx={{ margin: '0 1rem' }}>
    <Link 
      to={to}
      onClick={onClick}
      style={{ 
        textDecoration: 'none', 
        color: 'var(--color-white)',
        position: 'relative',
        padding: '0.5rem 0',
        transition: 'color 0.3s ease'
      }}
      className={isActive ? 'active' : ''}
    >
      {label}
    </Link>
  </Box>
));

// Memoized CTA button component
const ContactButton = memo(({ onClick }: { onClick?: () => void }) => (
  <Link 
    to="/contact"
    onClick={onClick}
    style={{ 
      textDecoration: 'none',
      marginLeft: '2rem'
    }}
  >
    <Button 
      variant="contained"
      sx={{
        backgroundColor: 'var(--color-accent)',
        color: 'var(--color-white)',
        borderRadius: '50px',
        padding: '0.75rem 1.5rem',
        boxShadow: '0 4px 12px rgba(230, 177, 126, 0.2)',
        '&:hover': {
          backgroundColor: 'var(--color-accent-hover)',
          transform: 'translateY(-2px)',
          boxShadow: '0 6px 18px rgba(230, 177, 126, 0.3)',
        }
      }}
    >
      Contact Us
    </Button>
  </Link>
));

// Memoized drawer item component
const DrawerItem = memo(({ to, label, isActive, onClick }: { to: string; label: string; isActive: boolean; onClick: () => void }) => (
  <ListItem sx={{ padding: '1rem 0' }}>
    <Link 
      to={to}
      onClick={onClick}
      style={{ 
        textDecoration: 'none',
        width: '100%'
      }}
    >
      <ListItemText 
        primary={label} 
        primaryTypographyProps={{
          className: isActive ? 'active' : '',
          sx: {
            fontSize: '1.5rem',
            color: 'var(--color-white)',
            textAlign: 'left',
            position: 'relative',
            '&::after': {
              content: '""',
              position: 'absolute',
              bottom: -5,
              left: 0,
              width: 0,
              height: '2px',
              backgroundColor: 'var(--color-accent)',
              transition: 'width 0.3s ease',
            },
            '&:hover': {
              color: 'var(--color-accent)',
              '&::after': {
                width: '50px',
              }
            }
          }
        }}
      />
    </Link>
  </ListItem>
));

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  
  // Memoized scroll handler
  const handleScroll = useCallback(() => {
    if (window.scrollY > 50) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  }, []);
  
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);
  
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);
  
  const handleCloseMenu = useCallback(() => {
    setMobileMenuOpen(false);
  }, []);
  
  return (
    <>
      <StyledAppBar position="fixed" className={scrolled ? 'scrolled' : ''}>
        <Toolbar sx={{ justifyContent: 'space-between', py: 1 }}>
          <Logo to="/">
            T<span>20</span> Tower
          </Logo>
          
          {!isMobile && (
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              {navLinks.map(link => (
                <NavLink 
                  key={link.path}
                  to={link.path}
                  label={link.label}
                  isActive={location.pathname === link.path}
                />
              ))}
              <ContactButton />
            </Box>
          )}
          
          {isMobile && (
            <IconButton 
              edge="end" 
              color="inherit" 
              aria-label="menu" 
              onClick={() => setMobileMenuOpen(true)}
            >
              <MenuIcon />
            </IconButton>
          )}
        </Toolbar>
      </StyledAppBar>
      
      <StyledDrawer
        anchor="right"
        open={mobileMenuOpen}
        onClose={handleCloseMenu}
        transitionDuration={300}
      >
        <Box sx={{ display: 'flex', justifyContent: 'flex-end', p: 1 }}>
          <IconButton onClick={handleCloseMenu}>
            <CloseIcon sx={{ color: 'var(--color-white)', fontSize: '2rem' }} />
          </IconButton>
        </Box>
        
        <List>
          {navLinks.map(link => (
            <DrawerItem 
              key={link.path}
              to={link.path}
              label={link.label}
              isActive={location.pathname === link.path}
              onClick={handleCloseMenu}
            />
          ))}
          <Box sx={{ mt: 2 }}>
            <Link 
              to="/contact"
              onClick={handleCloseMenu}
              style={{ 
                textDecoration: 'none',
                width: '100%'
              }}
            >
              <Button 
                variant="contained"
                fullWidth
                sx={{
                  backgroundColor: 'var(--color-accent)',
                  color: 'var(--color-white)',
                  borderRadius: '50px',
                  padding: '0.75rem 2rem',
                  marginTop: '1rem',
                  '&:hover': {
                    backgroundColor: 'var(--color-accent-hover)',
                    transform: 'translateY(-2px)',
                    boxShadow: '0 6px 18px rgba(230, 177, 126, 0.3)',
                  }
                }}
              >
                Contact Us
              </Button>
            </Link>
          </Box>
        </List>
      </StyledDrawer>
    </>
  );
};

export default memo(Navbar);
