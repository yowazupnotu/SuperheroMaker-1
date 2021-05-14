canvas = new fabric.Canvas("canvas");

blockwidth = 30;
blockheight = 30;
playerx = 50;
playery = 50;
blockob = "";
playerob = "";

function playerupdate() {
    console.log("SUPERHERO");
    fabric.Image.fromURL("blackpanther.png", function (Img) {
        playerob = Img;
        playerob.scaleToWidth(150);
        playerob.scaleToHeight(140);
        playerob.set({
            top: playery,
            left: playerx
        });
        canvas.add(playerob);
    });
}

function newblocks(getimage) {
    fabric.Image.fromURL(getimage, function (Img) {
        blockob = Img;
        blockob.scaleToWidth(blockwidth);
        blockob.scaleToHeight(blockheight);
        blockob.set({
            top: playery,
            left: playerx
        });
        canvas.add(playerob);
    });
}