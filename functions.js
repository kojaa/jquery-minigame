function generateNewNumber(){
    newRand = Math.floor((Math.random() * 9)+1);
    return newRand;
}

function generateNewClass (number) {
    if(number == 1) {
        $("#first").addClass('red')
    } 
    else if(number == 2) {
        $("#second").addClass('red')
    } 
    else if(number == 3) {
        $("#third").addClass('red')
    }
    else if(number == 4) {
        $("#fourth").addClass('red')
    }
    else if(number == 5) {
        $("#fifth").addClass('red')
    }
    else if(number == 6) {
        $("#sixth").addClass('red')
    }
    else if(number == 7) {
        $("#seventh").addClass('red')
    }
    else if(number == 8) {
        $("#eight").addClass('red')
    }
    else if(number == 9) {
        $("#nine").addClass('red')
    }
}
