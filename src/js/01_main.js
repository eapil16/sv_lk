document.querySelector('body').addEventListener('click', e =>{

    // показать(скрыть) парольы
    if (e.target.closest('.password-control')) {
        e.preventDefault();
        if(!e.target.closest('.password-control').classList.contains('view')) {
            document.querySelector('#password-input').setAttribute('type', 'text');
            e.target.closest('.password-control').classList.add('view');
        } else {
            document.querySelector('#password-input').setAttribute('type', 'password');
            e.target.closest('.password-control').classList.remove('view');
        }
    }

    // моб меню
    if (e.target.closest('.menu-toggle-cont')) {
		document
			.querySelector('.menu-toggle-cont').classList.toggle('menu-toggle-cont_active');
		document.querySelector('.fixed-menu').classList.toggle('show');
		document.querySelector('body').classList.toggle('body-hidden');
	}

    // поиск
    if(e.target.closest('.form-disabled')) {
        e.preventDefault(); 
        e.target.closest('.form-disabled').classList.remove('form-disabled')     
        e.target.closest('.button-form').classList.add('form-search')     
        document.querySelector('.header-search .form').classList.add('open');      
    }
    if(!e.target.closest('.form-disabled') && !e.target.closest('.header-search')) {
        document.querySelector('.button-form').classList.add('form-disabled');     
        document.querySelector('.button-form').classList.remove('form-search');     
        document.querySelector('.header-search .form').classList.remove('open');      
    }

    // пользователь в шапке 
    if(e.target.closest('.header-user')) {
        e.preventDefault(); 
        document.querySelector('.header-user__dropdown').classList.toggle('show');   
    }
    if(!e.target.closest('.header-user') && !e.target.closest('.header-user__dropdown')) {
        document.querySelector('.header-user__dropdown').classList.remove('show');   
    }
});