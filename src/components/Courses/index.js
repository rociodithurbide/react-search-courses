import Course from "../Course";

function Courses(props) {
  return (
    <div className="cardsContainer">
      {props.filterCourses.map((course, key) => {
        return (
          <>
            <Course key={key} course={course} />
          </>
        );
      })}
    </div>
  );
}

export default Courses;
