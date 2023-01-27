import React, { useState, useEffect } from 'react';
import axios from 'axios';
import StudentCard from '../components/StudentCard';

function ShowStudentList() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:8082/api/students')
      .then((res) => {
        setStudents(res.data);
      })
      .catch((err) => {
        console.log('Error from ShowStudentList');
      });
  }, []);

  const StudentList =
  students.length === 0
      ? 'there is no student record!'
      : students.map((student, k) => <StudentCard student={student} key={k} />);

  return (
    <div className='ShowStudentList'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-12'>
            <br />
            <h2 className='display-4 text-center'>Registered Students List</h2>
          </div>

          {/* <div className='col-md-11'>
            <Link
              to='/createstudent'
              className='btn btn-primary-warning float-right'
            >
              + Register Student
            </Link>
            <br />
            <br />
            <hr />
          </div> */}
        </div>

        <div className='list'>{StudentList}</div>
      </div>
    </div>
  );
}

export default ShowStudentList;