import { node } from "prop-types";
import Sidebar from "./Sidebar";
import Header from "./Header";

const Layout = (props) => {
  return (
    <main style={{ overflow: "auto" }}>
      <Sidebar />
      <Header />
      <section
        style={{
          position: "absolute",
          top: "80px",
          left: "88px",
          height: "calc(100vh - 80px)",
          width: "calc(100vw - 88px)",
        }}
      >
        {props.children}
      </section>
    </main>
  );
};

Layout.propTypes = { children: node };

export default Layout;
