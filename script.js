function toggleMode() {
  const html = document.documentElement

  /* if(html.classList.contains('light')){
    html.classList.remove('light')
  }
  else {
    html.classList.add('light')
  }*/
  html.classList.toggle("light") // faz a mesma coisa que o condicional acima

  // trocar a tag img e substituir a imagem quando tiver em light ou dark

  //seleciona a tag img no html e salva em img
  const img = document.querySelector("#profile img")
  //se estiver em light
  if (html.classList.contains("light")) {
    //adiciona a imagem light a tag img
    img.setAttribute("src", "./assets/assets/avatar-light-n.png")
    img.setAttribute("alt", "Foto de Perfil light")
  } else {
    //se estiver em dark, adiciona a imagem dark a tag img
    img.setAttribute("src", "./assets/assets/avatar-dark.png")
    img.setAttribute("alt", "Foto de Perfil Dark")
  }
}
