var inc = 7000;
var tax = 0;
//tier one
if (inc >=1 && inc <= 5070){
    tax = inc*.10;
    console.log(tax);
};
//tier 2
if (inc >=5071 && inc <= 8660){
    x = inc-5071;
    tax = (5070*.10) + (x*.14);
    console.log(tax);
};
// tier 3
if (inc >=8661 && inc <= 14070){
    x = inc-8660;
    tax = (5070*.10) + (x*.14);
    console.log(tax);
};
//tier 4
if (inc >=14071 && inc <= 21240){
    x = inc-5071;
    tax = (5070*.10) + (x*.14);
    console.log(tax);
};
//tier 5
if (inc >= 21241 && inc <= 40230){
    x = inc-5071;
    tax = (5070*.10) + (x*.14);
    console.log(tax);
};
//tier 6
if (inc >= 40231){
    tax = inc*.45;
    console.log(tax);
};