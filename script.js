const textArea = document.querySelector('.text-area');
const mensagem = document.querySelector('.mensagem');

function validarEntrada(texto) {
  const regex = /^[a-z\s]+$/;
  return regex.test(texto);
}

function btnCriptografar() {
  const texto = textArea.value;
  if (validarEntrada(texto)) {
    const textoCriptografado = criptografar(texto);
    mensagem.value = textoCriptografado;
    textArea.value = '';
  } else {
    alert(
      'O texto contém caracteres inválidos. Use apenas letras minúsculas sem acentos e caracteres especiais.'
    );
  }
}

function btnDescriptografar() {
  const texto = textArea.value;
  if (validarEntrada(texto)) {
    const textoDescriptografado = descriptografar(texto);
    mensagem.value = textoDescriptografado;
    textArea.value = '';
  } else {
    alert(
      'O texto contém caracteres inválidos. Use apenas letras minúsculas sem acentos e caracteres especiais.'
    );
  }
}

function descriptografar(stringDescriptografada) {
  let matrizCodigo = [
    ['e', 'enter'],
    ['i', 'imes'],
    ['a', 'ai'],
    ['o', 'ober'],
    ['u', 'ufat'],
  ];
  stringDescriptografada = stringDescriptografada.toLowerCase();

  for (let i = 0; i < matrizCodigo.length; i++) {
    if (stringDescriptografada.includes(matrizCodigo[i][1])) {
      stringDescriptografada = stringDescriptografada.replaceAll(
        matrizCodigo[i][1],
        matrizCodigo[i][0]
      );
    }
  }
  mostrarTexto(stringDescriptografada);
  return stringDescriptografada;
}

function criptografar(stringCriptografada) {
  let matrizCodigo = [
    ['e', 'enter'],
    ['i', 'imes'],
    ['a', 'ai'],
    ['o', 'ober'],
    ['u', 'ufat'],
  ];
  stringCriptografada = stringCriptografada.toLowerCase();

  for (let i = 0; i < matrizCodigo.length; i++) {
    if (stringCriptografada.includes(matrizCodigo[i][0])) {
      stringCriptografada = stringCriptografada.replaceAll(
        matrizCodigo[i][0],
        matrizCodigo[i][1]
      );
    }
  }

  mostrarTexto(stringCriptografada);
  return stringCriptografada;
}

function mostrarTexto(value) {
  document.getElementById('aguardando').style.visibility = 'hidden';
  document.getElementById('aguardando').style.display = 'none';
  document.getElementById('textoCriptografado').style.display = 'flex';
  const textoCriptografado = document.getElementById('texto2');
  textoCriptografado.innerHTML = value;
}

function copiar() {
  const texto2 = document.getElementById('texto2').innerText;
  navigator.clipboard.writeText(texto2).then(() => {
    alert('Copiado para a Área de Transferência!');
  });
}
