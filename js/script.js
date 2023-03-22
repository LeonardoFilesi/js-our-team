const ourTeamMembers = [
    {
        nome : "Wayne Barnett",
        ruolo : "Founder & CEO",
        foto : "wayne-barnett-founder-ceo.jpg",
    }, {
        nome : "Angela Caroll",
        ruolo : "Chied Editor",
        foto : "angela-caroll-chief-editor.jpg",
    }, {
        nome : "Walter Gordon",
        ruolo : "Office Menager",
        foto : "walter-gordon-office-manager.jpg",
    }, {
        nome : "Angela Lopez",
        ruolo : "Social Media Menager",
        foto : "angela-lopez-social-media-manager.jpg",
    }, {
        nome : "Scott Estrada",
        ruolo : "Developer",
        foto : "scott-estrada-developer.jpg",
    }, {
        nome : "Barbara Ramos",
        ruolo : "Graphic Designer",
        foto : "barbara-ramos-graphic-designer.jpg",
    }
];

const container = document.querySelector(".row")
let cards = "";
for (let i = 0; i < ourTeamMembers.length; i++) {
    console.log(ourTeamMembers[i]);
    const currentMember = ourTeamMembers[i];
    cards += 
    `<div class="col">
        <div class="card" style="">
            <img src="img/${currentMember.foto}" class="card-img-top" alt="">
            <div class="card-body">
                <h5 class="card-title">${currentMember.nome}</h5>
                <p class="card-text">${currentMember.ruolo}</p>
            </div>
        </div>           
    </div>`
    container.innerHTML = cards;
}