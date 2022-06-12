const responses = [
  "Certeza!",
  "Não tenho tanta certeza.",
  "É decididamente assim.",
  "Não conte com isso.",
  "Sem dúvidas!",
  "Pergunte novamente mais tarde.",
  "Sim, definitivamente!",
  "Minha resposta é não.",
  "Você pode contar com isso.",
  "Melhor não te dizer agora.",
  "A meu ver, sim.",
  "Meus olhos dizem que não.",
  "Provavelmente.",
  "Não é possível prever agora.",
  "Perspectiva boa.",
  "As perspectivas não são tão boas.",
  "Sim.",
  "Concentre-se e pergunte novamente.",
  "Sinais apontam que sim."
];

const boxResponseElement = document.getElementById("box-response");
const responseElement = document.getElementById("response");
const inputQuestionElement = document.getElementById("question");
const spanShowQuestion = document.querySelector("#box-response span");

const form = document.querySelector("form");

form.addEventListener("submit", event => {
  event.preventDefault();

  handleMakeQuestion();
});

function handleMakeQuestion() {
  const totalResponses = responses.length;
  const responseRandom = Math.floor(Math.random() * totalResponses);

  if (inputQuestionElement.value == "") {
    alert("Preencha sua pergunta");
    return;
  }

  spanShowQuestion.innerHTML = inputQuestionElement.value;
  responseElement.innerHTML = responses[responseRandom];

  inputQuestionElement.value = "";

  boxResponseElement.classList.add("show");

  setTimeout(() => {
    boxResponseElement.classList.remove("show");
  }, 3000);
}
