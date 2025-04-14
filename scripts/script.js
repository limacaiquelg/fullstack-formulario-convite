const fileInput = document.getElementById('cover-photo');
const fileName = document.getElementsByClassName('filename')[0];
const errorMessage = document.getElementsByClassName('error-message')[0];

fileInput.addEventListener('change', function() {
  if (fileInput.files.length > 0) {
    fileName.textContent = fileInput.files[0].name;
    fileName.classList.add('file-selected');
    errorMessage.style.display = "none";
  } else {
    fileName.textContent = "Nenhum arquivo selecionado";
  }
});
