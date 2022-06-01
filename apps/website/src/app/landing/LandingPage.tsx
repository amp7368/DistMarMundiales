import { Box, Button } from '@mui/material';

import img1 from '../../assets/background/1.jpg';
import img2 from '../../assets/background/2.jpg';
import img3 from '../../assets/background/3.jpg';
import { AppHeader } from '../common/AppHeader';
import { AppSlideshow } from './Slideshow';

const pages = [img1, img2, img3];

export function LandingPage() {
    return (
        <Box>
            <Box height="100vh" width="100vw">
                <AppHeader />
                <AppSlideshow pages={pages} />;
            </Box>
            <Button variant="contained">WORK</Button>
        </Box>
    );
}
