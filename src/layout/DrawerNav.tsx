"use client";

import React, { useState, useEffect } from 'react';
import { Drawer, List, ListItemButton, ListItemIcon, IconButton } from '@mui/material';
import Link from 'next/link';
import { keyframes } from '@mui/system';
import Image from 'next/image';
import MenuIcon from '@mui/icons-material/Menu';

const jiggle = keyframes`
  0%, 100% { transform: rotate(-5deg); }
  50% { transform: rotate(3deg); }
`;

const icons = [
  { href: "/", src: "/images/icons/home1.svg", label: "Home" },
  { href: "/about", src: "/images/icons/info-hexagon.svg", label: "About" },
  { href: "/work", src: "/images/icons/briefcase.svg", label: "Work" },
  { href: "/contact", src: "/images/icons/phone.svg", label: "Contact" },
];

const DrawerNav: React.FC = () => {
  const [activeIcon, setActiveIcon] = useState("/");
  const [drawerOpen, setDrawerOpen] = useState(false);

  useEffect(() => {
    setActiveIcon(window.location.pathname);
  }, []);

  const toggleDrawer = (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
    if (event.type === 'keydown' && (event as React.KeyboardEvent).key === 'Tab' || (event as React.KeyboardEvent).key === 'Shift') {
      return;
    }
    setDrawerOpen(open);
  };

  return (
    <>
      <IconButton
        edge="start"
        color="inherit"
        aria-label="menu"
        onClick={toggleDrawer(true)}
        sx={{ display: 'flex', top: 10, left: 10 }}
      >
        <MenuIcon />
      </IconButton>
      <Drawer
        anchor="left"
        open={drawerOpen}
        onClose={toggleDrawer(false)}
      >
        <List
          sx={{
            backgroundColor: '#00001a',
            paddingLeft: 1,
            height: 568,
          }}
        >
          {icons.map(({ href, src, label }) => (
            <Link key={href} href={href} passHref style={{ textDecoration: 'none', backgroundColor: "#00001a" }}>
              <ListItemButton
                component="a"
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: '8px',
                  background: "#00001a",
                  borderRadius: 4,
                  transition: 'color 0.8s, background-color 0.8s',
                  '&:hover': {
                    backgroundColor: '#EFDD00',
                    '& img': {
                      animation: `${jiggle} 0.5s infinite`,
                    },
                    '& .MuiTypography-root': {
                      color: 'black',
                      transition: 'color 0.4s ease-in',
                    },
                  },
                  '&.Mui-selected, &.Mui-selected:hover': {
                    backgroundColor: '#EFDD00',
                    '& img': {
                      animation: `${jiggle} 0.5s infinite`,
                    },
                    '&::after': {
                      content: '""',
                      display: 'flex',
                      marginTop: '4px',
                      transition: 'width 0.4s',
                    },
                    '& .MuiTypography-root': {
                      color: 'black',
                      transition: 'color 0.4s ease-in',
                    },
                  },
                  '& img': {
                    animation: activeIcon === href ? `${jiggle} 0.5s infinite` : 'none',
                    transition: 'filter 0.4s ease-in',
                  },
                  '&:active': {
                    '& img': {
                      animation: 'none',
                    },
                  },
                  '&::after': {
                    content: '""',
                    display: activeIcon === href ? 'block' : 'none',
                    backgroundColor: 'yellow',
                    marginTop: '4px',
                    transition: 'width 0.5s',
                  },
                }}
                onClick={() => { setActiveIcon(href); setDrawerOpen(false); }}
                selected={activeIcon === href}
              >
                <ListItemIcon
                  sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    '& img': {
                      width: 20,
                      height: 20,
                      paddingInline: 1,
                    },
                  }}
                >
                  <Image src={src} alt={label} width={30} height={30} />
                </ListItemIcon>
              </ListItemButton>
            </Link>
          ))}
        </List>
      </Drawer>
    </>
  );
};

export default DrawerNav;
