"use client"
import React, {ReactNode, useMemo, useState} from 'react';

type ThemeType = 'light' | 'dark';

type ThemeContextType = {
  theme: ThemeType;
  isDark: boolean;
  toggleTheme: () => void;
};

export const ThemeContext = React.createContext<ThemeContextType>({
  theme: 'dark',
  isDark: true,
  toggleTheme: () => {},
});

type Props = {
  children?: ReactNode;
};

export function ThemeProvider({children}: Readonly<Props>) {
  const [theme, setTheme] = useState<ThemeType>('dark');

  const value = useMemo(
    () => ({
      theme,
      isDark: theme === 'dark',
      toggleTheme: () => {
        // Note: temp solution to update CSS variables:"
        const root = document.documentElement;
        const newTheme = theme === 'dark' ? 'light' : 'dark';
        root.style.setProperty("--mainTextColor", `var(--mainTextColor-${newTheme})`);
        root.style.setProperty("--secondaryTextColor", `var(--secondaryTextColor-${newTheme})`);
        root.style.setProperty("--mainLinkColor", `var(--mainLinkColor-${newTheme})`);
        root.style.setProperty("--mainBorderColor", `var(--mainBorderColor-${newTheme})`);
        root.style.setProperty("--mainBgColor", `var(--mainBgColor-${newTheme})`);

        setTheme(t => t === 'dark' ? 'light' : 'dark');
      },
    }),
    [theme]
  );

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}
