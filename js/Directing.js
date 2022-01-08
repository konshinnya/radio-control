class Directing {
    constructor(time) {
        this.DOM = {};
        this.DOM.directing = document.querySelector('.directing');
        this.DOM.topBtn = document.querySelector('#top-btn');
        this.DOM.leftBtn = document.querySelector('#left-btn');
        this.DOM.rightBtn = document.querySelector('#right-btn');
        this.DOM.backBtn = document.querySelector('#back-btn');

        this._addEvent();

        setTimeout(() => {
            this.DOM.directing.style.height = '0';
            this.DOM.directing.style.opacity = '0';
        }, time);
        setTimeout(() => {
            this.DOM.directing.style.display = 'none';
        }, time+720);
    }

    _addEvent() {
        this.DOM.topBtn.addEventListener('click', () => {
            this.DOM.topBtn.classList.toggle('push');
        });
        this.DOM.leftBtn.addEventListener('click', () => {
            this.DOM.leftBtn.classList.toggle('push');
        });
        this.DOM.rightBtn.addEventListener('click', () => {
            this.DOM.rightBtn.classList.toggle('push');
        });
        this.DOM.backBtn.addEventListener('click', () => {
            this.DOM.backBtn.classList.toggle('push');
        });
    }
    typewriter(param) {
        let el = document.querySelector(param.el);
        let speed = param.speed;
        let string = param.string.split("");
        string.forEach((char, index) => {
            setTimeout(() => {
                el.textContent += char;
            }, speed * index);
        });
    }
}