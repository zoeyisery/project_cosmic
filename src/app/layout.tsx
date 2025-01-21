"use client";

import React from "react";
import Header from "@/components/Header/Header";
import Navigation from "@/components/NavigationBar/NavigationBar";
import Footer from "@/components/Footer/Footer";
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
