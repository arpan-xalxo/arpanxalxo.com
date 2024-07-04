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

      <Box>
        <Box
          sx={{
            textAlign: 'center',
            padding: 9,

            [theme.breakpoints.down('sm')]: {
              padding: 1

            },

          }}
        >
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              paddingLeft: 10,
              gap: 1
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

              gridTemplateColumns: isXl ? 'repeat(4, 1fr)' : isLg ? 'repeat(3, 1fr)' : isMd ? 'repeat(2, 1fr)' : 'repeat(1, 1fr)',
              gap: 2,


              [theme.breakpoints.down('md')]: {
                marginLeft: '20%',
                marginRight: 'auto',
                padding: 2,
                width: 500
              },
              [theme.breakpoints.down('sm')]: {
                padding: 2,
                margin: 0,
                width: '90%',

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
