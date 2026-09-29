const prompt = require('prompt-sync')();
let candidats = [
    {
        cin: "AB123451",
        nom: "Othmani",
        prenom: "Saadeddine",
        parti: "PJD",
        age: 70,
        electeurs: ["EE124454","HH325409"]
    },
    {
        cin: "AB123452",
        nom: "Benkirane",
        prenom: "Abdelilah",
        parti: "PJD",
        age: 72,
        electeurs: ["EE172898"]
    },
    {
        cin: "AB123453",
        nom: "Mansouri",
        prenom: "Fatima Ezzahra",
        parti: "PAM",
        age: 50,
        electeurs: ["HH765618","MM392816","EE267286"]}
    ]
let choix;
do {console.log(`
__________________________________________
       BONJOUR AU MENU PRINCIPAL :
__________________________________________
1- Ajouter un nouveau candidat.
2- Ajouter plusieurs candidats.
3- Afficher la liste des candidats.
4- Voter pour un candidat.
5- Modifier les informations d'un candidat.
6- Supprimer un candidat.
7- Rechercher des candidats.
8- Afficher les statistiques de l'élection.
9- Quitter.
__________________________________________
`);
    choix = prompt('Votre choix : ');

    switch (choix) {
        case '1':
            ajouterCandidat1();
            break;

        case '2':
            ajouterPlusieursCandidats2();
            break;

        case '3':
            afficherListeCandidats3();
            break;

        case '4':
            voterPourCandidat4();
            break;

        case '5':
            modifierCandidat5();
            break;

        case '6':
            supprimerCandidat6();
            break;

        case '7':
            rechercherCandidat7();
            break;

        case '8':
            afficherStatistiques8();
            break;

        case '9':
            console.log('Au revoir !');
            break;

        default:
            console.log('Choix invalide, réessayez.');
    }

} while (choix !== '9')
function ajouterCandidat1() {
    
    let c = {
        cin: prompt("cin : "),
        nom: prompt("nom : "),
        prenom: prompt("prenom : "),
        parti: prompt("parti : "),
        age: Number(prompt("age : ")),
        electeurs: []
    };

    let deja = false;

    for (let i = 0; i < candidats.length; i++) {
        if (candidats[i].cin === c.cin) {
            deja = true;
            break;
        }
    }

    if (deja) {
        console.log("deja existe");
    } else {
        candidats.push(c)  
        console.log("succes");
    }
}
function ajouterPlusieursCandidats2() {
    let x = Number(prompt("combien ? "));

    for (let i = 0; i < x; i++) {
        ajouterCandidat1();
    }
}
function afficherListeCandidats3() {
    console.log(`
        1- Afficher tous.
        2- Trier par votes.
        3- Filtrer par parti.
        4- Retour au menu principal.`)
    let choix = prompt("Choix : ")
    if (choix == "1") {
        for (let i = 0; i < candidats.length ;  i++){
            console.log(`
            CIN : ${candidats[i].cin}
            Nom : ${candidats[i].prenom}
            Parti : ${candidats[i].parti}
            Age : ${candidats[i].age}
            Votes : ${candidats[i].electeurs.length}
            -----------------------`)}}    

    else if (choix == "2") {
    for (let i = 0; i < candidats.length ; i++) {
        for (let j = 0; j < candidats.length - 1 - i; j++) {
            if (candidats[j].electeurs.length < candidats[j + 1].electeurs.length){
                let T = candidats[j]
                candidats[j] = candidats[j + 1]
                candidats[j + 1] = T
            }}}
    for (let i = 0; i < candidats.length; i++) {
        console.log(candidats[i]);}}

    let parti = ""
    if (choix == "3") {
        parti = prompt("Nom du parti : ")
        for (let i = 0; i < candidats.length; i++) {
            if ( candidats[i].parti == parti)  
                console.log(`
                CIN : ${candidats[i].cin}
                Nom : ${candidats[i].prenom}
                Parti : ${candidats[i].parti}
                Age : ${candidats[i].age}
                Votes : ${candidats[i].electeurs.length}
                -----------------------`)
            }
        }
    }
function voterPourCandidat4(){
    let cin = prompt("Taper votre CIN :")
    let dejaVote = true
    for (let i = 0; i < candidats.length; i++) {
        for (let j = 0; j < candidats[i].electeurs.length; j++) {
            if (candidats[i].electeurs[j] == cin) {
                dejaVote = false}}
    }if (dejaVote == false) {
        console.log("Vous avez deja vote!")
    } else {
        let cinCandidat = prompt("Taper CIN du candidat :")
        let trouve = true
        for (let i = 0; i < candidats.length; i++) {
            if(candidats[i].cin == cinCandidat){
                candidats[i].electeurs.push(cin)
                trouve = false;}}
        if (trouve == false) {
            console.log("Enregistre")
        } else {
            console.log("Candidat introuvable")}}
}
function modifierCandidat5(){
    let cin = prompt("Taper CIN du candidat : ")
    let trouve = true
    for (let i = 0; i < candidats.length; i++) {
        if (candidats[i].cin == cin) {
            candidats[i].parti = prompt("Nouveau parti : ")
            candidats[i].age = Number(prompt("Nouvel age : "))
            trouve = false
            console.log("Modification Enregistre")
            break}}
    if (trouve == true) {
        console.log("Candidat introuvable")}
}
function supprimerCandidat6(){
    let cinDC = prompt("CIN du candidat : ")
    let Supp = false
    for (let i = 0; i < candidats.length; i++) {
        if (candidats[i].cin == cinDC) {
            candidats.splice(i, 1)
            Supp = true
            console.log("Suppression réussie.")
            break }}
    if (Supp == false) {
        console.log("Candidat introuvable!")}
}
function rechercherCandidat7(){
    let nom = prompt("Nom du candidat : ")
    let trouve = false
    for (let i = 0; i < candidats.length; i++) {
        if (candidats[i].nom == nom) {
            console.log(candidats[i])
            trouve = true}}
    if (trouve == false) {
        console.log("Candidat introuvable!")}  
}
function afficherStatistiques8(){
    let choix2 = Number(prompt(`
        1>Afficher le nombre total de candidats.
        2>Afficher le nombre total de votes exprimés dans toute l'élection.
        3>Afficher le Top 3 des candidats .
        4>Afficher le nombre de candidats par parti politique.
        choix : `))
        switch (choix2){ 
            case 1:
                console.log(candidats.length)
                break;
            case 2:
                let NV = 0
                for (let i = 0; i < candidats.length; i++) {
                NV = NV + candidats[i].electeurs.length}
                console.log("Total des votes :", NV)
                break;
            case 3:
                console.log("Top 3 des candidats :")
                for (let i = 0; i < candidats.length ; i++){
                    for (let j = 0; j < candidats.length - 1 - i; j++){
                        if (candidats[j].electeurs.length < candidats[j + 1].electeurs.length){
                            let MAX = candidats[j]
                            candidats[j] = candidats[j + 1]
                            candidats[j + 1] = MAX}}}
                for (let i = 0; i < 3 ; i++) {
                console.log(candidats[i])}}
            }