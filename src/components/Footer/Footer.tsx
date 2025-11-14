import "./Footer.scss";

export default function Footer() {
  const handleLogoClick = () => {
    window.location.reload();
  };
  return (
    <footer className="Footer">
      <div className="Footer__content">
        <img src="/icons/VK-Video-icon.svg" alt="" onClick={handleLogoClick} />
        <p>© 2025</p>
      </div>
    </footer>
  );
}
