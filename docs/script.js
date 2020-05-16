document.getElementById("version").innerText = `Pixi.js Version ${PIXI.VERSION}`;


const app = new PIXI.Application({
  width: 800,
  height: 600,
  transparent: false
});
document.getElementById('canvas_wrapper').appendChild(app.view);

const container = new PIXI.Container();
app.stage.addChild(container);

const img1 = document.getElementById("img1");
const sprite = new PIXI.Sprite(PIXI.Texture.from(img1));
sprite.anchor.set(0);
sprite.x = 0;
sprite.y = 0;
container.addChild(sprite);

const maskSprites = (() => {
  maskMap = {};
  ['mask1', 'mask2', 'mask3', 'mask4', 'mask5'].forEach((id) => {
    const maskImg = document.getElementById(id);
    const sprite = new PIXI.Sprite(PIXI.Texture.from(maskImg));
    maskMap[id] = sprite;
  });
  return maskMap;
})();
container.mask = maskSprites['mask1'];

$('.mask-btn').on('click', (e) => {
  const $btn = $(e.currentTarget);
  const maskId = $btn.data('mask');
  container.mask = maskSprites[maskId];
});
