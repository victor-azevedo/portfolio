import { SideBarProvider } from "@/contexts/SideBarContext";
import "@/styles/globals.css";
import { ThemeProvider } from "next-themes";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute="class">
      <SideBarProvider>
        <Component {...pageProps} />
      </SideBarProvider>
    </ThemeProvider>
  );
}
