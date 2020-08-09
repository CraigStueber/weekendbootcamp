import React, {useState, useEffect} from 'react';
import CoursesList from './CoursesList';
import Search from './Search';

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
  const[searchText, setSearchText] = useState(
    localStorage.getItem('searchText') || ''
    );

  const handleSearch = event => {
    setSearchText(event.target.value);
    }

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

      <CoursesList courses={filteredCourses} />
    </div>
  );
}


export default App;
