import { CssBaseline, ThemeProvider } from '@mui/material';
import { StrictMode } from 'react';
import * as ReactDOMClient from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import App from './app/App';
import { localizeInit } from './app/util/localize';
import { defaultTheme } from './app/util/themeManager';

function renderApp() {
    const root = ReactDOMClient.createRoot(
        document.getElementById('root') as HTMLElement
    );
    root.render(
        <>
            <CssBaseline />
            <StrictMode>
                <ThemeProvider theme={defaultTheme}>
                    <BrowserRouter>
                        <App />
                    </BrowserRouter>
                </ThemeProvider>
            </StrictMode>
        </>
    );
}
localizeInit().then(renderApp);
