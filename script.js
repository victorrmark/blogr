document.querySelector(".close").hidden = true;
const showMenu = document.querySelector(".toggleMenu");

function toggleMenu(){
    document.querySelector(".close").hidden = false;
    document.querySelector(".close").style.cursor = "pointer";
    document.querySelector(".open").style.display = "none";
    showMenu.classList.toggle("show");

}

function closeMenu(){
    document.querySelector(".close").hidden = true;
    document.querySelector(".open").style.display = "block";
    showMenu.classList.toggle("show");
}

function accordion(number){
    const drop = document.querySelectorAll(".dropdown-content");
    const img = document.querySelectorAll('.accordion img')

    img[number-1].classList.toggle('active')
    drop[number - 1].classList.toggle('active')
}

function dropMenu(number){
    const drop = document.querySelectorAll(".drop-contnt");
    const img = document.querySelectorAll('.dropbtn img');

    drop[number-1].classList.toggle('active');
    img[number-1].classList.toggle('active');
}