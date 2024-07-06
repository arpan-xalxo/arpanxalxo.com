"use client";

import { useEffect, useState } from 'react';
import Head from 'next/head';
import { Box, Button, Hidden, useMediaQuery, useTheme } from '@mui/material';
import WorkCard from './WorkCard';
import { workData } from "@/static/constant";
import SideNav from '@/layout/SideNav';
import DrawerNav from '@/layout/DrawerNav';

const Work = () => {
  const theme = useTheme();

  const isXl = useMediaQuery(theme.breakpoints.up('xl'));
  const isLg = useMediaQuery(theme.breakpoints.up('lg'));
  const isMd = useMediaQuery(theme.breakpoints.up('md'));
  const isSm = useMediaQuery(theme.breakpoints.up('sm'));

  const [projects, setProjects] = useState(workData.professional.concat(workData.openSource));
  const [active, setActive] = useState<'all' | 'professional' | 'openSource'>('all');

  const handleTypeToggle = (type: 'all' | 'professional' | 'openSource') => {
    if (type === 'all') {
      setProjects(workData.professional.concat(workData.openSource));
    } else {
      setProjects(workData[type]);
    }
    setActive(type);
  };

  useEffect(() => {
    setProjects(workData.professional.concat(workData.openSource));
    setActive('all');
  }, []);

  return (
    <>
      <Hidden smDown={true}>
        <SideNav />
      </Hidden>
      <Hidden smUp={true}>
        <DrawerNav />
      </Hidden>

      <Box
        sx={{
          [theme.breakpoints.down('sm')]: {
            width: '100%'

          },

        }}

      >
        <Box
          sx={{
            textAlign: 'center',
            padding: 9,


            [theme.breakpoints.down('md')]: {
              padding: 8,

            },
            [theme.breakpoints.down('sm')]: {
              padding: 1,
              paddingBottom: 4,
            },


          }}
        >
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              paddingLeft: 8,
              gap: 1,
              [theme.breakpoints.down('md')]: {
                paddingLeft: 1,


              },

              [theme.breakpoints.down('lg')]: {
                paddingLeft: 5,

              },
              [theme.breakpoints.up('lg')]: {
                paddingLeft: 0,

              },
              [theme.breakpoints.down('sm')]: {
                paddingLeft: 4,
                paddingRight: 2,
                gap: 1


              },



            }}
          >
            <Button
              onClick={() => handleTypeToggle('all')}
              sx={{

                fontWeight: "bold",
                color: active === 'all' ? 'black' : '#EFDD00',
                borderColor: '#EFDD00',
                '&:hover': {
                  backgroundColor: '#EFDD00',
                  color: 'black',
                },
                ...(active === 'all' && {
                  backgroundColor: '#EFDD00',
                  color: 'black',
                }),

                [theme.breakpoints.down('sm')]: {
                  fontSize: 10
                },

              }}
              variant="outlined"
            >
              All
            </Button>
            <Button
              onClick={() => handleTypeToggle('professional')}
              sx={{
                fontWeight: "bold",
                color: active === 'professional' ? 'black' : '#EFDD00',
                borderColor: '#EFDD00',
                '&:hover': {
                  backgroundColor: '#EFDD00',
                  color: 'black',
                },
                ...(active === 'professional' && {
                  backgroundColor: '#EFDD00',
                  color: 'black',
                }),

                [theme.breakpoints.down('sm')]: {
                  fontSize: 10


                },
              }}
              variant="outlined"
            >
              Professional
            </Button>
            <Button
              onClick={() => handleTypeToggle('openSource')}
              sx={{
                fontWeight: "bold",

                color: active === 'openSource' ? 'black' : '#EFDD00',
                borderColor: '#EFDD00',
                '&:hover': {
                  backgroundColor: '#EFDD00',
                  color: 'black',
                },
                ...(active === 'openSource' && {
                  backgroundColor: '#EFDD00',
                  color: 'black',
                }),
                [theme.breakpoints.down('sm')]: {
                  fontSize: 10
                },

              }}
              variant="outlined"
            >
              Open Source
            </Button>
          </Box>
        </Box>
        {/* Grid Start Here */}

        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <Box
            sx={{
              display: 'grid',
              gap: 2,
              gridTemplateColumns: isXl ? 'repeat(4, 1fr)' : isLg ? 'repeat(3, 1fr)' : isMd ? 'repeat(2, 1fr)' : isSm ? 'repeat(2, 1fr)' : 'repeat(1, 1fr)',

              [theme.breakpoints.down('sm')]: {
                padding: 6,
                width: '100%'

              },

              [theme.breakpoints.down('sm')]: {
                width: '100%',


              },


            }}
          >
            {projects.map((project, index) => (
              <Box
                key={index}
              >
                <WorkCard workData={project} />
              </Box>
            ))}
          </Box>
        </Box>
      </Box >
    </>
  );
};

export default Work;
