////////////////////////////////
////////////////////////////////
// Global Javascript
////////////////////////////////
////////////////////////////////
//
// Variables
//
DEFAULT_SETTING_LAYER = 1;

DEFAULT_HEIGHT   = 3; // cm
DEFAULT_WIDTH    = 4; // cm
DEFAULT_SECOND   = 0; // sec
DEFAULT_VEROCITY = 1; // cm/sec
DEFAULT_CURVE_HEIGHT_X = -0.75;
DEFAULT_CURVE_HEIGHT_Y = DEFAULT_HEIGHT/2;
DEFAULT_CURVE_WIDTH_X  = DEFAULT_WIDTH/2;
DEFAULT_CURVE_WIDTH_Y  = -0.75;

DEFAULT_TIME_OFFSET     = 0.5; // sec
DEFAULT_VELOCITY_OFFSET = 0.5; // cm/sec
DEFAULT_LENGTH_OFFSET   = 1;   // cm

DEFAULT_LENGTH_MIN   = 1;
DEFAULT_VELOCITY_MIN = 0.5;

DEFAULT_VIEW1_HEIGHT_MIN = -1.5;
DEFAULT_VIEW1_HEIGHT_MAX = 6;
DEFAULT_VIEW1_WIDTH_MIN = -1.5;
DEFAULT_VIEW1_WIDTH_MAX = 6;

DEFAULT_VIEW2_WIDTH_MIN = -1;
DEFAULT_VIEW2_WIDTH_MAX = 15;
DEFAULT_VIEW2_HEIGHT_MIN = -1;
DEFAULT_VIEW2_HEIGHT_MAX = 15;

DEFAULT_VIEW1_CENTER_X = 2;
DEFAULT_VIEW1_CENTER_Y = 2;

DEFAULT_VIEW2_CENTER_X = 6;
DEFAULT_VIEW2_CENTER_Y = 6;

DEFAULT_OFFSET_X = 50;
DEFAULT_OFFSET_Y = 45;

//
// Init Values on View1
//
function InitValuesView1(){
    // Init Height & Width
    ggbApplet.evalCommand("varHeight="+DEFAULT_HEIGHT);
    ggbApplet.evalCommand("varWidth=" +DEFAULT_WIDTH );
    // Init Points
    ggbApplet.setCoords("pA"     , 0            , DEFAULT_HEIGHT);
    ggbApplet.setCoords("pB"     , 0            , 0             );
    ggbApplet.setCoords("pC"     , DEFAULT_WIDTH, 0             );
    ggbApplet.setCoords("pD"     , DEFAULT_WIDTH, DEFAULT_HEIGHT);
    ggbApplet.setCoords("pP"     , 0            , DEFAULT_HEIGHT);
    ggbApplet.setCoords("pCH"    , 
                        DEFAULT_CURVE_HEIGHT_X, 
                        DEFAULT_CURVE_HEIGHT_Y);
    ggbApplet.setCoords("pCW"    , 
                        DEFAULT_CURVE_WIDTH_X, 
                        DEFAULT_CURVE_WIDTH_Y);
    // Init Second
    ggbApplet.evalCommand("varSecond="+DEFAULT_SECOND);
    // Init Velocity
    ggbApplet.evalCommand("varVelocity="+DEFAULT_VEROCITY);
    // Init Rectangle
    ggbApplet.evalCommand("rectA = Polygon(pA, pB, pC, pD)");
    // Init lines
    ggbApplet.evalCommand("lA = Segment(pA, pB, rectA)");
    ggbApplet.evalCommand("lB = Segment(pB, pC, rectA)");
    ggbApplet.evalCommand("lC = Segment(pC, pD, rectA)");
    ggbApplet.evalCommand("lD = Segment(pD, pA, rectA)");

    ggbApplet.evalCommand("checkSettings = true");
    
    ggbApplet.setCoords("btnPrevSec",275                   , 15);
    ggbApplet.setCoords("btnNextSec",275+DEFAULT_OFFSET_X  , 15);
    ggbApplet.setCoords("text1"     ,275+DEFAULT_OFFSET_X*2, 15);
    
    ggbApplet.setCoords("btnResetAll" , 15, 15);
    ggbApplet.setCoords("btnResetTime", 15, 15+DEFAULT_OFFSET_Y);
    
    ggbApplet.setCoords("textSurface", 275, 15+DEFAULT_OFFSET_Y);
}


