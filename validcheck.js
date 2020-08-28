function validCheck () {
    if(remainder !== 0) quotient = Math.floor(quotient + 1);
    if(remainder === 0) remainder = 8;
    if(direction === "e"){
        if(((remainder + value) <= 8) && ((remainder + value) > 0))
            return true;
        else
            return false;
    }
    if(direction === "w"){
        if(((remainder - value) > 0) && ((remainder - value) < 8))
            return true;
        else
            return false;
    }
    if(direction === "n"){
        if(((quotient - value) > 0) && ((quotient - value) < 8))
            return true;
        else
            return false;
    }
    if(direction === "s"){
        console.log(quotient);
        console.log(value);
        if(((quotient + value) <= 8) && ((quotient + value) > 0))
            return true;
        else
            return false;
    }
    if(direction === "ne"){
        if(((quotient - value) > 0) && ((quotient - value) < 8)){
            if(((remainder + value) <= 8) && ((remainder + value) > 0))
                return true;
        }
        else
            return false;
    }
    if(direction === "nw"){
        if(((quotient - value) > 0) && ((quotient - value) < 8)){
            if(((remainder - value) > 0) && ((remainder - value) < 8))
                return true;
        }
        else
            return false;
    }
    if(direction === "se"){
        if(((quotient + value) <= 8) && ((quotient + value) > 0)){
            if(((remainder + value) <= 8) && ((remainder + value) > 0))
                return true;
        }
        else
            return false;
    }
    if(direction === "sw"){
        if(((quotient + value) <= 8) && ((quotient + value) > 0)){
            if(((remainder - value) > 0) && ((remainder - value) < 8))
                return true;
        }
        else
            return false;
    }
}