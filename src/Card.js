export default function Card({ title, content, date, data }) {
  return (
    <>
      <div className="card-base">
        <div>
          <h2>{title}</h2>
        </div>
        <div
          className="card-content"
          dangerouslySetInnerHTML={{ __html: data }}
        />
        <p>{date}</p>
        <button>Read More</button>
      </div>
    </>
  );
}
