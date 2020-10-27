import React from 'react';
import './DisplayStudent.scss';

const DisplayStudent = ({ id, name }) => <div className="student">{`${id}.${name}`}</div>;

export default DisplayStudent;
