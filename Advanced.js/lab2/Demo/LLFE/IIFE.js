 let res=( function generate (){
    let counter =0;

    return {
        increase(){
            counter++
        },
        decrese(){
            counter--
        },
         setvalue(_v) {
            counter = _v;
            },
        getvalue() {
            return `Counter:${counter}`;
        }

        
    }
})();

console.log(res);
res.increase();
console.log(res.getvalue());
res.increase();
console.log(res.getvalue());
res.decrese();
console.log(res.getvalue());
res.setvalue(5);
res.increase();
console.log(res.getvalue());