//
// Init Lisner on View1
//
function InitListenerView1(){
    ggbApplet.registerObjectClickListener("btnPrevSec", 
                                          "OnclickButtonPreviousSecond");
    ggbApplet.registerObjectClickListener("btnNextSec", 
                                          "OnclickButtonNextSecond");

    ggbApplet.registerObjectClickListener("btnResetAll",
                                          "OnclickButtonResetAll");
    ggbApplet.registerObjectClickListener("btnResetTime",
                                          "OnclickButtonResetTime");

    ggbApplet.registerObjectUpdateListener("checkSettings", 
                                           "OnclickCheckboxSettingsA");
}


//
// Init Property on View1
//
function InitObjectPropertyView1(){
    ggbApplet.setGridVisible(1, false);
    ggbApplet.setAxesVisible(1, false, false, false);

    ggbApplet.setCoordSystem(DEFAULT_VIEW1_WIDTH_MIN,
                             DEFAULT_VIEW1_WIDTH_MAX,
                             DEFAULT_VIEW1_HEIGHT_MIN, 
                             DEFAULT_VIEW1_HEIGHT_MAX);
    ggbApplet.evalCommand("CenterView(("+DEFAULT_VIEW1_CENTER_X+","+DEFAULT_VIEW1_CENTER_Y+"))");

    ggbApplet.setVisible("checkSettings", true);
    
    ggbApplet.setColor("pP"   , 204, 0, 0);
    ggbApplet.setColor("text7", 204, 0, 0); // text color added pP

    ggbApplet.setVisible("text1", true);
//    ggbApplet.setVisible("text2", true);
    ggbApplet.setVisible("text3", true);
    ggbApplet.setVisible("text4", true);
    ggbApplet.setVisible("text5", true);
    ggbApplet.setVisible("text6", true);
    ggbApplet.setVisible("text7", true);
    ggbApplet.setVisible("text8", true);
    ggbApplet.setVisible("text9", true);
    ggbApplet.setVisible("textSurface", true);

    ggbApplet.setVisible("btnNextSec", true);
    ggbApplet.setVisible("btnPrevSec", true);
    
    ggbApplet.setVisible("triangleA", true);
    
    ggbApplet.setVisible("varHeight", false);
    ggbApplet.setVisible("varSecond", false);
    ggbApplet.setVisible("varVelocity", false);
    ggbApplet.setVisible("varWidth", false);
    
    ggbApplet.setVisible("pA", false);
    ggbApplet.setVisible("pB", false);
    ggbApplet.setVisible("pC", false);
    ggbApplet.setVisible("pD", false);
    ggbApplet.setVisible("pP", true);
    ggbApplet.setLabelVisible("pP", false);
    
    ggbApplet.setVisible("lA", true);
    ggbApplet.setVisible("lB", true);
    ggbApplet.setVisible("lC", true);
    ggbApplet.setVisible("lD", true);
    ggbApplet.setVisible("lTriangleA", true);
    ggbApplet.setVisible("lTriangleB", true);
    ggbApplet.setVisible("lTriangleC", true);
    ggbApplet.setLabelVisible("lA", false);
    ggbApplet.setLabelVisible("lB", false);
    ggbApplet.setLabelVisible("lC", false);
    ggbApplet.setLabelVisible("lD", false);
    ggbApplet.setLabelVisible("lTriangleA", false);
    ggbApplet.setLabelVisible("lTriangleB", false);
    ggbApplet.setLabelVisible("lTriangleC", false);

    ggbApplet.setVisible("rectA", true);
    ggbApplet.setLabelVisible("rectA", false);
    
    ggbApplet.setVisible("pCH", false);
    ggbApplet.setVisible("pCW", false);
    ggbApplet.setVisible("curveHeight", true);
    ggbApplet.setVisible("curveWidth", true);
    ggbApplet.setLabelVisible("curveHeight", false);
    ggbApplet.setLabelVisible("curveWidth", false);
    
//    ggbApplet.setVisiblebtnReset("btnReset", true);
}


//
// Init Values on View2
//
function InitValuesView2(){
    ggbApplet.setCoords("pSerfaceOfTime", 0, 0);
}


//
// Init Lisner on View2
//
function InitListenerView2(){
    ggbApplet.registerObjectClickListener("btnSetPointRed", 
                                          "OnclickButtonSetPointRed");
    ggbApplet.registerObjectClickListener("btnSetPointBlue", 
                                          "OnclickButtonSetPointBlue");
    ggbApplet.registerObjectClickListener("btnSetPointGreen", 
                                          "OnclickButtonSetPointGreen");
    ggbApplet.registerObjectClickListener("btnSetPointBlack", 
                                          "OnclickButtonSetPointBlack");
}


