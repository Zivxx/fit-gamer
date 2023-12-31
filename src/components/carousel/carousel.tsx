import { useState, useEffect } from 'react';
import { Box, Card, Paper, Typography } from '@mui/material';

type CarouselProps = {
  slides: CarouselSlide[];
  timer?: number;
};

type CarouselSlide = {
  text: string;
  imageUrl: string;
};

const Carousel = (props: CarouselProps) => {
  const [activeStep, setActiveStep] = useState(0);
  const endOfSlides = props.slides.length - 1;

  const timer = props.timer ?? 5000;

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((activeStep) => (activeStep === endOfSlides ? 0 : activeStep + 1));
    }, timer);
    return () => clearInterval(interval);
  }, []);

  return (
    <Card>
      <Box sx={{ maxWidth: '100%', flexGrow: 1 }}>
        <Paper
          square
          elevation={0}
          sx={{
            backgroundImage: `url(${props.slides[activeStep]?.imageUrl})`,
            backgroundSize: 'cover',
            color: 'white',
            display: 'flex',
            alignItems: 'center',
            height: 500,
            pl: 2,
          }}
        >
          <Typography sx={{ fontSize: '40px' }}>{props.slides[activeStep]?.text}</Typography>
        </Paper>
      </Box>
    </Card>
  );
};

export default Carousel;
