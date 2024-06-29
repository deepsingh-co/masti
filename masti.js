window.onload = function bubble() {
    var red = [0, 100, 63];
    var blue = [196, 77, 55];
    var green = [75, 100, 40];
    var orange = [40, 77, 55];
    var purple = [280, 50, 60];

    var myName = "KOMAL";
    var letterColors = [blue, red, orange, green, purple];
    if ( 15 > 5 ) {
        bubbleShape = "circle";
    } else {
        bubbleShape = "square";
    }

    drawName(myName, letterColors);

    bounceBubbles();
};