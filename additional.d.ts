/// <reference types="next" />
/// <reference types="next/image-types/global" />

declare module '@giscus/react';
declare module 'next-mdx-remote/rsc';
declare module 'gray-matter';
declare module 'next-themes' {
  interface ThemeProviderProps {
    children: React.ReactNode;
    attribute?: string;
    defaultTheme?: string;
    enableSystem?: boolean;
  }
  
  export function ThemeProvider(props: ThemeProviderProps): JSX.Element;
  export function useTheme(): {
    theme: string | undefined;
    setTheme: (theme: string) => void;
    systemTheme: string | undefined;
  };
}

declare namespace JSX {
  interface IntrinsicElements {
    [elemName: string]: any;
  }
} 