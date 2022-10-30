let phoneNumber = `11000000010111011010110001110110`
//convert to decimal to obtains the teahcer's number and write in whtasApp "Profe ya acabe" and send a sticker :)
function convertirBinarioAdecimal (phoneNumber){
    if (phoneNumber.constructor != String){
        return null;
    }
phoneNumber = phoneNumber.replace(/[^01]/gi,``);
return Number.parseInt(phoneNumber, 2)

}

console.log(convertirBinarioAdecimal(phoneNumber))