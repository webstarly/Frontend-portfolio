export default function Education() {
    return (
      <div>
        <section className="resume-section" id="education">
          <div className="resume-section-content">
            <h2 className="mb-5">Education</h2>
            <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
              <div className="flex-grow-1">
                <h3 className="mb-0">ALX Africa</h3>
                <div className="subheading mb-3">Software Engineering</div>
                <div>
                  A One year training and Internship specialization program in
                  Frontend Development using React.js
                </div>
                <p>Percentage: Above 70% in all projects</p>
              </div>
              <div className="flex-shrink-0">
                <span className="text-primary">March 2023 - Febuary 2024</span>
              </div>
            </div>
            <div className="d-flex flex-column flex-md-row justify-content-between">
              <div className="flex-grow-1">
                <h3 className="mb-0">University of Uyo</h3>
                <div className="subheading mb-3">Bachelor of Engineering</div>
                <p>
                  (B.Eng.) Electrical Electronics Engineering(Second Class Upper)
                </p>
              </div>
              <div className="flex-shrink-0">
                <span className="text-primary">September 2010 - April 2016</span>
              </div>
            </div>
          </div>
        </section>
        <hr className="m-0" />
      </div>
    );
  }
  