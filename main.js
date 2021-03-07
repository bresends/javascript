const urlCachorro = 'https://dog.ceo/api/breeds/image/random';
const elementImagem = document.querySelector('img');
const botao = document.querySelector('button');

function imprimirDoguim(jsonApi) {
  elementImagem.setAttribute('src', jsonApi.message);
}

const jsonBodyGrab = async (url) => {
  try {
    respostaHTTP = await fetch(url);

    if (!respostaHTTP.ok) {
      throw new Error(`A requisição HTTP falhou. Erro ${infoCachorro.status}`);
    }

    jsonBody = await respostaHTTP.json();
  } catch (erro) {
    console.log(erro.message);
  }
  return jsonBody;
};

elementImagem.addEventListener('click', () => {
    jsonBodyGrab(urlCachorro).then(imprimirDoguim);
});

botao.addEventListener('click', () => {
    jsonBodyGrab(urlCachorro).then(imprimirDoguim);
});

jsonBodyGrab(urlCachorro).then(imprimirDoguim);