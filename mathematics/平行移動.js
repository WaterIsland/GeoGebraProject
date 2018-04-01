////////////////////////////////
////////////////////////////////
// Global Javascript
////////////////////////////////
////////////////////////////////
DEFAULT_HINT_LAYER    = 0;
DEFAULT_SETTING_LAYER = 1;
DEFAULT_VIEW_LAYER    = 2;

DEFAULT_OFFSET_X = 50;
DEFAULT_OFFSET_Y = 45;


DEFAULT_VIEW1_WIDTH_MIN  = -2;
DEFAULT_VIEW1_WIDTH_MAX  = 9.5;
DEFAULT_VIEW1_HEIGHT_MIN = 0.5;
DEFAULT_VIEW1_HEIGHT_MAX = 7.5;


////////////////////////////////
// Init
////////////////////////////////
//
// Init Values on Framework Layer2
//
function InitValues_Framework_L2(){
    if(ggbApplet.exists("btnResetAll") != true) {
       ggbApplet.evalCommand('btnResetAll    = Button("Reset All")');
    }
    if(ggbApplet.exists("btnResetStatus") != true) {
        ggbApplet.evalCommand('btnResetStatus = Button("Reset Status")');
    }
    if(ggbApplet.exists("checkSettings") != true) {
        ggbApplet.evalCommand('checkSettings  = Checkbox("Settings")');
    }
    if(ggbApplet.exists("checkHints") != true) {
        ggbApplet.evalCommand('checkHints  = Checkbox("Hints")');
    }
    ggbApplet.setFixed("btnResetAll"   , false, true);
    ggbApplet.setFixed("btnResetStatus", false, true);
    ggbApplet.setFixed("checkSettings" , false, true);
    ggbApplet.setFixed("checkHints"    , false, true);
    ggbApplet.setCoords("btnResetAll"   , 15, 15);
    ggbApplet.setCoords("btnResetStatus", 15, 15+DEFAULT_OFFSET_Y);
    ggbApplet.setCoords("checkSettings" , 15, 15+DEFAULT_OFFSET_Y*2);
    ggbApplet.setCoords("checkHints"    , 15, 15+DEFAULT_OFFSET_Y*3);
    ggbApplet.setFixed("btnResetAll"   , true, true);
    ggbApplet.setFixed("btnResetStatus", true, true);
    ggbApplet.setFixed("checkSettings" , true, true);
    ggbApplet.setFixed("checkHints" , true, true);
    
    ggbApplet.evalCommand("checkSettings = true");
    ggbApplet.evalCommand("checkHints    = true");
}


//
// Init Setting Layer on Framework Layer2
//
function InitSetLayer_Framework_L2() { 
    ggbApplet.setLayerVisible(DEFAULT_VIEW_LAYER, true);

    ggbApplet.setLayer("btnResetAll"   , DEFAULT_VIEW_LAYER);
    ggbApplet.setLayer("btnResetStatus", DEFAULT_VIEW_LAYER);
    ggbApplet.setLayer("checkSettings" , DEFAULT_VIEW_LAYER);
    ggbApplet.setLayer("checkHints"    , DEFAULT_VIEW_LAYER);
}


//
// Init Lisner on Framework Layer2
//
function InitListener_Framework_L2(){
    ggbApplet.registerObjectClickListener("btnResetAll",
                                          "OnclickButtonResetAll");
    ggbApplet.registerObjectClickListener("btnResetStatus",
                                          "OnclickButtonResetStatus");
    ggbApplet.registerObjectUpdateListener("checkSettings", 
                                           "OnupdateCheckboxSettings");
    ggbApplet.registerObjectUpdateListener("checkHints", 
                                           "OnupdateCheckboxHints");
}


//
// Init Property on Framework Layer2
//
function InitObjectProperty_Framework_L2(){
    ggbApplet.setCoordSystem(DEFAULT_VIEW1_WIDTH_MIN,
                             DEFAULT_VIEW1_WIDTH_MAX,
                             DEFAULT_VIEW1_HEIGHT_MIN, 
                             DEFAULT_VIEW1_HEIGHT_MAX);
    
    ggbApplet.setVisible("btnResetAll"   , true);
    ggbApplet.setVisible("btnResetStatus", true);
    ggbApplet.setVisible("checkSettings" , true);
    ggbApplet.setVisible("checkHints"    , true);
}


