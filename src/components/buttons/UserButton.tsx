import * as React from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { IconButton } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useAuth } from '../../hooks/useAuth';
import Link from 'next/link';

export default function UserButton() {
    const { signed, authLogout } = useAuth();

    const logoutClick = () => {
        setAnchorEl(null);
        authLogout()
    }

    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div>
            <IconButton
                id="basic-button"
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
                color='inherit'
            >
                <AccountCircleIcon ></AccountCircleIcon>
            </IconButton>
            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    'aria-labelledby': 'basic-button',
                }}
            >
                {!signed && <MenuItem component={Link} href='/login' onClick={handleClose}>Entrar</MenuItem>}
                {!signed && <MenuItem component={Link} href='/register' onClick={handleClose}>Cadastrar</MenuItem>}
                {signed && <MenuItem  component={Link} href='/user' onClick={handleClose}>Perfil</MenuItem>}
                {signed && <MenuItem onClick={logoutClick} >Sair</MenuItem>}

            </Menu>
        </div>
    );
}