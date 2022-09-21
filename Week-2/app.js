let bgColors = ["#000000","#665866","#5F9EA0"];
let choice = 0;
let colorbutton = document.getElementById('button-color');
colorbutton.addEventListener('click',function(){
    document.body.style.background = bgColors[choice];
    choice = (choice+1)%3;
})

let text = document.getElementById('paragraph');
text.addEventListener('mouseover',function(){
    text.style.color = 'blue';
})
text.addEventListener('mouseout',function(){
    text.style.color = 'white'
})