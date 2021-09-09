<template>
    <div>
        <h1>Przekąski        </h1>
        <div class="danie">
        <h2>Peixinhos da Horta</h2>
        <div class="opis-dania">
            <p class="opis">Rybki z ogródka <br>Zielona fasolka szparagowa panierowana w mące kukurydzianej z dodatkiem czosnku.
            </p>
            <img alt="rybki z ogródka w moim wykonaniu" src="../assets/fasolka.jpg" title="rybki z ogródka"   />
        </div>
        </div>
        <div class="danie">
        <h2>Grillowane sardynki z sałatką</h2>
        <div class="opis-dania">
            <p class="opis">podawane z pomidorami oraz pastą z oliwy, oliwek i czosnku            </p>
            <img alt="" src="" title=""   />
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