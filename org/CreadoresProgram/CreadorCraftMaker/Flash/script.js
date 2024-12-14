$.getScript("https://unpkg.com/@ruffle-rs/ruffle", function(){
  window.addEventListener("load", function(){
    let ruffle = window.RufflePlayer.newest();
    let player = ruffle.createPlayer();
    let container = document.getElementById("{elementID}");
    container.appendChild(player);
    GameProps.getFileGame().file("{FileSWF}").async("unit8array").then(function(GFlashB){
      let GFlashBl = new Blob([GFlashB], {
        type: "application/x-shockwave-flash"
      });
      let GFlashUrl = URL.createObjectURL(GFlashBl);
      player.ruffle().load(GFlashUrl).catch(function(error){
        alert("Error Load Game!"+error);
        GameProps.exitGame();
      });
    });
  });
});
