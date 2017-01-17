//function expression as method using 'this' keyword

var width = 700;
var shape = {width:400};

var showWidth = function() {
    document.write(this.width);
};

shape.getWidth = showWidth;

shape.getWidth();

