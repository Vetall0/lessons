const icon = document.querySelector('.main-menu__burger');
icon.addEventListener('click', function () {
	document.documentElement.classList.toggle('menu-open');
});