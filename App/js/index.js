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
                xui.create("xui.UI.Block")
                .setHost(host,"xui_ui_block17")
                .setLeft("0.7619047619047619em")
                .setTop("0.7619047619047619em")
                .setWidth("13.028571428571428em")
                .setHeight("44.266666666666666em")
            );
            
            host.xui_ui_block17.append(
                xui.create("xui.UI.Button")
                .setHost(host,"xui_ui_facial")
                .setName("FACIAL RECOGNITION")
                .setLeft("0.6857142857142857em")
                .setTop("0.6857142857142857em")
                .setWidth("11.276190476190477em")
                .setHeight("3.5047619047619047em")
                .setCaption("FACIAL RECOGNITION")
            );
            
            host.xui_ui_block17.append(
                xui.create("xui.UI.Button")
                .setHost(host,"xui_ui_collection")
                .setName("DATA COLLECTION")
                .setLeft("0.6857142857142857em")
                .setTop("4.495238095238095em")
                .setWidth("11.352380952380953em")
                .setHeight("3.580952380952381em")
                .setCaption("DATA COLLECTION")
            );
            
            host.xui_ui_block17.append(
                xui.create("xui.UI.Button")
                .setHost(host,"xui_ui_settings")
                .setName("SETTINGS")
                .setLeft("0.6857142857142857em")
                .setTop("8.304761904761905em")
                .setWidth("11.276190476190477em")
                .setHeight("3.5047619047619047em")
                .setCaption("SETTINGS")
            );
            
            host.xui_ui_block17.append(
                xui.create("xui.UI.Button")
                .setHost(host,"xui_ui_exit")
                .setName("EXIT")
                .setLeft("0.7619047619047619em")
                .setTop("12.19047619047619em")
                .setWidth("11.2em")
                .setHeight("3.4285714285714284em")
                .setCaption("EXIT")
            );
            
            host.xui_ui_block17.append(
                xui.create("xui.UI.Image")
                .setHost(host,"xui_ui_image6")
                .setLeft("0.6857142857142857em")
                .setTop("17.447619047619046em")
                .setWidth("11.80952380952381em")
                .setHeight("11.047619047619047em")
                .setSrc("{xui.ini.img_pic}")
            );
            
            host.xui_ui_block17.append(
                xui.create("xui.UI.Block")
                .setHost(host,"xui_ui_block18")
                .setLeft("0.6857142857142857em")
                .setTop("29.714285714285715em")
                .setWidth("11.504761904761905em")
                .setHeight("10.666666666666666em")
            );
            
            append(
                xui.create("xui.UI.Block")
                .setHost(host,"xui_ui_block19")
                .setLeft("14.476190476190476em")
                .setTop("0.7619047619047619em")
                .setWidth("45.79047619047619em")
                .setHeight("29.02857142857143em")
            );
            
            host.xui_ui_block19.append(
                xui.create("xui.UI.Video")
                .setHost(host,"xui_ui_video3")
                .setLeft("0.6857142857142857em")
                .setTop("0.6857142857142857em")
                .setWidth("43.885714285714286em")
                .setHeight("27.276190476190475em")
            );
            
            append(
                xui.create("xui.UI.Block")
                .setHost(host,"xui_ui_block20")
                .setLeft("14.476190476190476em")
                .setTop("30.476190476190474em")
                .setWidth("45.79047619047619em")
                .setHeight("13.790476190476191em")
            );
            
            host.xui_ui_block20.append(
                xui.create("xui.UI.FormLayout")
                .setHost(host,"xui_ui_formlayout3")
                .setLeft("0.6857142857142857em")
                .setTop("1.5238095238095237em")
                .setWidth("43.733333333333334em")
                .setHeight("10.285714285714286em")
                .setLayoutData({
                    "rows" : 5,
                    "cols" : 4,
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