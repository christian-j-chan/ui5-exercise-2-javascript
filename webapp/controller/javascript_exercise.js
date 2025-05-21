function convertNumToWord(number){
    let output = "";
    if( number < 1 || number > 999){ //reject invalid values
        output += " Invalid!";
        return output;
    }

    //get the value of the number per place
    let hundreds = ( number - (number % 100) ) / 100;
    let tens = ( ( number - hundreds * 100 ) -  ( number - hundreds * 100 ) % 10 ) / 10;
    let units = number - (hundreds * 100) - (tens * 10);
    
    if(hundreds > 0){ //hundreds case
        switch (hundreds) {
            case 1:
                output += "one";
                break;
            case 2:
                output += "two";
                break;
            case 3:
                output += "three";
                break;
            case 4:
                output += "four";
                break;
            case 5:
                output += "five";
                break;
            case 6:
                output += "six";
                break;
            case 7:
                output += "seven";
                break;
            case 8:
                output += "eight";
                break;
            case 9:
                output += "nine";
                break;
            default:
                break;
        }

        output += " hundred ";
    }

    if(tens > 0){ //tens case
        switch (tens) {
            case 1:
                switch (units) {
                    case 1:
                        output += "eleven";
                        break;
                    case 2:
                        output += "twelve";
                        break;
                    case 3:
                        output += "thirteen";
                        break;
                    case 4:
                        output += "fourteen";
                        break;
                    case 5:
                        output += "fifteen";
                        break;
                    case 6:
                        output += "sixteen";
                        break;
                    case 7:
                        output += "seventeen";
                        break;
                    case 8:
                        output += "eighteen";
                        break;
                    case 9:
                        output += "nineteen";
                        break;
                    case 0:
                        output += "ten";
                        break;
                    default:
                        break;
                }
                break;
            case 2:
                output += "twenty";
                break;
            case 3:
                output += "thirty";
                break;
            case 4:
                output += "forty";
                break;
            case 5:
                output += "fifty";
                break;
            case 6:
                output += "sixty";
                break;
            case 7:
                output += "seventy";
                break;
            case 8:
                output += "eighty";
                break;
            case 9:
                output += "ninety";
                break;
            default:
                break;
        }
    }

    if(units > 0){
        if(tens > 1){
            output += "-";
        }
        switch (units) {
            case 1:
                output += "one";
                break;
            case 2:
                output += "two";
                break;
            case 3:
                output += "three";
                break;
            case 4:
                output += "four";
                break;
            case 5:
                output += "five";
                break;
            case 6:
                output += "six";
                break;
            case 7:
                output += "seven";
                break;
            case 8:
                output += "eight";
                break;
            case 9:
                output += "nine";
                break;
            default:
                break;
        }
    }

    return output;
}

function drawTriangle(height){
    let output = "", i = 0;

    while(i < height){
        let j = 0;
        while(j < height){
            if( j >= i ){
                output += "*";
            } else {
                output += " ";
            }
            j++;
        }
        output += "\n";
        i++;
    }
    return output;
}

function drawX(height){
    let output = "";

    if(!(height % 2)){
        output += "Can't draw a proper X.";
        return output;
    }

    for (let i = 0; i < height; i++) {
        for (let j = 0; j < height; j++) {
            if(j == i || j == height - (i + 1))
                output += "*";
            else
                output += " ";
        }
        output += "\n";
    }
    return output;
}

function trianglePerimeter(s1, s2, s3){
    return s1 + s2 + s3;
}

function colorDisp(){
    let color = ["Blue ", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow "];
    let o = ["th","st","nd","rd"];
    let output = "";

    for (let index = 1; index <= color.length; index++) {
        switch (index) {
            case 1:
                output += index + o[index] + " ";
                break;

            case 2:
                output += index + o[index] + " ";
                break;

            case 3:
                output += index + o[index] + " ";
                break;

            default:
                output += index + o[0] + " ";
                break;
        }

        output += "color is " + color[index - 1] + ".\n";
    }
    return output;
}