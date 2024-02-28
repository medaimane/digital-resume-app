export default function Footer() {
  return (
    <footer className="footer">
      <p className="footer--copy">{new Date().getFullYear()} © medaimane</p>
      <a className="footer--scroll" href="#">
        Scroll Up ⬆️
      </a>
    </footer>
  );
}
