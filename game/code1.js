gdjs.gameoverCode = {};
gdjs.gameoverCode.localVariables = [];
gdjs.gameoverCode.GDbackgroundObjects1= [];
gdjs.gameoverCode.GDbackgroundObjects2= [];
gdjs.gameoverCode.GDgameoverSpriteObjects1= [];
gdjs.gameoverCode.GDgameoverSpriteObjects2= [];
gdjs.gameoverCode.GDNewSpriteObjects1= [];
gdjs.gameoverCode.GDNewSpriteObjects2= [];


gdjs.gameoverCode.mapOfGDgdjs_9546gameoverCode_9546GDNewSpriteObjects1Objects = Hashtable.newFrom({"NewSprite": gdjs.gameoverCode.GDNewSpriteObjects1});
gdjs.gameoverCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("NewSprite"), gdjs.gameoverCode.GDNewSpriteObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.gameoverCode.mapOfGDgdjs_9546gameoverCode_9546GDNewSpriteObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "main", false);
}}

}


};

gdjs.gameoverCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.gameoverCode.GDbackgroundObjects1.length = 0;
gdjs.gameoverCode.GDbackgroundObjects2.length = 0;
gdjs.gameoverCode.GDgameoverSpriteObjects1.length = 0;
gdjs.gameoverCode.GDgameoverSpriteObjects2.length = 0;
gdjs.gameoverCode.GDNewSpriteObjects1.length = 0;
gdjs.gameoverCode.GDNewSpriteObjects2.length = 0;

gdjs.gameoverCode.eventsList0(runtimeScene);
gdjs.gameoverCode.GDbackgroundObjects1.length = 0;
gdjs.gameoverCode.GDbackgroundObjects2.length = 0;
gdjs.gameoverCode.GDgameoverSpriteObjects1.length = 0;
gdjs.gameoverCode.GDgameoverSpriteObjects2.length = 0;
gdjs.gameoverCode.GDNewSpriteObjects1.length = 0;
gdjs.gameoverCode.GDNewSpriteObjects2.length = 0;


return;

}

gdjs['gameoverCode'] = gdjs.gameoverCode;
