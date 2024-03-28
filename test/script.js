document.getElementById('theme-switch').addEventListener('change', function(event){
  if(event.target.checked){
    document.body.classList.add('dark-theme');
  } else {
    document.body.classList.remove('dark-theme');
  }
});