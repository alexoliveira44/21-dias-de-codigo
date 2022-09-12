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
el = document.createElement("div");
el.setAttribute("id","display");
linha1.appendChild(el);



/* linha 2 */
el = document.createElement("button");
el.innerText =  "+";
el.setAttribute("onclick", "numero1('somar')");
linha2.appendChild(el);

el = document.createElement("button");
el.innerText =  "-";
el.setAttribute("onclick", "numero1('subtrair')");
linha2.appendChild(el);

el = document.createElement("button");
el.innerText =  "x";
el.setAttribute("onclick", "numero1('multiplicar')");
linha2.appendChild(el);

el = document.createElement("button");
el.innerText =  "=";
el.setAttribute("onclick","result()");
linha2.appendChild(el);






/* linha 3 */
el = document.createElement("button");
el.innerText =  "1";
el.setAttribute("onclick","valor('1')");
linha3.appendChild(el);

el = document.createElement("button");
el.innerText =  "2";
el.setAttribute("onclick","valor('2')");
linha3.appendChild(el);

el = document.createElement("button");
el.innerText =  "3";
el.setAttribute("onclick","valor('3')");
linha3.appendChild(el);

el = document.createElement("button");
el.innerText =  "/";
el.setAttribute("onclick", "numero1('dividir')");
linha3.appendChild(el);

/**linha 4 */

el = document.createElement("button");
el.innerText =  "4";
el.setAttribute("onclick","valor('4')");
linha4.appendChild(el);

el = document.createElement("button");
el.innerText =  "5";
el.setAttribute("onclick","valor('5')");
linha4.appendChild(el);

el = document.createElement("button");
el.innerText =  "6";
el.setAttribute("onclick","valor('6')");
linha4.appendChild(el);

el = document.createElement("button");
el.innerText =  "C";
el.setAttribute("onclick", "reset()");
linha4.appendChild(el);

/*linha 5 */
el = document.createElement("button");
el.innerText =  "7";
el.setAttribute("onclick","valor('7')");
linha5.appendChild(el);

el = document.createElement("button");
el.innerText =  "8";
el.setAttribute("onclick","valor('8')");
linha5.appendChild(el);

el = document.createElement("button");
el.innerText =  "9";
el.setAttribute("onclick","valor('9')");
linha5.appendChild(el);

el = document.createElement("button");
el.innerText =  "0";
el.setAttribute("onclick","valor('0')");
linha5.appendChild(el);



operacao = null;



function valor(x){
	document.getElementById("display").innerText += x;

}


function numero1(y){
	num1 = document.getElementById("display").textContent;
	document.getElementById("display").innerText = "";
	operacao = y;

}

function result(){
	num2 = document.getElementById("display").textContent;

	if(operacao === "somar"){
		resultado = Number(num1) + Number(num2);
		document.getElementById("display").innerText = "";
		document.getElementById("display").innerText = resultado;

	}

	if(operacao === "subtrair"){
		resultado = Number(num1) - Number(num2);
		document.getElementById("display").innerText = "";
		document.getElementById("display").innerText = resultado;

	}

	if(operacao === "multiplicar"){
		resultado = Number(num1) * Number(num2);
		document.getElementById("display").innerText = "";
		document.getElementById("display").innerText = resultado;

	}

	if(operacao === "dividir"){
		resultado = Number(num1) / Number(num2);
		document.getElementById("display").innerText = "";
		document.getElementById("display").innerText = resultado;

	}



}


function reset(){
	operacao = null;
	num1 = null;
	num2 = null;
	document.getElementById("display").innerText = "";
}

