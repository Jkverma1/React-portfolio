import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import projImg4 from "../assets/img/project-img4.png";
import projImg5 from "../assets/img/project-img5.png";
import projImg6 from "../assets/img/project-img6.png";
import projImg7 from "../assets/img/project-img7.png";
import projImg8 from "../assets/img/project-img8.png";
import projImg9 from "../assets/img/project-img9.png";
import projImg10 from "../assets/img/project-img10.png";
import projImg11 from "../assets/img/project-img11.png";
import projImg12 from "../assets/img/project-img12.png";
import projImg13 from "../assets/img/project-img13.png";
import projImg14 from "../assets/img/project-img14.png";
import colorSharp2 from "../assets/img/color-sharp.png";
// import 'animate.css';
import TrackVisibility from "react-on-screen";

export const Projects = () => {
  const page1 = [
    {
      title: "Dot-Com.net",
      description: "Design & Development",
      imgUrl: projImg1,
    },
    {
      title: "Telecom Data",
      description: "Design & Development",
      imgUrl: projImg2,
    },
    {
      title: "Paras Style Shop",
      description: "Design & Development",
      imgUrl: projImg3,
    },
    {
      title: "TikTok Clone - TikTik",
      description: "Design & Development",
      imgUrl: projImg4,
    },
    {
      title: "Dashboard Application",
      description: "Design & Development",
      imgUrl: projImg5,
    },
    {
      title: "Fuzia Wellness",
      description: "Design & Development",
      imgUrl: projImg6,
    },
  ];
  const page2 = [
    {
      title: "HTML Chatbox",
      description: "Design & Development",
      imgUrl: projImg7,
    },
    {
      title: "Fast & Safe Packers",
      description: "Design & Development",
      imgUrl: projImg8,
    },
    {
      title: "AJA Legal",
      description: "Design & Development",
      imgUrl: projImg9,
    },
    {
      title: "CDR Comparison",
      description: "Design & Development",
      imgUrl: projImg10,
    },
    {
      title: "Kundla Connect",
      description: "Design & Development",
      imgUrl: projImg11,
    },
    {
      title: "To Do List",
      description: "Design & Development",
      imgUrl: projImg12,
    },
  ];
  const page3 = [
    {
      title: "Medical Form",
      description: "Design & Development",
      imgUrl: projImg13,
    },
    {
      title: "Pingalo",
      description: "Design & Development",
      imgUrl: projImg14,
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>Projects</h2>
                  <p>
                    I am a Full Stack Web Developer. I have 3+ years of
                    experience in Developing Websites with MERN, MEVN stack. I
                    have expertise in UI/UX development.
                  </p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                      id="pills-tab"
                    >
                      <Nav.Item>
                        <Nav.Link eventKey="first">Tab 1</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Tab 2</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Tab 3</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content
                      id="slideInUp"
                      className={
                        isVisible ? "animate__animated animate__slideInUp" : ""
                      }
                    >
                      <Tab.Pane eventKey="first">
                        <Row>
                          {page1.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <Row>
                          {page2.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <Row>
                          {page3.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  );
};
