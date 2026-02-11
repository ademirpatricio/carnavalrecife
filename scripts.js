// Pegando a URL atual
let urlAtual = window.location.href;

//Verificando qual página o usuáio está:
let tituloPergunta;

if (urlAtual.includes("recife")) {
    tituloPergunta = "carnavalrecife.com.br";
} else {
    tituloPergunta = "carnavaldeolinda.com.br";
};

// Alterando para maiúscula
const resultado = tituloPergunta.charAt(0).toUpperCase() + tituloPergunta.slice(1);

// Mudando o h1 da página
let meuLink = document.getElementById("meuLink");
meuLink.innerText = tituloPergunta;

// Mudando o título da página
let titulo = "🎉 " + resultado + " | Malabares MKT & TEC";
document.title = titulo;