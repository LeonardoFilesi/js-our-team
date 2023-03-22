// Stabilisco gli ogetti e le loro key
// E subito incorporo gli oggetti in un Array
const ourTeamMembers = [
    {
        nome : "Wayne Barnett",
        ruolo : "Founder & CEO",
        foto : "img/wayne-barnett-founder-ceo.jpg",
    }, {
        nome : "Angela Caroll",
        ruolo : "Chied Editor",
        foto : "img/angela-caroll-chief-editor.jpg",
    }, {
        nome : "Walter Gordon",
        ruolo : "Office Menager",
        foto : "img/walter-gordon-office-menager.jpg",
    }, {
        nome : "Angela Lopez",
        ruolo : "Social Media Menager",
        foto : "img/angela-lopez-social.media.menager.jpg",
    }, {
        nome : "Scott Estrada",
        ruolo : "Developer",
        foto : "img/scott-estrada-developer.jpg",
    }, {
        nome : "Barbara Ramos",
        ruolo : "Graphic Designer",
        foto : "img/barbara-ramos-graphic-designer.jpg",
    }
];

const container = document.querySelector(".container")
let cards = "";
for (let i = 0; i < ourTeamMembers.length; i++) {
    console.log(ourTeamMembers[i]);
    const currentMember = ourTeamMembers[i];
}