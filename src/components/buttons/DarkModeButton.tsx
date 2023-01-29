import { Icon, IconButton } from "@mui/material";
import useAppTheme from "../../hooks/useAppTheme";


export function DarkModeButton() {
    const { toggleTheme, themeName } = useAppTheme();
    return (
        <>
            <IconButton onClick={toggleTheme} color='inherit' aria-label="Ativar ou desativar modo escuro">
                <Icon>{themeName === 'dark' ? 'dark_mode' : 'sunny'}</Icon>
            </IconButton>
        </>
    )
}