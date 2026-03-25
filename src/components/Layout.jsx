// src/components/Layout.jsx
import Header from "./Header";
import Footer from "./Footer";

function Layout({ children }) {
  return (
    <div className="page">
      <Header />

      <main className="main-content">
        {children}
      </main>

      <Footer />
    </div>
  );
}

export default Layout;