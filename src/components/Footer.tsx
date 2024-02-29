export default function Footer() {
  return (
    <footer>
      <p>Thank you for your visit! ❤️</p>

      <div className="footer--bottom">
        <p className="footer--copy">{new Date().getFullYear()} © medaimane</p>
        <a className="footer--scroll" href="/#">
          Scroll Up ⬆️
        </a>
      </div>
    </footer>
  );
}
