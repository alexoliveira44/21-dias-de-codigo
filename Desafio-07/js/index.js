var vminutos = 20;
var vsegundos = 0;



const app = document.getElementById("view");

box = document.createElement("div");
box.setAttribute("class", "flex1");
app.appendChild(box);

box = document.createElement("div");
box.setAttribute("class", "flex1 display");
app.appendChild(box);

box = document.createElement("div");
box.setAttribute("class", "flex1");
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



/*linha*/
titulo = document.createElement("p");
titulo.setAttribute("class","titulo");
titulo.innerText = "cronometro";
linha1.appendChild(titulo);




/*linha 2 */
minutos = document.createElement("p");
minutos.setAttribute("id","minutos");
minutos.innerText = vminutos;
linha2.appendChild(minutos);

pontos = document.createElement("p");
pontos.setAttribute("class","pontos");
pontos.innerText = ":";
linha2.appendChild(pontos);

segundos = document.createElement("p");
segundos.setAttribute("id","segundos");
segundos.innerText = "0"+vsegundos;
linha2.appendChild(segundos);


/*linha 3 */
start = document.createElement("button");
start.setAttribute("class", "botao");
start.setAttribute("onclick", "fstart()");
start.innerText = "Start";
linha3.appendChild(start);

pause = document.createElement("button");
pause.setAttribute("class", "botao");
pause.setAttribute("onclick", "fpause()");
pause.innerText = "pause";
linha3.appendChild(pause);

stop1 = document.createElement("button");
stop1.setAttribute("class", "botao");
stop1.setAttribute("onclick", "fstop()");
stop1.innerText = "Stop";
linha3.appendChild(stop1);


play = false;
stopp = false;
pause = false;









function fsegundos(){
    if(play){
        if(vsegundos === 0){
            if(vminutos === 0){
                vsegundos = 0;
                play = false;
            }else{
                vminutos--;
                document.getElementById("minutos").innerText = vminutos;
                
                vsegundos = 60;

            }
            
        }
        if(vsegundos < 10){
            console.log("0"+vsegundos);
            document.getElementById("segundos").innerText = "0"+vsegundos;
            vsegundos--;
            
            
        }else{
            console.log(vsegundos);
            document.getElementById("segundos").innerText = vsegundos;
            vsegundos--;
            
        }

    }
    

}


function fstart(){
    play = true;
}

function fpause(){
    play = false;

}

function fstop(){
    play = false;
    vminutos = 20;
    vsegundos = 0;
    document.getElementById("segundos").innerText = "0"+0;
    document.getElementById("minutos").innerText = "20";

    

}


setInterval(fsegundos,1000);









