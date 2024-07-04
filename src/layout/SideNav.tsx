"use client";

import React, { useState, useEffect } from 'react';
import { List, ListItemButton, ListItemIcon, Typography } from '@mui/material';
import Link from 'next/link';
import { keyframes } from '@mui/system';
import Image from 'next/image';

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

const SideNav: React.FC = () => {
  const [activeIcon, setActiveIcon] = useState("/");

  useEffect(() => {
    setActiveIcon(window.location.pathname);
  }, []);

  return (
    <div style={{
      display: "flex",
      justifyContent: "center",
      width: "100%"
    }}>
      <List
        sx={{
          width: 500,
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          gap: '8px',
          backgroundColor: 'transparent',
          marginTop: "30px",
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
                width: 110,
                paddingInlineStart: '0.1px',
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
              onClick={() => setActiveIcon(href)}
              selected={activeIcon === href}
            >
              <ListItemIcon
                sx={{
                  marginRight: '6px',
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
              <Typography
                sx={{
                  display: 'flex',
                  marginLeft: '-16px',
                  marginRight: '8px',
                  marginBottom: '-3px',
                  fontWeight: 'bold',
                  fontSize: '15px',
                  color: '#fff',
                }}
              >
                {label}
              </Typography>
            </ListItemButton>
          </Link>
        ))}
      </List>
    </div>

  );
};

export default SideNav;
