

export default function WhatIDo(){
    return(
        <section className="what-i-do-section" id="what-i-do">
            <div className="what-i-do-scrim">
                <h2 className="section-title section-title-what">What I do</h2>
                <div className="skills">
                    <div className="skill">
                        <h3>HTML + CSS</h3>
                        <p>I make responsive, mobile-first websites using CSS tools such as grid and flexbox, and can enhance user experience with subtle animations. I can work from mockups including Figma plans and also enjoy creating web designs from scratch. </p>
                    </div>
                    <div className="skill">
                        <h3>JavaScript</h3>
                        <p>My JavaScript focuses on code re-use and scalability. I use ES6 syntax where appropriate, including arrow functions, template literals, destructuring and modular JS. My work includes data from APIs. I love solving JavaScript logic problems.</p>
                    </div>
                    <div className="skill">
                        <h3>React</h3>
                        <p>My React projects are built using functional components, though I can also work with class components. I use props and state and other React hooks including custom hooks, and my work uses elements of React Router 6. I also have experience of React Context.This portfolio was built in React.</p>
                    </div>
                </div>
                <a className="btn" href="#projects">Projects</a>
            </div>
        </section>
    )
}