'use client';

import Link from 'next/link';
import Image from 'next/image';
import Config from '../../../next.config.mjs';
import {useTheme} from '@/hooks/useTheme';

export default function HeroSection() {
  const {isDark, toggleTheme} = useTheme();

  return (
    <section id="wrapper--hero" className="section--page">
      <div>
        <button className="header--theme_button" onClick={toggleTheme}>
          {isDark ? '☀️' : '🌗'}
        </button>

        <Image
          id="photo"
          src={`${Config.basePath}/assets/images/me.jpeg`}
          alt="My Photo"
          height={180}
          width={180}
        />
      </div>

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
