


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



function honapAdatok(honapszam) {
    if (honapszam < 1 || honapszam > 12) {
        throw new Error("A hónapszámnak 1 és 12 közé kell esnie!");
    }

    return honapok[honapszam - 1];
}

try {
    const bemenet = prompt("Adj meg egy hónapszámot (1-12):");

    const honapszam = Number(bemenet);

    if (Number.isNaN(honapszam)) {
        throw new Error("Nem számot adtál meg!");
    }

    const honap = honapAdatok(honapszam);

    console.log("Hónap:", honap.honap);
    console.log("Évszak:", honap.evszak);
    console.log("Napok száma:", honap.nap);

} catch (hiba) {
    console.log("Hiba:", hiba.message);
}