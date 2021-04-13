import React from "react"
import CourseBox from "./components/CourseBox";

const CourseContainer = () =>
    <div className="course_container">
        <span className="lecture_box"> <CourseBox /> </span>
        <span className="lecture_box"> <CourseBox /> </span>
        <span className="lecture_box"> <CourseBox /> </span>
        <span className="lecture_box"> <CourseBox /> </span>
    </div>

export default CourseContainer