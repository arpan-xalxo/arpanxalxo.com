"use client";

import React from 'react';
import Typography from '@mui/material/Typography';
import SideNav from '@/layout/SideNav';
import Box from '@mui/material/Box';
import LottieAnimation from '@/LottieAnimation';
import MonkeyWorking from "../../static/animations/animation.json";
import HeroImage from "../../static/animations/hero.json";
import { Button, useMediaQuery, useTheme } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
import Link from 'next/link';

const Home: React.FC = () => {
  const theme = useTheme();
  return (
    <>

      <Box >
        <SideNav />
      </Box>
      {/* Main Content */}

      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between'
        }}

      >
        <Box sx={{
          display: 'flex',
          paddingLeft: 2,
          paddingTop: 20,
          flexDirection: 'column',
          alignItems: 'start',
          gap: '10px',
          textAlign: 'left',
          [theme.breakpoints.down('lg')]: {
            backgroundColor: 'white'
          },
        }}>
          {/* Hi, and MonkeyWorking Animation */}
          <Box sx={{
            display: 'flex',
            alignItems: 'center',
            gap: '5px',
            flexDirection: 'row',
          }}>
            <Typography variant="h3" sx={{
              color: '#EFDD00',
              fontWeight: 'bold',
              fontSize: '7em',
              margin: '0 0 -20px 0',
              fontFamily: 'Poppins, sans-serif'
            }}>
              Hi,
            </Typography>
            <Box sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'flex-end',
              gap: '5px',
              margin: '0 0 -15px -30px',
            }}>
              <LottieAnimation animationData={MonkeyWorking} width={150} height={100} />
            </Box>
          </Box>

          <Typography variant="h5" sx={{
            color: '#ffffff',
            fontWeight: 'bold',
            fontSize: '4em',
            margin: '0 0 -15px 0',
            fontFamily: 'Roboto, sans-serif'
          }}>
            I'm Arpan,
          </Typography>
          <Typography variant="h5" sx={{
            color: '#ffffff',
            fontWeight: 'bold',
            fontSize: '4em',
            margin: '0 0 -15px 0',
            fontFamily: 'Poppins, sans-serif'
          }}>
            Software Developer,
          </Typography>
          <Typography variant="subtitle1" sx={{
            color: '#757575',
            fontSize: '1em',
            margin: '0',
            marginTop: 1,
            fontFamily: 'Roboto, sans-serif'
          }}>
            Based out of Bangalore
          </Typography>

          {/* Know More Button */}
          <Link href="/about">
            <Button
              variant="outlined"
              sx={{
                color: '#FF5722',
                borderColor: '#FF5722',
                fontFamily: 'Poppins, sans-serif',
                fontSize: '0.8em',
                padding: '8px 16px',
                marginTop: '10px',
                transition: 'background-color 0.3s, color 0.3s',
                '&:hover': {
                  backgroundColor: '#FFA27F',
                  color: '#ffffff',
                },
              }}
            >
              Know more
            </Button>
          </Link>

          <Box sx={{ marginTop: '10px', marginLeft: '-5px' }}>
            <IconButton
              component="a"
              href="https://www.instagram.com/arpanxalxo21/"
              target="_blank"
              sx={{
                padding: '5px',
                fontSize: '0.6rem',
                color: '#DB5353',
                borderColor: '#DB5353',
                borderRadius: '50%',
                border: '0.5px solid',
                margin: '0 5px',
                transition: 'background-color 0.3s, color 0.3s',
                '&:hover': {
                  backgroundColor: '#FFA27F',
                  color: '#ffffff',
                },
              }}
            >
              <InstagramIcon />
            </IconButton>
            <IconButton
              component="a"
              href="https://twitter.com/"
              target="_blank"
              sx={{
                padding: '5px',
                fontSize: '0.6rem',
                color: '#DB5353',
                borderColor: '#DB5353',
                borderRadius: '50%',
                border: '0.5px solid',
                margin: '0 5px',
                transition: 'background-color 0.3s, color 0.3s',
                '&:hover': {
                  backgroundColor: '#FFA27F',
                  color: '#ffffff',
                },
              }}
            >
              <TwitterIcon />
            </IconButton>
            <IconButton
              component="a"
              href="https://github.com/arpan-xalxo"
              target="_blank"
              sx={{
                padding: '5px',
                fontSize: '0.6rem',
                color: '#DB5353',
                borderColor: '#DB5353',
                borderRadius: '50%',
                border: '0.5px solid',
                margin: '0 5px',
                transition: 'background-color 0.3s, color 0.3s',
                '&:hover': {
                  backgroundColor: '#FFA27F',
                  color: '#ffffff',
                },
              }}
            >
              <GitHubIcon />
            </IconButton>
          </Box>
        </Box>

        <Box sx={{
          display: 'flex',
          flexDirection: 'row',
          backgroundColor: 'transparent',
          justifyContent: 'flex-end',
        }}>
          <LottieAnimation animationData={HeroImage} width={650} height={600} />
        </Box>
      </Box>

    </>
  );
};

export default Home;
