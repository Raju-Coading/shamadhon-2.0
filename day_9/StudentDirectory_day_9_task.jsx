import React, { useEffect, useState } from "react";

function StudentDirectory() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/students")
      .then((res) => res.json())
      .then((data) => setStudents(data))
      .catch((err) => console.error("Error fetching students:", err));
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6">
      <div className="bg-white shadow-md rounded-lg p-6 w-96">
        <h2 className="text-xl font-bold mb-4 text-center">🎓 Student Directory</h2>
        <ul className="space-y-2">
          {students.map((student) => (
            <li key={student.id} className="p-3 border rounded bg-gray-50">
              <p><strong>Name:</strong> {student.name}</p>
              <p><strong>Age:</strong> {student.age}</p>
              <p><strong>Course:</strong> {student.course}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default StudentDirectory;
