// CC Api
document.addEventListener('DOMContentLoaded', () => {
  const accessKey = '37467671ebd5103a366cb5cc39a6ef3b';
  const apiUrl = `https://api.coinlayer.com/live?access_key=${accessKey}&expand=1`;

  fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
          if (data.success) {
              const cryptoData = data.rates;
              const tableBody = document.querySelector('#cryptoTable tbody');

              for (const symbol in cryptoData) {
                  const cryptoInfo = cryptoData[symbol];

                  const newRow = document.createElement('tr');

                  newRow.innerHTML = `
                      <td>${symbol}</td>
                      <td>${cryptoInfo.rate}</td>
                      <td>${cryptoInfo.sup}</td>
                      <td>${cryptoInfo.vol}</td>
                      <td>${cryptoInfo.cap}</td>
                      <td><a href="/imagine"><button class="buy">Buy</button></a></td>
                  `;

                  tableBody.appendChild(newRow);
              }
          } else {
              console.error('Error fetching data:', data.error);
          }
      })
      .catch(error => {
          console.error('Error fetching data:', error);
      });
});


// popup forms
document.addEventListener('DOMContentLoaded', () => {
  const loginButton1 = document.querySelector('.L');
  const signupButton1 = document.querySelector('.S');
  const loginButton = document.getElementById('show-login');
  const signupButton = document.getElementById('show-signup');
  const popupContainer = document.querySelector('.popup-container');
  const loginForm = document.querySelector('.login-form');
  const signupForm = document.querySelector('.signup-form');

  const showPopup = () => {
      popupContainer.classList.add('active');
  };

  const closePopup = () => {
      popupContainer.classList.remove('active');
  };

  loginButton.addEventListener('click', () => {
      showPopup();
      loginForm.style.display = 'block';
      signupForm.style.display = 'none';
  });

  loginButton1.addEventListener('click', ()=>{
    showPopup();
    loginForm.style.display = 'block';
    signupForm.style.display = 'none';
  })

  signupButton.addEventListener('click', () => {
      showPopup();
      loginForm.style.display = 'none';
      signupForm.style.display = 'block';
  });

  signupButton1.addEventListener('click', () => {
    showPopup();
    loginForm.style.display = 'none';
    signupForm.style.display = 'block';
});

  const closeButton = document.querySelector('.close-btn');
  closeButton.addEventListener('click', () => {
      closePopup();
  });
});


// Dropdown
function toggleDropdown() {
  let dropdownMenu = document.getElementById("profileDropdown");
  dropdownMenu.style.display = (dropdownMenu.style.display === "block") ? "none" : "block";
}

// Close dropdown menu when clicking outside
window.onclick = function(event) {
  if (!event.target.matches('.dropdown button')) {
    let dropdownMenus = document.getElementsByClassName("dropdown-menu");
    for (let i = 0; i < dropdownMenus.length; i++) {
      let openDropdown = dropdownMenus[i];
      if (openDropdown.style.display === "block") {
        openDropdown.style.display = "none";
      }
    }
  }
}

