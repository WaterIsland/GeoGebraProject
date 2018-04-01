////////////////////////////////
////////////////////////////////
// Global Javascript
////////////////////////////////
////////////////////////////////
DEFAULT_HINT_LAYER = 0;
DEFAULT_SETTING_LAYER = 1;
DEFAULT_VIEW_LAYER = 2;

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
    // Set View2
//    ggbApplet.evalCommand('SetActiveView("D")');
//    ggbApplet.refreshViews();
}