const repeatString = function(str, num) {
    if(num <0 ) return 'ERROR';
    do{
        const repeatedString = str.repeat(num);
    }while(num>0)
        
};
repeatString('man', 4)
// Do not edit below this line
module.exports = repeatString;
