function createGraph(setting) {

  var c = document.getElementById("myCanvas");
  var ctx = c.getContext("2d");
  var width = ctx.canvas.getAttribute('width');
  var height = ctx.canvas.getAttribute('height');

  function drawBackgroundColors() {
    var color1 = '#FFDDDD';
    var color2 = '#DDFFDD';
    var color3 = '#DDDDFF';
    var backgroundHeight = height / 2;

    var start1 = width / 100 * 80;
    var start2 = width / 100 * 60;
    var start3 = width / 100 * 20;

    ctx.fillStyle = color1;
    ctx.fillRect(width - start1, 0, start1, backgroundHeight);
    ctx.fillStyle = color2;
    ctx.fillRect(width - start2, 0, start2, backgroundHeight);
    ctx.fillStyle = color3;
    ctx.fillRect(width - start3, 0, start3, backgroundHeight);
  }

  function drawScale() {
    var start1 = width / 100 * 80;
    var start2 = width / 100 * 60;
    var start3 = width / 100 * 20;
    var backgroundHeight = height / 2;

    ctx.beginPath();
    ctx.moveTo(width - start1, backgroundHeight);
    ctx.lineTo(width - start1, backgroundHeight + (backgroundHeight / 3));
    ctx.strokeStyle = "red";
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(width - start2, backgroundHeight);
    ctx.lineTo(width - start2, backgroundHeight + (backgroundHeight / 3));
    ctx.strokeStyle = "red";
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(width - start3, backgroundHeight);
    ctx.lineTo(width - start3, backgroundHeight + (backgroundHeight / 3));
    ctx.strokeStyle = "red";
    ctx.stroke();

  }

  function drawSymboleMarkers() {
    // body...
  }

  function drawBar() {
    var start = width / 100 * 80;
    var backgroundHeight = height / 4;

    ctx.fillStyle = '#000000';
    ctx.fillRect(width - start, backgroundHeight - backgroundHeight / 2, start - (start / 100 * 20), backgroundHeight);
  }

  function drawMainText() {
    var a = ctx.fillText("Hello World!",10,50);
    debugger;
  }

  function drawSubText() {
    // body...
  }

  drawBackgroundColors();
  drawScale();
  drawSymboleMarkers();
  drawBar();
  drawMainText();
  drawSubText();
}



createGraph({
  values: {
    min: 3,
    max: 104
  }
});
