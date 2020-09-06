var p5Inst = new p5(null, 'sketch');

 

window.preload = function () {

  
  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":[],"propsByKey":{}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });
  function setup() {
    createCanvas(windowWidth,windowHeight);
  }
  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

// Create variables for all the KEYS. For example
var keyC = createSprite(windowWidth-350,27,300,57);

var keyD = createSprite(windowWidth-350,54,300,114);
keyD.shapeColor="white";
var keyE = createSprite(windowWidth-350,135,300,57);

var keyF = createSprite(windowWidth-350,192,300,57);
keyF.shapeColor="white"
var keyG = createSprite(windowWidth-350,250,300,57);
var keyA = createSprite(windowWidth-350,305,300,57);
keyA.shapeColor="white"
var key1 = createSprite(windowWidth-350,360,300,57);
var key2=createSprite(windowWidth-350,415,300,57);
key2.shapeColor="white";
var key3=createSprite(windowWidth-350,470,300,57);
var key4=createSprite(windowWidth-350,525,300,57);
key4.shapeColor="white";
var key5=createSprite(windowWidth-350,580,300,57);
var key6=createSprite(windowWidth-350,635,300,57);
key6.shapeColor="white";
var keyB = createSprite(windowWidth-350,27,300,57);



function draw() {
  
 background("yellow");
  
  if (mousePressedOver(keyC)) {
playSound("assets/piano_C_sharp.mp3");
    
}
if (mousePressedOver(keyD)) {
playSound("assets/piano_D.mp3");
        
  }
if (mousePressedOver(keyE)) {
  playSound("assets/piano_E.mp3");
          
    }
  if (mousePressedOver(keyF)) {
      playSound("assets/piano_F_sharp.mp3");
            
}
if (mousePressedOver(keyG)) {
 playSound("assets/piano_G.mp3");
                       
}
if (mousePressedOver(keyA)) {
     playSound("assets/piano_A_sharp.mp3");
                               
  }
  if (mousePressedOver(key1)) {
    playSound("assets/piano_C_sharp.mp3");
        
    }
    if (mousePressedOver(key2)) {
    playSound("assets/piano_D.mp3");
            
      }
    if (mousePressedOver(key3)) {
      playSound("assets/piano_E.mp3");
              
        }
      if (mousePressedOver(key4)) {
          playSound("assets/piano_F_sharp.mp3");
                
    }
    if (mousePressedOver(key5)) {
     playSound("assets/piano_G.mp3");
                           
    }
    if (mousePressedOver(key6)) {
         playSound("assets/piano_A_sharp.mp3");
                                   
      }                               
  
  
  drawSprites();
  
}

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
