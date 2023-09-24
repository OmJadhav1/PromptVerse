import "@styles/global.css";
import Provider from "@components/Provider";
import Nav from "@components/Nav";
export const metadata = {
  title: "PromptVerse",
  description: "create and share ai prompts",
};
const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <Provider>
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
