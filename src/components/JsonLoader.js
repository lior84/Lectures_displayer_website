import React from "react";
import jsonData from "../jsonFiles/Principles_of_Programming_Languages.json"

const JsonLoader = () =>
    <div>
        {jsonData.map((postDetail, index) => {
            return(
            <div>
                <ul>
                    <li>{postDetail.group_number}</li>
                    <li>{postDetail.date}</li>
                    <li>{postDetail.lecturer}</li>
                    <li>{postDetail.video_url}</li>
                </ul>
            </div>)
        })}
    </div>
export default JsonLoader

