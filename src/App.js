import React, {useState} from 'react';
import CoursesList from './CoursesList';

const courses = [
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

const App = () => {
  const[searchText, setSearchText] = useState('');

  const handleSearchInputChange = event => {
    setSearchText(event.target.value);

  }

  const filteredCourses = courses.filter(course => {
    return course.title.includes(searchText) || course.author.includes(searchText)
  });

return (

    <div>
      <h1>List of Courses</h1>
      <hr />

      <label htmlFor="searchInput">Search: </label>
      <input id="searchInput" 
              type="text" 
               onChange={handleSearchInputChange}/>

      <CoursesList courses={filteredCourses} />
    </div>
  );
}


export default App;
