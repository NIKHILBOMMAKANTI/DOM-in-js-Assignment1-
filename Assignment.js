/**
 *  change the color, bgcolor, padding , border-radius, box-shadow to the element which you get from html
 *  file by  DOM when user clicks that element and do repeat the process for double click and on hover means
 *  need 3 code examples 
 */
function ChangeStyleOnclick(){
    
    let test = document.getElementById("heading")
    test.style.color = "Black";
    test.style.backgroundColor = "red";
    test.style.padding = "1rem";
    test.style.border = "2px solid black";
    test.style.borderRadius = "10px";
    test.style.boxShadow = "10px 10px 10px rgba(0, 0, 0, 0.5)";
}

function ChangeStyleOndoubleclick(){

    let test = document.getElementById("subheading")
    test.style.color = "White";
    test.style.backgroundColor = "Blue";
    test.style.padding = "1rem";
    test.style.border = "2px solid black";
    test.style.borderRadius = "10px";
    test.style.boxShadow = "10px 10px 10px rgba(0, 0, 0, 0.5)";
}

function ChangeStyleOnover(){

    let test = document.getElementById("topic")
    test.style.color = "White";
    test.style.backgroundColor = "orange";
    test.style.padding = "1rem";
    test.style.border = "2px solid black";
    test.style.borderRadius = "10px";
    test.style.boxShadow = "10px 10px 10px rgba(0, 0, 0, 0.5)";
}
