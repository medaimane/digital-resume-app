import Link from 'next/link';
import Image from 'next/image';
import Config from '../../next.config.mjs';

export default function Page() {
  return (
    <div id="container--main">
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
          <Link href={`${Config.basePath}/assets/pdf/resume.pdf`} target="_blank">
            📜 Download Resume
          </Link>
        </div>
      </section>

      <section className="section--page">
        <h2>Skills & Qualifications</h2>
        <ul id="qualifications--list">
          <li>✔️ 🌟 Top Rated Plus software engineer consultant on Upwork.</li>
        </ul>

        <p>What I Bring:</p>
        <ul id="qualifications--list">
          <li>
            ✔️ 🏆 6+ years specializing in React Native Mobile Apps & FullStack
            solutions.
          </li>
          <li>
            ✔️ 🚀 Expert in integrating AI, Cloud solutions, and third-party
            platforms.
          </li>
          <li>
            ✔️ 🛠 Proficient in setting up CI/CD pipelines for seamless
            deployment.
          </li>
          <li>
            ✔️ 🤝 Strong sense of team leading, and technical decision-making.
          </li>
        </ul>

        <p>Let's Build Something Amazing:</p>
        <ul id="qualifications--list">
          <li>✔️ 🏆 Elevate your team as a Tech Lead or Senior Developer.</li>
          <li>
            ✔️ 💡 Creative and critical thinking with excellent communication
            skills.
          </li>
          <li>
            ✔️ 🛤️ Proficient in MVP launch and product development roadmapping.
          </li>
          <li>
            ✔️ 🧪 Committed to top-notch quality: Modular, scalable, clean, and
            well-tested code.
          </li>
        </ul>
      </section>

      <section className="section--page">
        <h2>Tech stack</h2>

        <div id="wrapper--techstack__items">
          <div className="card--techstack">
            <span>TypeScript, JavaScript, Python</span>
          </div>
          <div className="card--techstack">
            <span>Java/Kotline, Objective-C/Swift</span>
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
            👨‍💻 Senior Software Engineer | Mobile & Web Consultant via{' '}
            <Link
              href="https://www.upwork.com/freelancers/medaimane"
              target="_blank"
            >
              Upwork
            </Link>
          </strong>
          <p>💼 Full Time | 📍 Remote - Worldwide</p>
          <p>🗓️ 06/2021 - Present</p>
          <p>
            As a Top Rated Plus Freelancer (Top 3%) on Upwork, I specialize in
            Mobile App and Frontend Development using React Native, Expo, and
            React.js, offering hands-on FullStack Development solutions. With a
            consistent record of 5-star reviews and glowing feedback,{' '}
            <b>I bring unparalleled expertise to your project.</b>
          </p>
        </div>

        <div className="line-break"></div>

        <div className="card--work-history">
          <strong>
            👨‍💻 Senior React Native Mobile & FullStack Engineer | Tech Lead at{' '}
            <Link href="https://www.fluentu.com/" target="_blank">
              FluentU
            </Link>
          </strong>
          <p>💼 Freelance Full-Time | 📍 Remote - United State</p>
          <p>🗓️ 01/2022 - Present</p>
          <p>
            At FluentU, where language learning transforms into an adventure, my
            role as a Senior Full-Stack Mobile App Engineer has been pivotal in
            shaping the innovative Parrot Language Learning App.{' '}
            <b>Alan P, FluentU’s Founder</b>, echoes his satisfaction:
          </p>
          <blockquote>
            Mohamed is a very talented and reliable developer - we are lucky to
            work with him. He is very thoughtful and thorough and someone who
            will think of the bigger picture. He is also pleasant to work with
            and a great communicator. Thank you, Mohamed!
          </blockquote>
          <p>
            The Parrot app introduced a refreshing approach to language learning
            through interactive, dialogue-based stories, covering languages such
            as English, Spanish, French, German, Mandarin Chinese, Russian,
            Japanese, Korean, and more.
          </p>
          <p>Key Contributions:</p>
          <ul>
            <li>
              Collaborated closely with the CEO and UI/UX designer to architect
              and develop the app. Utilized React Native/Expo for mobile,
              React.js, Strapi.js, Node.js, and PostgreSQL for Web
              Admin/Backend, and GitHub, ExpoEAS, TestFlight, AWS, and Heroku
              for CI/CD and deployment.
            </li>
            <li>
              Incorporated cutting-edge AI services, including ChatGPT-4 for
              interactive storytelling lessons, Replicate and MedJourney for
              image generation, Google Speech API for speech-to-text, Elevenlabs
              for text-to-speech, and DeepL Translator for content translation.
            </li>
          </ul>
          <p>
            As of the current status, the Parrot app has been temporarily
            removed from the app store and is undergoing internal testing.
            Excitingly, the decision has been made to merge its innovative
            features with the main FluentU app. Stay tuned for further updates!
          </p>
        </div>

        <div className="line-break"></div>

        <div className="card--work-history">
          <strong>
            👨‍💻 Senior React Native Frontend Engineer at{' '}
            <Link href="https://lyfshort.com/" target="_blank">
              LyfShort
            </Link>
          </strong>
          <p>💼 Freelance Part-Time | 📍 Remote - Australia</p>
          <p>🗓️ 12/2021 - 11/2023</p>
          <p>
            As a Senior React Native Engineer at LyfShort, my commitment to
            excellence is echoed in the words of{' '}
            <b>Steven F, LyfShort's Founder:</b>
          </p>
          <blockquote>
            It was great to work with Mohamed on our project. He is strong React
            Native developer, good communicator and reliable team member. We
            will hire him again
          </blockquote>
          <p>
            In this role, I spearheaded the development of a comprehensive trip
            and organizer app, catering to IOS, Android, and Web platforms. The
            app addresses significant pain points associated with planning trips
            or group activities.
          </p>
          <p>Key Contributions:</p>
          <ul>
            <li>
              Active involvement in task refinements, planning, and estimation,
              as well as engaging in the implementation and development phases,
              was complemented by insightful demos.
            </li>
            <li>
              Developed and enhanced features across iOS, Android, and Web
              platforms, including the implementation of a messaging center and
              group messaging functionality.
            </li>
            <li>
              Diagnosed and resolved bugs and performance bottlenecks, ensuring
              optimal user experiences.
            </li>
            <li>
              Conducted upgrades for React Native, Expo, and all dependencies to
              maintain cutting-edge technology standards.
            </li>
            <li>
              Managed the end-to-end process of publishing apps on AppStore and
              PlayStore.
            </li>
          </ul>
          <p>
            ⚙️🧪🛠️ Tech Stack: React Native, Expo, React Native Web, React
            Navigation, TypeScript, JavaScript, Redux, Jest, RestAPI, Firebase,
            Bitbucket, Xcode, Jira, Slack, VSCode.
          </p>
          <p>
            🏆 This experience not only strengthened my technical expertise but
            also reinforced my dedication to delivering impactful solutions in
            the travel and planning domain.
          </p>
        </div>

        <div className="line-break"></div>

        <div className="card--work-history">
          <strong>
            👨‍💻 React Native Mobile Engineer at{' '}
            <Link href="https://carexs.com/" target="_blank">
              CareXS
            </Link>{' '}
            via{' '}
            <Link href="https://www.linkedin.com/company/tt-technologies/">
              TT-Technologies
            </Link>
          </strong>
          <p>💼 Full-Time | 📍 Remote - Amsterdam, Netherlands</p>
          <p>🗓️ 05/2019 - 03/2022</p>
          <p>
            As a React Native Mobile Engineer at CareXS, I played a pivotal role
            in crafting high-performance mobile applications for iOS and Android
            in the healthcare sector in The Netherlands building products like{' '}
            <b>Meddy</b> and <b>Ally</b>. In the dynamic mobile team, my
            responsibilities encompassed the architecture and development of
            these applications.
          </p>
          <p>
            I effectively coordinated with cross-functional teams handling
            different layers of the product infrastructure, including UI/UX,
            Mobile, Frontend, Backend, QA, and DevOps. Active participation in
            the Scrum process marked the journey, from task refinements,
            planning, and estimation, proposing technologies, implementing and
            developing applications, to post-analysis, concluding with demos and
            retrospectives.
          </p>
          <p>Key Technical Contributions:</p>
          <ul>
            <li>
              Developed pixel-perfect, seamless UIs for both iOS and Android
              platforms.
            </li>
            <li>
              Diagnosed and resolved bugs and performance bottlenecks,
              optimizing user experiences.
            </li>
            <li>
              Enforced the implementation of common patterns and best practices
              (TDD, MVP, SOLID, State Management).
            </li>
            <li>
              Maintained clean code and executed automated tests to uphold the
              product's quality standards.
            </li>
            <li>
              Leveraged native APIs for deep integrations with mobile platforms.
            </li>
            <li>
              Managed the end-to-end process of publishing apps on AppStore and
              PlayStore.
            </li>
          </ul>
          <p>
            ⚙️🧪🛠️ Tech Stack: React Native · React · TypeScript · JavaScript ·
            Redux · RxJS · TDD/Jest · GraphQL · RestAPI · GIT/GitHub ·
            CI/TeamCity · Fastlane · AppCenter · Jira · Slack · WebStorm
          </p>
          <p>
            🏆 This experience not only enriched my technical skills but also
            reinforced my commitment to delivering top-notch solutions in the
            healthcare domain.
          </p>
        </div>

        <div className="line-break"></div>

        <div className="card--work-history">
          <strong>
            👨‍💻 Software Engineer Consultant at{' '}
            <Link href="https://www.hatchways.io/" target="_blank">
              Hatchways
            </Link>
          </strong>
          <p>💼 Freelance Part-Time | 📍 Remote - Canada</p>
          <p>🗓️ 06/2021 - 10/2021</p>
          <p>
            As a consultant at Hatchways, I played a vital role in fostering an
            inclusive hiring process by monitoring and reviewing coding
            assessments for entry-level software engineers. This involved
            providing constructive feedback to help them stand out to potential
            employers.
          </p>
          <p>
            Technology Stack: React, JavaScript, Python, HTML5, CSS3, Git,
            GitHub, and Slack.
          </p>
        </div>

        <div className="line-break"></div>

        <div className="card--work-history">
          <strong>
            👨‍💻 Frontend Software Engineer at{' '}
            <Link href="https://carexs.com/" target="_blank">
              CareXS
            </Link>{' '}
            via{' '}
            <Link href="https://www.linkedin.com/company/tt-technologies/">
              TT-Technologies
            </Link>
          </strong>
          <p>💼 Full-Time | 📍 Remote - Amsterdam, Netherlands</p>
          <p>📆 12/2018 - 4/2019</p>
          <p>
            As a Frontend Software Engineer at CareXS, I played a pivotal role
            in the development of web products. Key responsibilities included:
          </p>
          <ul>
            <li>
              Delivering new features through the creation of responsive web
              pages.
            </li>
            <li>
              Diagnosing and resolving bugs to ensure seamless user experiences.
            </li>
            <li>
              Establishing and maintaining end-to-end automation tests for
              quality assurance.
            </li>
            <li>
              Streamlining workflows through automation using GitHub, Docker,
              and CI/TeamCity.
            </li>
          </ul>
          <p>
            ⚙️🧪🛠️ Tech Stack: Angular, TypeScript, JavaScript, HTML5, CSS3, E2E
            Testing/TestCafe, MongoDB, Docker, CI/TeamCity, Git, GitHub, Jira
            Slack, and WebStorm.
          </p>
        </div>

        <div className="line-break"></div>

        <div className="card--work-history">
          <strong>👨‍💻 Full-Stack Software Engineer at FD Solutions</strong>
          <p>💼 Full-Time | 📍 On-site, Tetouan, Morocco</p>
          <p>🗓️ 08/2018 - 11/2018</p>
          <p>
            At FD Solutions, I contributed as a Remote Full Stack Developer,
            collaborating with USA clients to deliver tailored web and mobile
            solutions. Additionally, I had the opportunity to work closely with
            a CISCO team to build their e-learning platform.
          </p>
          <p>Key Responsibilities:</p>
          <ul>
            <li>
              Worked remotely, serving as a Full Stack Developer for the client.
            </li>
            <li>
              Successfully delivered features and tasks for the e-learning
              platform.
            </li>
          </ul>
          <p>
            ⚙️🧪🛠️ Tech Stack: React, Redux, JavaScript, HTML, CSS, Laravel,
            PHP, MySQL, Git, GitHub, Jira, and VSCode.
          </p>
        </div>

        <div className="line-break"></div>

        <div className="card--work-history">
          <strong>👨‍💻 Full-Stack JavaScript Engineer at FMJ Technology</strong>
          <p>💼 Full-Time | 📍 On-Site - Tangier, Morocco</p>
          <p>🗓️ 01/2018 - 07/2018</p>
          <p>
            At FMJ Technology, a French company based in Morocco, I played a
            pivotal role in developing a comprehensive social network tailored
            for artists and their fans, accessible on both mobile and web
            platforms.
          </p>
          <p>
            The platform's highlights include an extensive encyclopedia
            showcasing artists and their creations. Users, whether fans or
            visitors, could become members and curate their virtual art museums.
            Utilizing cutting-edge technologies such as image processing,
            machine learning, and 3D graphics programming, we provided
            interactive UIs for artistic creation.
          </p>
          <p>Key Responsibilities:</p>
          <ul>
            <li>Led the analysis, design, and technical proposal phases.</li>
            <li>
              Implemented an administration platform for seamless management.
            </li>
            <li>
              Developed online help and support modules for user assistance.
            </li>
            <li>
              Engineered a real-time media sharing module based on WebRTC,
              allowing users to share audio, video, screen contents, and various
              data forms in real time.
            </li>
          </ul>
          <p>
            ⚙️🧪🛠️ Tech Stack: Angular, Meteor.js, Chart.js, TypeScript,
            JavaScript, HTML, CSS, Node.js, Socket.io, WebRTC, Chrome API,
            MongoDB with tools like Git, GitLab, Trello, VSCode, and deployment
            on Ubuntu Server.
          </p>
        </div>
      </section>

      <section className="section--page">
        <h2>Projects & Accomplishments (In Progress...)</h2>

        <div className="card--project">
          <p>
            <span>🏆 </span>Public procurement service management solution -
            Java application.
          </p>
        </div>

        <div className="card--project">
          <p>
            <span>🏆 </span>Commercial service management solution - Web
            application.
          </p>
        </div>
      </section>

      <footer className="footer">
        <p className="footer--copy">{new Date().getFullYear()} © medaimane</p>
        <a className="footer--scroll" href="#">
          Scroll Up ⬆️
        </a>
      </footer>
    </div>
  );
}
