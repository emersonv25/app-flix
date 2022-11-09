import { useContext } from "react";
import { ThemeContext } from '../contexts/ThemeContext'

const useAppTheme =() => useContext(ThemeContext);

export default useAppTheme;