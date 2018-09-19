// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    // Your code goes here!
    // Return an object containing the minimum number of coins needed to make change
var  re = {};
var i = 0, k =0, j =0, l =0, s = 0;
var g = currency;
if(currency>10000) return {error: "You are rich, my friend! We don't have so much coins for exchange"};
while((g/50)>=1){
    i++;
    g = g - 50;
}
while((g/25)>=1){
    j++;
    g = g - 25;
}
while((g/10)>=1){
    k++;
    g = g -10;
}
while((g/5)>=1){
    l++;
    g = g - 5;
}
while(g>0){
    g = g -1;
    s++;
}
re ={"H":i,"Q":j,"D":k,"N":l, "P":s};
if(i == 0) delete re.H;
if(j == 0) delete re.Q;
if(k == 0) delete re.D;
if(l == 0) delete re.N;
if(s == 0) delete re.P;
return  re;
}