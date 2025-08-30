import { ThemeProvider as NextThemesProvider } from "next-themes";
import { ReactNode } from "react";

interface ThemeProviderProps {
  children: ReactNode;
  attribute?: "class" | "data-theme" | "data-mode";
  defaultTheme?: string;
  enableSystem?: boolean;
  disableTransitionOnChange?: boolean;
}

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}