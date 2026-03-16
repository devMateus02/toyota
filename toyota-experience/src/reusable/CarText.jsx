export default function CarText({ title, features }) {
  return (
    <>
      <h2 className="car-main-title">{title}</h2>

      <div className="car-side-features">
        {features.map((f, i) => (
          <p className="car-feature" key={i}>
            <span className="bullet"></span>
            <span className="bullet"></span>
            {f}
          </p>
        ))}
      </div>
    </>
  );
}