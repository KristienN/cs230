// To be created for interactive food pyramid

let first = 0;
let second = 0;
let third = 0;
let fourth = 0;
let fifth = 0;
let sixth = 0;

document.getElementById('1').innerHTML = first;
document.getElementById('2').innerHTML = second;
document.getElementById('3').innerHTML = third;
document.getElementById('4').innerHTML = fourth;
document.getElementById('5').innerHTML = fifth;
document.getElementById('6').innerHTML = sixth;

document.getElementById("datedisplay").innerHTML = Date();

// For first triangle
function incrementOne(){
    var num = document.getElementById('1');
    var value = num.innerHTML;

    ++value;
    document.getElementById('1').innerHTML = value;

}
function decrementOne(){
    var num = document.getElementById('1');
    var value = num.innerHTML;

    if(value>0)
    --value;

    document.getElementById('1').innerHTML = value;
}

// For second trapezium
function incrementTwo(){
    var num = document.getElementById('2');
    var value = num.innerHTML;

    ++value;
    document.getElementById('2').innerHTML = value;
}
function decrementTwo(){
    var num = document.getElementById('2');
    var value = num.innerHTML;

    if(value>0)
    --value;

    document.getElementById('2').innerHTML = value;
}

// For third trapezium
function incrementThree(){
    var num = document.getElementById('3');
    var value = num.innerHTML;

    ++value;
    document.getElementById('3').innerHTML = value;
}
function decrementThree(){
    var num = document.getElementById('3');
    var value = num.innerHTML;

    if(value>0)
    --value;

    document.getElementById('3').innerHTML = value;
}


// For fourth trapezium
function incrementFour(){
    var num = document.getElementById('4');
    var value = num.innerHTML;

    ++value;
    document.getElementById('4').innerHTML = value;
}
function decrementFour(){
    var num = document.getElementById('4');
    var value = num.innerHTML;

    if(value>0)
    --value;

    document.getElementById('4').innerHTML = value;
}

// For fifth trapezium
function incrementFive(){
    var num = document.getElementById('5');
    var value = num.innerHTML;

    ++value;
    document.getElementById('5').innerHTML = value;
}
function decrementFive(){
    var num = document.getElementById('5');
    var value = num.innerHTML;

    if(value>0)
    --value;
    document.getElementById('5').innerHTML = value;
}

// For sixth trapezium
function incrementSix(){
    var num = document.getElementById('6');
    var value = num.innerHTML;

    ++value;
    document.getElementById('6').innerHTML = value;

    if(value>5){
        alert(value);
        num.style.backgroundColor = '90EE90';
    }
}
function decrementSix(){
    var num = document.getElementById('6');
    var value = num.innerHTML;

    if(value>0)
    --value;
    document.getElementById('6').innerHTML = value;

    
}


