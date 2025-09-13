const button = document.getElementById('mybutton');

button.onclick = function() {
    alert('Changed Mode'); //This displays a pop-up message
}

document.getElementById('mybutton').addEventListener('click', function() {
  document.body.classList.toggle('dark-mode'); // This toggles the dark mode class on the body
});

document.getElementById('loginForm').addEventListener('submit'), function(event) {
    const firstname = document.getElementById('firstname').value.trim(); //Trims any whitespace from the input
    const lastname = document.getElementById('lastname').value.trim(); //Links and trims the last name input
    const id = document.getElementById('id').value.trim();
    errorMesssage.style.display = 'none'; //Hides the error message by default
    errorMesssage.style.display = ''; //Resets the display property to its default value

    if (!firstname.value || !lastname.value || !id.value)
        e.preventDefault(); //Prevents submission of the form
        errorMesssage.textContent = "Input is required" //Promps user for input //Can be changed to any message
        errorMesssage.style.display = 'block'; //Displays the error message
    }