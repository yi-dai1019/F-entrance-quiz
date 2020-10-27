import React from 'react';
import DisplayStudent from '../Student/DisplayStudent';

const DisplayTeam = ({ id, name, students }) => {
  return (
    <div>
      <p>
        {id}
        {name}
      </p>
      {students.map((student) => (
        <DisplayStudent key={student.id} id={student.id} name={student.name} />
      ))}
    </div>
  );
};

export default DisplayTeam;
