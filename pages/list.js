const accordionBtns = document.querySelectorAll('.item-header');

accordionBtns.forEach((accordion) => {
  accordion.onclick = function () {
    this.classList.toggle('active');

    let content = this.nextElementSibling;
    console.log(content);

    if (content.style.maxHeight) {
      //this is if the accordion is open
      content.style.maxHeight = null;
    } else {
      //if the accordion is currently closed
      content.style.maxHeight = content.scrollHeight + 'px';
      console.log(content.style.maxHeight);
    }
  };
});

// Retrieves data from session storage
function getSavedData() {
  let id = sessionStorage.getItem('employee-id');
  let name = sessionStorage.getItem('employee-name');
  let email = sessionStorage.getItem('employee-email');
  let phone = sessionStorage.getItem('employee-phone');
  document.getElementById('employee-id').innerHTML = 'Id: ' + id;
  document.getElementById('employee-name').innerHTML = name;
  document.getElementById('employee-email').innerHTML = 'Email: ' + email;
  document.getElementById('employee-phone').innerHTML = 'Phone: ' + phone;
  console.log(name, id, email, phone);
}

getSavedData();
