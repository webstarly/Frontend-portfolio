import menu from '../assets/pictures/menu.png';
import signing from '../assets/pictures/signup.png';

export default function Projects() {
    return (
      <div>
        <section className="resume-section" id="projects">
          <div className="resume-section-content projects">
            <h2 className="mb-1">Projects</h2>
            <div className="subheading mb-2">Frontend projects</div>
            <div className="d-flex row">
              
              {/** 1  */}
              <div
                className="card col-md-3 col-12 mx-2 mb-1"
                style={{ width: "14rem" }}
              >
                <img
                  className="card-img-top"
                  src={menu}
                  alt="Card cap"
                />
                <div className="card-body">
                  <h5 className="card-title">El-chapo-menu</h5>
                  <a
                    href="https://github.com/webstarly/El-Chapo-Menu/tree/main/el-chapo-menu"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="btn btn-primary"
                  >
                    Github
                  </a>
                  <a
                    href="https://el-chapo-menu.vercel.app/"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="btn btn-secondary"
                  >
                    Demo
                  </a>
                </div>
              </div>

              {/** 2 */}
              <div
                className="card col-md-3 col-12 mx-2 mb-1"
                style={{ width: "14rem" }}
              >
                <img
                  className="card-img-top"
                  src= {signing}
                  alt="Card cap"
                />
                <div className="card-body">
                  <h5 className="card-title">Modern-signup-flow</h5>
                  <a
                    href="https://github.com/webstarly/Modern_signup_template"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="btn btn-primary"
                  >
                    Github
                  </a>
                  <a
                    href="https://modern-signup-template.vercel.app/"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="btn btn-secondary"
                  >
                    Demo
                  </a>
                </div>
              </div>
              
              {/** 3 */}
              <div
                className="card col-md-3 col-12 mx-2 mb-1"
                style={{ width: "14rem" }}
              >
                <img
                  className="card-img-top"
                  src="https://i.imgur.com/fmEennm.png"
                  alt="Card cap"
                />
                <div className="card-body">
                  <h5 className="card-title">Alx-tic-tac-toe-game</h5>
                  <a
                    href="https://github.com/agun36/Alx-Tic-tac-toe"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="btn btn-primary"
                  >
                    Github
                  </a>
                  <a
                    href="https://alx-tic-tac-toe-game.netlify.app/"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="btn btn-secondary"
                  >
                    Demo
                  </a>
                </div>
              </div>
              
              {/** 4 */}
              <div
                className="card col-md-3 col-12 mx-2 mb-1"
                style={{ width: "14rem" }}
              >
                <img
                  className="card-img-top"
                  src="https://i.imgur.com/zm4YavS.png" 
                  alt="Card cap"
                />
                <div className="card-body">
                  <h5 className="card-title">Frontend Portfolio with React</h5>
                  <a
                    href="https://github.com/webstarly/Frontend-portfolio"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="btn btn-primary"
                  >
                    Github
                  </a>
                  <a
                    href=" https://edidiong-ukem.vercel.app/"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="btn btn-secondary"
                  >
                    Demo
                  </a>
                </div>
              </div>

              

              {/** 5 new 
              <div
                className="card col-md-3 col-12 mx-2 mb-1"
                style={{ width: "14rem" }}
              >
                <img
                  className="card-img-top"
                  src="https://i.imgur.com/fmEennm.png"
                  alt="Card cap"
                />
                <div className="card-body">
                  <h5 className="card-title">Alx-tic-tac-toe-game</h5>
                  <a
                    href="https://github.com/agun36/Alx-Tic-tac-toe"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="btn btn-primary"
                  >
                    Github
                  </a>
                  <a
                    href="https://alx-tic-tac-toe-game.netlify.app/"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="btn btn-secondary"
                  >
                    Demo
                  </a>
                </div>
              </div> */}

              




            </div>
          </div>
        </section>
        <hr className="m-0" />
      </div>
    );
  }
  