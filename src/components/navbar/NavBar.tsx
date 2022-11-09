
import { AppBar, Box, Button, Container, Divider, Icon, IconButton, TextField, Toolbar, Typography } from '@mui/material'
import { Stack } from '@mui/system';
import Link from 'next/link';
import { useState } from 'react';
import { Menu } from '../../@types/menu';
import useAppTheme from '../../hooks/useAppTheme';
import { DarkModeButton } from '../buttons/DarkModeButton';
import UserButton from '../buttons/UserButton';
import { MenuDrawer } from './MenuDrawer';

type NavbarProps = {
    children: React.ReactNode
}
const menus: Menu[] = [
    { name: 'Inicio', path: '/' },
    { name: 'Gêneros', path: '/category' },
    { name: 'Ordem Alfabética', path: '/' },
    { name: 'Sobre', path: '/about' },
]

// latest, most views, most likes
export const NavBar: React.FC<NavbarProps> = ({ children } : NavbarProps) => {
    const [searchDisplay, setSearchDisplay] = useState(false);
    const appTheme = useAppTheme();
    const themeName = appTheme.themeName;
    return (
        <>
            <Box width="100%">
                <AppBar position='static'>
                    <Container maxWidth='xl'>
                        <Box>
                            <Toolbar>
                                <MenuDrawer menus={menus} />

                                <Typography variant='h6' m='auto' style={{ flexGrow: 0, justifyContent: 'start' }}>
                                    PkapaFlix
                                </Typography>

                                <Stack direction="row" style={{ flexGrow: 1, justifyContent: 'center' }} display={{ xs: 'none', md: 'flex' }}>
                                    {
                                        menus.map((menu, key) => <Button key={key} color='inherit' component={Link} href={`${menu.path}`}>{menu.name}</Button>)
                                    }
                                </Stack>

                                <Box display={{ xs: 'none', md: 'flex' }}>
                                    <TextField
                                        size='small'
                                        label='Pesquisar...'
                                        variant='standard'
                                        InputLabelProps={{ style: { padding: '0 15px', color: 'white' } }}
                                        InputProps={{ disableUnderline: true }}
                                        style={{ backgroundColor: 'rgba(255,255,255,0.2)' ,borderRadius: 25, width: '100%', padding: '0  10px' }}>

                                    </TextField>
                                    <IconButton color='inherit'>
                                        <Icon>search</Icon>
                                    </IconButton>
                                </Box>

                                {/* Exibir o Input de pesquisar em telas pequenas */}
                                <Box display={{ xs: 'flex', md: 'none' }}>
                                    <Box display={{ xs: searchDisplay ? 'none' : 'flex', md: 'none' }}>
                                        <IconButton color='inherit' onClick={() => setSearchDisplay(true)}>
                                            <Icon>search</Icon>
                                        </IconButton>
                                    </Box>
                                </Box>
                                
                                <Divider orientation="vertical" variant="middle" flexItem />
                                <Box>
                                    <UserButton />
                                </Box>
                                <Divider orientation="vertical" variant="middle" flexItem />
                                <Box>
                                    <DarkModeButton />
                                </Box>
                            </Toolbar>
                        </Box>
                    </Container>
                </AppBar>
            </Box>
            {/* Input de pesquisar em telas pequenas */}
            <Box display={{ xs: 'flex', md: 'none' }} p={1}>
                <Container>
                    <Box display={{ xs: searchDisplay ? 'flex' : 'none', md: 'none' }} justifyContent='center' pb={1} pt={1}>
                        <TextField
                            size='small'
                            label='Pesquisar...'
                            variant='standard'
                            InputLabelProps={{ style: { padding: '0 15px' } }}
                            InputProps={{ disableUnderline: true }}
                            style={{ backgroundColor: themeName == 'dark' ? 'rgba(255,255,255,0.2)' : 'pink', borderRadius: 25, width: '100%', padding: '0  10px' }}>

                        </TextField>
                        <IconButton color='inherit'>
                            <Icon>search</Icon>
                        </IconButton>
                        <IconButton color='inherit' onClick={() => setSearchDisplay(false)}>
                            <Icon>close</Icon>
                        </IconButton>
                    </Box>
                </Container>
            </Box>
            <Box>
                {children}
            </Box>
        </>
    )
}