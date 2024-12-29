var random1=Math.floor(Math.random()*6)+1;
var assign="images/" + "dice"+random1+".png";
document.querySelectorAll("img")[0].setAttribute("src",assign);

var random2=Math.floor(Math.random()*6)+1;
var assign1="images/dice"+random2+".png";
document.querySelectorAll("img")[1].setAttribute("src",assign1);
if(random1>random2)
{
    document.querySelectorAll("h1")[0].innerHTML="🏆 Player 1 won ";
}
else if(random1==random2)
{
document.querySelectorAll("h1")[0].innerHTML="tie ";

}
else{
    document.querySelector("h1").innerHTML="🏆 Player 2 win";
}
