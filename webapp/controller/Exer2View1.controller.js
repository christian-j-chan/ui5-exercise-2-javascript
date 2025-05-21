sap.ui.define([
    "sap/ui/core/mvc/Controller",
], (Controller) => {
    "use strict";

    return Controller.extend("ui5jsexercise.controller.Exer2View1", {
        onInit() {
        },

        convertNumbersToWords(){
            let number = this.getView().byId('num_to_words_input').getValue();
            this.getView().byId('num_to_words_output').setText("Output: "); // allow resetting
            let output = this.getView().byId('num_to_words_output').getText();
            
            output += convertNumToWord(number);

            this.getView().byId('num_to_words_output').setText(output);
        },

        convertNumbersToWordsReset(){
            this.getView().byId('num_to_words_input').setValue("");
            this.getView().byId('num_to_words_output').setText("Output: ");
        },

        drawTriangle(){
            let number = this.getView().byId('triangle_input').getValue();
            this.getView().byId('triangle_output').setValue("Output: "); // allow resetting
            let output = this.getView().byId('triangle_output').getValue();
            
            output += "\n" + drawTriangle(number);

            this.getView().byId('triangle_output').setValue(output);
        },

        drawTriangleReset(){
            this.getView().byId('triangle_input').setValue("");
            this.getView().byId('triangle_output').setValue("Output: ");
        },

        drawX(){
            let number = this.getView().byId('x_input').getValue();
            this.getView().byId('x_output').setValue("Output: "); // allow resetting
            let output = this.getView().byId('x_output').getValue();
            
            output += "\n" + drawX(number);

            this.getView().byId('x_output').setValue(output);
        },

        drawXReset(){
            this.getView().byId('x_input').setValue("");
            this.getView().byId('x_output').setValue("Output: ");
        },

        perimeterTriangle(){
            let side1 = parseInt(this.getView().byId('side1_input').getValue());
            let side2 = parseInt(this.getView().byId('side2_input').getValue());
            let side3 = parseInt(this.getView().byId('side3_input').getValue());
            this.getView().byId('perimeter_output').setText("Output: "); // allow resetting
            let output = this.getView().byId('perimeter_output').getText();

            output += trianglePerimeter(side1, side2, side3);

            this.getView().byId('perimeter_output').setText(output);
        },

        perimeterTriangleReset(){
            this.getView().byId('side1_input').setValue("");
            this.getView().byId('side2_input').setValue("");
            this.getView().byId('side3_input').setValue("");
            this.getView().byId('perimeter_output').setText("Output: ");
        },

        displayColors(){
            this.getView().byId('colors_output').setText("Output: ");
            let output = this.getView().byId('colors_output').getText();
            output += colorDisp();

            this.getView().byId('colors_output').setText(output);
        },

        displayColorsReset(){
            this.getView().byId('colors_output').setText("Output: ");
        },

        displayBest(){
            this.getView().byId('skills_output').setText("Output: ");
            let output = this.getView().byId('skills_output').getText();
            output += skillsDispDisp();

            this.getView().byId('skills_output').setText(output);
        },

        displayColorsReset(){
            this.getView().byId('skills_output').setText("Output: ");
        }
    });
});

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
    if((s1 + s2) > s3 && (s2 + s3) > s1 && (s3 + s1) > s2) // triangle inequality theorem
        return s1 + s2 + s3;
    return "Not a triangle";
}

function colorDisp(){
    let color = ["Blue ", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow "];
    let o = ["th","st","nd","rd"];
    let output = "\n";

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

function skillsDisp(){
    let record = [{

        "Name":"Gibo",
        "Age":16,
        "SkillSet" : [{
        "Skill":"SAP UI5"
        },{
        "Skill":"SAP HANA"
        }]
        }, {
        
        "Name":"Patrick",
        "Age":22,
        "SkillSet" : [{
        "Skill":"SAP UI5"
        }, {
        "Skill":"SAP HANA"
        }, {
        "Skill":"SAP ABAP"
        }]
        }, {
        
        "Name":"MJ",
        "Age":24,
        "SkillSet" : [{
        "Skill":"SAP HANA"
        }]
        
        }];

    let temp = record[0];
    for (let index = 0; index < record.length - 1; index++) {
        if (record[index+1]["SkillSet"].length > temp["SkillSet"].length) {
            temp = record[index+1];
        }
    }

    output = "\nName: " + temp.Name + "\nAge: " + temp.Age;

    return output;
}