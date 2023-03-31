// import {
//   id, name, salary
// } from './main.js';

// console.log(id);
// console.log(name);
// console.log(salary);
var Data = [
  {
    id: "187449130",
    name: "GoodMarket Meetings",
    orderindex: 0,
    content:
      "Object 1",
    status: {
      status: "ongoing",
      color: "#3397dd",
    },
    priority: null,
    assignee: null,
    task_count: "0",
    due_date: null,
    start_date: null,
    folder: {
      id: "115264826",
      name: "GoodMarket",
      hidden: false,
      access: true,
    },
    space: {
      id: "19211437",
      name: "Magento Projects",
      access: true,
    },
    archived: false,
    override_statuses: true,
    permission_level: "create",
  },
  {
    id: "205202714",
    name: "Goodmarket User Stories",
    orderindex: 1,
    content:
      "User Story Definition: an informal, natural language description of features of a software system written from the perspective of an end user.\nEnd users in GoodMarket: Buyer/Vendor/Network/Admin\nNot an end user: client/developer/tester/designer/manager\nUser Stories Reference\nRequirement Overview: The target is to complete as much as possible within 3 months (mid June to mid September 2022) so that B2C products with payments and gift cards are available for the 2022 holiday season.",
    status:
    {
      status: "ongoing",
      color: "#3397dd",
    },
    priority: null,
    assignee: null,
    task_count: "0",
    due_date: null,
    start_date: null,
    folder: {
      id: "115264826",
      name: "GoodMarket",
      hidden: false,
      access: true,
    },
    space: {
      id: "19211437",
      name: "Magento Projects",
      access: true,
    },
    archived: false,
    override_statuses: true,
    permission_level: "create",
  },
  {
    id: "199459277",
    name: "GoodMarket Backlog",
    orderindex: 2,
    status: {
      status: "active",
      color: "#9b59b6",
    },
    priority: null,
    assignee: null,
    task_count: "0",
    due_date: null,
    start_date: null,
    folder: {
      id: "115264826",
      name: "GoodMarket",
      hidden: false,
      access: true,
    },
    space: {
      id: "19211437",
      name: "Magento Projects",
      access: true,
    },
    archived: false,
    override_statuses: false,
    permission_level: "create",
  },
  {
    id: "199314590",
    name: "GoodMarket Magento Integration Issues",
    orderindex: 3,
    status: {
      status: "ongoing",
      color: "#3397dd",
    },
    priority: null,
    assignee: null,
    task_count: "0",
    due_date: null,
    start_date: null,
    folder: {
      id: "115264826",
      name: "GoodMarket",
      hidden: false,
      access: true,
    },
    space: {
      id: "19211437",
      name: "Magento Projects",
      access: true,
    },
    archived: false,
    override_statuses: true,
    permission_level: "create",
  },
  {
    id: "199273807",
    name: "GoodMarket Shopify Integration Issues",
    orderindex: 4,
    status: {
      status: "active",
      color: "#9b59b6",
    },
    priority: null,
    assignee: null,
    task_count: "0",
    due_date: null,
    start_date: null,
    folder: {
      id: "115264826",
      name: "GoodMarket",
      hidden: false,
      access: true,
    },
    space: {
      id: "19211437",
      name: "Magento Projects",
      access: true,
    },
    archived: false,
    override_statuses: true,
    permission_level: "create",
  },
  {
    id: "199254937",
    name: "GoodMarket Designing",
    orderindex: 5,
    status: {
      status: "ongoing",
      color: "#3397dd",
    },
    priority: null,
    assignee: null,
    task_count: "0",
    due_date: null,
    start_date: null,
    folder: {
      id: "115264826",
      name: "GoodMarket",
      hidden: false,
      access: true,
    },
    space: {
      id: "19211437",
      name: "Magento Projects",
      access: true,
    },
    archived: false,
    override_statuses: false,
    permission_level: "create",
  },
  {
    id: "193278611",
    name: "GoodMarket Development",
    orderindex: 6,
    status: {
      status: "ongoing",
      color: "#3397dd",
    },
    priority: null,
    assignee: null,
    task_count: "0",
    due_date: null,
    start_date: null,
    folder: {
      id: "115264826",
      name: "GoodMarket",
      hidden: false,
      access: true,
    },
    space: {
      id: "19211437",
      name: "Magento Projects",
      access: true,
    },
    archived: false,
    override_statuses: true,
    permission_level: "create",
  },
  {
    id: "193352341",
    name: "GoodMarket Website Testing",
    orderindex: 7,
    status: {
      status: "ongoing",
      color: "#3397dd",
    },
    priority: null,
    assignee: null,
    task_count: "0",
    due_date: null,
    start_date: null,
    folder: {
      id: "115264826",
      name: "GoodMarket",
      hidden: false,
      access: true,
    },
    space: {
      id: "19211437",
      name: "Magento Projects",
      access: true,
    },
    archived: false,
    override_statuses: true,
    permission_level: "create",
  },
];
class employee {
  constructor(eid, ename, esalary) {
    this.eid = eid,
      this.ename = ename,
      this.esalary = esalary
  }
}