//
// Init Property on View2
//
function InitObjectPropertyView2(){
    ggbApplet.setGridVisible(2, false);
    ggbApplet.setAxesVisible(2, true, true, false);
/*
    ggbApplet.setCoordSystem(DEFAULT_VIEW2_HEIGHT_MIN, 
                             DEFAULT_VIEW2_HEIGHT_MAX, 
                             DEFAULT_VIEW2_WIDTH_MIN, 
                             DEFAULT_VIEW2_WIDTH_MAX);
*/
    ggbApplet.evalCommand("CenterView(("+DEFAULT_VIEW2_CENTER_X+","+DEFAULT_VIEW2_CENTER_Y+"))");
    ggbApplet.setColor("pSerfaceOfTime", 204, 0, 0);
    
//    ggbApplet.setCoordSystem(-1.25, 10, -1.25, 10);
}


//
// Init Values on View1 Layer1
//
function InitValuesView1Layer1(){
}


//
// Init Setting View1 Layer-2
//
function InitSetView1Layer1() {
    ggbApplet.setLayerVisible(2, true);
    
    ggbApplet.setLayer("btnDown2Height", DEFAULT_SETTING_LAYER);
    ggbApplet.setLayer("btnDown2Velocity", DEFAULT_SETTING_LAYER);
    ggbApplet.setLayer("btnDown2Width", DEFAULT_SETTING_LAYER);
    ggbApplet.setLayer("btnUp2Height", DEFAULT_SETTING_LAYER);
    ggbApplet.setLayer("btnUp2Velocity", DEFAULT_SETTING_LAYER);
    ggbApplet.setLayer("btnUp2Width", DEFAULT_SETTING_LAYER);

    ggbApplet.setLayer("textSettingA", DEFAULT_SETTING_LAYER);
}


//
// Init Lisner on View1
//
function InitListenerView1Layer1(){
    ggbApplet.registerObjectClickListener("btnUp2Height", 
                                          "OnclickButtonUp2Height");
    ggbApplet.registerObjectClickListener("btnDown2Height", 
                                          "OnclickButtonDown2Height");
    ggbApplet.registerObjectClickListener("btnUp2Width", 
                                          "OnclickButtonUp2Width");
    ggbApplet.registerObjectClickListener("btnDown2Width", 
                                          "OnclickButtonDown2Width");
    ggbApplet.registerObjectClickListener("btnUp2Velocity", 
                                          "OnclickButtonUp2Velocity");
    ggbApplet.registerObjectClickListener("btnDown2Velocity", 
                                          "OnclickButtonDown2Velocity");
}


function InitObjectPropertyView1Layer1(){
    ggbApplet.setVisible("textSettingA", true);
    
    ggbApplet.setVisible("btnDown2Height", true);
    ggbApplet.setVisible("btnDown2Velocity", true);
    ggbApplet.setVisible("btnDown2Width", true);
    ggbApplet.setVisible("btnUp2Height", true);
    ggbApplet.setVisible("btnUp2Velocity", true);
    ggbApplet.setVisible("btnUp2Width", true);    
}


//
// Init
//
function ggbOnInit() {
    // Set View1
    ggbApplet.evalCommand('SetActiveView("G")');
    InitValuesView1();
    InitListenerView1();
    InitObjectPropertyView1();
    ggbApplet.refreshViews();
    // Set View2
    ggbApplet.evalCommand('SetActiveView("D")');
    InitValuesView2();
    InitObjectPropertyView2();
    InitListenerView2();
    ggbApplet.refreshViews();
    // Show View 1&2 horizontaly
//    ggbApplet.evalCommand('SetPerspective("G*D")');
    InitValuesView1Layer1();
    InitSetView1Layer1();
    InitObjectPropertyView1Layer1();
    InitListenerView1Layer1();
}


////////////////////////////////
////////////////////////////////
// EVENTS
////////////////////////////////
////////////////////////////////
//
// Onclick btnUp2Height
//
function OnclickButtonUp2Height() {
    height = ggbApplet.getValue("varHeight")+DEFAULT_LENGTH_OFFSET;
    width  = ggbApplet.getValue("varWidth");
    ggbApplet.setValue("varHeight", height);
    OnupdateHandW(width, height);
}


//
// Onclick btnDown2Height
//
function OnclickButtonDown2Height() {
    height = ggbApplet.getValue("varHeight")-DEFAULT_LENGTH_OFFSET;
    width  = ggbApplet.getValue("varWidth");
    if(height <= 0) {
        height = DEFAULT_LENGTH_MIN;
        alert("高さは"+DEFAULT_LENGTH_MIN+"cm 以上に設定してください。");
    }
    ggbApplet.setValue("varHeight", height);
    OnupdateHandW(width, height);
}


