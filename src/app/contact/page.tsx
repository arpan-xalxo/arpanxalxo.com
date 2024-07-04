"use client";

import { useState } from 'react';
import { Box, Typography, TextField, Button, useMediaQuery, Hidden } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import SideNav from '@/layout/SideNav';
import Link from 'next/link';
import DrawerNav from '@/layout/DrawerNav';

const Contact = () => {
  const theme = useTheme();
  const isXl = useMediaQuery(theme.breakpoints.up('xl'));
  const isLg = useMediaQuery(theme.breakpoints.up('lg'));
  const isMd = useMediaQuery(theme.breakpoints.up('md'));
  const isSm = useMediaQuery(theme.breakpoints.down('sm'));
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [mailToString, setMailToString] = useState('');

  const handleChange = (setter: React.Dispatch<React.SetStateAction<string>>) => (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setter(event.target.value);
    setMailToString(`mailto:xalxoarpan1@gmail.com?subject=Contact Us Form Website By ${name}&body=${message}`);
  };

  return (
    <>

      <Hidden smDown={true}>
        <SideNav />
      </Hidden>
      <Hidden smUp={true}>
        <DrawerNav />
      </Hidden>

      <Box sx={{
        display: 'flex',
        flexDirection: isSm ? 'column' : 'row',
        paddingTop: isSm ? 2 : 5,
        paddingLeft: isSm ? 0 : 42,
        paddingRight: isSm ? 2 : 40,
        justifyContent: 'center',
        alignItems: 'center',
        [theme.breakpoints.down('lg')]: {
          paddingLeft: 30,
          paddingRight: 30,
        },
        [theme.breakpoints.down('md')]: {
          paddingLeft: 15,
          paddingRight: 15,

        },
        [theme.breakpoints.down('sm')]: {
          paddingLeft: 1,
          paddingRight: 2,


        },
      }}>
        <Box sx={{ width: '100%' }}>
          <Box
            sx={{
              padding: 2,
              backgroundColor: '#00001a',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'left',

            }}
          >
            <Typography variant="h4" sx={{ color: '#EFDD00', fontWeight: 'bold', marginBottom: '3px', fontSize: 50 }}>
              Contact Me
            </Typography>
            <Typography variant="body1" sx={{ color: 'white', fontWeight: 'bold', fontSize: '16px', marginBottom: '1px' }}>
              Feel free to drop a message
            </Typography>

            <Box sx={{ display: 'flex', flexDirection: 'column', gap: '0.5em', width: '100%' }}>
              <TextField
                label="Name"
                value={name}
                onChange={handleChange(setName)}
                margin="normal"
                variant="outlined"
                InputLabelProps={{
                  style: { color: 'white' },
                }}
                InputProps={{
                  style: { color: 'white' },
                }}
                sx={{
                  '& .MuiOutlinedInput-root': {
                    '& fieldset': {
                      borderColor: 'white',
                    },
                    '&:hover fieldset': {
                      borderColor: 'white',
                    },
                    '&.Mui-focused fieldset': {
                      borderColor: 'white',
                    },
                  },
                }}
              />
              <TextField
                multiline
                rows={4}
                label="Message"
                value={message}
                onChange={handleChange(setMessage)}
                margin="normal"
                variant="outlined"
                InputLabelProps={{
                  style: { color: 'white' },
                }}
                InputProps={{
                  style: { color: 'white' },
                }}
                sx={{
                  '& .MuiOutlinedInput-root': {
                    '& fieldset': {
                      borderColor: 'white',
                    },
                    '&:hover fieldset': {
                      borderColor: 'white',
                    },
                    '&.Mui-focused fieldset': {
                      borderColor: 'white',
                    },
                  },
                }}
              />
              <Link href={mailToString} target='_blank'>
                <Button
                  component="a"
                  href={mailToString}
                  style={{
                    textAlign: 'center',
                    ...theme.typography.body1,
                    width: isSm ? '100%' : '40%',
                  }}
                  sx={{
                    color: '#EFDD00',
                    borderColor: '#EFDD00',
                    borderWidth: '2px',
                    borderStyle: 'solid',
                    fontWeight: 'bold',
                    '&:hover': {
                      backgroundColor: '#EFDD00',
                      color: 'black',
                      fontWeight: 'bold',
                    },
                  }}
                >
                  Send
                </Button>
              </Link>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Contact;
