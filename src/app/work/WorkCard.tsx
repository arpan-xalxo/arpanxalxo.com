import { useState } from "react";
import { SxProps, Theme } from '@mui/system';
import { Box, Dialog, DialogTitle, DialogContent, DialogActions, IconButton, Typography, Button, Tooltip } from '@mui/material';
import CloseIcon from '@mui/icons-material/CloseRounded';
import Link from 'next/link';
import { useTheme, useMediaQuery } from '@mui/material';

interface Technology {
  name: string;
  icon: string;
}

interface WorkData {
  title: string;
  shortDesc: string;
  longDesc: string;
  technologies?: Technology[];
  link?: string;
  orgLogo: string;

  style: {
    color: string;
  };
}

interface WorkCardProps {
  workData: WorkData;
}

const WorkCard: React.FC<WorkCardProps> = ({ workData }) => {
  const [dialogOpen, setDialogOpen] = useState(false);
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  const handleOpen = () => setDialogOpen(true);
  const handleClose = () => setDialogOpen(false);

  return (
    <>
      <Box
        sx={{
          marginBottom: 2,
          cursor: 'pointer',
          width: isSmallScreen ? 350 : 400,


        }}
        onClick={handleOpen}
        className="ui card"
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'inherit',
            background: workData.style.color,
            padding: 1.5,
            transition: 'box-shadow 0.4s ease',
            minHeight: 150,
            minWidth: isSmallScreen ? '100%' : 359.25,
            borderRadius: "8px",
            justifyContent: 'space-between',

          }}
        >
          <Box sx={{ textAlign: 'right' }}>
            <img

              src={workData.orgLogo}
              alt={`${workData.title} logo`}
              style={{

                width: 70,
                height: 80,
                display: 'flex',
                alignContent: "left"
              }}
            />
          </Box>
          <Box>
            <Typography variant="h5" sx={{ fontWeight: 'bold', margin: 0, fontSize: 25 }}>
              {workData.title}
            </Typography>
            <Typography variant="subtitle1" sx={{ margin: 0, fontSize: 14, lineHeight: '18px' }}>
              {workData.shortDesc}
            </Typography>
          </Box>
        </Box>
      </Box>
      <Dialog
        open={dialogOpen}
        onClose={handleClose}
        aria-labelledby="work-card-dialog"
        PaperProps={{
          sx: {
            marginBottom: 10,
            backgroundColor: '#00001a',
            color: 'white',
            maxWidth: isSmallScreen ? '90%' : '600px',
          },
        }}
      >
        <DialogTitle sx={{

          color: "#F6902E",

          fontWeight: "bold"
        }}>
          {workData.title}
          <IconButton
            aria-label="Close"
            onClick={handleClose}
            sx={{ position: 'absolute', right: 12, top: 12, color: 'grey.500' }}
          >
            <CloseIcon />
          </IconButton>
        </DialogTitle>

        <DialogContent sx={{ color: '#EFDD00' }}>
          <Typography gutterBottom>
            {workData.longDesc}
          </Typography>
          {workData.technologies && workData.technologies.length > 0 && (
            <>
              <Typography variant="h6" sx={{
                color: "#F6902E",
                fontWeight: 'bold', mt: 2, mb: 1, fontSize: 14
              }}>
                Technologies Used
              </Typography>

              <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
                {workData.technologies.map((technology, index) => (
                  <Tooltip key={index} title={technology.name} aria-label={technology.name}>
                    <Box
                      component="img"
                      sx={{ maxHeight: 48, maxWidth: 48, m: 0.5 }}
                      src={technology.icon}
                      alt={technology.name}
                    />
                  </Tooltip>
                ))}
              </Box>
            </>
          )}
        </DialogContent>
        {workData.link && (
          <DialogActions>
            <Link href={workData.link} passHref>
              <Button
                component="a"
                target="_blank"
                variant="outlined"
                sx={{
                  marginBottom: '20px',
                  marginRight: '20px',
                  color: '#F39F5A',
                  borderColor: '#F39F5A',
                  '&:hover': {
                    backgroundColor: '#F39F5A',
                    color: '#FFFFFF',
                    borderColor: '#F39F5A',
                  },
                }}
              >
                View Work
              </Button>
            </Link>
          </DialogActions>
        )}
      </Dialog>
    </>
  );
};

export default WorkCard;
