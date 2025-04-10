gdjs.mainCode = {};
gdjs.mainCode.localVariables = [];
gdjs.mainCode.GDbackgroundObjects1= [];
gdjs.mainCode.GDbackgroundObjects2= [];
gdjs.mainCode.GDmeteor1Objects1= [];
gdjs.mainCode.GDmeteor1Objects2= [];
gdjs.mainCode.GDmeteor2Objects1= [];
gdjs.mainCode.GDmeteor2Objects2= [];
gdjs.mainCode.GDmeteor3Objects1= [];
gdjs.mainCode.GDmeteor3Objects2= [];
gdjs.mainCode.GDmeteor4Objects1= [];
gdjs.mainCode.GDmeteor4Objects2= [];
gdjs.mainCode.GDmeteor5Objects1= [];
gdjs.mainCode.GDmeteor5Objects2= [];
gdjs.mainCode.GDmeteor6Objects1= [];
gdjs.mainCode.GDmeteor6Objects2= [];
gdjs.mainCode.GDmeteor7Objects1= [];
gdjs.mainCode.GDmeteor7Objects2= [];
gdjs.mainCode.GDmeteor8Objects1= [];
gdjs.mainCode.GDmeteor8Objects2= [];
gdjs.mainCode.GDmeteor9Objects1= [];
gdjs.mainCode.GDmeteor9Objects2= [];
gdjs.mainCode.GDmeteor10Objects1= [];
gdjs.mainCode.GDmeteor10Objects2= [];
gdjs.mainCode.GDgirlObjects1= [];
gdjs.mainCode.GDgirlObjects2= [];
gdjs.mainCode.GDtimeTextObjects1= [];
gdjs.mainCode.GDtimeTextObjects2= [];


