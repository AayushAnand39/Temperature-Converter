let tempConverter = (val, from, to)=>{
    if (from === "Celsius" && to === "Fahrenheit"){
        return 9*val/5 + 32;
    }
    else if (from === "Fahrenheit" && to === "Celsius"){
        return 5*(val-32)/9;
    }
    else if (from === "Kelvin" && to === "Celsius") {
        return val-273;
    }
    else if (from === "Celsius" && to === "Kelvin") {
        return val+273;
    }
    else if (from === "Fahrenheit" && to === "Kelvin"){
        return 5*(val-32)/9 + 273;
    }
    else if (from === "Kelvin" && to === "Fahrenheit"){
        let x = val-273;
        return 9*x/5 + 32;
    }
    else return val;
}

document.getElementById("converter").addEventListener("click",()=>{
    const x = Number(document.getElementById("id1").value);
    const y = document.getElementById('id2').value;
    const z = document.getElementById('id3').value;
    const a = `<h2>${x} degree ${y} equals ${tempConverter(x,y,z)} degree ${z} !</h2>`;
    document.getElementById('display').innerHTML = a;
});