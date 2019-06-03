// lab4.js
// The verse1(), verse2(), chorus1() and chorus2() are provided to you. You can change the function names and add additonal ones as needed. Be sure to follow the starter code that has been supplied.

function verse1(){
    let output ="<p>I've paid my dues Time after time I've done my sentence But committed no crime And bad mistakes  I've made a few I've had my share of sand kicked in my face But I've come through.</p>";
    
    return output;
}

function verse2(){
    let output = "<p>I've taken my bows And my curtain calls You brought me fame and fortune and everything that goes with it I thank you all But it's been no bed of roses No pleasure cruise I consider it a challenge before the whole human race and I ain't gonna lose</p>";
    
    return output;
}

function chorus1(){
    let output = "<p> We are the champions, my friends And we'll keep on fighting 'til the end We are the champions We are the champions No time for losers 'Cause we are the champions of the world.</p>";
    return output;
}

function chorus2(){
    let output = "<p>We are the champions, my friends And we'll keep on fighting 'til the end We are the champions We are the champions No time for losers  'Cause we are the champions of the world.</p>";


    return output;
}



function main(){
    let finalOutput = verse1() + chorus1() + verse2() + chorus2();
    document.getElementById('lyrics').innerHTML = finalOutput;
}

window.onload = function(){
    main();
}