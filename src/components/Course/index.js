function Course(props) {
  return (
    <div className="card">
      <div
        className="imgContent"
        style={{ backgroundColor: props.course.color }}
      >
        <img src={props.course.img} className="cardImg" />
      </div>
      <h2 className="cardTitle">{props.course.name}</h2>
      <p className="cardDesc">{props.course.desc}</p>
    </div>
  );
}

export default Course;
