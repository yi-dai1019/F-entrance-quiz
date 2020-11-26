const fetchAddStudent = (studentName) => {
  return fetch('http:localhost:8080/student', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(studentName),
  }).then((response) => {
    if (response.created) {
      return Promise.resolve();
    }
    return Promise.reject();
  });
};

const fetchGetInfo = (category) => {
  return fetch(`http:localhost:8080/${category}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  }).then((response) => {
    if (response.ok) {
      return Promise.resolve();
    }
    return Promise.reject();
  });
};

export { fetchAddStudent, fetchGetInfo };
