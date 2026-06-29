let respostas = {};

const perguntas = [
{q:"Qual sistema é da Apple?",a:[
{t:"iOS",c:true},{t:"Android",c:false},{t:"Windows",c:false}
]},
{q:"Android é baseado em?",a:[
{t:"Linux",c:true},{t:"Windows",c:false},{t:"iOS",c:false}
]},
{q:"Quem criou o Linux?",a:[
{t:"Linus Torvalds",c:true},{t:"Bill Gates",c:false},{t:"Steve Jobs",c:false}
]},
{q:"Windows pertence a?",a:[
{t:"Microsoft",c:true},{t:"Google",c:false},{t:"Apple",c:false}
]},
{q:"Android é:",a:[
{t:"Open-source",c:true},{t:"Fechado",c:false},{t:"Pago",c:false}
]},
{q:"Linux é usado em:",a:[
{t:"Servidores",c:true},{t:"Jogos",c:false},{t:"Redes sociais",c:false}
]},
{q:"iOS é exclusivo de:",a:[
{t:"Apple",c:true},{t:"Samsung",c:false},{t:"Xiaomi",c:false}
]},
{q:"Windows começou como:",a:[
{t:"MS-DOS interface",c:true},{t:"Mobile",c:false},{t:"Linux",c:false}
]},
{q:"Qual tem mais personalização?",a:[
{t:"Android",c:true},{t:"iOS",c:false},{t:"Windows",c:false}
]},
{q:"Linux é:",a:[
{t:"Gratuito e aberto",c:true},{t:"Pago",c:false},{t:"Fechado",c:false}
]}
];

function shuffle(a){
return a.sort(()=>Math.random()-0.5);
}

function montar(){
let box=document.getElementById("quizBox");
box.innerHTML="";

perguntas.forEach((p,i)=>{
let div=document.createElement("div");
div.innerHTML=`<p><b>${i+1}) ${p.q}</b></p>`;

shuffle(p.a).forEach(o=>{
div.innerHTML+=`
<button onclick="resp(${i},${o.c},this)">${o.t}</button>
`;
});

box.appendChild(div);
});
}

function resp(i,c,b){
if(respostas[i]!==undefined)return;

respostas[i]=c;

let btns=b.parentElement.querySelectorAll("button");
btns.forEach(x=>x.disabled=true);

if(c){
b.classList.add("certa");
}else{
b.classList.add("errada");
btns.forEach(x=>{
if(x.onclick.toString().includes("true")){
x.classList.add("certa");
}
});
}
}

window.onload=montar;
