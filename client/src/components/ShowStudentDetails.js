import React, { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

function ShowStudentDetails(props) {

  const [student, setStudent] = useState({});
  const { id } = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    axios
      .get(`http://localhost:8082/api/students/${id}`)
      .then((res) => {
        setStudent(res.data);
      })
      .catch((err) => {
        console.log('Error from ShowStudentDetails');
      });
  }, [id]);

  const onDeleteClick = (id) => {
    axios
      .delete(`http://localhost:8082/api/students/${id}`)
      .then((res) => {
       navigate.push('/');
      })
      .catch((err) => {
        console.log('Error form ShowStudentDetails_deleteClick');
      });
  };

  const StudentItem = (
    <div>
      <table className='table table-hover table-dark'>
        <tbody>
          <tr>
            <th scope='row'>1</th>
            <td>Participant Name</td>
            <td>{student.title}</td>
          </tr>
          <tr>
            <th scope='row'>2</th>
            <td>Co-Participant Name</td>
            <td>{student.cotitle}</td>
          </tr>
          <tr>
            <th scope='row'>3</th>
            <td>EmailID</td>
            <td>{student.email}</td>
          </tr>
          {/* <tr>
            <th scope='row'>4</th>
            <td>Phone No.</td>
            <td>{student.phoneno}</td>
          </tr> */}
          <tr>
            <th scope='row'>5</th>
            <td> Date</td>
            <td>{student.date}</td>
          </tr>
          <tr>
            <th scope='row'>6</th>
            <td>Department Name</td>
            <td>{student.department}</td>
          </tr>
          {/* <tr>
            <th scope='row'>6</th>
            <td>Date</td>
            <td>{student.date}</td>
          </tr> */}
          <tr>
            <th scope='row'>6</th>
            <td>Enrollment No.</td>
            <td>{student.enroll}</td>
          </tr>
          <tr>
            <th scope='row'>6</th>
            <td>University Name</td>
            <td>{student.university}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );

  return (
    <div className='ShowStudentDetails'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-10 m-auto'>
            <br /> <br />
            <Link to='/showstudent' className='btn btn-outline-warning float-left' >
              Show Student List
            </Link>
          </div>
          <br />
          <div className='col-md-8 m-auto'>
            <h1 className='display-4 text-center'>Student's Record</h1>
            <p className='lead text-center'>View Student's Info</p>
            <hr /> <br />
          </div>
          <div className='col-md-10 m-auto'>{StudentItem}</div>
          <div className='col-sm m-auto flex justify-spacebetween'>
            <button
              type='button'
              className='btn btn-outline-danger btn-sm btn-block mb-4'
              onClick={() => {
                onDeleteClick(student._id);
              }}
            >
               <Link
              to ={`/showstudent`} >
              Delete Student</Link>
            </button>
            <Link
              to ={`/edit-student/${student._id}`}
              className='btn btn-outline-info btn-sm btn-block mb-4'
            >
              Edit Student
            </Link>
          </div>
       
        </div>
      </div>
    </div>
  );
}

export default ShowStudentDetails;