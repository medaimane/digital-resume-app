import Image from 'next/image';

export default function Page() {
  return (
    <div id="container--main">
      <section id="wrapper--hero" className="section--page">
        <Image
          id="profile-pic"
          src="/avatars/me.jpeg"
          alt="Profile Avatar"
          width={150}
          height={150}
        />

        <div>
          <h1 id="user-name">Mohamed Aimane Skhairi</h1>
          <p id="bio">
            Senior Software engineer, Mobile Apps and Full Stack Development,
            Freelancer Consultant at{' '}
            <a
              href="https://www.upwork.com/freelancers/medaimane"
              target="_blank"
            >
              Upwork
            </a>
            , React Native Expert.
          </p>
          <p id="email">👉 medaimane.skhairi@gmail.com</p>
        </div>
      </section>

      <section className="section--page">
        <div id="socials--list">
          <a href="https://instagram.com/medaimane" target="_blank">
            📸 Instagram
          </a>
          <a href="https://twitter.com/med_aimane" target="_blank">
            ☕️💡 X (Twitter)
          </a>
          <a
            href="https://www.linkedin.com/in/med_aimane_skahiri/"
            target="_blank"
          >
            🤝 LinkedIn
          </a>
          <a href="https://github.com/medaimane" target="_blank">
            👨‍💻 Github
          </a>
          <a href="./assets/pdf/resume.pdf" target="_blank">
            📜 Download Resume
          </a>
        </div>
      </section>

      <section className="section--page">
        <h2>Skills & Qualifications</h2>
        <ul id="qualifications--list">
          <li>✔️ 🌟 Top Rated Plus software engineer consultant on Upwork.</li>
          <li>
            ✔️ 🏆 6+ years specializing in React Native, Expo, and TypeScript.
          </li>
          <li>
            ✔️ 🚀 Expert in integrating AI, Cloud solutions, and third-party
            platforms.
          </li>
          <li>
            ✔️ 💡 Creative and critical thinking with excellent communication
            skills.
          </li>
          <li>
            ✔️ 🛤️ Proficient in MVP launch and product development roadmapping.
          </li>
          <li>✔️ 🛠 Set up CI/CD pipelines for seamless deployment.</li>
        </ul>
      </section>

      <section className="section--page">
        <h2>Tech stack</h2>

        <div id="wrapper--techstack__items">
          <div className="card--techstack">
            <span>
              TypeScript, JavaScript, Python, Java/Kotline, Objective-C/Swift
            </span>
          </div>
          <div className="card--techstack">
            <span>React Native, Expo, iOS/Android Apps</span>
          </div>
          <div className="card--techstack">
            <span>React, NextJS, Strapi, NodeJS</span>
          </div>
          <div className="card--techstack">
            <span>AWS, OpenAI, Firebase, Google Cloud</span>
          </div>
          <div className="card--techstack">
            <span>SQLite, Postgres, MongoDB</span>
          </div>
          <div className="card--techstack">
            <span>GitHub, ExpoEAS, TestFlight, App Center, Vercel</span>
          </div>
        </div>
      </section>

      <section id="work-history-wrapper" className="section--page">
        <h2>Work History</h2>

        <div className="line-break"></div>

        <div className="card--work-history">
          <strong>
            🚧 Mobile Apps & FullStack Engineer Consultant | UpWork
          </strong>
          <p>12/2021 - Present</p>
          <p>Description...</p>
          <ul>
            <li>Point one</li>
            <li>Point two</li>
            <li>Point three</li>
          </ul>
        </div>
      </section>

      <section className="section--page">
        <h2>Projects & Accomplishments</h2>

        <div className="card--project">
          <a href="project1.html">
            <span>🏆 </span>Project One
          </a>
        </div>

        <div className="card--project">
          <a href="project1.html">
            <span>🏆 </span>Project Two
          </a>
        </div>
      </section>
    </div>
  );
}
