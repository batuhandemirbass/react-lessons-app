function Course({ id, title, content, price, removeCourse }) {
  return (
    <div>
      <div className="card">
        <h2 className="card-title">{title}</h2>
        <p className="card-content">{content}</p>
        <p className="card-price">{price} TL</p>
        <button
          className="cardBtn"
          onClick={() => {
            removeCourse(id);
          }}
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default Course;
