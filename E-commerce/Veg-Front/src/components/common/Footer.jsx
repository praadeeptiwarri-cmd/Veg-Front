import "../../assets/styles/components/Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} Veg-Front | All Rights Reserved</p>
    </footer>
  );
}
