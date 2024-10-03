import "@fortawesome/fontawesome-free/css/all.min.css";

export default function About() {
  return (
    <section className="resume-section" id="about">
      <div className="resume-section-content">
        <h1 className="mb-0">
          EDIDIONG
          <span className="text-primary"> UKEM</span>
        </h1>
        <div className="subheading mb-5">Frontend Developer </div>
        <p className="lead mb-5">
          I am an ambitious goal-oriented Frontend Developer skilled in HTML,
          CSS, JavaScript, React aiming to utilize technical expertise and
          creativity to develop captivating user experiences and advance
          professionally. Proficient in debugging, code optimization, and
          project collaboration, with a commitment to exceeding user
          expectations.
        </p>
        <div className="social-icons">
          <a
            className="social-icon"
            href="https://www.linkedin.com/in/edidiong-u-72273a146?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app/"
          >
            <i className="fab fa-linkedin-in" />
          </a>
          <a className="social-icon" href="https://github.com/webstarly">
            <i className="fab fa-github" />
          </a>

          <a className="social-icon" href="https://medium.com/@edidionge.ukem">
            <i className="fab fa-medium" />
          </a>
        </div>
      </div>
    </section>
  );
}
