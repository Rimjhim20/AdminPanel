import React, { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../App.css';

function UpdateStudentInfo(props) {
  const [student, setStudent] = useState({
     title: '',
    cotitle: '',
    email: '',
    department: '',
    date: '',
    enroll: '',
    university:''
  });

  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`http://localhost:8082/api/students/${id}`)
      .then((res) => {
        setStudent({
          title: res.data.title,
          cotitle: res.data.cotitle,
          email: res.data.email,
          department: res.data.department,
          date: res.data.date,
          enroll: res.data.enroll,
          university:res.data.university
        });
      })
      .catch((err) => {
        console.log('Error from UpdateStudentInfo');
      });
  }, [id]);

  const onChange = (e) => {
    setStudent({ ...student, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    const data = {
      title: student.title,
      cotitle: student.cotitle,
      email: student.email,
      department: student.department,
      enroll: student.enroll,
      university: student.university,
    };

    axios
      .put(`http://localhost:8082/api/students/${id}`, data)
      .then((res) => {
        navigate(`/show-student/${id}`);
      })
      .catch((err) => {
        console.log('Error in UpdateStudentInfo!');
      });
  };

  return (
    <div className='UpdateStudentInfo'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-8 m-auto'>
            <br />
            <Link to='/' className='btn btn-outline-primary p-1 float-left'>
              Show Student List
            </Link>
          </div>
          <div className='col-md-8 m-auto'>
            <h1 className='display-4 text-center'>Edit Student</h1>
            <p className='lead text-center'>Update Student Info</p>
          </div>
        </div>

        <div className='col-md-6 m-auto'>
        <form noValidate onSubmit={onSubmit}>
              <div className='form-group'>
                <input
                  type='text'
                  placeholder='Participant Name'
                  name='title'
                  className='form-control'
                  value={student.title}
                  onChange={onChange}
                />
              </div>
              <br />
              <div className='form-group'>
                <input
                  type='text'
                  placeholder='Co-Participant Name'
                  name='cotitle'
                  className='form-control'
                  value={student.cotitle}
                  onChange={onChange}
                />
              </div>
              <br />

              <div className='form-group'>
                <input
                  type='email'
                  placeholder='EmailID'
                  name='email'
                  className='form-control'
                  value={student.email}
                  onChange={onChange}
                />
              </div>
              <br />
              {/* <div className='form-group'>
                <input
                  type='text'
                  placeholder='Phone Number'
                  name='Phone No.'
                  className='form-control'
                  value={student.phoneno}
                  onChange={onChange}
                />
              </div> */}
              <div className='form-group'>
                <input
                  type='text'
                  placeholder='Department Name'
                  name='department'
                  className='form-control'
                  value={student.department}
                  onChange={onChange}
                />
              </div>
              <br />
              <div className='form-group'>
                <input
                  type='date'
                  placeholder='Date'
                  name='date'
                  className='form-control'
                  value={student.date}
                  onChange={onChange}
                />
              </div>
              <br />
              <div className='form-group'>
                <input
                  type='text'
                  placeholder='Enrollment No.'
                  name='enroll'
                  className='form-control'
                  value={student.enroll}
                  onChange={onChange}
                />
              </div>
              <br />
              <div className='form-group'>
                <input
                  type='text'
                  placeholder='School/University Name'
                  name='university'
                  className='form-control'
                  value={student.university}
                  onChange={onChange}
                />
              </div>
              
              <input
                type='submit'
                className='btn btn-outline-primary p-2   mt-4 mb-4'
              />
            </form>
        </div>
      </div>
    </div>
  );
}

export default UpdateStudentInfo;