function adicionaProdutos(){

    nome=document.getElementById("nome").value;
    valor=document.getElementById("peso").value;
    pontosAcumulados=valor/1.4;

    tr=document.createElement("tr");

    tr.innerHTML=`
        <td>${nome}</td>
        <td>${valor}</td>
        <td class="info-imc">${pontosAcumulados}</td>    
    `;

    document.getElementById("tabela-pacientes").appendChild(tr);
    somaPontos();
}