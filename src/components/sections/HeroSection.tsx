import Link from 'next/link';
import Image from 'next/image';
import Config from '../../../next.config.mjs';

export default function HeroSection() {
  return (
    <section id="wrapper--hero" className="section--page">
      <Image
        id="photo"
        src={`${Config.basePath}/assets/images/me.jpeg`}
        alt="My Photo"
        height={180}
        width={180}
      />

      <div>
        <h1 id="headline">Mohamed Aimane Skhairi</h1>
        <p id="bio">
          Senior Software engineer, Mobile Apps and Full Stack Development,
          Freelancer Consultant via{' '}
          <Link
            href="https://www.upwork.com/freelancers/medaimane"
            target="_blank"
          >
            Upwork
          </Link>
          , Expert in React Native & Expo.
        </p>
        <p id="email">👉 medaimane.skhairi@gmail.com</p>
      </div>
    </section>
  );
}
