function fileInputHandler() {
  const fileInput = document.getElementById('cover-photo');
  const fileName = document.getElementById('filename');
  const errorMessage = document.getElementById('file-input-error');

  if (fileInput.files.length > 0) {
    fileName.textContent = fileInput.files[0].name;
    fileName.classList.add('file-selected');
    errorMessage.style.display = "none";
  } else {
    fileName.textContent = "Nenhum arquivo selecionado";
    fileName.classList.remove('file-selected');
    errorMessage.style.display = "flex";
  }
}

function phoneMask() {
  const input = document.getElementById('contact-phone');

  let value = input.value.replace(/\D/g, '');
  if (value.length > 11) value = value.slice(0, 11);
    
  let formatted = '';

  if (value.length > 0) formatted += '(' + value.slice(0, 2);
  if (value.length >= 3) formatted += ') ' + value.slice(2, value.length >= 11 ? 7 : 6);
  if (value.length >= 7) formatted += '-' + value.slice(value.length >= 11 ? 7 : 6);

  input.value = formatted;
}
