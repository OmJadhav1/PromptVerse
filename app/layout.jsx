import "@styles/global.css";
import Provider from "@components/Provider";
import Nav from "@components/Nav";
// import AuthRouteGuard from "@components/AuthRouteGaurd";
import NextTopLoader from "nextjs-toploader";
export const metadata = {
  title: "PromptVerse",
  description: "create and share ai prompts",
};
const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>
        <Provider>
          <NextTopLoader speed={50} showSpinner={false} />
          <div className="main">
            <div className="gradient"></div>
          </div>
          <main className="app">
            <Nav />
            {children}
          </main>
        </Provider>
      </body>
    </html>
  );
};

export default RootLayout;
