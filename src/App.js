import React from 'react';

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


function App() {
return (

    <div>
      <h1>List of Courses</h1>
      <hr />
      <CoursesList />
      
    </div>
  );
}

function CoursesList(){
return courses.map(function(course) {
    return( <div
      key={course.id}>
      <span>
        <a href={course.url}><h4>{course.title}</h4></a>
      </span>
      <span>| by <strong>{course.author}</strong></span>
      <span>| Video Hours: {course.hours_video}</span>
      <span>| Number of lectures: {course.number_of_lectures}</span>
      <span>| Rating: {course.rating}</span>
      <br/>
      <br/>
    </div>
    );
  });
}

export default App;