let data = [];
function addition() {
  event.preventDefault();

  let id_name = document.getElementById('id1').value;
  let detail_name = document.getElementById('name1').value;
  let detail_salary = document.getElementById('sal1').value;

  emp = new employee(id_name, detail_name, detail_salary);
  //console.log(emp);
  data.push(emp);
  console.log(data); 
  display();

}
function display() {
  //data=[0];
  let data1 = "";
  event.preventDefault();
  //console.log(data);
  data.forEach(ele => {

    data1 += "<tr><td>" + ele.eid + "</td><td>" +
      ele.ename + "</td><td>" + ele.esalary + "</td><td>" + "<button id='btn'> DELETE</button>" + "</td></tr>";

  });
  //console.log(data);
  document.getElementById('details').innerHTML = data1;

}
display();
crud();
function crud() {
  event.preventDefault();
  let d = "";
  Data.forEach(e => {
    d += "<tr><td>" + e.id + "</td><td>" + e.name + "</td><td>" +
      e.orderindex + "</td><td style='background-color:" + e.status.color + ";'>" + "</td></tr>";
  });

  document.getElementById('tab').innerHTML = d;
}
function displaytab() {
  event.preventDefault();
  let r = "";
  Data.forEach(e => {
    r += "<tr><td>" + e.id + "</td><td>" +
      e.name + "</td><td>" + e.orderindex + "</td><td style='background-color:" + e.status.color + ";'>" + "</td></tr>";
  });
  document.getElementById('tab').innerHTML = r;
}

function deletion() 
{
  event.preventDefault();
  console.log(Data);

  Data.forEach(e => {

    if (e.id == "205202714") {
      Data.splice(Data.indexOf(e), 1)
    }
  });
  console.log(Data);
  displaytab();
}

function updation() {

  event.preventDefault();
  Data.forEach(e => {

    if (e.id === "193352341") {
      e.name = "Hello";
    }
  });
  displaytab();
}
dropdown();
function dropdown() {
  event.preventDefault();
  let values = "";
  for (var i = 0; i < Data.length; i++) {
    values += "<option>" + Data[i].id + "</option>";
  }
  document.getElementById('id11').innerHTML = values;
}

function promise() {
  event.preventDefault();
  let promise = new Promise(function (resolve, reject) {

    let num1 = document.getElementById('n1').value;

    let num2 = document.getElementById('n2').value;

    if (num1 % num2 == 0) {
      resolve("Promise is successful" + num1 / num2);
      //return (num1/num2);
    }
    else {
      reject("Rejected");
    }
  });
  setTimeout(function () {
    console.log(promise)
  }, 2000);




}
promise();

async function fetchdata() {
  event.preventDefault();
  const wa = await fetch("https://jsonplaceholder.typicode.com/todos");
  let d = await wa.json();
  //console.log(d);
  return d;
}


fetchdata().then((d) => {
  let d;
  let res = "";
  d.forEach(x => {
    if (typeof x != 'undefined') {
      res += "<tr><td>" + x.userId + "</td><td>" + x.title + "</td><td>" + x.id + "</td><td>" + x.completed + "</td></tr>";
    }
  });
  //     console.log(x.userId);

  document.getElementById("task5").innerHTML = res;
});
fetchdata();


// TIC-TAC-TOE
let c = 1;
let array = [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1];
function reset() {
  event.preventDefault();
  for (let i = 1; i <= 9; i++) {
    document.getElementById(i).innerHTML = "";
    array = [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1];
  }
}
function check() {
  event.preventDefault();
  for (let i = 1; i <= 7; i += 3) {
    if (array[i] == array[i + 1] && array[i] == array[i + 2] && array[i] != -1) {
      return true;
    }
  }
  for (let i = 1; i <= 3; i++) {
    if (array[i] == array[i + 3] && array[i] == array[i + 6] && array[i] != -1) {
      return true;
    }
  }
  if (array[1] == array[5] && array[1] == array[9] && array[1] != -1) {
    return true;

  }
  if (array[3] == array[5] && array[3] == array[7] && array[3] != -1) {
    return true;

  }
  return false;
}

function tictac(x) {
  event.preventDefault();
  if (array[1 * x.id] != -1) {
    document.getElementById('error1').innerHTML = "please choose another box"
  }
  else {
    document.getElementById('error1').innerHTML = ""
  }
  if (c & 1) {
    array[1 * x.id] = 0;
    document.getElementById(x.id).innerHTML = 0;
  }
  else {
    array[1 * x.id] = 'x';
    document.getElementById(x.id).innerHTML = 'x';

  }
  c++;
  let test = check();
  if (test) {
    alert("you won");
    // const myTimeout = setTimeout(reset, 2000);
    // c = 1;
  }
}
// function dee() {
//   // debugger
//   console.log(id);
//   console.log(name);
//   console.log(salary);
//   let i = document.getElementById('importing');
//   let str = "";

//   str += "<tr><td>" + id + "</td><td>" + name + "</td><td>" + salary + "</td></tr>";
//   i.innerHTML = str;
// }

// dee();

let datechecker=() => {
  event.preventDefault();
  let str = "";
  let start = document.getElementById('startyear').value;
  let end = document.getElementById('endyear').value;
  // console.log(start);
  // console.log(end);
  for (let i = start; i <= end; i++) {
    for (let j = 0; j <= 11; j++) {
      let datenew = new Date(j + "/13/" + i);

      // console.log(datenew);
      // console.log(typeof(datenew.getDay()));
      if (datenew.getDay() == 5) {
        str += "<p>" + datenew.toDateString() + "</p>";
      }
    }
  }
  //console.log(str);
  document.getElementById('dates').innerHTML = str;

};
datechecker();
function heading_bingo() {
  event.preventDefault();
  let id = document.getElementById("dom");
  let height_1 = id.querySelectorAll("h1");
  for (let i = 0; i < height_1.length; i++) {
    let height_2 = document.createElement("h2");
    height_2.innerHTML = height_1[i].innerHTML;
    if (height_1[i].getAttribute("class") != "bingo") {
      console.log(height_1[i]);
      height_1[i].parentNode.replaceChild(height_2, height_1[i]);
    }
  }
  document.getElementById("dom").innerHTML = div.innerHTML;
}