//
// Init Values on Framework Layer1
//
function InitValues_Framework_L1(){
    // You must make textarea, slidbar and more.
}


//
// Init Setting Layer on Framework Layer1
//
function InitSetLayer_Framework_L1() {
    ggbApplet.setLayerVisible(DEFAULT_SETTING_LAYER, true);
//    ggbApplet.setLayer("g", DEFAULT_SETTING_LAYER);
//    ggbApplet.setLayer("textSettingA0", DEFAULT_SETTING_LAYER);
}


//
// Init Lisner on Framework Layer1
//
function InitListener_Framework_L1(){
}


//
// Init Property on Framework Layer1
//
function InitObjectProperty_Framework_L1(){
//    ggbApplet.setVisible("textSettingA0", true);
//    ggbApplet.setVisible("g", true);
}


//
// Init Values on Framework Layer0
//
function InitValues_Framework_L0(){
    // You must make some text.
    
}


//
// Init Setting Layer on Framework Layer0
//
function InitSetLayer_Framework_L0(){
    // You must make some text.
}


//
// Init Lisner on Framework Layer0
//
function InitListener_Framework_L0(){
    // You must make some text.
}


//
// Init Property on Framework Layer0
//
function InitObjectProperty_Framework_L0(){
    // You must make some text.
}


////////////////////////////////
// EVENT
////////////////////////////////
//
// Onupdate checkboxSettings
//
function OnupdateCheckboxSettings() {
    bool = ggbApplet.getValue("checkSettings");
    if(bool == true) {
       ggbApplet.setLayerVisible(DEFAULT_SETTING_LAYER, true);
    } else {
       ggbApplet.setLayerVisible(DEFAULT_SETTING_LAYER, false);
    }
}


//
// Onupdate checkboxHints
//
function OnupdateCheckboxHints() {
    bool = ggbApplet.getValue("checkHints");
    if(bool == true) {
       ggbApplet.setLayerVisible(DEFAULT_HINT_LAYER, true);
    } else {
       ggbApplet.setLayerVisible(DEFAULT_HINT_LAYER, false);
    }
}


//
// Onclick btnResetStatus
//
function OnclickButtonResetStatus() {
}


//
// Onclick btnResetAll
//
function OnclickButtonResetAll() {
    // Set View1
    ggbApplet.evalCommand('SetActiveView("G")');
    ggbApplet.refreshViews();

    InitValues_L2();
    InitObjectProperty_L2();    
    // Set View2
//    ggbApplet.evalCommand('SetActiveView("D")');
//    ggbApplet.refreshViews();
}


////////////////////////////////
// INIT(user)
////////////////////////////////
ANIMATION_MIN = 0;
ANIMATION_MAX = 10;
ANIMATION_INTERVAL = 0.1;
ANIMATION_LENGTH = ANIMATION_MAX-ANIMATION_MIN;
ANIMATION_SPEED = 3;

var posA = [0.0, 3.5];
var posB = [1.5, 2.0];
var posC = [1.5, 4.0];
var posD = [2.5, 1.5];
var posE = [4.5, 2.5];
var vector = [2, 1];
//
// Init Values on Layer2
//
function InitValues_L2(){
    ggbApplet.setCoords("A", 0.0, 3.5);
    ggbApplet.setCoords("B", 1.5, 2.0);
    ggbApplet.setCoords("C", 1.5, 4.0);
    ggbApplet.setCoords("D", 2.5, 1.5);
    ggbApplet.setCoords("E", 4.5, 2.5);
    ggbApplet.evalCommand("u = Vector(D, E)");
    ggbApplet.evalCommand("t1 = Polygon(A, B, C)");

    posA = [0.0, 3.5];
    posB = [1.5, 2.0];
    posC = [1.5, 4.0];
    posD = [2.5, 1.5];
    posE = [4.5, 2.5];
    vector = [2, 1];
    
    ggbApplet.stopAnimation();
    if(ggbApplet.exists("sldAnimation") != true) {
        ggbApplet.evalCommand('sldAnimation = Slider('+ANIMATION_MIN+','+ANIMATION_MAX+','+ ANIMATION_INTERVAL+','+ANIMATION_SPEED+', 100, false, true, true, false)');
    }
    ggbApplet.evalCommand('sldAnimation = 0');
}
function InitValues_L2_Other(){
}


