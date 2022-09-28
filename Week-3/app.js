//change background colors
let bgColors = ["#000000","#665866","#5F9EA0"];
let choice = 0;
let colorbutton = document.getElementById('button-color');
colorbutton.addEventListener('click',function(){
    document.body.style.background = bgColors[choice];
    choice = (choice+1)%3;
})

//change font size when the mouse is on the website instructions text
let text = document.getElementById('paragraph');
text.addEventListener('mouseover',function(){
    text.style.fontSize = '25px';
})
text.addEventListener('mouseout',function(){
    text.style.fontSize = '22px';
})

//pull location data and weather data
//implement p5 and sounds