gdjs.mainCode.mapOfGDgdjs_9546mainCode_9546GDmeteor1Objects1ObjectsGDgdjs_9546mainCode_9546GDmeteor3Objects1ObjectsGDgdjs_9546mainCode_9546GDmeteor2Objects1ObjectsGDgdjs_9546mainCode_9546GDmeteor4Objects1ObjectsGDgdjs_9546mainCode_9546GDmeteor5Objects1ObjectsGDgdjs_9546mainCode_9546GDmeteor6Objects1ObjectsGDgdjs_9546mainCode_9546GDmeteor7Objects1ObjectsGDgdjs_9546mainCode_9546GDmeteor8Objects1ObjectsGDgdjs_9546mainCode_9546GDmeteor9Objects1ObjectsGDgdjs_9546mainCode_9546GDmeteor10Objects1Objects = Hashtable.newFrom({"meteor1": gdjs.mainCode.GDmeteor1Objects1, "meteor3": gdjs.mainCode.GDmeteor3Objects1, "meteor2": gdjs.mainCode.GDmeteor2Objects1, "meteor4": gdjs.mainCode.GDmeteor4Objects1, "meteor5": gdjs.mainCode.GDmeteor5Objects1, "meteor6": gdjs.mainCode.GDmeteor6Objects1, "meteor7": gdjs.mainCode.GDmeteor7Objects1, "meteor8": gdjs.mainCode.GDmeteor8Objects1, "meteor9": gdjs.mainCode.GDmeteor9Objects1, "meteor10": gdjs.mainCode.GDmeteor10Objects1});
gdjs.mainCode.mapOfGDgdjs_9546mainCode_9546GDgirlObjects1Objects = Hashtable.newFrom({"girl": gdjs.mainCode.GDgirlObjects1});
gdjs.mainCode.mapOfGDgdjs_9546mainCode_9546GDmeteor1Objects1ObjectsGDgdjs_9546mainCode_9546GDmeteor3Objects1ObjectsGDgdjs_9546mainCode_9546GDmeteor2Objects1ObjectsGDgdjs_9546mainCode_9546GDmeteor4Objects1ObjectsGDgdjs_9546mainCode_9546GDmeteor5Objects1ObjectsGDgdjs_9546mainCode_9546GDmeteor6Objects1ObjectsGDgdjs_9546mainCode_9546GDmeteor7Objects1ObjectsGDgdjs_9546mainCode_9546GDmeteor8Objects1ObjectsGDgdjs_9546mainCode_9546GDmeteor9Objects1ObjectsGDgdjs_9546mainCode_9546GDmeteor10Objects1Objects = Hashtable.newFrom({"meteor1": gdjs.mainCode.GDmeteor1Objects1, "meteor3": gdjs.mainCode.GDmeteor3Objects1, "meteor2": gdjs.mainCode.GDmeteor2Objects1, "meteor4": gdjs.mainCode.GDmeteor4Objects1, "meteor5": gdjs.mainCode.GDmeteor5Objects1, "meteor6": gdjs.mainCode.GDmeteor6Objects1, "meteor7": gdjs.mainCode.GDmeteor7Objects1, "meteor8": gdjs.mainCode.GDmeteor8Objects1, "meteor9": gdjs.mainCode.GDmeteor9Objects1, "meteor10": gdjs.mainCode.GDmeteor10Objects1});
gdjs.mainCode.asyncCallback10023660 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.mainCode.localVariables);
gdjs.mainCode.localVariables.length = 0;
}
gdjs.mainCode.eventsList0 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.mainCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(3), (runtimeScene) => (gdjs.mainCode.asyncCallback10023660(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.mainCode.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Right");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("girl"), gdjs.mainCode.GDgirlObjects1);
{for(var i = 0, len = gdjs.mainCode.GDgirlObjects1.length ;i < len;++i) {
    gdjs.mainCode.GDgirlObjects1[i].addForce(200, 0, 0);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("girl"), gdjs.mainCode.GDgirlObjects1);
{for(var i = 0, len = gdjs.mainCode.GDgirlObjects1.length ;i < len;++i) {
    gdjs.mainCode.GDgirlObjects1[i].addForce(-(200), 0, 0);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Up");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("girl"), gdjs.mainCode.GDgirlObjects1);
{for(var i = 0, len = gdjs.mainCode.GDgirlObjects1.length ;i < len;++i) {
    gdjs.mainCode.GDgirlObjects1[i].addForce(0, -(200), 0);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Down");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("girl"), gdjs.mainCode.GDgirlObjects1);
{for(var i = 0, len = gdjs.mainCode.GDgirlObjects1.length ;i < len;++i) {
    gdjs.mainCode.GDgirlObjects1[i].addForce(0, 200, 0);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__RepeatEveryXSeconds__Repeat.func(runtimeScene, "meteorsGenerateTimer", 1, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if (isConditionTrue_0) {
gdjs.mainCode.GDmeteor1Objects1.length = 0;

gdjs.mainCode.GDmeteor10Objects1.length = 0;

gdjs.mainCode.GDmeteor2Objects1.length = 0;

gdjs.mainCode.GDmeteor3Objects1.length = 0;

gdjs.mainCode.GDmeteor4Objects1.length = 0;

gdjs.mainCode.GDmeteor5Objects1.length = 0;

gdjs.mainCode.GDmeteor6Objects1.length = 0;

gdjs.mainCode.GDmeteor7Objects1.length = 0;

gdjs.mainCode.GDmeteor8Objects1.length = 0;

gdjs.mainCode.GDmeteor9Objects1.length = 0;

{gdjs.evtTools.object.createObjectFromGroupOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.mainCode.mapOfGDgdjs_9546mainCode_9546GDmeteor1Objects1ObjectsGDgdjs_9546mainCode_9546GDmeteor3Objects1ObjectsGDgdjs_9546mainCode_9546GDmeteor2Objects1ObjectsGDgdjs_9546mainCode_9546GDmeteor4Objects1ObjectsGDgdjs_9546mainCode_9546GDmeteor5Objects1ObjectsGDgdjs_9546mainCode_9546GDmeteor6Objects1ObjectsGDgdjs_9546mainCode_9546GDmeteor7Objects1ObjectsGDgdjs_9546mainCode_9546GDmeteor8Objects1ObjectsGDgdjs_9546mainCode_9546GDmeteor9Objects1ObjectsGDgdjs_9546mainCode_9546GDmeteor10Objects1Objects, "meteor" + gdjs.evtTools.common.toString(gdjs.randomInRange(1, 10)), gdjs.randomInRange(30, 610), -(100), "");
}{for(var i = 0, len = gdjs.mainCode.GDmeteor1Objects1.length ;i < len;++i) {
    gdjs.mainCode.GDmeteor1Objects1[i].getBehavior("Scale").setScale(gdjs.randomFloatInRange(0.1, 0.4));
}
for(var i = 0, len = gdjs.mainCode.GDmeteor3Objects1.length ;i < len;++i) {
    gdjs.mainCode.GDmeteor3Objects1[i].getBehavior("Scale").setScale(gdjs.randomFloatInRange(0.1, 0.4));
}
for(var i = 0, len = gdjs.mainCode.GDmeteor2Objects1.length ;i < len;++i) {
    gdjs.mainCode.GDmeteor2Objects1[i].getBehavior("Scale").setScale(gdjs.randomFloatInRange(0.1, 0.4));
}
for(var i = 0, len = gdjs.mainCode.GDmeteor4Objects1.length ;i < len;++i) {
    gdjs.mainCode.GDmeteor4Objects1[i].getBehavior("Scale").setScale(gdjs.randomFloatInRange(0.1, 0.4));
}
for(var i = 0, len = gdjs.mainCode.GDmeteor5Objects1.length ;i < len;++i) {
    gdjs.mainCode.GDmeteor5Objects1[i].getBehavior("Scale").setScale(gdjs.randomFloatInRange(0.1, 0.4));
}
for(var i = 0, len = gdjs.mainCode.GDmeteor6Objects1.length ;i < len;++i) {
    gdjs.mainCode.GDmeteor6Objects1[i].getBehavior("Scale").setScale(gdjs.randomFloatInRange(0.1, 0.4));
}
for(var i = 0, len = gdjs.mainCode.GDmeteor7Objects1.length ;i < len;++i) {
    gdjs.mainCode.GDmeteor7Objects1[i].getBehavior("Scale").setScale(gdjs.randomFloatInRange(0.1, 0.4));
}
for(var i = 0, len = gdjs.mainCode.GDmeteor8Objects1.length ;i < len;++i) {
    gdjs.mainCode.GDmeteor8Objects1[i].getBehavior("Scale").setScale(gdjs.randomFloatInRange(0.1, 0.4));
}
for(var i = 0, len = gdjs.mainCode.GDmeteor9Objects1.length ;i < len;++i) {
    gdjs.mainCode.GDmeteor9Objects1[i].getBehavior("Scale").setScale(gdjs.randomFloatInRange(0.1, 0.4));
}
for(var i = 0, len = gdjs.mainCode.GDmeteor10Objects1.length ;i < len;++i) {
    gdjs.mainCode.GDmeteor10Objects1[i].getBehavior("Scale").setScale(gdjs.randomFloatInRange(0.1, 0.4));
}
}{for(var i = 0, len = gdjs.mainCode.GDmeteor1Objects1.length ;i < len;++i) {
    gdjs.mainCode.GDmeteor1Objects1[i].setAngle(gdjs.randomInRange(0, 360));
}
for(var i = 0, len = gdjs.mainCode.GDmeteor3Objects1.length ;i < len;++i) {
    gdjs.mainCode.GDmeteor3Objects1[i].setAngle(gdjs.randomInRange(0, 360));
}
for(var i = 0, len = gdjs.mainCode.GDmeteor2Objects1.length ;i < len;++i) {
    gdjs.mainCode.GDmeteor2Objects1[i].setAngle(gdjs.randomInRange(0, 360));
}
for(var i = 0, len = gdjs.mainCode.GDmeteor4Objects1.length ;i < len;++i) {
    gdjs.mainCode.GDmeteor4Objects1[i].setAngle(gdjs.randomInRange(0, 360));
}
for(var i = 0, len = gdjs.mainCode.GDmeteor5Objects1.length ;i < len;++i) {
    gdjs.mainCode.GDmeteor5Objects1[i].setAngle(gdjs.randomInRange(0, 360));
}
for(var i = 0, len = gdjs.mainCode.GDmeteor6Objects1.length ;i < len;++i) {
    gdjs.mainCode.GDmeteor6Objects1[i].setAngle(gdjs.randomInRange(0, 360));
}
for(var i = 0, len = gdjs.mainCode.GDmeteor7Objects1.length ;i < len;++i) {
    gdjs.mainCode.GDmeteor7Objects1[i].setAngle(gdjs.randomInRange(0, 360));
}
for(var i = 0, len = gdjs.mainCode.GDmeteor8Objects1.length ;i < len;++i) {
    gdjs.mainCode.GDmeteor8Objects1[i].setAngle(gdjs.randomInRange(0, 360));
}
for(var i = 0, len = gdjs.mainCode.GDmeteor9Objects1.length ;i < len;++i) {
    gdjs.mainCode.GDmeteor9Objects1[i].setAngle(gdjs.randomInRange(0, 360));
}
for(var i = 0, len = gdjs.mainCode.GDmeteor10Objects1.length ;i < len;++i) {
    gdjs.mainCode.GDmeteor10Objects1[i].setAngle(gdjs.randomInRange(0, 360));
}
}{for(var i = 0, len = gdjs.mainCode.GDmeteor1Objects1.length ;i < len;++i) {
    gdjs.mainCode.GDmeteor1Objects1[i].addPolarForce(90, 100, 1);
}
for(var i = 0, len = gdjs.mainCode.GDmeteor3Objects1.length ;i < len;++i) {
    gdjs.mainCode.GDmeteor3Objects1[i].addPolarForce(90, 100, 1);
}
for(var i = 0, len = gdjs.mainCode.GDmeteor2Objects1.length ;i < len;++i) {
    gdjs.mainCode.GDmeteor2Objects1[i].addPolarForce(90, 100, 1);
}
for(var i = 0, len = gdjs.mainCode.GDmeteor4Objects1.length ;i < len;++i) {
    gdjs.mainCode.GDmeteor4Objects1[i].addPolarForce(90, 100, 1);
}
for(var i = 0, len = gdjs.mainCode.GDmeteor5Objects1.length ;i < len;++i) {
    gdjs.mainCode.GDmeteor5Objects1[i].addPolarForce(90, 100, 1);
}
for(var i = 0, len = gdjs.mainCode.GDmeteor6Objects1.length ;i < len;++i) {
    gdjs.mainCode.GDmeteor6Objects1[i].addPolarForce(90, 100, 1);
}
for(var i = 0, len = gdjs.mainCode.GDmeteor7Objects1.length ;i < len;++i) {
    gdjs.mainCode.GDmeteor7Objects1[i].addPolarForce(90, 100, 1);
}
for(var i = 0, len = gdjs.mainCode.GDmeteor8Objects1.length ;i < len;++i) {
    gdjs.mainCode.GDmeteor8Objects1[i].addPolarForce(90, 100, 1);
}
for(var i = 0, len = gdjs.mainCode.GDmeteor9Objects1.length ;i < len;++i) {
    gdjs.mainCode.GDmeteor9Objects1[i].addPolarForce(90, 100, 1);
}
for(var i = 0, len = gdjs.mainCode.GDmeteor10Objects1.length ;i < len;++i) {
    gdjs.mainCode.GDmeteor10Objects1[i].addPolarForce(90, 100, 1);
}
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("meteor1"), gdjs.mainCode.GDmeteor1Objects1);
gdjs.copyArray(runtimeScene.getObjects("meteor10"), gdjs.mainCode.GDmeteor10Objects1);
gdjs.copyArray(runtimeScene.getObjects("meteor2"), gdjs.mainCode.GDmeteor2Objects1);
gdjs.copyArray(runtimeScene.getObjects("meteor3"), gdjs.mainCode.GDmeteor3Objects1);
gdjs.copyArray(runtimeScene.getObjects("meteor4"), gdjs.mainCode.GDmeteor4Objects1);
gdjs.copyArray(runtimeScene.getObjects("meteor5"), gdjs.mainCode.GDmeteor5Objects1);
gdjs.copyArray(runtimeScene.getObjects("meteor6"), gdjs.mainCode.GDmeteor6Objects1);
gdjs.copyArray(runtimeScene.getObjects("meteor7"), gdjs.mainCode.GDmeteor7Objects1);
gdjs.copyArray(runtimeScene.getObjects("meteor8"), gdjs.mainCode.GDmeteor8Objects1);
gdjs.copyArray(runtimeScene.getObjects("meteor9"), gdjs.mainCode.GDmeteor9Objects1);
{for(var i = 0, len = gdjs.mainCode.GDmeteor1Objects1.length ;i < len;++i) {
    gdjs.mainCode.GDmeteor1Objects1[i].rotate(90, runtimeScene);
}
for(var i = 0, len = gdjs.mainCode.GDmeteor3Objects1.length ;i < len;++i) {
    gdjs.mainCode.GDmeteor3Objects1[i].rotate(90, runtimeScene);
}
for(var i = 0, len = gdjs.mainCode.GDmeteor2Objects1.length ;i < len;++i) {
    gdjs.mainCode.GDmeteor2Objects1[i].rotate(90, runtimeScene);
}
for(var i = 0, len = gdjs.mainCode.GDmeteor4Objects1.length ;i < len;++i) {
    gdjs.mainCode.GDmeteor4Objects1[i].rotate(90, runtimeScene);
}
for(var i = 0, len = gdjs.mainCode.GDmeteor5Objects1.length ;i < len;++i) {
    gdjs.mainCode.GDmeteor5Objects1[i].rotate(90, runtimeScene);
}
for(var i = 0, len = gdjs.mainCode.GDmeteor6Objects1.length ;i < len;++i) {
    gdjs.mainCode.GDmeteor6Objects1[i].rotate(90, runtimeScene);
}
for(var i = 0, len = gdjs.mainCode.GDmeteor7Objects1.length ;i < len;++i) {
    gdjs.mainCode.GDmeteor7Objects1[i].rotate(90, runtimeScene);
}
for(var i = 0, len = gdjs.mainCode.GDmeteor8Objects1.length ;i < len;++i) {
    gdjs.mainCode.GDmeteor8Objects1[i].rotate(90, runtimeScene);
}
for(var i = 0, len = gdjs.mainCode.GDmeteor9Objects1.length ;i < len;++i) {
    gdjs.mainCode.GDmeteor9Objects1[i].rotate(90, runtimeScene);
}
for(var i = 0, len = gdjs.mainCode.GDmeteor10Objects1.length ;i < len;++i) {
    gdjs.mainCode.GDmeteor10Objects1[i].rotate(90, runtimeScene);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("girl"), gdjs.mainCode.GDgirlObjects1);
gdjs.copyArray(runtimeScene.getObjects("meteor1"), gdjs.mainCode.GDmeteor1Objects1);
gdjs.copyArray(runtimeScene.getObjects("meteor10"), gdjs.mainCode.GDmeteor10Objects1);
gdjs.copyArray(runtimeScene.getObjects("meteor2"), gdjs.mainCode.GDmeteor2Objects1);
gdjs.copyArray(runtimeScene.getObjects("meteor3"), gdjs.mainCode.GDmeteor3Objects1);
gdjs.copyArray(runtimeScene.getObjects("meteor4"), gdjs.mainCode.GDmeteor4Objects1);
gdjs.copyArray(runtimeScene.getObjects("meteor5"), gdjs.mainCode.GDmeteor5Objects1);
gdjs.copyArray(runtimeScene.getObjects("meteor6"), gdjs.mainCode.GDmeteor6Objects1);
gdjs.copyArray(runtimeScene.getObjects("meteor7"), gdjs.mainCode.GDmeteor7Objects1);
gdjs.copyArray(runtimeScene.getObjects("meteor8"), gdjs.mainCode.GDmeteor8Objects1);
gdjs.copyArray(runtimeScene.getObjects("meteor9"), gdjs.mainCode.GDmeteor9Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.mainCode.mapOfGDgdjs_9546mainCode_9546GDgirlObjects1Objects, gdjs.mainCode.mapOfGDgdjs_9546mainCode_9546GDmeteor1Objects1ObjectsGDgdjs_9546mainCode_9546GDmeteor3Objects1ObjectsGDgdjs_9546mainCode_9546GDmeteor2Objects1ObjectsGDgdjs_9546mainCode_9546GDmeteor4Objects1ObjectsGDgdjs_9546mainCode_9546GDmeteor5Objects1ObjectsGDgdjs_9546mainCode_9546GDmeteor6Objects1ObjectsGDgdjs_9546mainCode_9546GDmeteor7Objects1ObjectsGDgdjs_9546mainCode_9546GDmeteor8Objects1ObjectsGDgdjs_9546mainCode_9546GDmeteor9Objects1ObjectsGDgdjs_9546mainCode_9546GDmeteor10Objects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(10022228);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.mainCode.GDgirlObjects1 */
{for(var i = 0, len = gdjs.mainCode.GDgirlObjects1.length ;i < len;++i) {
    gdjs.mainCode.GDgirlObjects1[i].getBehavior("Animation").setAnimationName("explosion");
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "jg-032316-sfx-video-game-game-over-3.mp3", false, 30, 1);
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "gameover", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("girl"), gdjs.mainCode.GDgirlObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.mainCode.GDgirlObjects1.length;i<l;++i) {
    if ( gdjs.mainCode.GDgirlObjects1[i].getBehavior("Animation").hasAnimationEnded() ) {
        isConditionTrue_0 = true;
        gdjs.mainCode.GDgirlObjects1[k] = gdjs.mainCode.GDgirlObjects1[i];
        ++k;
    }
}
gdjs.mainCode.GDgirlObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.mainCode.GDgirlObjects1.length;i<l;++i) {
    if ( gdjs.mainCode.GDgirlObjects1[i].getBehavior("Animation").getAnimationName() == "explosion" ) {
        isConditionTrue_0 = true;
        gdjs.mainCode.GDgirlObjects1[k] = gdjs.mainCode.GDgirlObjects1[i];
        ++k;
    }
}
gdjs.mainCode.GDgirlObjects1.length = k;
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.mainCode.eventsList0(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("timeText"), gdjs.mainCode.GDtimeTextObjects1);
{for(var i = 0, len = gdjs.mainCode.GDtimeTextObjects1.length ;i < len;++i) {
    gdjs.mainCode.GDtimeTextObjects1[i].getBehavior("Text").setText(gdjs.evtsExt__TimeFormatter__SecondsToHHMMSS.func(runtimeScene, gdjs.evtTools.runtimeScene.getTimeFromStartInSeconds(runtimeScene), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)));
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playMusic(runtimeScene, "andrew-vice-ocean-racer.mp3", true, 5, 1);
}}

}


};

gdjs.mainCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.mainCode.GDbackgroundObjects1.length = 0;
gdjs.mainCode.GDbackgroundObjects2.length = 0;
gdjs.mainCode.GDmeteor1Objects1.length = 0;
gdjs.mainCode.GDmeteor1Objects2.length = 0;
gdjs.mainCode.GDmeteor2Objects1.length = 0;
gdjs.mainCode.GDmeteor2Objects2.length = 0;
gdjs.mainCode.GDmeteor3Objects1.length = 0;
gdjs.mainCode.GDmeteor3Objects2.length = 0;
gdjs.mainCode.GDmeteor4Objects1.length = 0;
gdjs.mainCode.GDmeteor4Objects2.length = 0;
gdjs.mainCode.GDmeteor5Objects1.length = 0;
gdjs.mainCode.GDmeteor5Objects2.length = 0;
gdjs.mainCode.GDmeteor6Objects1.length = 0;
gdjs.mainCode.GDmeteor6Objects2.length = 0;
gdjs.mainCode.GDmeteor7Objects1.length = 0;
gdjs.mainCode.GDmeteor7Objects2.length = 0;
gdjs.mainCode.GDmeteor8Objects1.length = 0;
gdjs.mainCode.GDmeteor8Objects2.length = 0;
gdjs.mainCode.GDmeteor9Objects1.length = 0;
gdjs.mainCode.GDmeteor9Objects2.length = 0;
gdjs.mainCode.GDmeteor10Objects1.length = 0;
gdjs.mainCode.GDmeteor10Objects2.length = 0;
gdjs.mainCode.GDgirlObjects1.length = 0;
gdjs.mainCode.GDgirlObjects2.length = 0;
gdjs.mainCode.GDtimeTextObjects1.length = 0;
gdjs.mainCode.GDtimeTextObjects2.length = 0;

gdjs.mainCode.eventsList1(runtimeScene);
gdjs.mainCode.GDbackgroundObjects1.length = 0;
gdjs.mainCode.GDbackgroundObjects2.length = 0;
gdjs.mainCode.GDmeteor1Objects1.length = 0;
gdjs.mainCode.GDmeteor1Objects2.length = 0;
gdjs.mainCode.GDmeteor2Objects1.length = 0;
gdjs.mainCode.GDmeteor2Objects2.length = 0;
gdjs.mainCode.GDmeteor3Objects1.length = 0;
gdjs.mainCode.GDmeteor3Objects2.length = 0;
gdjs.mainCode.GDmeteor4Objects1.length = 0;
gdjs.mainCode.GDmeteor4Objects2.length = 0;
gdjs.mainCode.GDmeteor5Objects1.length = 0;
gdjs.mainCode.GDmeteor5Objects2.length = 0;
gdjs.mainCode.GDmeteor6Objects1.length = 0;
gdjs.mainCode.GDmeteor6Objects2.length = 0;
gdjs.mainCode.GDmeteor7Objects1.length = 0;
gdjs.mainCode.GDmeteor7Objects2.length = 0;
gdjs.mainCode.GDmeteor8Objects1.length = 0;
gdjs.mainCode.GDmeteor8Objects2.length = 0;
gdjs.mainCode.GDmeteor9Objects1.length = 0;
gdjs.mainCode.GDmeteor9Objects2.length = 0;
gdjs.mainCode.GDmeteor10Objects1.length = 0;
gdjs.mainCode.GDmeteor10Objects2.length = 0;
gdjs.mainCode.GDgirlObjects1.length = 0;
gdjs.mainCode.GDgirlObjects2.length = 0;
gdjs.mainCode.GDtimeTextObjects1.length = 0;
gdjs.mainCode.GDtimeTextObjects2.length = 0;


return;

}

gdjs['mainCode'] = gdjs.mainCode;
