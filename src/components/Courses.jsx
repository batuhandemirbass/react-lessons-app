import Course from "./Course";

function Courses({ courses, removeCourses }) {
  console.log(courses);
  return (
    <div className="courseContainer">
      <div className="courseTitle">
        <h2>Courses</h2>
      </div>
      <div className="courseItem">
        {courses.map((course) => {
          return (
            <Course
              key={course.id}
              {...course}
              removeCourse={removeCourses}
            ></Course>
          );
        })}
      </div>
    </div>
  );
}

export default Courses;
