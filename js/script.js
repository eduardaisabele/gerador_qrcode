const gerarQRCode = () => {
     let inputUsuario = document.querySelector('textarea').value;
     let apiQRCode = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=";
     let conteudo = apiQRCode + encodeURIComponent(inputUsuario);
     document.getElementById('qrcode-img').src = conteudo;
}