const form = document.getElementById
    ("formChecklist");

form.addEventListener("submit", (e) => { 
    e.preventDefault();
    
    const data = document.getElementById("data").value;
    const local = document.getElementById("local").value;
    const servico = document.getElementById("servico").value;
    const km = document.getElementById("km").value;

    const novoRegistro = { data, local, servico, km};

    // Recupera registros existentes
    const registros = JSON.parse(localStorage.getItem("checklist")) || [];

    // Adiciona novo
    registros.push(novoRegistro);

    // Salva no localStorage
    localStorage.setItem("checklist", JSON.stringify(registros));

    // Redireciona para a página de histórico
    window.location.href = "historico.html";
});

if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("./service-worker.js");
}