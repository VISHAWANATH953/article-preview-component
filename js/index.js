window.addEventListener('load', ()=>{
    const share = document.querySelector('.share'), move = document.querySelector('.move'), moved = document.querySelector('.moved');

    share.addEventListener('click',()=>{
        move.classList.toggle("minzero");
        moved.classList.toggle("zero");
    })})