"use client";

import React from 'react';
import Typography from '@mui/material/Typography';
import SideNav from '@/layout/SideNav';
import Box from '@mui/material/Box';
import LottieAnimation from '@/LottieAnimation';
import MonkeyWorking from "../../static/animations/animation.json";
import HeroImage from "../../static/animations/hero.json";
import { Button, Hidden, useMediaQuery, useTheme } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
import Link from 'next/link';
import Container from "@mui/material/Container";
import DrawerNav from '@/layout/DrawerNav';


const Home: React.FC = () => {
  const theme = useTheme();
  const isLgDown = useMediaQuery(theme.breakpoints.down('lg'));
  const isMdDown = useMediaQuery(theme.breakpoints.down('md'));
  const isSmDown = useMediaQuery(theme.breakpoints.down('sm'));
  const isLgUp = useMediaQuery(theme.breakpoints.up('lg'));

  const width = isMdDown ? 350 : (isLgDown ? 450 : 650);
  const height = isMdDown ? 550 : (isLgDown ? 500 : 600);



  return (
    <>


      <Hidden smDown={true}>
        <SideNav />
      </Hidden>
      <Hidden smUp={true}>
        <DrawerNav />
      </Hidden>
      {/* Main Content */}

      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',

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

          [theme.breakpoints.up('lg')]: {
            paddingLeft: 20,
          },
          [theme.breakpoints.down('xl')]: {
            paddingLeft: 8,
            paddingTop: 14
          },
          [theme.breakpoints.down('lg')]: {
            paddingTop: 7,
            paddingLeft: 4,
            paddingRight: 2
          },

          [theme.breakpoints.down('md')]: {
            paddingRight: 8,
            paddingLeft: 3,
            fontSize: 14
          },
          [theme.breakpoints.down('sm')]: {
            gap: 1.5,
            paddingRight: 1,
            fontSize: 10
          },



        }}>
          <Box sx={{
            display: 'flex',
            flexDirection: 'column',

          }}>


            {/* Hi, and MonkeyWorking Animation */}
            <Box sx={{
              display: 'flex',
              alignItems: 'center',
              flexDirection: 'row',
            }}>
              <Typography variant="h3" sx={{
                color: '#EFDD00',
                fontWeight: 'bold',
                fontSize: '7em',

                fontFamily: 'Poppins, sans-serif'
              }}>
                Hi,
              </Typography>
              <Box sx={{
                display: 'flex',
                justifyContent: 'flex-end',
              }}>
                <LottieAnimation animationData={MonkeyWorking} width={150} height={100} />
              </Box>
            </Box>

            <Typography variant="h5" sx={{
              color: '#ffffff',
              fontWeight: 'bold',
              fontSize: '4em',
              fontFamily: 'Roboto, sans-serif'
            }}>
              I'm Arpan,
            </Typography>
            <Typography variant="h5" sx={{
              color: '#ffffff',
              fontWeight: 'bold',
              fontSize: '4em',
              fontFamily: 'Poppins, sans-serif'
            }}>
              Software Developer,
            </Typography>
            <Typography variant="subtitle1" sx={{
              color: '#757575',
              fontSize: '1em',
              fontFamily: 'Roboto, sans-serif',
              paddingBottom: 1
            }}>
              Based out of Bangalore
            </Typography>

            {/* Know More Button */}
            <Box
              sx={{
                paddingBottom: 1
              }}>
              <Link href="/about"
              >
                <Button
                  variant="outlined"

                  sx={{
                    color: '#FF5722',
                    borderColor: '#FF5722',
                    fontFamily: 'Poppins, sans-serif',
                    fontSize: '0.8em',
                    padding: '8px 16px',


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
            </Box>

            <Box sx={{
              display: 'flex',
              justifyContent: 'flex-start',
              paddingLeft: 0,
              paddingTop: 1,
              marginLeft: -1

            }}>
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
        </Box>

        <Box sx={{
          display: 'flex',
          flexDirection: 'row',
          backgroundColor: 'transparent',
          justifyContent: 'flex-end',

          [theme.breakpoints.up('lg')]: {
            paddingRight: 20,
            paddingTop: 6,
          },

          [theme.breakpoints.down('xl')]: {
            paddingRight: 0,
            paddingTop: 1,
            paddingY: 0

          },
        }}>
          {!isSmDown && (
            <LottieAnimation
              animationData={HeroImage}
              width={width}
              height={height}
            />
          )}


        </Box>
      </Box >

    </>
  );
};

export default Home;
