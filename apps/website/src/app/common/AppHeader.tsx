import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import { AppBar, Stack, useTheme } from '@mui/material';
import i18next from 'i18next';

import { AppTypography } from './AppTypography';

export function AppHeader() {
    const height = useTheme().spacing(7);
    return (
        <AppBar position="static" sx={{ height }}>
            <Stack
                height="100%"
                direction="row"
                alignItems="center"
                justifyContent="space-around"
                spacing={0}
            >
                <AccountBalanceIcon fontSize="large" />
                <Stack
                    width="50%"
                    direction="row"
                    alignItems="center"
                    justifyContent="flex-end"
                    spacing={3}
                >
                    <AppTypography>
                        {i18next.t<string>('appbar.info')}
                    </AppTypography>
                    <AppTypography>
                        {i18next.t<string>('appbar.products')}
                    </AppTypography>
                    <AppTypography>
                        {i18next.t<string>('appbar.associates')}
                    </AppTypography>
                </Stack>
            </Stack>
        </AppBar>
    );
}
