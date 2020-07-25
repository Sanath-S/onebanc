
var TxtType = function(el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
};

TxtType.prototype.tick = function() {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];

    if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

    var that = this;
    var delta = 200 - Math.random() * 100;

    if (this.isDeleting) { delta /= 2; }

    if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
    this.isDeleting = false;
    this.loopNum++;
    delta = 500;
    }

    setTimeout(function() {
    that.tick();
    }, delta);
};

window.onload = function() {
    var elements = document.getElementsByClassName('typewrite');
    for (var i=0; i<elements.length; i++) {
        var toRotate = elements[i].getAttribute('data-type');
        var period = elements[i].getAttribute('data-period');
        if (toRotate) {
          new TxtType(elements[i], JSON.parse(toRotate), period);
        }
    }
    // INJECT CSS
    var css = document.createElement("style");
    css.type = "text/css";
    css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
    document.body.appendChild(css);
};

//size change

let arr= [];
arr.push(document.getElementsByClassName("sup"));
arr.push(document.getElementsByClassName("rew"));
arr.push(document.getElementsByClassName("ana"));
arr.push(document.getElementsByClassName("car"));
arr.push(document.getElementsByClassName("for"));
arr.push(document.getElementsByClassName("inv"));
arr.push(document.getElementsByClassName("sav"));
arr.push(document.getElementsByClassName("pay"));
arr.push(document.getElementsByClassName("loa"));

console.log(arr);

var myVar;
var counter = 0;
function myFunction() {
    myVar= setInterval(modify, 1000, arr);
}

function modify(array){

    var position = counter%array.length;
    var prevPos = 0;
    var element = array[position];
    // console.log(element);
        element[0].style.textShadow = "1px 1px 1px rgba(0, 0, 0, 0.75)";
        element[1].style.textShadow = "1px 1px 1px rgba(0, 0, 0, 0.75)";
     


        if(position===0){
            prevPos= array.length-1;           
        }
        else{
            prevPos= position-1;
        }

        // console.log(prevPos,counter,counter%array.length);
        element = array[prevPos];
        element[0].style.textShadow = "none";
        element[1].style.textShadow = "none"; 
        counter++;
}

myFunction();