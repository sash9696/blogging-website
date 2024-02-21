// Function to toggle between dark and light themes

const themeToggleBtn = document.getElementById('theme-toggle');

function setThemeFromLocalStorage(){

    if(localStorage.getItem('theme')){
        document.body.classList.add('dark-theme');
        themeToggleBtn.innerText='Light Theme';

    }else{
        document.body.classList.remove('dark-theme');
        themeToggleBtn.innerText='Dark Theme';

    }
}
setThemeFromLocalStorage();

function toggleTheme() {
    document.body.classList.toggle('dark-theme');
    if(document.body.classList.contains('dark-theme')){
        themeToggleBtn.innerText='Light Theme';
        localStorage.setItem('theme','dark-theme');
    }else{
        themeToggleBtn.innerText='Dark Theme';
        localStorage.removeItem('theme');



    }
    // document.documentElement.classList.toggle('light-theme');
  }
  
  // Add event listener to the theme toggle button
  themeToggleBtn.addEventListener('click', toggleTheme);
  