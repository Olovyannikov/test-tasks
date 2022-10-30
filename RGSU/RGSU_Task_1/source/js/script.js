let tabControlAuth = document.querySelector('.tabs__control-authorization');
let tabControlReg = document.querySelector('.tabs__control-registration');

let authorization = document.querySelector('.authorization');
let registration = document.querySelector('.registration');

let menuButton = document.querySelector('.navigation__button');
let mobileNav = document.querySelector('.navigation__list');

menuButton.onclick = function() {
    mobileNav.classList.toggle('navigation__list--open');
    menuButton.classList.toggle('navigation__button--open');
}

tabControlAuth.onclick = function () {
    tabControlAuth.classList.add('tabs__control--active');
    tabControlReg.classList.remove('tabs__control--active');

    authorization.classList.add('active-tab');
    registration.classList.remove('active-tab');
}
tabControlReg.onclick = function () {
    tabControlReg.classList.add('tabs__control--active');
    tabControlAuth.classList.remove('tabs__control--active');

    authorization.classList.remove('active-tab');
    registration.classList.add('active-tab');
}

window.addEventListener("DOMContentLoaded", function() {
    [].forEach.call( document.querySelectorAll('#tel'), function(input) {
        let keyCode;
        function mask(event) {
            event.keyCode && (keyCode = event.keyCode);
            let pos = this.selectionStart;
            if (pos < 3) event.preventDefault();
            let matrix = "+7 (___) ___ ____",
                i = 0,
                def = matrix.replace(/\D/g, ""),
                val = this.value.replace(/\D/g, ""),
                new_value = matrix.replace(/[_\d]/g, function(a) {
                    return i < val.length ? val.charAt(i++) || def.charAt(i) : a
                });
            i = new_value.indexOf("_");
            if (i !== -1) {
                i < 5 && (i = 3);
                new_value = new_value.slice(0, i)
            }
            let reg = matrix.substr(0, this.value.length).replace(/_+/g,
                function(a) {
                    return "\\d{1," + a.length + "}"
                }).replace(/[+()]/g, "\\$&");
            reg = new RegExp("^" + reg + "$");
            if (!reg.test(this.value) || this.value.length < 5 || keyCode > 47 && keyCode < 58) this.value = new_value;
            if (event.type === "blur" && this.value.length < 5)  this.value = "";
        }

        input.addEventListener("input", mask, false);
        input.addEventListener("focus", mask, false);
        input.addEventListener("blur", mask, false);
        input.addEventListener("keydown", mask, false);

    });
});

window.addEventListener("DOMContentLoaded", function() {
    [].forEach.call( document.querySelectorAll('#ssn'), function(input) {
        let keyCode;
        function mask(event) {
            event.keyCode && (keyCode = event.keyCode);
            let pos = this.selectionStart;
            if (pos < 1) event.preventDefault();
            let matrix = "____-____-__",
                i = 0,
                def = matrix.replace(/\D/g, ""),
                val = this.value.replace(/\D/g, ""),
                new_value = matrix.replace(/[_\d]/g, function(a) {
                    return i < val.length ? val.charAt(i++) || def.charAt(i) : a
                });
            i = new_value.indexOf("_");
            if (i !== -1) {
                i < 10 && (i = 10);
                new_value = new_value.slice(0, i)
            }
            let reg = matrix.substr(0, this.value.length).replace(/_+/g,
                function(a) {
                    return "\\d{1," + a.length + "}"
                }).replace(/[+()]/g, "\\$&");
            reg = new RegExp("^" + reg + "$");
            if (!reg.test(this.value) || this.value.length < 1 || keyCode > 47 && keyCode < 58) this.value = new_value;
            if (event.type === "blur" && this.value.length < 1)  this.value = "";
        }

        input.addEventListener("input", mask, false);
        input.addEventListener("focus", mask, false);
        input.addEventListener("blur", mask, false);
        input.addEventListener("keydown", mask, false);

    });
});

window.addEventListener("DOMContentLoaded", function() {
    let input = document.querySelectorAll('#bday')[0];

    let dateInputMask = function dateInputMask(elm) {

        elm.addEventListener('keyup', function(e) {
            if( e.keyCode < 47 || e.keyCode > 57) {
                e.preventDefault();
            }

            let len = elm.value.length;

            if(len !== 1 || len !== 3) {
                if(e.keyCode === 47) {
                    e.preventDefault();
                }
            }
            if(len === 2) {
                if (e.keyCode !== 8 && e.keyCode !== 46) {
                    elm.value = elm.value+'.';
                }}

            if(len === 5) {
                if (e.keyCode !== 8 && e.keyCode !== 46) {
                    elm.value = elm.value+'.';
                }}
        });
    };

    dateInputMask(input);
});