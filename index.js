var RandomVariable1 = Math.floor(Math.random() * 6) + 1 ;
var RandomVariable2 = Math.floor(Math.random() * 6) + 1 ;


if(RandomVariable1 === 1){
    document.querySelector(".img1").setAttribute("src", "./images/dice1.png");
}
else if(RandomVariable1 === 2){
    document.querySelector(".img1").setAttribute("src", "./images/dice2.png");
}
else if(RandomVariable1 === 3){
    document.querySelector(".img1").setAttribute("src", "./images/dice3.png");
}
else if(RandomVariable1 === 4){
    document.querySelector(".img1").setAttribute("src", "./images/dice4.png");
}
else if(RandomVariable1 === 5){
    document.querySelector(".img1").setAttribute("src", "./images/dice5.png");
}
else{
    document.querySelector(".img1").setAttribute("src", "./images/dice6.png");
}



if(RandomVariable2 === 1){
    document.querySelector(".img2").setAttribute("src", "./images/dice1.png");
}
else if(RandomVariable2 === 2){
    document.querySelector(".img2").setAttribute("src", "./images/dice2.png");
}
else if(RandomVariable2 === 3){
    document.querySelector(".img2").setAttribute("src", "./images/dice3.png");
}
else if(RandomVariable2 === 4){
    document.querySelector(".img2").setAttribute("src", "./images/dice4.png");
}
else if(RandomVariable2 === 5){
    document.querySelector(".img2").setAttribute("src", "./images/dice5.png");
}
else{
    document.querySelector(".img2").setAttribute("src", "./images/dice6.png");
}



if(RandomVariable1 > RandomVariable2){
    document.querySelector(".p1").style.display = "block";
}
else{
      document.querySelector(".p2").style.display = "block";
}
