var listaFilmes = [
  "https://upload.wikimedia.org/wikipedia/pt/7/79/Yesterday_%282019%29_poster.jpg",
  "https://br.web.img3.acsta.net/pictures/19/12/18/16/25/0588210.jpg",
  "https://br.web.img2.acsta.net/medias/nmedia/18/91/08/82/20128877.JPG",
  "https://br.web.img3.acsta.net/medias/nmedia/18/93/87/95/20282862.jpg"
];

for (var i = 0; i < listaFilmes.length; i++) {
  document.write("<img src=" + listaFilmes[i] + ">");
}
