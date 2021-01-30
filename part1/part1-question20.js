var intervalID = setInterval(x, 1000);

function x() {
    let d = new Date();
    let time = d.toLocaleTimeString();
    console.log(time);
}
