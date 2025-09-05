function alterarStatus(id) {

    const game = document.getElementById(`game-${id}`);
    const statusGamerBotao = game.querySelector("a");
    const textoStatusGamer = statusGamerBotao.textContent;
    const capaGamer = game.querySelector("div");

    if (textoStatusGamer === "Alugar"){

       statusGamerBotao.textContent = "Devolver";
       statusGamerBotao.classList.add("dashboard__item__button--return");
       capaGamer.classList.add("dashboard__item__img--rented");

    }else{

        statusGamerBotao.textContent = "Alugar";
        statusGamerBotao.classList.remove("dashboard__item__button--return");
        capaGamer.classList.remove("dashboard__item__img--rented");
      
    } 
}

