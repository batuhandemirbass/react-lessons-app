import { useEffect, useState } from "react";
import "./App.css";
import Axios from "axios";
import Courses from "./components/Courses";
import Loading from "./components/Loading";

function App() {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const deleteCourse = (id) => {
    const afterDeletedCourses = courses.filter((course) => course.id !== id);
    setCourses(afterDeletedCourses);
  };
  const fetchCourses = async () => {
    setLoading(true);
    try {
      const response = await Axios.get("http://localhost:3000/courses");
      setCourses(response.data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchCourses();
  }, []);

  return (
    <div className="App">
      {loading ? (
        <Loading />
      ) : (
        <>
          {courses.length === 0 ? (
            <div className="courseContainer">
              <h2>Deleted All Courses</h2>
              <button
                onClick={() => {
                  fetchCourses();
                }}
              >
                Reload
              </button>
            </div>
          ) : (
            <Courses courses={courses} removeCourses={deleteCourse}></Courses>
          )}
        </>
      )}
    </div>
  );
}
export default App;
