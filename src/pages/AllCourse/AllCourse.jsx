import React from "react";
import Cover from "../shared/Cover";
import DynamicTitle from "../../Components/DynamicTitle";
import CourseCard from "../../Components/CourseCard";
import { useLoaderData } from "react-router-dom";
import { Spinner } from "react-bootstrap";

const AllCourse = () => {
  const allCourse = useLoaderData();
  return (
    <>
      <DynamicTitle title={"Courses"} />
      <Cover title={"All Course's"} />
      <div className="container py-5">
        <div className="row g-4 d-flex justify-content-center align-items-center">
          {allCourse?.length > 0 ? (
            allCourse.map((course) => (
              <CourseCard key={course?._id} course={course} />
            ))
          ) : (
            <Spinner variant="primary" />
          )}
        </div>
      </div>
    </>
  );
};

export default AllCourse;
