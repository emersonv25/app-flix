import {  Divider, Drawer, Icon, IconButton, List, ListItemButton, ListItemText, Typography } from "@mui/material"
import { Box } from "@mui/system"
import Link from "next/link"
import { useState } from "react"
import { Menu } from "../../@types/menu"

type MenuDrawerProps = {
    menus: Menu[]
}
export const MenuDrawer = (props: MenuDrawerProps) => {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    return (
        <>
            <Box display={{ xs: 'flex', md: 'none' }} pr={1}>
                <IconButton edge='start' aria-label='menu' color='inherit' onClick={() => setIsDrawerOpen(true)}>
                    <Icon>menu</Icon>
                </IconButton>
                <Divider orientation="vertical" flexItem />
            </Box>

            <Box display={{ xs: 'none', md: 'flex' }}>
                <Drawer variant='temporary' anchor='left' open={isDrawerOpen} onClose={() => setIsDrawerOpen(false)}>
                    <Box p={2} width='250px' textAlign='center' role='presentation'>
                        <Typography variant='h6'>MeuFlix</Typography>
                    </Box>
                    <Divider></Divider>
                    <Box flex={1}>
                        <List component="nav">
                            {
                                props.menus.map((menu, key) =>
                                    <ListItemButton key={key} component={Link} href={`${menu.path}`}>
                                        {/*
                                            <ListItemIcon>
                                                <Icon>home</Icon>
                                            </ListItemIcon>*/
                                        }
                                        <ListItemText primary={`${menu.name}`} />
                                    </ListItemButton>
                                )

                            }
                        </List>
                    </Box>
                </Drawer>
            </Box>

        </>

    )
}