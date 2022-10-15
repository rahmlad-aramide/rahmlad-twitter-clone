import { createContext } from "react";

 const theme = {
    dark: {
        background: 'black',
        foreground: 'white'
    },
    light: {
        background: 'white',
        foreground: 'black'
    }
}
const ThemeContext = createContext(theme)

export {theme, ThemeContext}