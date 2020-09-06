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
var keyC = createSprite(windowWidth-50,27,300,57);

var keyD = createSprite(windowWidth-50,54,300,114);
keyD.shapeColor="white";
var keyE = createSprite(windowWidth-50,135,300,57);

var keyF = createSprite(windowWidth-50,192,300,57);
keyF.shapeColor="white"
var keyG = createSprite(windowWidth-50,250,300,57);
var keyA = createSprite(windowWidth-50,305,300,57);
keyA.shapeColor="white"
var key1 = createSprite(windowWidth-50,360,300,57);
var key2=createSprite(windowWidth-50,415,300,57);
key2.shapeColor="white";
var key3=createSprite(windowWidth-50,470,300,57);
var key4=createSprite(windowWidth-50,525,300,57);
key4.shapeColor="white";
var key5=createSprite(windowWidth-50,580,300,57);
var key6=createSprite(windowWidth-50,635,300,57);
key6.shapeColor="white";
var keyB = createSprite(windowWidth-50,27,300,57);



function draw() {
  
 background("yellow");
  
  if (mousePressedOver(keyC)) {
playSound("piano_C_sharp.mp3");
    
}
if (mousePressedOver(keyD)) {
playSound("piano_D.mp3");
        
  }
if (mousePressedOver(keyE)) {
  playSound("piano_E.mp3");
          
    }
  if (mousePressedOver(keyF)) {
      playSound("piano_F_sharp.mp3");
            
}
if (mousePressedOver(keyG)) {
 playSound("piano_G.mp3");
                       
}
if (mousePressedOver(keyA)) {
     playSound("piano_A_sharp.mp3");
                               
  }
  if (mousePressedOver(key1)) {
    playSound("piano_C_sharp.mp3");
        
    }
    if (mousePressedOver(key2)) {
    playSound("piano_D.mp3");
            
      }
    if (mousePressedOver(key3)) {
      playSound("piano_E.mp3");
              
        }
      if (mousePressedOver(key4)) {
          playSound("piano_F_sharp.mp3");
                
    }
    if (mousePressedOver(key5)) {
     playSound("piano_G.mp3");
                           
    }
    if (mousePressedOver(key6)) {
         playSound("piano_A_sharp.mp3");
                                   
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
