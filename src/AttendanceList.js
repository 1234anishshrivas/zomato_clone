// src/AttendanceList.js
import React, { useState } from 'react';

const AttendanceList = () => {
  const [students, setStudents] = useState([
    { id: 1, name: 'Student 1', present: false },
    { id: 2, name: 'Student 2', present: false },
    // Add more students as needed
  ]);

  const handleToggleAttendance = (id) => {
    setStudents((prevStudents) =>
      prevStudents.map((student) =>
        student.id === id ? { ...student, present: !student.present } : student
      )
    );
  };

  return (
    <div>
      <h2>Attendance List</h2>
      <ul>
        {students.map((student) => (
          <li key={student.id}>
            {student.name} -{' '}
            <input
              type="checkbox"
              checked={student.present}
              onChange={() => handleToggleAttendance(student.id)}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AttendanceList;
