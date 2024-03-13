  // Bank some good vibe options
  const vibes = [
    "...a nuestra pagina!",
    "...al fin del mundo!",
    "...sigase con gusto!",
    "...2 y 2 son 4, 4 y 2 son 6!"
  ];

   // choose a random good vibe
  var vibe = vibes[Math.floor(Math.random() * Math.floor(vibes.length))];

  // display a good vibe
  document.querySelector(".vibe").append(vibe);
