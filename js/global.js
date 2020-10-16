//Side bar menu

var menuOpen = false;
function toggleMenu() {
  if (menuOpen == true) {
    closeNav();
    menuOpen = false;
    console.log('Close menu');
  } else {
    openNav();
    menuOpen = true;
    console.log('Open');
  }
}
function openNav() {
  document.getElementById('mySidenav').style.width = '250px';
}

function closeNav() {
  document.getElementById('mySidenav').style.width = '0';
}

/////
