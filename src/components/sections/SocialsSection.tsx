import Link from 'next/link';

export default function SocialsSection() {
  return (
    <section className="section--page">
      <div id="socials--list">
        <Link href="https://instagram.com/medaimane" target="_blank">
          📸 Instagram
        </Link>
        <Link href="https://twitter.com/med_aimane" target="_blank">
          ☕️💡 X (Twitter)
        </Link>
        <Link
          href="https://www.linkedin.com/in/med_aimane_skahiri/"
          target="_blank"
        >
          🤝 LinkedIn
        </Link>
        <Link href="https://github.com/medaimane" target="_blank">
          👨‍💻 GitHub
        </Link>
        <Link href="/assets/pdf/resume.pdf" target="_blank">
          📜 Download Resume
        </Link>
      </div>
    </section>
  );
}
