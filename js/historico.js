// ATUALIZE A VARIÁVEL DE SAÍDA PARA PEGAR O NOVO TBODY
const saida = document.getElementById("tabela-historico");

function mostrarRegistros() {
    // Limpa o conteúdo da tabela
    saida.innerHTML = ""; 

    const registros = JSON.parse(localStorage.getItem("checklist")) || [];

    if (registros.length === 0) {
        // Se não houver registros, insere uma linha informando
        saida.innerHTML = `<tr><td colspan="5">Nenhum registro salvo.</td></tr>`;
        return;
    }

    registros.forEach((item, index) => {
        // 1. Cria a linha da tabela (<tr>)
        const tr = document.createElement("tr");

        // 2. Monta o conteúdo da linha com as células (<td>)
        tr.innerHTML = `
            <td>#${index + 1}</td>
            <td>${item.data}</td>
            <td>${item.local}</td>
            <td>${item.servico}</td>
            <td>${item.km}</td>
        `;

        // 3. Adiciona a nova linha ao corpo da tabela (tbody)
        saida.appendChild(tr);
    });
}

// Função para limpar histórico
 function limparHistorico() {
    localStorage.removeItem("checklist");
    mostrarRegistros();
    alert("Histórico limpo!")
}

























// const saida = document.getElementById("saida");

// function mostrarRegistros() {
    // saida.innerHTML = "";

    // const registros = JSON.parse(localStorage.getItem("checklist")) || [];

    // if (registros.length === 0) {
        // saida.innerHTML = "<li>Nenhum registro salvo.</li>";
        // return;
    // }

// registros.forEach((item, index) => {
    // const li = document.createElement("li");
    // li.textContent = `#${index + 1} | Data: ${item.data} | Local: ${item.local} | Servico: ${item.servico} | KM: ${item.km}`;
    // saida.appendChild(li);
    // });
// }
//
// Função para limpar histórico
// function limparHistorico() {
    // localStorage.removeItem("checklist");
    // mostrarRegistros();
    // alert("Histórico limpo!")
// }

window.onload = mostrarRegistros;