export default function WhoIAm() {
  return (
    <section className="about-section" id="who-i-am">
      <h2 className="section-title section-title-about">Who I Am</h2>
      <p className="section-subtitle about-subtitle">
        not your average up-and-coming dev
      </p>
      <div className="about-body">
        <p>
          I am a web and software developer who lives close to the market town
          of Halesworth in Suffolk, UK. With a career background in education
          and admin I first took up coding in 2020 as a lockdown hobby. Inspired
          by its opportunities for creativity and problem-solving, coding soon
          became my passion, and in 2021 I left my job in admin to devote more
          time to learning frontend skills.
        </p>

        <p>
          As a largely self-taught coder who has recently completed a full stack
          bootcamp I have the researching and problem-solving skills of an
          independent learner, combined with the team working and time
          management capabilities of a bootcamp graduate.
        </p>

        <p>
          I have undertaken numerous projects, including two websites which are
          live on the World Wide Web.
        </p>

        <p>
          When I'm not coding I like to spend my time walking in the great
          outdoors, visiting sites of natural and cultural interest, and reading
          good novels.{" "}
        </p>
      </div>
      <img
        className="about-image"
        src="/images/frances-about.jpg"
        alt="Frances wearing a pink and white long-sleeved shirt sitting at a desktop computer. She is turned to look at the camera."
      />
    </section>
  );
}
