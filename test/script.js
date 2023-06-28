/****** BURGUER MENU (com problema de display)

function openMenu() {
    if(itens.style.display == 'block' ){
        itens.style.display = 'none'
        burguer.style.display = 'flex'
        burguer.style.animation = 'dropdown 1s'
        x.style.display = 'none'
    } else {
        itens.style.display = 'block'
        burguer.style.display = 'none'
        x.style.display = 'flex'
        x.style.animation = 'dropdown 1s'
    }
}
******/

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