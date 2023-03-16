// Code your solution in this file!
function distanceFromHqInBlocks(v) {
    return (Math.abs(42-v));
}

function distanceFromHqInFeet(v) {
    return distanceFromHqInBlocks(v)*264;
}

function distanceTravelledInFeet(s,d){
    return Math.abs(s-d)*264;
}

function calculatesFarePrice(s,d) {
    let l = distanceTravelledInFeet(s,d);

    if (l <= 400){return 0}
    else if (l > 400 && l <= 2000) {return (l-400)*.02;}
    else if (l > 2000 && l <= 2500) {return 25}
    else {return 'cannot travel that far'}
}