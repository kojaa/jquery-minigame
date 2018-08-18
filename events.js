var randNumber = generateNewNumber();

generateNewClass(randNumber);

points = 0;

$("#first").click(function(){

    if($("#first").hasClass("red"))
    {
        points++;
        $("#points").html("Points: " + points);
        $("#first").removeClass("red");
        var newRandNum = generateNewNumber();
        generateNewClass(newRandNum);

    } else {
        points--;
        $("#points").html("Points: " + points);
    }
});

$("#second").click(function(){

    if($("#second").hasClass("red"))
    {
        points++;
        $("#points").html("Points: " + points);
        $("#second").removeClass("red");
        var newRandNum = generateNewNumber();
        generateNewClass(newRandNum);

    } else {
        points--;
        $("#points").html("Points: " + points);
    }
});

$("#third").click(function(){

    if($("#third").hasClass("red"))
    {
        points++;
        $("#points").html("Points: " + points);
        $("#third").removeClass("red");
        var newRandNum = generateNewNumber();
        generateNewClass(newRandNum);

    } else {
        points--;
        $("#points").html("Points: " + points);
    }
});

$("#fourth").click(function(){

    if($("#fourth").hasClass("red"))
    {
        points++;
        $("#points").html("Points: " + points);
        $("#fourth").removeClass("red");
        var newRandNum = generateNewNumber();
        generateNewClass(newRandNum);

    } else {
        points--;
        $("#points").html("Points: " + points);
    }
});

$("#fifth").click(function(){

    if($("#fifth").hasClass("red"))
    {
        points++;
        $("#points").html("Points: " + points);
        $("#fifth").removeClass("red");
        var newRandNum = generateNewNumber();
        generateNewClass(newRandNum);

    } else {
        points--;
        $("#points").html("Points: " + points);
    }
});

$("#sixth").click(function(){

    if($("#sixth").hasClass("red"))
    {
        points++;
        $("#points").html("Points: " + points);
        $("#sixth").removeClass("red");
        var newRandNum = generateNewNumber();
        generateNewClass(newRandNum);

    } else {
        points--;
        $("#points").html("Points: " + points);
    }
});

$("#seventh").click(function(){

    if($("#seventh").hasClass("red"))
    {
        points++;
        $("#points").html("Points: " + points);
        $("#seventh").removeClass("red");
        var newRandNum = generateNewNumber();
        generateNewClass(newRandNum);

    } else {
        points--;
        $("#points").html("Points: " + points);
    }
});

$("#eight").click(function(){

    if($("#eight").hasClass("red"))
    {
        points++;
        $("#points").html("Points: " + points);
        $("#eight").removeClass("red");
        var newRandNum = generateNewNumber();
        generateNewClass(newRandNum);

    } else {
        points--;
        $("#points").html("Points: " + points);
    }
});

$("#nine").click(function(){

    if($("#nine").hasClass("red"))
    {
        points++;
        $("#points").html("Points: " + points);
        $("#nine").removeClass("red");
        var newRandNum = generateNewNumber();
        generateNewClass(newRandNum);

    } else {
        points--;
        $("#points").html("Points: " + points);
    }
});
