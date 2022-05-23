// Routing
const route = (Event) => {
  Event = Event || window.Event;
  Event.preventDefault();
  window.history.pushState({}, '', Event.target.href);
  handleLocation();
};

const routes = {
  404: '/pages/404.html',
  '/': 'index.html',
  '/list': 'pages/list.html',
};

const handleLocation = async () => {
  const path = window.location.pathname;
  const route = routes[path] || routes[404];
  const html = await fetch(route).then((data) => data.text());
  document.getElementById('main-page').innerHTML = html;
};
window.onpopstate = handleLocation;
window.route = route;

handleLocation();

// adding form input values
const employeeData = { id: [], name: [], email: [], phone: [] };

function getEmployeeId() {
  boxvalue = document.getElementById('employeeId').value;
  employeeData.id.push(boxvalue);
  getEmployeeName();
  return false;
}

function getEmployeeName() {
  boxvalue = document.getElementById('name').value;
  employeeData.name.push(boxvalue);
  getEmployeeEmail();
  return false;
}

function getEmployeeEmail() {
  boxvalue = document.getElementById('email').value;
  employeeData.email.push(boxvalue);
  getEmployeePhone();
  return false;
}

function getEmployeePhone() {
  boxvalue = document.getElementById('phone').value;
  employeeData.phone.push(boxvalue);
  saveData();
  return false;
}

// Saving data to session storage to be retrived by the list.js file
function saveData() {
  sessionStorage.setItem('employee-data', employeeData);
  sessionStorage.setItem('employee-id', employeeData.id);
  sessionStorage.setItem('employee-name', employeeData.name);
  sessionStorage.setItem('employee-email', employeeData.email);
  sessionStorage.setItem('employee-phone', employeeData.phone);
  getNewEmployee();
}

function getNewEmployee() {
  let name = sessionStorage.getItem('employee-name');
  document.getElementById('employee-name').innerHTML =
    name + ' successfully added to list!';
}
