"use client";

import React from 'react';
import { Stepper, Step, StepLabel, StepContent, Typography, Box, Divider, Chip, Avatar, useMediaQuery, useTheme } from '@mui/material';
import { display, flexbox, height, padding, positions, styled, width } from '@mui/system';
import cx from 'clsx';
import { siteData } from "@/static/constant";
import SideNav from '@/layout/SideNav';
import { Hidden } from '@mui/material';
import DrawerNav from '@/layout/DrawerNav';

const Container = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  padding: theme.spacing(3),
  backgroundColor: '#00001a',
  marginTop: '10px',

  [theme.breakpoints.down('sm')]: {
    flexDirection: 'column', // Stack in column on small screens
  },

}));

const AboutContainer = styled(Box)(({ theme }) => ({
  paddingLeft: 50,
  position: 'fixed',
  top: 120,
  left: 20,
  width: "55%",
  height: 720,
  marginRight: '10%',
  flexDirection: 'column',
  [theme.breakpoints.down('xl')]: {
    position: 'relative',
    display: 'flex',
    width: '70%',
    height: 'auto',
    paddingLeft: 0,
    top: 'auto',
    left: 1,
    right: 5,
  },
  [theme.breakpoints.down('lg')]: {
    width: '100%',
    marginRight: 0,
  },
  [theme.breakpoints.down('md')]: {
    width: '100%',
    paddingRight: 10

  },
  [theme.breakpoints.down('sm')]: {
    display: 'flex',

    justifyContent: 'center',
  },

}));

const SkillsToolsContainer = styled(Box)(({ theme }) => ({
  paddingLeft: 50,
  position: 'fixed',
  top: 120,
  right: 0,
  width: "18%",
  height: 340,
  marginRight: '6%',
  [theme.breakpoints.down('xl')]: {
    position: 'relative',
    width: '25%',
    height: 'auto',
    paddingLeft: 0,
    top: 'auto',
    right: 'auto',
    marginRight: 0,
  },
  [theme.breakpoints.down('lg')]: {
    width: '20%',
    height: 'auto',
    marginRight: 0,
  },
  [theme.breakpoints.up('lg')]: {
    right: 20,
    left: 'auto',
  },
  [theme.breakpoints.down('md')]: {
    width: '30%',
  },
  [theme.breakpoints.down('sm')]: {
    width: 270,

    padding: theme.spacing(1),

  },

}));

const ChipContainer = styled(Box)({
  display: 'flex',
  flexWrap: 'wrap',
  gap: '10px',
});

const ExperienceContainer = styled(Box)({
  display: 'flex',
  marginBottom: '6px',
});

const ExperienceDescription = styled(Box)({
  flex: 1,
  marginRight: '24px',
  color: '#fff',
});

const YellowText = styled(Typography)(({ theme }) => ({
  color: '#EFDD00',
  fontWeight: 'bold',
  [theme.breakpoints.down('sm')]: {
    fontSize: '1.5rem', // Adjust font size for smaller screens
  },
}));

const WhiteText = styled(Typography)(({ theme }) => ({
  color: '#fff',
  [theme.breakpoints.down('sm')]: {
    fontSize: '1rem', // Adjust font size for smaller screens
  },
}));

const experiences = (
  <Stepper orientation="vertical">
    {siteData.experiences.map((experience, index) => (
      <Step key={index} active={true}>
        <StepLabel
          StepIconProps={{
            sx: { color: '#FDA403' },
          }}
        >
          <YellowText
            sx={{
              marginBottom: 0,
              fontSize: 20,
            }}
          >
            {experience.desg}
          </YellowText>
        </StepLabel>
        <StepContent>
          <ExperienceContainer>
            <ExperienceDescription>
              <WhiteText
                sx={{
                  marginTop: 0,
                  marginBottom: 2,
                }}
              >
                {experience.description}
              </WhiteText>
            </ExperienceDescription>
            <Hidden smDown={true}>
              <Box
                sx={{
                  display: 'flex',
                  marginTop: '-32px',
                }}
              >
                {experience.logo}
              </Box>
            </Hidden>

          </ExperienceContainer>
        </StepContent>
      </Step>
    ))}
  </Stepper>
);

const skills = (
  <Box sx={{ marginTop: 4 }}>
    <WhiteText variant="h5" sx={{ marginBottom: 1, fontWeight: 'bold' }}>
      Programming Languages
    </WhiteText>
    <Divider
      sx={{
        marginTop: 1,
        marginBottom: 2,
        backgroundColor: 'grey',
        height: 1,
      }}
    />
    <ChipContainer>
      {siteData.languages.map((language, index) => (
        <Chip
          key={index}
          avatar={<Avatar alt={language.technology} src={language.icon} />}
          label={language.technology}
          sx={{
            maxWidth: 'fit-content',
            color: '#EFDD00',
            fontWeight: 'bold',
            backgroundColor: '#322C2B',
          }}
        />
      ))}
    </ChipContainer>
  </Box>
);

const tools = (
  <Box sx={{ marginTop: 4 }}>
    <WhiteText variant="h5" sx={{ marginBottom: 1, fontWeight: 'bold' }}>
      Tools & Frameworks
    </WhiteText>
    <Divider
      sx={{
        marginTop: 1,
        marginBottom: 2,
        backgroundColor: 'grey',
        height: 1,
      }}
    />
    <ChipContainer>
      {siteData.tools.map((tool, index) => (
        <Chip
          key={index}
          avatar={<Avatar alt={tool.technology} src={tool.icon} />}
          label={tool.technology}
          sx={{
            maxWidth: 'fit-content',
            color: '#EFDD00',
            fontWeight: 'bold',
            backgroundColor: '#322C2B',
          }}
        />
      ))}
    </ChipContainer>
  </Box>
);

const About = () => {
  const theme = useTheme();

  return (
    <>
      <Hidden smDown={true}>
        <SideNav />
      </Hidden>
      <Hidden smUp={true}>
        <DrawerNav />
      </Hidden>
      <Container
        className={cx('is-row')}
        sx={{
          background: '#00001a',
        }}
      >
        <AboutContainer>
          {/* Introduction */}
          <YellowText variant="h3" sx={{ marginBottom: 2 }}>
            About 🤴
          </YellowText>
          <WhiteText variant="body1" sx={{ fontSize: '18px', marginBottom: 3 }}>
            I'm an enthusiastic web developer, with a passion for creating dynamic and user-friendly web experiences. I have honed my skills through various academic projects and personal endeavors, surrounded by awesome people who build awesomesauce products. When I am not baking code, I am playing football with my friends.
          </WhiteText>

          {/* Experiences */}
          <YellowText variant="h5" sx={{ marginBottom: 2 }}>
            Education
          </YellowText>

          <ExperienceContainer>
            {experiences}
          </ExperienceContainer>
        </AboutContainer>
        {/* Skills and Tools */}

        <SkillsToolsContainer>
          {tools}
          {skills}
        </SkillsToolsContainer>


      </Container>
    </>
  );
};

export default About;
