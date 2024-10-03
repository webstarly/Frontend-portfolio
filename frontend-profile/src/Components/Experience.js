import React from "react";

export default function Experience() {
  return (
    <div>
      <section className="resume-section" id="experience">
        <div className="resume-section-content">
          <h2 className="mb-5">Experience</h2>
          <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="flex-grow-1">
              <h3 className="mb-0">React Developer</h3>
              <div className="subheading mb-3">Alt_School</div>
              <p>
                Used react framework to exclusively developed frontend interface
                and built modular, reusable, and performant components.
                Implement responsive designs that adapt to various devices and
                screen sizes. Utilise continuous integration/continuous
                deployment (CI/CD) pipelines. Deployed react applications with
                firebase,vercel and netlify.
              </p>
            </div>
            <div className="flex-shrink-0">
              <span className="text-primary">Febuary 2024 - May 2024</span>
            </div>
          </div>
          <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="flex-grow-1">
              <h3 className="mb-0">SOFTWARE Developer (Frontend)</h3>
              <div className="subheading mb-3">ALX AFRICA</div>
              <p>
                Regularly debugged code and maintained quality standards
                Employed HTML, CSS and JavaScript while leveraging React.
                Collaborated with other developers to ensure successful,
                on-schedule development and delivery of applications. Actively
                participated in back-end development tasks and successfully
                integrated front-end application with backend services.
              </p>
            </div>
            <div className="flex-shrink-0">
              <span className="text-primary">Febuary 2023 - Febuary 2024</span>
            </div>
          </div>
          <div className="d-flex flex-column flex-md-row justify-content-between">
            <div className="flex-grow-1">
              <h3 className="mb-0">developer</h3>
              <div className="subheading mb-3">Solo Learn App</div>
              <p>
                Learn basics of HTML, CSS, JavaScript and JQuery. Developed an
                interactive layout, using HTML, CSS and JavaScript to generate
                an improved user experience. Regularly debugged code and
                maintained standard while coding
              </p>
            </div>
            <div className="flex-shrink-0">
              <span className="text-primary">June 2019 - June 2021</span>
            </div>
          </div>
        </div>
      </section>
      <hr className="m-0" />
    </div>
  );
}
