import "../styles/footer.css";

const Footer = () => {
  return (
    <footer
      style={{
        flex: 1,
        display: "flex",
        justifyContent: "center",
        boxSizing: "border-box",
        backgroundColor: "#0f172a",
        color: "#fff",
        padding: "20px",
      }}
    >
      <div className="footer-bottom">
        <small>© 2026 Extra Supermarket</small>
      </div>
    </footer>
  );
};

export default Footer;