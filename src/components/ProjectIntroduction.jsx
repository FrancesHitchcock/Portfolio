export default function ProjectIntroduction({ targetProject }) {
  return (
    <section className="intro-section">
      <h1 className="section-title section-title-intro">
        Project in <strong>Detail</strong>
      </h1>
      <p className="section-subtitle intro-subtitle">{targetProject.title}</p>
      <img
        className="intro-image"
        src={`/images/${targetProject.img}`}
        alt={targetProject.altText}
      />
    </section>
  );
}
