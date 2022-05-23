import { createTheme } from '@mui/material';
import { deepPurple, purple } from '@mui/material/colors';

export const defaultTheme = createTheme({
    palette: {
        mode: 'light',
        primary: { main: deepPurple['600'] },
    },
});
