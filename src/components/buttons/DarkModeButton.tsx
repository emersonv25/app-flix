import { Icon, IconButton } from "@mui/material";
import useAppTheme from "../../hooks/useAppTheme";


export function DarkModeButton() {
    const { toggleTheme, themeName } = useAppTheme();
    return (
        <div>
            <IconButton onClick={toggleTheme} color='inherit'>
                <Icon>{themeName === 'dark' ? 'dark_mode' : 'sunny'}</Icon>
            </IconButton>
        </div>
    )
}