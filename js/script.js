

const botaoTema = document.getElementById("toggleTema");

botaoTema.addEventListener("click", () => {

    if(document.body.classList.contains("modo-escuro")){

        document.body.classList.remove("modo-escuro");
        document.body.classList.add("modo-claro");
        botaoTema.textContent = "Modo escuro";

    }else{

        document.body.classList.remove("modo-claro");
        document.body.classList.add("modo-escuro");
        botaoTema.textContent = "Modo claro";

    }

});
