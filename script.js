document.querySelectorAll("button")[0].addEventListener("click", a);
document.querySelectorAll("button")[1].addEventListener("click", b);
document.querySelectorAll("button")[2].addEventListener("click", c);
document.querySelectorAll("button")[3].addEventListener("click", d);
document.querySelectorAll("button")[4].addEventListener("click", e);
document.querySelectorAll("button")[5].addEventListener("click", f);
document.querySelectorAll("button")[6].addEventListener("click", g);
document.querySelectorAll("button")[7].addEventListener("click", h);
document.querySelectorAll("button")[8].addEventListener("click", i);
function a()
{
    console.log(this.style.color="Red");
    var audio=new Audio('./images/hello-48300.mp3');
    audio.play();
} 
function b()
{
    console.log(this.style.color="Orange");
    console.log(this.style.backgroundColor="Tan");
    var audio=new Audio('./images/happy-birthday-242244.mp3');
    audio.play();
} 
function c()
{
    console.log(this.style.color="Turquoise");
    console.log(this.style.backgroundColor="Tan");
    var audio=new Audio('./images/happy-birthday-to-you-made-by-me-100631.mp3');
    audio.play();
} 
function d()
{
    console.log(this.style.color="Green");
    console.log(this.style.backgroundColor="Tan");
    var audio=new Audio('./images/i-love-you-cartoon-voice-136531.mp3');
    audio.play();
} 
function e()
{
    console.log(this.style.color="Blue");
    console.log(this.style.backgroundColor="Gray");
    var audio=new Audio('./images/happy-birthday-45962.mp3');
    audio.play();
} 
function f()
{
    console.log(this.style.color="Indigo");
    console.log(this.style.backgroundColor="Tan");
    var audio=new Audio('./images/i-love-you-cartoon-voice-136531.mp3');
    audio.play();
} 
function g()
{
    console.log(this.style.color="Fuchsia");
    console.log(this.style.backgroundColor="Tan");
    var audio=new Audio('./images/girl-happy-birthday-150549.mp3');
    audio.play();
} 
function h()
{
    console.log(this.style.color="Violet");
    console.log(this.style.backgroundColor="Tan");
    var audio=new Audio('./images/i-love-you-cartoon-voice-136531.mp3');
    audio.play();
}
function i()
{
    console.log(this.style.color="Olive");
    console.log(this.style.backgroundColor="Tan");
    var audio=new Audio('./images/girl-happy-birthday-150549.mp3');
    audio.play();
}
