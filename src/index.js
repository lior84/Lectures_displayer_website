import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import HeaderContainer from "./HeaderContainer";
import CourseContainer from "./CoursesContainer";
import JsonLoader from "./components/JsonLoader";

ReactDOM.render(
  <React.StrictMode>
      <JsonLoader />
      <HeaderContainer />
      <CourseContainer />
  </React.StrictMode>,
  document.getElementById('root')
);
