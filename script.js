let conteiner = document.querySelector("main");
let active = null;
conteiner.addEventListener("click", (event) => {
  const questionConteiner = event.target.closest("section");
  if (questionConteiner) {
    let answer = questionConteiner.children[1];
    let question = questionConteiner.children[0].children[0];
    let arrow = questionConteiner.children[0].children[1];

    if (active) {
      active.children[0].children[0].style.color = "";
      active.children[0].children[0].style.fontWeight = "normal";
      active.children[0].children[1].style.transform = "rotate(0deg)";
      active.children[0].children[1].style.transition = "transform 0.3s ease";
      active.children[1].style.display = "none";
    }
    if (questionConteiner === active) {
      question.style.color = "";
      question.style.fontWeight = "normal";
      arrow.style.transform = "rotate(0deg)";
      arrow.style.transition = "transform 0.3s ease";
      answer.style.display = "none";
      active = null;
    } else {
      question.style.color = "black";
      question.style.fontWeight = "700";
      arrow.style.transform = "rotate(180deg)";
      arrow.style.transition = "transform 0.3s ease";
      answer.style.padding = "10px 0 0";
      answer.style.textAlign = "center";
      answer.style.display = "block";
      active = questionConteiner;
    }
  }
});