//
// Onclick btnUp2Width
//
function OnclickButtonUp2Width() {
    height = ggbApplet.getValue("varHeight");
    width  = ggbApplet.getValue("varWidth")+DEFAULT_LENGTH_OFFSET;
    ggbApplet.setValue("varWidth", width);
    OnupdateHandW(width, height);
}


//
// Onclick btnDown2Width
//
function OnclickButtonDown2Width() {
    height = ggbApplet.getValue("varHeight");
    width  = ggbApplet.getValue("varWidth")-DEFAULT_LENGTH_OFFSET;
    if(width <= 0) {
        width = DEFAULT_LENGTH_MIN;
        alert("幅は"+DEFAULT_LENGTH_MIN+"cm 以上に設定してください。");
    }
    ggbApplet.setValue("varWidth", width);
    OnupdateHandW(width, height);
}


//
// Onupdate height & width
//
function OnupdateHandW(width, height) {
    // Set points
    ggbApplet.setCoords("pA",     0, height);
    ggbApplet.setCoords("pB",     0, 0     );
    ggbApplet.setCoords("pC", width, 0     );
    ggbApplet.setCoords("pD", width, height);
    ggbApplet.setCoords("pCH", 
                        DEFAULT_CURVE_HEIGHT_X,
                        height/2);
    ggbApplet.setCoords("pCW",
                        width/2,
                        DEFAULT_CURVE_WIDTH_Y);

    // set Height & Width
    ggbApplet.evalCommand("varHeight="+height);
    ggbApplet.evalCommand("varWidth=" +width );
}


//
// Onclick btnDown2Velocity
//
function OnclickButtonDown2Velocity() {
    v = ggbApplet.getValue("varVelocity")-DEFAULT_VELOCITY_OFFSET;
    if(v <= 0) {
        v = DEFAULT_VELOCITY_MIN;
        alert("速さは"+DEFAULT_VELOCITY_MIN+"cm/秒 以上に設定してください。");
    }
    ggbApplet.setValue("varVelocity", v)
}


//
// Onclick btnUp2Velocity
//
function OnclickButtonUp2Velocity() {
    v = ggbApplet.getValue("varVelocity")+DEFAULT_VELOCITY_OFFSET;
    ggbApplet.setValue("varVelocity", v)
}


//
// Onclick btnPrevSec
//
function OnclickButtonPreviousSecond() {
    sec = ggbApplet.getValue("varSecond")-DEFAULT_TIME_OFFSET;

    if(sec >= 0) {
        ggbApplet.setValue("varSecond", sec);
    } else {
        ggbApplet.setValue("varSecond", 0);
        sec += DEFAULT_TIME_OFFSET;
        alert("0秒以上で実行してください。");
        
        ggbApplet.setCoords("pP", 0, DEFAULT_HEIGHT);
        ggbApplet.setCoords("pSerfaceOfTime", 0, 0);
        return;
    }

    // Where is the point P?
    v = ggbApplet.getValue("varVelocity");
    distance = v * sec;

    lengthAB = ggbApplet.getValue("varHeight");
    lengthBC = lengthAB + ggbApplet.getValue("varWidth");
    lengthCD = lengthBC + ggbApplet.getValue("varHeight");

    if(distance <= lengthAB) {
        px = ggbApplet.getXcoord("pA");
        py = ggbApplet.getYcoord("pA");
        ggbApplet.setCoords("pP", px, py-distance);
    } else if (distance <= lengthBC) {
        px = ggbApplet.getXcoord("pB");
        py = ggbApplet.getYcoord("pB");
        ggbApplet.setCoords("pP", px+distance-lengthAB, py);
    } else if(distance <= lengthCD) {
        px = ggbApplet.getXcoord("pC");
        py = ggbApplet.getYcoord("pC");
        ggbApplet.setCoords("pP", px, py+distance-lengthBC);
    } else {
        sec += (DEFAULT_HEIGHT-ggbApplet.getXcoord("pP"))/v;
        px = ggbApplet.getXcoord("pD");
        py = ggbApplet.getYcoord("pD");
        ggbApplet.setCoords("pP", px, py);
        ggbApplet.setValue("varSecond", sec);
        alert("点Pは、これ以上動きません。");
    }
    surface = ggbApplet.getValue("triangleA");
    ggbApplet.setCoords("pSerfaceOfTime", sec, surface);
}


