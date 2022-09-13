

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
el = document.createElement("img");
el.setAttribute("class","dog");
el.setAttribute("src","img/dog.jpg");
linha1.appendChild(el);

/*linha 2 */
el = document.createElement("h1");
el.setAttribute("class","titulo");
el.innerText = "Efeito";
linha2.appendChild(el);

/*linha 3 */
el = document.createElement("h2");
el.setAttribute("class","subtitulo");
el.innerText = "glassmorphism";
linha3.appendChild(el);










const ball = document.body;
el = document.createElement("div");
el.setAttribute("class","ball");
ball.appendChild(el);

const ball1 = document.body;
el = document.createElement("div");
el.setAttribute("class","ball1");
ball.appendChild(el);

const ball2 = document.body;
el = document.createElement("div");
el.setAttribute("class","ball2");
ball.appendChild(el);



