const btnUp = document.querySelector('.btn-up');
btnUp.addEventListener('click', () => document.documentElement.scrollTop = 0);
const btnInfo = document.querySelector('.btn-info'), modalInfo = document.querySelector('.container-modal-info'), bg1 = document.querySelectorAll('.bg1'), panelItem = document.querySelectorAll('.panel-item'), modalContact = document.querySelector('.container-modal-contact'), btnMenu = document.querySelector('.menu-icon'), navbar__items_ = document.querySelector('.navbar__items_'), item_nav_responsive = document.querySelector('.navbar__items .item-navbar-responsive');
btnMenu.addEventListener('click', () => {
	navbar__items_.classList.toggle('navbar__items-show')
});

btnInfo.addEventListener('click', () => {
	modalInfo.classList.toggle('show');
	document.body.classList.toggle('overflow-hidden')
});

const btnContact = document.querySelector('.btnContact');
btnContact.addEventListener('click', () => {
	modalContact.classList.toggle('show');
	document.body.classList.toggle('overflow-hidden')
});

const btnOkModal = document.querySelector('.btn-ok');
btnOkModal.addEventListener('click', () => {
	modalConfirm.classList.remove('show')
});

const closeX = document.querySelector('.closeX');
const closeXcontact = document.querySelector('.close-contact');
closeX.addEventListener('click', () => {
	modalInfo.classList.remove('show');
	document.body.classList.remove('overflow-hidden')
});

closeXcontact.addEventListener('click', () => {
	modalContact.classList.remove('show');
	document.body.classList.remove('overflow-hidden')
});

const btnControl = document.querySelector('.btn-control'), nav = document.querySelector('nav'), textC = document.querySelectorAll('.textC'), bg2 = document.querySelectorAll('.bg2');
btnControl.addEventListener('click', () => {
	btnControl.classList.toggle('displace-btn');
	document.body.classList.toggle('dark-mode-primary');
	nav.classList.toggle('dark-mode-primary');
	if (document.body.classList.contains('dark-mode-primary')) {
		localStorage.setItem('dark-mode', 'true')
	} else {
		localStorage.setItem('dark-mode', 'false')
	}
	for (let textc of textC) {
		textc.classList.toggle('txt-gray-md')
	}
	for (let _txtBlue of panelItem) {
		_txtBlue.classList.toggle('txt-blue-md')
	}
	for (let _bg1 of bg1) {
		_bg1.classList.toggle('dark-mode_bg1')
	}
	for (let _bg_2 of bg2) {
		_bg_2.classList.toggle('dark-mode_bg2')
	}
}); 

if (localStorage.getItem('dark-mode') === 'true') {
	document.body.classList.add('dark-mode-primary');
	nav.classList.add('dark-mode-primary');
	btnControl.classList.add('displace-btn');
	for (let textc of textC) {
		textc.classList.add('txt-gray-md')
	}
	for (let _txtBlue of panelItem) {
		_txtBlue.classList.add('txt-blue-md')
	}
	for (let _bg1 of bg1) {
		_bg1.classList.add('dark-mode_bg1')
	}
	for (let _bg_2 of bg2) {
		_bg_2.classList.add('dark-mode_bg2')
	}
}

else {
	document.body.classList.remove('dark-mode-primary');
	nav.classList.remove('dark-mode-primary');
	btnControl.classList.remove('displace-btn');
	for (let textc of textC) {
		textc.classList.remove('txt-gray-md')
	}
	for (let _txtBlue of panelItem) {
		_txtBlue.classList.remove('txt-blue-md')
	}
	for (let _bg1 of bg1) {
		_bg1.classList.remove('dark-mode_bg1')
	}
	for (let _bg_2 of bg2) {
		_bg_2.classList.remove('dark-mode_bg2')
	}
}

window.onload = function() {
	$('#onload').fadeOut();
	$('body').removeClass('hidden');
}