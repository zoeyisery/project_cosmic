import React from "react";
import Header from "@/components/Header/Header";
import Navigation from "@/components/NavigationBar/NavigationBar";
import Footer from "@/components/Footer/Footer";
import "@/styles/layout.css";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <html lang="en">
        <head>
          <meta charSet="UTF-8" />
          <title>cosmic</title>
        </head>
        <body className="layoutContainer">
          <Header />
          <main> {children}</main>
          <Footer />
          <Navigation />
        </body>
      </html>
    </>
  );
};

export default Layout;
