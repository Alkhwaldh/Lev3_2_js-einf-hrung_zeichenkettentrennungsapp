/* join("") => delete the (,) in Html */


function work(){

    let input = document.getElementById("inhalt").value;
    let trennWort = document.getElementById("inhalt2").value;

    let befor = document.getElementById("vorTeil");
    let after = document.getElementById("nachTeil");
    
    let cutBefor = document.getElementById("davor");

    if (cutBefor.checked) {
        var cutWort = input.search(trennWort);//indexof() = search() /sind die gleiche /
        befor.innerHTML+=" "+input.slice(0,cutWort)
        after.innerHTML+=" "+input.slice(cutWort)        
    } else {
        var cutWort = input.search(trennWort);
        befor.innerHTML+=" "+input.slice(0,cutWort)+trennWort
        after.innerHTML+=" "+input.slice(cutWort).split(trennWort).join(" ")        
    }

    console.log("test");
} 