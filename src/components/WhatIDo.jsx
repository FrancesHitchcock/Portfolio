export default function WhatIDo() {
  return (
    <section className="what-i-do-section" id="what-i-do">
      <div className="what-i-do-scrim">
        <h2 className="section-title section-title-what">What I do</h2>
        <div className="skills">
          <div className="skill">
            <h3>HTML & CSS</h3>
            <p>
              I make responsive, mobile-first websites using semantic HTML and
              CSS tools such as grid, flexbox and custom properties. I can
              enhance user experience with subtle animations, and can work
              accurately from mockups and wireframes including Figma plans,
              paying close attention to detail. I also enjoy creating my own
              website designs.
            </p>
          </div>
          <div className="skill">
            <h3>JavaScript & React</h3>
            <p>
              I love solving JavaScript problems and writing efficient, dry
              code. I have created games using classes, constructor functions
              and ES6 syntax. I have several projects that incorporate
              third-party APIs. I am experienced with using React props, state
              and hooks, and can build Single Page Applications using React
              Router 6. This portfolio was built using React.
            </p>
          </div>
          <div className="skill">
            <h3>MERN Full Stack</h3>
            <p>
              Having completed the Tech Educators MERN Bootcamp, I can build
              full-stack sites using the MongoDB database hosting service,
              Express servers and Node.js combined with a React front end. I can
              manipulate data using the Create, Read, Update and Delete
              operations, and have incorporated Auth0 to implement login
              authentication.
            </p>
          </div>
        </div>
        <a className="btn" href="#projects">
          Projects
        </a>
      </div>
    </section>
  );
}
