function openModal(type) {
  const modal = document.getElementById("popupModal");
  const modalText = document.getElementById("modalText");

  if (type === "privacy") {
    modalText.innerHTML = `
      <h2>Politika privatnosti 📃</h2>
      <p>Coding Garage poštuje vašu privatnost i obavezuje se da će čuvati vaše lične podatke.
      Podaci prikupljeni putem naše kontakt forme koriste se isključivo u svrhu komunikacije sa vama.</p>
      <p>Vaše podatke nećemo deliti sa trećim licima bez vašeg pristanka, osim zakonski obavezno.
      Svi podaci se čuvaju na siguran način i pristup imaju samo ovlašćena lica.</p>
      <p>Korišćenjem sajta saglasni ste sa načinom prikupljanja i obrade podataka.</p>
    `;
  } else if (type === "terms") {
    modalText.innerHTML = `
      <h2>Uslovi korišćenja ⚠️</h2>
      <p>Korišćenjem sajta Coding Garage prihvatate sledeće uslove korišćenja.
      Sadržaj sajta, uključujući tekstove, slike i grafike, namenjen je isključivo informativne svrhe.</p>
      <p>Zabranjeno je neovlašćeno kopiranje, distribucija ili menjanje bilo kog dela sajta
      bez pismene dozvole vlasnika. Ne garantujemo da će sajt uvek biti dostupan niti da
      će informacije biti uvek ažurne i tačne.</p>
      <p>Zadržavamo pravo da u bilo kom trenutku izmenimo ili ažuriramo ove uslove korišćenja.
      Preporučujemo da ih povremeno proverite kako biste bili informisani o izmenama.</p>
    `;
  }

  modal.style.display = "block";
}

function closeModal() {
  document.getElementById("popupModal").style.display = "none";
}

document.getElementById("popupModal").addEventListener("click", (e) => {
  if (e.target === e.currentTarget) {
    closeModal();
  }
});

// Footer year
document.getElementById('year').textContent = new Date().getFullYear();
