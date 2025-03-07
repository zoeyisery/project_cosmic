"use client";

import React from "react";
import Header from "@/components/layout/Header/Header";
import Navigation from "@/components/layout/Navigation/NavigationBar";
import Footer from "@/components/layout/Footer/Footer";
import AppInitializer from "@/hooks/useAuth";
import { Provider } from "react-redux";
import store from "@/store/store";
import "@/styles/layout.css";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <html lang="en">
        <head>
          <meta charSet="UTF-8" />
          <title>cosmic</title>
        </head>
        <Provider store={store}>
          <AppInitializer />
          <body className="layoutContainer">
            <Header />
            <main> {children}</main>
            <Footer />
            <Navigation />
          </body>
        </Provider>
      </html>
    </>
  );
};

export default Layout;
