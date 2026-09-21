


let honapok=[

    {
    honap: "Január",
    evszak: "Tél",
    nap: 31,
    unnep:"Újév"
},
    {
    honap: "Február",
    evszak: "Tél",
    nap:28, 
    unnep:"Nincs ünnep"
    },

    {
    honap: "Március",
    evszak: "Tavasz",
    nap: 31,
    unnep:"Nincs ünnep"
    },
    {
    honap: "Április",
    evszak: "Tavasz",
    nap: 30,
    unnep: "Húsvét"
    },
    {
    honap: "Május",
    evszak: "Tavasz",
    nap:31,
    unnep: "Munkanap"
    },
    {
    honap:"Június",
    evszak: "Nyár",
    nap:30,
    unnep:"Nincs ünnep"
    },
    {
    honap:"Július",
    evszak: "Nyár",
    nap:31,
    unnep:"Nincs ünnep"
    },
    {
    honap:"Augusztus",
    evszak: "Nyár",
    nap:31,
    unnep:"Államalapítás"
    },
    {
    honap:"Szeptember",
    evszak: "Ősz",
    nap:30,
    unnep:"Nincs ünnep"
    },
    {
    honap:"Október",
    evszak: "Ősz",
    nap:30,
    unnep:"56-os Forradalom"
    },
    november={
        honap:"November",
        evszak:"Ősz",
        nap:30,
        unnep:"Halottak Napja"
    },
    december={
        honap:"December",
        evszak:"Tél",
        nap: 31,
        unnep: "karacsony"
    }
]
document.getElementById("honapmod").style.visibility="hidden"
document.getElementById("unnepmod").style.visibility="hidden"
function honapAdatok(honapszam) {
   

    return honapok[honapszam - 1];
}
function honapfuggveny(){
try {
  //  const bemenet = document.getElementById("katt").innerHTML = "írj be egy számot"
    const honapszam = Number(document.getElementById("honap").value);
    document.getElementById("hiba").innerHTML = ""
       document.getElementById("eredmenyhonap").innerHTML = ""
    eredmenyevszak.innerHTML = ""
    eredmenynap.innerHTML = ""
    unnepnap.innerHTML = "";
    
    console.log(honapszam)
     if (honapszam < 1 || honapszam > 12) {
        throw new Error("A hónapszámnak 1 és 12 közé kell esnie!");
    }
    if (Number.isNaN(honapszam)) {
        throw new Error("Nem számot adtál meg!");
    }

    const honap = honapAdatok(honapszam);
   
    document.getElementById("eredmenyhonap").innerHTML = "Hónap:" + honap.honap
    eredmenyevszak.innerHTML = "Évszak:" + honap.evszak
    eredmenynap.innerHTML = "Napok száma:" + honap.nap
    unnepnap.innerHTML=honap.unnep
    document.getElementById("honapmod").style.visibility="visible"

} catch (hiba) {
   document.getElementById("hiba").innerHTML = "Hiba:" + hiba.message;
   console.log(hiba.message)
}
}