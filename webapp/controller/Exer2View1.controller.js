sap.ui.define([
    "sap/ui/core/mvc/Controller"
], (Controller) => {
    "use strict";

    return Controller.extend("ui5jsexercise.controller.Exer2View1", {
        onInit() {
        },

        convertNumbersToWords(){
            let number = this.getView().byId('num_to_words_input').getValue();
            this.getView().byId('num_to_words_output').setText("Output: "); // allow resetting
            let output = this.getView().byId('num_to_words_output').getText();

            if( number < 1 || number > 999){ //reject invalid values
                output += " Invalid!";
                this.getView().byId('num_to_words_output').setText(output);
                return;
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
            
            this.getView().byId('num_to_words_output').setText(output);
        },

        convertNumbersToWordsReset(){
            this.getView().byId('num_to_words_input').setValue("");
            this.getView().byId('num_to_words_output').setText("Output: ");
        },

        trianglePerimeter(s1, s2, s3){
            return s1 + s2 + s3;
        },
    });
});