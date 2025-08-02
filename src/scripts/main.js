function handleJoin() {
  alert("¡Bienvenido a RegulusFit! Pronto tendrás acceso exclusivo.");
}

function scrollToSection(id) {
  const target = document.getElementById(id);
  if (target) {
    target.scrollIntoView({ behavior: "smooth" });
  }
}

function handleContact() {
  alert("Puedes escribirnos a info@regulusfit.com o seguirnos en redes.");
}
