$.getScript("https://cdn.jsdelivr.net/npm/@ruffle-rs/ruffle@0.1.0-nightly.2024.12.14/ruffle.min.js", function(){
  window.addEventListener("load", function(){
    let ruffle = window.RufflePlayer.newest();
    let player = ruffle.createPlayer();
    let container = document.getElementById("{elementID}");
    player.style.top = "0%";
    player.style.left = "0%";
    player.style.width = "100%";
    player.style.height = "100%";
    player.style.margin = "0 auto";
    player.style.position = "fixed";
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
      GameProps.addEventListener("pauseEvent", function(){
        player.suspend();
      });
      GameProps.addEventListener("resumeEvent", function(){
        player.resume();
      });
    }).catch(function(error){
      alert("Error Load Game!"+error);
      GameProps.exitGame();
    });
  });
});
