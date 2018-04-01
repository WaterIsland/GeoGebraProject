////////////////////////////////
////////////////////////////////
// Global Javascript
////////////////////////////////
////////////////////////////////
DEFAULT_SETTING_LAYER = 0;
DEFAULT_VIEW_LAYER = 1;

DEFAULT_OFFSET_X = 50;
DEFAULT_OFFSET_Y = 45;


////////////////////////////////
// Init
////////////////////////////////
//
// Init Values on Framework Layer1
//
function InitValues_Framework_L1(){
    if(ggbApplet.exists("btnResetAll") != true) {
       ggbApplet.evalCommand('btnResetAll    = Button("Reset All")');
    }
    if(ggbApplet.exists("btnResetStatus") != true) {
        ggbApplet.evalCommand('btnResetStatus = Button("Reset Status")');
    }
    if(ggbApplet.exists("checkSettings") != true) {
        ggbApplet.evalCommand('checkSettings  = Checkbox("Settings")');
    }
    ggbApplet.setFixed("btnResetAll"   , false, true);
    ggbApplet.setFixed("btnResetStatus", false, true);
    ggbApplet.setFixed("checkSettings" , false, true);
    ggbApplet.setCoords("btnResetAll"   , 15, 15);
    ggbApplet.setCoords("btnResetStatus", 15, 15+DEFAULT_OFFSET_Y);
    ggbApplet.setCoords("checkSettings" , 15, 15+DEFAULT_OFFSET_Y*2);
    ggbApplet.setFixed("btnResetAll"   , true, true);
    ggbApplet.setFixed("btnResetStatus", true, true);
    ggbApplet.setFixed("checkSettings" , true, true);
    
    ggbApplet.evalCommand("checkSettings = true");
}


//
// Init Setting Layer on Framework Layer1
//
function InitSetLayer_Framework_L1() { 
    ggbApplet.setLayerVisible(DEFAULT_VIEW_LAYER, true);

    ggbApplet.setLayer("btnResetAll"   , DEFAULT_VIEW_LAYER);
    ggbApplet.setLayer("btnResetStatus", DEFAULT_VIEW_LAYER);
    ggbApplet.setLayer("checkSettings" , DEFAULT_VIEW_LAYER);
}


//
// Init Lisner on Framework Layer1
//
function InitListener_Framework_L1(){
    ggbApplet.registerObjectClickListener("btnResetAll",
                                          "OnclickButtonResetAll");
    ggbApplet.registerObjectClickListener("btnResetStatus",
                                          "OnclickButtonResetStatus");
    ggbApplet.registerObjectUpdateListener("checkSettings", 
                                           "OnupdateCheckboxSettings");
}


//
// Init Property on Framework Layer1
//
function InitObjectProperty_Framework_L1(){
    ggbApplet.setVisible("btnResetAll"   , true);
    ggbApplet.setVisible("btnResetStatus", true);
    ggbApplet.setVisible("checkSettings" , true);
}


//
// Init Values on Framework Layer0
//
function InitValues_Framework_L0(){
    // You must make textarea, slidbar and more.
}


//
// Init Setting Layer on Framework Layer0
//
function InitSetLayer_Framework_L0() {
    ggbApplet.setLayerVisible(DEFAULT_SETTING_LAYER, true);
//    ggbApplet.setLayer("g", DEFAULT_SETTING_LAYER);
//    ggbApplet.setLayer("textSettingA0", DEFAULT_SETTING_LAYER);
}


//
// Init Lisner on Framework Layer0
//
function InitListener_Framework_L0(){
}


//
// Init Property on Framework Layer0
//
function InitObjectProperty_Framework_L0(){
//    ggbApplet.setVisible("textSettingA0", true);
//    ggbApplet.setVisible("g", true);
}


////////////////////////////////
// EVENT
////////////////////////////////
//
// Onclick checkboxSettings
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



////////////////////////////////
// INIT(user)
////////////////////////////////
//
// Init Values on Layer1
//
function InitValues_L1(){
}

//
// Init Setting Layer on Layer1
//
function InitSetLayer_L1() { 
}
    
//
// Init Lisner on Layer1
//
function InitListener_L1(){
}

//
// Init Property on Layer1
//
function InitObjectProperty_L1(){
}


////////////////////////////////
// EVENT(user)
////////////////////////////////
//
// Onupdate something
//
//function OnupdateSomething() {
//}
//
// Onclick something
//
//function OnclickSomething() {
//}
    

////////////////////////////////
// gginit
////////////////////////////////
function ggbOnInit(){
    InitValues_Framework_L1();
    InitSetLayer_Framework_L1();
    InitListener_Framework_L1();
    InitObjectProperty_Framework_L1();

    InitValues_Framework_L0();
    InitSetLayer_Framework_L0();
    InitListener_Framework_L0();
    InitObjectProperty_Framework_L0();
    
    InitValues_L1();
    InitSetLayer_L1();
    InitListener_L1();
    InitObjectProperty_L1();
}

