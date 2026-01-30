"use client";

import { ReactNode } from "react";
import { Provider } from "react-redux";
import { store } from "@/store";
import { ThemeContextProvider } from "@/hooks/useTheme";

export default function Providers({ children }: { children: ReactNode }) {
  return (
    <Provider store={store}>
      <ThemeContextProvider>{children}</ThemeContextProvider>
    </Provider>
  );
}