//
// Onclick btnNextSec
//
function OnclickButtonNextSecond() {
    sec = ggbApplet.getValue("varSecond")+DEFAULT_TIME_OFFSET;

    ggbApplet.setValue("varSecond", sec);

    // Where is the point P?
    v = ggbApplet.getValue("varVelocity");
    distance = v * sec;

    lengthAB = ggbApplet.getValue("varHeight");
    lengthBC = lengthAB + ggbApplet.getValue("varWidth");
    lengthCD = lengthBC + ggbApplet.getValue("varHeight");

    if(distance <= lengthAB) {
        px = ggbApplet.getXcoord("pA");
        py = ggbApplet.getYcoord("pA");
        ggbApplet.setCoords("pP", px, py-distance);
    } else if (distance <= lengthBC) {
        px = ggbApplet.getXcoord("pB");
        py = ggbApplet.getYcoord("pB");
        ggbApplet.setCoords("pP", px+distance-lengthAB, py);
    } else if(distance <= lengthCD) {
        px = ggbApplet.getXcoord("pC");
        py = ggbApplet.getYcoord("pC");
        ggbApplet.setCoords("pP", px, py+distance-lengthBC);
    } else {
        sec += (ggbApplet.getYcoord("pD")-ggbApplet.getYcoord("pP"))/v-DEFAULT_TIME_OFFSET;
        px = ggbApplet.getXcoord("pD");
        py = ggbApplet.getYcoord("pD");
        ggbApplet.setCoords("pP", px, py);
//        sec -= DEFAULT_TIME_OFFSET;
        ggbApplet.setValue("varSecond", sec);
        alert("点Pは、これ以上動きません。");
    }
    surface = ggbApplet.getValue("triangleA");
    ggbApplet.setCoords("pSerfaceOfTime", sec, surface);
}


//
// Onclick btnResetTime
//
function OnclickButtonResetTime() {
    ggbApplet.setValue("varSecond", 0);
    px = ggbApplet.getXcoord("pA");
    py = ggbApplet.getYcoord("pA");
    ggbApplet.setCoords("pP", px, py);
    ggbApplet.setCoords("pSerfaceOfTime", 0, 0);
}


//
// Onclick btnResetAll
//
function OnclickButtonResetAll() {
    // Set View1
    ggbApplet.evalCommand('SetActiveView("G")');
    InitValuesView1();
    InitObjectPropertyView1();
    ggbApplet.refreshViews();
    // Set View2
    ggbApplet.evalCommand('SetActiveView("D")');
    InitValuesView2();
    InitObjectPropertyView2();
    ggbApplet.refreshViews();
}


//
// Onclick btnSetPointRed
//
function OnclickButtonSetPointRed() {
    ggbApplet.setPointStyle("pSerfaceOfTime", 1);
    ggbApplet.setDisplayStyle("pSerfaceOfTime", "specific");
    ggbApplet.setColor("pSerfaceOfTime", 204, 0, 0);
    ggbApplet.setFilling("pSerfaceOfTime", 0);
}


//
// Onclick btnSetPointBlue
//
function OnclickButtonSetPointBlue() {
    ggbApplet.setPointStyle("pSerfaceOfTime", 2);
    ggbApplet.setDisplayStyle("pSerfaceOfTime", "parametric");
    ggbApplet.setColor("pSerfaceOfTime", 0, 0, 204);
}


//
// Onclick btnSetPointGreen
//
function OnclickButtonSetPointGreen() {
    ggbApplet.setPointStyle("pSerfaceOfTime", 6);
    ggbApplet.setDisplayStyle("pSerfaceOfTime", "explicit");
    ggbApplet.setFilling("pSerfaceOfTime", 0);
    ggbApplet.setColor("pSerfaceOfTime", 0, 204, 0);
}

//
// Onclick btnSetPointBlack
//
function OnclickButtonSetPointBlack() {
    ggbApplet.setPointStyle("pSerfaceOfTime", 3);
    ggbApplet.setDisplayStyle("pSerfaceOfTime", "implicit");
    ggbApplet.setFilling("pSerfaceOfTime", 0);
    ggbApplet.setColor("pSerfaceOfTime", 0, 0, 0);
}


//
// Onclick checkboxSettings
//
function OnclickCheckboxSettingsA() {
    bool = ggbApplet.getValue("checkSettings");
    if(bool == true) {
       InitObjectPropertyView1Layer1();
    } else {
       ggbApplet.setLayerVisible(DEFAULT_SETTING_LAYER, false);
    }
}

