import React from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <html lang="en">
        <head>
          <meta charSet="UTF-8" />
          <title>Cosmic</title>
        </head>
        <body>
          <main> {children}</main>
        </body>
      </html>
    </>
  );
};

export default Layout;
