


let honapok=[

    {
    honap: "Január",
    evszak: "Tél",
    nap: 31
},
    {
    honap: "Február",
    evszak: "Tél",
    nap:28 
    },

    {
    honap: "Március",
    evszak: "Tavasz",
    nap: 31
    },
    {
    honap: "Április",
    evszak: "Tavasz",
    nap: 30
    },
    {
    honap: "Május",
    evszak: "Tavasz",
    nap:31
    },
    {
    honap:"Június",
    evszak: "Nyár",
    nap:30
    },
    {
    honap:"Július",
    evszak: "Nyár",
    nap:31
    },
    {
    honap:"Augusztus",
    evszak: "Nyár",
    nap:31
    },
    {
    honap:"Szeptember",
    evszak: "Ősz",
    nap:30
    },
    {
    honap:"Október",
    evszak: "Ősz",
    nap:30
    },
    november={
        honap:"November",
        evszak:"Ősz",
        nap:30
    },
    december={
        honap:"December",
        evszak:"Tél",
        nap: 31
    }
]



function honapbekeres(honapszam){
    let elem=honapok[honapszam-1];
    console.log(elem)
    return elem
    
}
try{
    const beker=prompt("írj be egy számot")
    if(honapszam<1|| honapszam>12){
        throw new Error("Hibás számot adtál meg")
    }
    if(isNaN(honapszam)){
        throw new Error("Nem számot adtál meg")
    }
    else{
        const honap=honapbekeres(honapszam);
        console.log("Hónap", honap.honap)
    }

}
catch(e){
    console.log("Hiba")
}
