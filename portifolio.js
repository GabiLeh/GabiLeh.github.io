const form = document.getElementById("meu-formulario");

form.addEventListener("submit", async function (event) {
  event.preventDefault(); 
  
  const dados = new FormData(form);

  const resposta = await fetch("https://formspree.io/f/xrpgzrea", {
    method: "POST",
    body: dados,
    headers: { 'Accept': 'application/json' }
  });

  if (resposta.ok) {
    window.location.href = "obrigada.html"; 
  } else {
    window.location.href = "erro.html";
  }
});