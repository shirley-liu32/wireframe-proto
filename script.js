//change star color (yellow - gray) when user clicks
function toggle(star){
    if(star.className == "gray") {
        star.src = 'yellow-star.png';
        star.className = "yellow";
    }
    else if(star.className == "yellow") {
        star.src = 'gray-star.png';
        star.className = "gray";
    }
    return false;
}
