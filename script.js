function set(){
    setTimeout((()=> {
        document.body.style.background = "linear-gradient(45deg,red,blue)"
       document.body.style.backgroundSize = "cover"
        document.getElementById("h1").innerHTML= "On the floor baby";
    }),400);
    setTimeout((()=> {
        document.body.style.background = "linear-gradient(90deg,green,yellow)"
       document.body.style.backgroundSize = "cover"
        document.getElementById("h1").innerHTML= "Hit it hard baby";
    }),800);
    setTimeout((()=> {
        document.body.style.background="linear-gradient(90deg,orange,white)"
       document.body.style.backgroundSize = "cover"
        document.getElementById("h1").innerHTML= "Rock the party baby";
    }),1200);
    setTimeout((()=> {
        document.body.style.background = "linear-gradient(90deg,black,silver)"
       document.body.style.backgroundSize = "cover"
        document.getElementById("h1").innerHTML= "Pattoolengil podi";
    }),1600);
}
  
setInterval(set,1600)