async function getDivistion(a,b) {
if (b !== 0) return a/b;
    return new Error()
}

async function f() {
    try{
        let result = await getDivistion(6,0);
        console.log(result);
    }
    catch (error) {
        console.log(error);
    }
}
f()