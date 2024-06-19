// The default code is a module class (inherited from xui.Module)
// Ensure that all the value of "key/value pair" does not refer to external variables
xui.Class('App', 'xui.Module',{
    Instance:{
        // Dependency classes
        Dependencies:[],
        // Required modules
        Required:[],

        // To initialize properties
        properties : {},

        // To initialize instance(e.g. properties)
        initialize : function(){
        },

        // To initialize internal components (mostly UI controls)
        // *** If you're not a skilled, dont modify this function manually ***
        iniComponents : function(){
            // [[Code created by CrossUI RAD Studio
            var host=this, children=[], append=function(child){children.push(child.get(0));};
            
            append(
                xui.create("xui.UI.ButtonViews")
                .setHost(host,"xui_ui_buttonviews2")
                .setItems([
                    {
                        "id" : "a",
                        "caption" : "page1",
                        "imageClass" : "xui-icon-xui"
                    },
                    {
                        "id" : "b",
                        "caption" : "page2"
                    },
                    {
                        "id" : "c",
                        "caption" : "page3"
                    },
                    {
                        "id" : "d",
                        "caption" : "page4",
                        "closeBtn" : true,
                        "optBtn" : "xui-uicmd-opt",
                        "popBtn" : true
                    }
                ])
                .setLeft("0em")
                .setTop("0em")
                .setBarLocation("left")
                .setBarSize("10.666666666666666em")
                .setValue("a")
            );
            
            host.xui_ui_buttonviews2.append(
                xui.create("xui.UI.Block")
                .setHost(host,"xui_ui_block9")
                .setLeft("0.7619047619047619em")
                .setTop("0em")
                .setWidth("41.98095238095238em")
                .setHeight("19.885714285714286em"),
                "a"
            );
            
            host.xui_ui_block9.append(
                xui.create("xui.UI.Video")
                .setHost(host,"xui_ui_video1")
                .setLeft("0.6857142857142857em")
                .setTop("0.6857142857142857em")
                .setWidth("40.076190476190476em")
                .setHeight("18.133333333333333em")
            );
            
            host.xui_ui_buttonviews2.append(
                xui.create("xui.UI.Block")
                .setHost(host,"xui_ui_block10")
                .setLeft("0.7619047619047619em")
                .setTop("20.571428571428573em")
                .setWidth("41.98095238095238em")
                .setHeight("7.695238095238095em"),
                "a"
            );
            
            host.xui_ui_block10.append(
                xui.create("xui.UI.FormLayout")
                .setHost(host,"xui_ui_formlayout2")
                .setLeft("0.6857142857142857em")
                .setTop("0.6857142857142857em")
                .setWidth("40em")
                .setHeight("6.019047619047619em")
                .setLayoutData({
                    "rows" : 5,
                    "cols" : 5,
                    "rowSetting" : {
                        "1" : {
                            "manualHeight" : 50
                        },
                        "2" : {
                            "manualHeight" : 50
                        },
                        "3" : {
                            "manualHeight" : 50
                        },
                        "4" : {
                            "manualHeight" : 50
                        },
                        "5" : {
                            "manualHeight" : 50
                        }
                    }
                })
            );
            
            append(
                xui.create("xui.UI.Image")
                .setHost(host,"xui_ui_image4")
                .setLeft("1.5238095238095237em")
                .setTop("12.19047619047619em")
                .setWidth("7.923809523809524em")
                .setHeight("7.161904761904762em")
                .setSrc("{xui.ini.img_pic}")
            );
            
            append(
                xui.create("xui.UI.Block")
                .setHost(host,"xui_ui_block8")
                .setLeft("0.7619047619047619em")
                .setTop("20.571428571428573em")
                .setWidth("8.457142857142857em")
                .setHeight("8.457142857142857em")
            );
            
            return children;
            // ]]Code created by CrossUI RAD Studio
        },

        // Give a chance to determine which UI controls will be appended to parent container
        customAppend : function(parent, subId, left, top){
            // "return false" will cause all the internal UI controls will be added to the parent panel
            return false;
        }
        /*,
        // To determine how properties affects this module
        propSetAction : function(prop){
        },
        // To set all node's style in this modlue
        customStyle:{}
    },
    //To customize the default properties and event handlers
    Static:{
        $DataModel:{
        },
        $EventHandlers:{
        }
    */
    }
});