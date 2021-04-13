import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import HeaderContainer from "./HeaderContainer";
import CourseContainer from "./CoursesContainer";

ReactDOM.render(
  <React.StrictMode>
      <HeaderContainer />
      <CourseContainer />
  </React.StrictMode>,
  document.getElementById('root')
);
