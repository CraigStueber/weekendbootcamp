import React, {useState, useEffect, useReducer} from 'react';
import CoursesList from './CoursesList';
import Search from './Search';

const courses_data = [
  {
    id:1,
    title: "Bob likes things",
    author: "Maximilian Schwarzmuller",
    hours_video: 40.5,
    number_of_lectures: 490,
    rating: 4.6,
    url: "https://codingthesmartway.com/courses/react-complete-guide/"

  },
  {
    id:2,
    title: "The course name",
    author: "J.R.R. Tolkien",
    hours_video: 40.5,
    number_of_lectures: 490,
    rating: 4.6,
    url: "https://codingthesmartway.com/courses/react-complete-guide/"

  },
  {
    id:3,
    title: "I need to fill in",
    author: "R.A. Salvatore",
    hours_video: 40.5,
    number_of_lectures: 490,
    rating: 4.6,
    url: "https://codingthesmartway.com/courses/react-complete-guide/"

  }



];


const coursesRuducer = (state, action) => {
  switch(action.type) {
    case 'SET_COURSES':
      return action.payload;
      case 'REMOVE_COURSE':
        return state.filter(
          course => action.payload.id !== course.id
        )
      default: 
      throw new Error();
  }
};



const App = () => {
 
  const [courses, dispatchCourses] = useReducer(
    coursesRuducer,
    []
  );
  const [isLoading, setIsLoading] = useState(false);

  const[searchText, setSearchText] = useState(
    localStorage.getItem('searchText') || ''
    );

  const handleSearch = event => {
    setSearchText(event.target.value);
    }
  const handleRemoveCourse = course =>{
    dispatchCourses({
      type: 'REMOVE_COURSE',
      payload: course
    });
  }
  const getCoursesAsync = () => 
    new Promise(resolve => 
      setTimeout(
        () => resolve({courses: courses_data}), 
        2000
      )
      );
  useEffect(() => {
    setIsLoading(true);
    getCoursesAsync().then(result => {
      dispatchCourses({
        type: 'SET_COURSES',
        payload: result.courses
      });
      setIsLoading(false);
    })
  }, []);

  useEffect(() => {
    localStorage.setItem('searchText' , searchText)
  }, [searchText]);

  const filteredCourses = courses.filter(course => {
    return course.title.includes(searchText) || course.author.includes(searchText)
  });

return (

    <div>
      <h1>List of Courses</h1>
      <hr />

      <Search value={searchText} onSearch={handleSearch} />
      {isLoading ? (
        <p>Loading Courses ...</p>
      ) : (
        <CoursesList courses={filteredCourses} handleRemoveCourse={handleRemoveCourse}/> 
      )}
    </div>
  );
}


export default App;
