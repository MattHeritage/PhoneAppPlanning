//Side bar menu

var menuOpen = false;
function toggleMenu() {
  if (menuOpen == true) {
    closeNav();
    menuOpen = false;
    console.log('Close menu'); //Test ------------
  } else {
    openNav();
    menuOpen = true;
    console.log('Open menu'); //Test ------------
  }
}
function openNav() {
  document.getElementById('sideNav').style.width = '250px';
}

function closeNav() {
  document.getElementById('sideNav').style.width = '0';
}

//Image modal display

function openModal(img, pageModal, modalImg) {
  console.log('Open image modal'); //Test ------------
  pageModal.style.display = 'block';
  modalImg.src = img.src;
  caption.innerHTML = img.alt;
}
function closeModal(modal) {
  modal.style.display = 'none';
}
