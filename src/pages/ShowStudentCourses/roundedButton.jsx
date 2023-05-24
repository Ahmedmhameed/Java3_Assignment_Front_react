import React, { useState } from "react";

export default function RoundedButton({
  course = {
    id: 0,
    name: "",
    room: "",
  },
  registeredCourses = [],
  setRegisteredCourses,
  registeredCoursesState,
}) {
  const [selected, setSelected] = useState(
    registeredCourses.reduce(
      (pre, curC) => (curC.id === course.id ? true : pre),
      false
    )
  );

  return (
    <button
      className={"btn " + (selected ? "btn-secondary" : "") + " btn-round m-1"}
      onClick={() => {
        if (selected) {
          setRegisteredCourses(
            registeredCoursesState.filter((c) => c.id !== course.id)
          );
        } else {
          setRegisteredCourses([...registeredCoursesState, course]);
        }
        setSelected(!selected);
      }}
    >
      {course.name} {course.room}
    </button>
  );
}
