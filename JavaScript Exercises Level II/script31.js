var a = "item";
var b = "item";
var c = "item";

function aFunc() {
    var a = "book"; // var a has function scope. Var a is resetted inside function
    document.write(a + "<br/>");
}

aFunc();
document.write(a + "<br/>");

document.write("<hr>");
function bFunc() {
    b = "book"; // This is var b with global(window.object) scope (declared globally without var)
    document.write(b + "<br/>");
}

bFunc();
document.write(b + "<br/>");

document.write("<hr>");
cFunc = function () {
    let c = "book"; // let can also be used inside blocks of code {}
    document.write(c + "<br/>");
}

cFunc();
document.write(c + "<br/>"); // c has global scope