import "@styles/global.css";
import Provider from "@components/Provider";
import Nav from "@components/Nav";
// import AuthRouteGuard from "@components/AuthRouteGaurd";
// import { useSession } from "next-auth/react";
export const metadata = {
  title: "PromptVerse",
  description: "create and share ai prompts",
};
const RootLayout = ({ children }) => {
  // const { data: session } = useSession();
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>
        <Provider>
          <div className="main">
            <div className="gradient"></div>
          </div>
          <main className="app">
            <Nav />
            {/* <AuthRouteGuard></AuthRouteGuard> */}
            {children}
          </main>
        </Provider>
      </body>
    </html>
  );
};

export default RootLayout;
