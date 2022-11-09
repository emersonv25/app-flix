import { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { ThemeProvider } from '@emotion/react'
import { DarkTheme } from '../themes'
import { LightTheme } from '../themes/Light';
import { Box } from '@mui/material';

interface IThemeContextData {
    themeName: 'light' | 'dark'
    toggleTheme: () => void;
}
export const ThemeContext = createContext({} as IThemeContextData);

interface IAppThemeProviderProps {
    children: React.ReactNode
}

export const useAppThemeContext = () => {
    return useContext(ThemeContext);
}

export const AppThemeProvider: React.FC<IAppThemeProviderProps> = ({ children } : IAppThemeProviderProps ) => {
    const [themeName, setThemeName] = useState<'light' | 'dark'>('dark');

    useEffect(() => {
        const storageTheme = localStorage.getItem("theme");
        if(storageTheme)
        {
            setThemeName(storageTheme === 'light' ? 'light' : 'dark')
        }
    },[])

    const toggleTheme =(() => {
        const newThemeName = themeName === 'light' ? 'dark' : 'light';
        setThemeName(newThemeName)
        localStorage.setItem('theme', newThemeName) 
    })

    const theme = useMemo(() => {
        if (themeName === 'light') 
        {
            return LightTheme
        }
        
        return DarkTheme
    }, [themeName]);


    return (
        <ThemeContext.Provider value={{ themeName, toggleTheme }}>
            <ThemeProvider theme={theme}>
                <Box>
                  {children}  
                </Box>
            </ThemeProvider>
        </ThemeContext.Provider>
    )
}