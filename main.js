function toggleDropdown (){
    var navbarToggle = document.getElementById('navbar-toggle');
    if (navbarToggle.className == 'topnav'){
        navbarToggle.className += ' responsive'; /*makes 'class = "topnav responsive"'*/
    }else{
        navbarToggle.className = 'topnav';
    }
}