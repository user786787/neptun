gdjs.menuCode = {};
gdjs.menuCode.localVariables = [];
gdjs.menuCode.GDbackgroundObjects1= [];
gdjs.menuCode.GDbackgroundObjects2= [];
gdjs.menuCode.GDNewSpriteObjects1= [];
gdjs.menuCode.GDNewSpriteObjects2= [];
gdjs.menuCode.GDNewSprite3Objects1= [];
gdjs.menuCode.GDNewSprite3Objects2= [];
gdjs.menuCode.GDNewSprite2Objects1= [];
gdjs.menuCode.GDNewSprite2Objects2= [];


gdjs.menuCode.mapOfGDgdjs_9546menuCode_9546GDNewSprite2Objects1Objects = Hashtable.newFrom({"NewSprite2": gdjs.menuCode.GDNewSprite2Objects1});
gdjs.menuCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("NewSprite2"), gdjs.menuCode.GDNewSprite2Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.menuCode.mapOfGDgdjs_9546menuCode_9546GDNewSprite2Objects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "main", false);
}}

}


};

gdjs.menuCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.menuCode.GDbackgroundObjects1.length = 0;
gdjs.menuCode.GDbackgroundObjects2.length = 0;
gdjs.menuCode.GDNewSpriteObjects1.length = 0;
gdjs.menuCode.GDNewSpriteObjects2.length = 0;
gdjs.menuCode.GDNewSprite3Objects1.length = 0;
gdjs.menuCode.GDNewSprite3Objects2.length = 0;
gdjs.menuCode.GDNewSprite2Objects1.length = 0;
gdjs.menuCode.GDNewSprite2Objects2.length = 0;

gdjs.menuCode.eventsList0(runtimeScene);
gdjs.menuCode.GDbackgroundObjects1.length = 0;
gdjs.menuCode.GDbackgroundObjects2.length = 0;
gdjs.menuCode.GDNewSpriteObjects1.length = 0;
gdjs.menuCode.GDNewSpriteObjects2.length = 0;
gdjs.menuCode.GDNewSprite3Objects1.length = 0;
gdjs.menuCode.GDNewSprite3Objects2.length = 0;
gdjs.menuCode.GDNewSprite2Objects1.length = 0;
gdjs.menuCode.GDNewSprite2Objects2.length = 0;


return;

}

gdjs['menuCode'] = gdjs.menuCode;
