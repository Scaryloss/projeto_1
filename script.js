function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  /* pegar a tag img */
  const img = document.querySelector("#profile img")

  // substituir a imagem
  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/avatar-light.png")
    img.setAttribute("alt", "Foto de Mayk Brito com óculos de sol")
    // se tiver light mode, adicionar a imagem light
  } else {
    img.setAttribute("src", "./assets/avatar.png")
    img.setAttribute(
      "alt",
      "Foto de Mayk Brito sorrindo de óculos e jaqueta preta."
    )
    // se tiver sem light mode, manter a imagem normal
  }
}
