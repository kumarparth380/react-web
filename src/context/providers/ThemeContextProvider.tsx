import { createContext, useState } from "react";

export type GlobalThemeType = {
    theme: string
    setTheme:(c: string) => void
}

export const ThemeContext = createContext<GlobalThemeType>({
    theme : "light", 
    setTheme: ()=>{},
});

type Props = {
    children: React.ReactNode
  };

export const ThemeContextProvider = ({children} : Props) => {

    const [theme, setTheme] = useState<string>("light");
    
    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            {children}
        </ThemeContext.Provider>
    )
}