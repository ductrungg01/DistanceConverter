(function(){
    'use strict';

    var convertType = "miles";
    var heading = document.querySelector('h1');
    var intro = document.querySelector('p');
    var answerDiv = document.getElementById('answer');
    var form = document.getElementById('convert');

    document.addEventListener('keydown', function(event){
        //event.preventDefault();

        // catch event keydown
        var key = event.code;

        // change convert Type
        if (key === 'KeyM'){
            convertType = "miles";
            heading.innerHTML = "Miles to Kilometers Converter";
            intro.innerHTML = "Type in a number of miles and click the button to convert the distance to kilometers.";
        } else if (key === 'KeyK'){
            convertType = "kilometers";
            heading.innerHTML = "Kilometers to Miles Converter";
            intro.innerHTML = "Type in a number of kilometers and click the button to convert the distance to miles.";
        }
    });

    form.addEventListener('submit', function(event){
        event.preventDefault();

        var distance = parseFloat(document.getElementById('distance').value);
        
        if (distance) {
            if (convertType == "miles"){
                var converted = (distance * 1.609344).toFixed(3);
                answerDiv.innerHTML = `${distance} miles converts to ${converted} kilometers.`;
            } else if (convertType == "kilometers"){
                var converted = (distance * 0.621371192).toFixed(3);
                answerDiv.innerHTML = `${distance} kilometers converts to ${converted} miles.`;
            }
        } else {
            answerDiv.innerHTML = '<h2 style="color:red">Please provide the number</h2>';
        }
    });
})();