import React from "react";
import "./board.css";
import List from "./list";

const Info = [
  {
    img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
    name: "Ana",
    birthday: "1987-11-31",
  },
  {
    img: "https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
    name: "Miller Wright",
    birthday: "1998-09-05",
  },
  {
    img: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
    name: "Tara Kelly",
    birthday: "1991-02-02",
  },
  {
    img: "https://images.unsplash.com/photo-1492446845049-9c50cc313f00?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
    name: "Freddie Watson",
    birthday: "1999-10-15",
  },
  {
    img: "https://images.unsplash.com/photo-1503185912284-5271ff81b9a8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
    name: "Brianna Baker",
    birthday: "1994-04-25",
  },
  {
    img: "https://images.unsplash.com/photo-1503185912284-5271ff81b9a8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
    name: "Brad Myers",
    birthday: "1997-11-28",
  },
  {
    img: "https://images.unsplash.com/photo-1503185912284-5271ff81b9a8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
    name: "Eric van cipka",
    birthday: "1997-01-28",
  },
];

export default function board() {
  return (
    <main id="site-main">
      <h1 className="text-dark title">Birthday Remainder</h1>

      <div className="board">
        <List info={Today(Info)}></List>
        <h2 className="upcoming text-dark">Upcoming</h2>
        <List info={Upcoming(Info, 2)} upcoming={true}></List>
        <h2 className="upcoming text-dark">Past Birthdays</h2>
        <List info={Recent(Info)}></List>
      </div>
    </main>
  );
}

function Today(person) {
  let currentDay = new Date().getDate();
  let currentMonth = new Date().getMonth();

  let filter = person.filter((data) => {
    let day = new Date(data.birthday).getDate();
    let month = new Date(data.birthday).getMonth();

    return currentDay === day && currentMonth === month;
  });
  return filter;
}

// upcoming birthdays
function Upcoming(person, toMonth) {
  let currentMonth = new Date().getMonth();
  let currentDay = new Date().getDate();

  let filter = person.filter((data) => {
    let month = new Date(data.birthday).getMonth();
    let day = new Date(data.birthday).getDate();

    if (currentDay === day) return;
    return month >= currentMonth && month <= currentMonth + toMonth;
  });

  return filter;
}

// recent birthdays
function Recent(person, toMonth) {
  let currentMonth = new Date().getMonth();
  let currentDay = new Date().getDate();

  let filter = person.filter((data) => {
    let month = new Date(data.birthday).getMonth();
    let day = new Date(data.birthday).getDate();

    if (currentDay == day) return;
    return month <= currentMonth && month >= currentMonth - 7;
  });

  return filter;
}
