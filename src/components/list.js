import React from "react";

export default function list({ info, upcoming }) {
  console.log(info);
  return <ul>{iterate(info, upcoming)}</ul>;
}

function iterate(data, flag) {
  if (!data) return;
  const bgColor = flag ? { backgroundColor: "#06d6a0" } : {};

  return (
    <>
      {data.map((person, index) => {
        return (
          <li key={index}>
            <div className="flex" style={bgColor}>
              <img src={person.img} alt="img" />
              <div className="title">
                <h3 className="name">{person.name}</h3>
                <h4 className="age">Age {Old(person.birthday)}</h4>
                <h5 className="age">{person.birthday}</h5>
              </div>
            </div>
          </li>
        );
      })}
    </>
  );
}

// how old is this person

function Old(personAge) {
  let year = new Date(personAge).getFullYear();
  let currentYear = new Date().getFullYear();

  let age = currentYear - year;
  return age;
}
