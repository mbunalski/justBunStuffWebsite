const submitButton = document.querySelector("#submit-button");
const inputField = document.querySelector("#new-task");


submitButton.addEventListener('click', function(e){
  const li = document.createElement('li');
  li.appendChild(document.createTextNode(inputField.value));
  const link = document.createElement('a');
  link.className = 'delete-item secondary-content';
  link.innerHTML = '<i class="fa fa-remove"></i>';
  li.appendChild(link);

  document.querySelector('ul.current-list').appendChild(li);


  e.preventDefault();
})