/****** BURGUER MENU ******/

let mobileWidth = 800;

function openMenu() {
    if(window.innerWidth <= mobileWidth){
        itens.classList.add("droplist")
        x.style.display = 'flex'
        x.style.animation = 'dropdown 1s'
        burguer.style.display = 'none'
    }
}

function closeMenu() {
    if(window.innerWidth <= mobileWidth){
        itens.classList.remove("droplist")
        x.style.display = 'none'
        burguer.style.display = 'flex'
        burguer.style.animation = 'dropdown 1s'
    }
}

/******  SERVICE SLIDER ******/

const slider = document.querySelector(".slider");
const arrowBtns = document.querySelectorAll(".wrapper i");
const firstCardWidth = slider.querySelector(".card").offsetWidth;
const sliderChildrens = [...slider.children];

let isDragging = false, startX, startScrollLeft;

// Pega o numero de cards para saber quantos cabem no slider
let cardPerView = Math.round(slider.offsetWidth / firstCardWidth);

// Inserir copias dos ultimos cards para fazer o efeito de scroll infinito
sliderChildrens.slice(-cardPerView).reverse().forEach(card => {
    slider.insertAdjacentHTML("afterbegin", card.outerHTML);
})  

// Inserir copias dos ultimos cards para fazer o efeito de scroll infinito
sliderChildrens.slice(0, cardPerView).forEach(card => {
    slider.insertAdjacentHTML("beforeend", card.outerHTML);
})  

// addEventListener para fazer os botões darem o scroll esquerda e direita
arrowBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        slider.scrollLeft += btn.id === "left" ? -firstCardWidth : firstCardWidth;
    })
});

const dragStart = (e) => {
    isDragging = true;
    slider.classList.add("dragging");
    // Grava posição inicial do cursor e a posição do scroll
    startX = e.pageX;
    startScrollLeft = slider.scrollLeft;
}

const dragging = (e) => {
    if (!isDragging) return;
    // Atualiza a posição do scroll baseado no movimento do cursor no slider
    slider.scrollLeft = startScrollLeft - (e.pageX - startX);
}

const dragStop = () => {
    isDragging = false;
    slider.classList.remove("dragging");
}

const infiniteScroll = () => {
    // se o slider ta no começo, scroll pro fim
    if(slider.scrollLeft === 0){
        slider.classList.add("no-transition");
        slider.scrollLeft = slider.scrollWidth - ( 2 * slider.offsetWidth);
        slider.classList.remove("no-transition");
    }
    // se o slider ta no fim, scroll pro começo
    else if(Math.ceil(slider.scrollLeft) === slider.scrollWidth - slider.offsetWidth){
        slider.classList.add("no-transition");
        slider.scrollLeft = slider.offsetWidth;
        slider.classList.remove("no-transition");
    }
}

slider.addEventListener("mousedown", dragStart);
slider.addEventListener("mousemove", dragging);
document.addEventListener("mouseup", dragStop);
slider.addEventListener("scroll", infiniteScroll);


/****** PHONE FORMAT ******/

const tel = document.getElementById('tel')

tel.addEventListener('keypress', (e) => mascaraTelefone(e.target.value))
tel.addEventListener('input', (e) => mascaraTelefone(e.target.value))
tel.addEventListener('change', (e) => mascaraTelefone(e.target.value))
                        
const mascaraTelefone = (valor) => {
    valor = valor.replace(/\D/g, "")
    valor = valor.replace(/^(\d{3})(\d)/g, "($1) $2")
    valor = valor.replace(/(\d)(\d{4})$/, "$1-$2")
    tel.value = valor // Insere o(s) valor(es) no campo
}