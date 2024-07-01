
// Function to redirect to title page
function redirectToTitle() {
    window.location.href = 'home.html';
}
window.onload = function() {
  var username = localStorage.getItem('username');
  if (username) {
    // Display username in the Welcome heading
    var welcomeHeading = document.querySelector('h1');
    if (welcomeHeading) {
      welcomeHeading.textContent = 'Welcome, ' + username;
    }
  }
};
window.addEventListener('click',() =>{
document.getElementById("song").play();
});
