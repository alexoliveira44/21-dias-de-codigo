const app = document.getElementById("view");

box = document.createElement("div");
app.appendChild(box);

box = document.createElement("div");
app.appendChild(box);

box = document.createElement("div");
app.appendChild(box);

box = document.createElement("div");
app.appendChild(box);

box = document.createElement("div");
app.appendChild(box);






linha1 = document.getElementById("view").childNodes[0];
linha2 = document.getElementById("view").childNodes[1];
linha3 = document.getElementById("view").childNodes[2];
linha4 = document.getElementById("view").childNodes[3];
linha5 = document.getElementById("view").childNodes[4];




/*linha 1 */
el = document.createElement("p");
el.innerText = "4";
linha1.appendChild(el);

el = document.createElement("p");
el.innerText = "0";
linha2.appendChild(el);

el = document.createElement("p");
el.innerText = "4";
linha3.appendChild(el);


el = document.createElement("p");
el.innerText = "Pagina não encontrada.";
linha4.appendChild(el);

el = document.createElement("button");
el.innerText = "Voltar";
linha4.appendChild(el);



