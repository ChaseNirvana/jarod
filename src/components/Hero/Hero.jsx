import React, { useState } from "react";
import Typewriter from "typewriter-effect";
import GraphemeSplitter from "grapheme-splitter";
import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  const [locationComplete, setLocationComplete] = useState(false);

  const splitter = new GraphemeSplitter();

  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Jarod</h1>
        {/* Static location text after typing */}
        <div className={styles.location}>
          {!locationComplete ? (
            <Typewriter
              onInit={(typewriter) => {
                typewriter
                  .typeString("26 year-old software developer based in Florida, 🇺🇸")
                  .pauseFor(2000)
                  .callFunction(() => setLocationComplete(true)) // Set state to true
                  .start();
              }}
              options={{
                delay: 75,
                cursor: "|", // Cursor style
                stringSplitter: (string) => splitter.splitGraphemes(string), // Use GraphemeSplitter
              }}
            />
          ) : (
            <span>26 year-old software developer based in Florida, 🇺🇸</span>
          )}
        </div>
        {/* Tagline typing effect */}
        <div className={styles.tagline}>
        {locationComplete && (
            <Typewriter
              onInit={(typewriter) => {
                typewriter
                  .typeString("<em>Turning coffee</em>...")
                  .pauseFor(2000) // Pause after typing "Turning Coffee..."
                  .deleteChars(8) // Delete "offee..."
                  .typeString(
                    "<em>uriosity into </em><strong class=\"${styles.highlight}\">code.</strong>"
                  )
                  .pauseFor(2000) // Pause after "Curiosity into Code"
                  .deleteChars(5) // Delete "Code"
                  .typeString('<strong class="${styles.highlight}">python.</strong>')
                  .pauseFor(2000) // Pause after "Python"
                  .deleteChars(7) // Delete "Python"
                  .typeString('<strong class="${styles.highlight}">react.</strong>')
                  .pauseFor(2000)
                  .deleteChars(6) // Delete "React"
                  .typeString('<strong class="${styles.highlight}">css.</strong>')
                  .pauseFor(2000)
                  .deleteChars(4) // Delete "CSS"
                  .typeString('<strong class="${styles.highlight}">html.</strong>')
                  .pauseFor(2000)
                  .deleteChars(5) // Delete "HTML"
                  .typeString('<strong class="${styles.highlight}">code.</strong>')
                  .pauseFor(2000)
                  .start();
              }}
              options={{
                delay: 75,
                cursor: "|",
                loop: false,
                stringSplitter: (string) => splitter.splitGraphemes(string), // Use GraphemeSplitter
              }}
            />
        
        )}
          </div>
        <div className={styles.contactIcons}>
 

        <div className={styles.resumeButton}>
  <a
    href={getImageUrl("hero/resume.jpg")}
    download="Jarod-Waters-Resume.jpg"
    target="_blank"
    rel="noopener noreferrer"
    className={styles.resumeLink}
  >
    <span className={styles.resumeText}>Resume</span>
    <img
      src={getImageUrl("hero/file.png")}
      alt="Download CV"
      className={styles.resumeIcon}
    />
  </a>
</div>

 {/* Email */}
 <a
    href="mailto:jarodwatersall@gmail.com"
    target="_blank"
    rel="noopener noreferrer"
  >
    <img
      src={getImageUrl("hero/email.png")}
      alt="Email"
      className={styles.icon}
    />
  </a>

  {/* GitHub */}
  <a
    href="https://github.com/ChaseNirvana"
    target="_blank"
    rel="noopener noreferrer"
  >
    <img
      src={getImageUrl("hero/github.png")}
      alt="GitHub"
      className={styles.icon}
    />
  </a>

  {/* LinkedIn */}
  <a
    href="https://linkedin.com/in/jarod-waters"
    target="_blank"
    rel="noopener noreferrer"
  >
    <img
      src={getImageUrl("hero/linkedin.png")}
      alt="LinkedIn"
      className={styles.icon}
    />
  </a>
</div>
      </div>
      <img
        src={getImageUrl("hero/heroImage.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
