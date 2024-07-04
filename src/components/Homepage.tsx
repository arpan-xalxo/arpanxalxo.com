import PinDropIcon from '@mui/icons-material/PinDrop';
import { Box, Typography, makeStyles } from '@mui/material';


import PageFooter from '@/components/shared/PageFooter';
import { SITE_CONFIG } from '@/constants';



export default function Homepage({
  reactVersion = 'unknown',
  nextJsVersion = 'unknown',
}) {
  return (
    <main>
      <section>
        <PinDropIcon
          className='page-title'
          sx={{ width: '3rem', height: '3rem' }}
        />
        <Typography
          variant='h5'
          component='h1'
          gutterBottom
          className='page-title'
        >
          {SITE_CONFIG.title}
        </Typography>

      </section>
      <PageFooter />
    </main>
  );
}



