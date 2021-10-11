import { createContext, useState } from "react";

export type GlobalTheme = {
    theme: string
    setTheme:(c: string) => void
}

export const ThemeContext = createContext<GlobalTheme>({
    theme : "light", 
    setTheme: ()=>{},
});

type Props = {
    children: React.ReactNode
  };

export const ThemeContextProvider = ({children} : Props) => {

    const [theme, setTheme] = useState("light");
    
    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            {children}
        </ThemeContext.Provider>
    )
}