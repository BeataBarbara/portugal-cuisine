<template>
    <div>
        <h1>
            Dania główne
        </h1>
        <div class="danie">
        <h2>Kotleciki z dorsza</h2>
        <div class="opis-dania">
            <p class="opis">Przygotowywane z tytułowego, ugotowanego dorsza, z podduszonej cebuli, czosnku, jajek i bułki tartej. 
                Przyprawy należy dodać wedle uznania, pasuje sól, pieprz oraz wszelkie ziołowe mieszanki do ryb, kotletów mielonych lub grilla. 
            </p>
            <img alt="kotlety z dorsza w moim wykonaniu" src="../assets/kotletzdorszamoj.png" title="moje kotlety z dorsza"   />
        </div>
        </div>
        <div class="danie">
        <h2>Bifana</h2>
        <div class="opis-dania">
            <p class="opis">Kanapka w pszennej bułce z duszoną wieprzowiną. Mięso gotowane jest z dodatkiem czosnku, przypraw, sosu pomidorowego i białego wina. <br> Jest jedną z ulubionych kanapek Portugalczyków, nawet tamtejszy McDonald nie oparł się jej popularności i wprowadził do swojej oferty McBifanę.
            </p>
            <img alt="przygotowywanie bifany" src="../assets/bifanaMoja.png" title="przygotowywanie bifany"   />
        </div>
        </div>
    </div>
</template>

<style>

    p {
        width: 75%;
    }
    .danie {
        width:80%;
        background-color: aquamarine;
        padding: 5px;
        border-radius: 20px;
        margin: 10px;
    }
    .opis-dania {
        display: flex;
    }
</style>