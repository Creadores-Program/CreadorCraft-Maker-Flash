$.getScript("https://unpkg.com/@ruffle-rs/ruffle", function(){
  window.addEventListener("load", function(){
    let ruffle = window.RufflePlayer.newest();
    let player = ruffle.createPlayer();
    let container = document.getElementById("{elementID}");
    player.style.width = "100%";
    player.style.height = "100%";
    player.style.top = "0%";
    player.style.left = "0%";
    container.appendChild(player);
    GameProps.getFileGame().file("{FileSWF}").async("blob").then(function(GFlashBl){
      let GFlashUrl = URL.createObjectURL(GFlashBl);
      player.ruffle().load({
        url: GFlashUrl,
        openUrlMode: "confirm"
      }).catch(function(error){
        alert("Error Load Game!"+error);
        GameProps.exitGame();
      });
    }).catch(function(error){
      alert("Error Load Game!"+error);
      GameProps.exitGame();
    });
  });
});
