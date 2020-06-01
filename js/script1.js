var x=2;

// ehah
function B(x) {
    return console.log(x)
}

function A(x) {
     var x=5;
     return B();
}


A();

// Image import as a variable
// var ImageName=new SimpleImage("imagefilename.png");
//