//
// Init Setting Layer on Layer2
//
function InitSetLayer_L2() { 
    ggbApplet.setLayerVisible(DEFAULT_VIEW_LAYER, true);

    ggbApplet.setLayer("A", DEFAULT_VIEW_LAYER);
    ggbApplet.setLayer("B", DEFAULT_VIEW_LAYER);
    ggbApplet.setLayer("C", DEFAULT_VIEW_LAYER);
    ggbApplet.setLayer("D", DEFAULT_VIEW_LAYER);
    ggbApplet.setLayer("E", DEFAULT_VIEW_LAYER);
    ggbApplet.setLayer("u", DEFAULT_VIEW_LAYER);
    ggbApplet.setLayer("t1", DEFAULT_VIEW_LAYER);

    ggbApplet.setLayer("sldAnimation", DEFAULT_VIEW_LAYER);
}
    

//
// Init Lisner on Layer2
//
function InitListener_L2(){
    ggbApplet.registerObjectClickListener("btnMoveParallelDisplacement",
                                          "OnclickBtnMoveParallelDisplacement");
    ggbApplet.registerObjectUpdateListener("sldAnimation",
                                           "OnupdateSliderAnimation");
}


//
// Init Property on Layer2
//
function InitObjectProperty_L2(){
    ggbApplet.setVisible("A", true);
    ggbApplet.setVisible("B", true);
    ggbApplet.setVisible("C", true);
    ggbApplet.setVisible("D", true);
    ggbApplet.setVisible("E", true);
    ggbApplet.setVisible("u", true);
    ggbApplet.setVisible("t1", true);
    ggbApplet.setVisible("sldAnimation", false);
    
    ggbApplet.setLabelVisible("A", true);
    ggbApplet.setLabelVisible("B", true);
    ggbApplet.setLabelVisible("C", true);
    ggbApplet.setLabelVisible("D", true);
    ggbApplet.setLabelVisible("E", true);
    ggbApplet.setLabelVisible("u", false);
    ggbApplet.setLabelVisible("t1", false);

    ggbApplet.setLayer("sldAnimation", true);
}


////////////////////////////////
// EVENT(user)
////////////////////////////////
//
// Onclick btnMoveParallelDisplacement
//
function OnclickBtnMoveParallelDisplacement(){
    posA = [ggbApplet.getXcoord("A"), ggbApplet.getYcoord("A")];
    posB = [ggbApplet.getXcoord("B"), ggbApplet.getYcoord("B")];
    posC = [ggbApplet.getXcoord("C"), ggbApplet.getYcoord("C")];
    posD = [ggbApplet.getXcoord("D"), ggbApplet.getYcoord("D")];
    posE = [ggbApplet.getXcoord("E"), ggbApplet.getYcoord("E")];
    vector = [posE[0]-posD[0], posE[1]-posD[1]];

    ggbApplet.setValue("sldAnimation", 0);
    ggbApplet.setAnimating("sldAnimation", true);
    ggbApplet.setAnimationSpeed("sldAnimation", ANIMATION_SPEED);
    ggbApplet.startAnimation();
}


//
// Onupdate sldAnimation
//
function OnupdateSliderAnimation(){
    step = ggbApplet.getValue("sldAnimation");
    dt = step/ANIMATION_LENGTH;
    
    dx_vec = vector[0]*dt;
    dy_vec = vector[1]*dt;

    ggbApplet.setCoords("A", posA[0]+dx_vec, posA[1]+dy_vec);
    ggbApplet.setCoords("B", posB[0]+dx_vec, posB[1]+dy_vec);
    ggbApplet.setCoords("C", posC[0]+dx_vec, posC[1]+dy_vec);
}


////////////////////////////////
// gginit
////////////////////////////////
function ggbOnInit(){
    InitValues_Framework_L2();
    InitSetLayer_Framework_L2();
    InitListener_Framework_L2();
    InitObjectProperty_Framework_L2();

    InitValues_Framework_L1();
    InitSetLayer_Framework_L1();
    InitListener_Framework_L1();
    InitObjectProperty_Framework_L1();
    
    InitValues_L2();
    InitValues_L2_Other();
    InitSetLayer_L2();
    InitListener_L2();
    InitObjectProperty_L2();
}

