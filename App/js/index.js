xui.Class('App', 'xui.Module',{
    Instance:{
        iniComponents : function(){
            // [[Code created by CrossUI RAD Studio
            var host=this, children=[], append=function(child){children.push(child.get(0));};
            
            append(
                xui.create("xui.UI.Div")
                .setHost(host,"ctl_pane10")
                .setDock("fill")
            );
            
            host.ctl_pane10.append(
                xui.create("xui.UI.Image")
                .setHost(host,"xui_ui_image15")
                .setLeft("25.142857142857142em")
                .setTop("17.523809523809526em")
                .setWidth("8.685714285714285em")
                .setHeight("7.161904761904762em")
                .setSrc("{xui.ini.img_pic}")
                .onDblclick([
                    {
                        "desc" : "Action 1",
                        "type" : "control",
                        "target" : "xui_ui_image15",
                        "args" : [ ],
                        "method" : "fireClickEvent",
                        "timeout" : 0,
                        "resetid" : "login.js",
                        "event" : 1
                    }
                ])
            );
            
            host.ctl_pane10.append(
                xui.create("xui.UI.Label")
                .setHost(host,"xui_ui_label11")
                .setLeft("18.285714285714285em")
                .setTop("27.428571428571427em")
                .setWidth("22.247619047619047em")
                .setHeight("1.980952380952381em")
                .setCaption("Double click on Logo to Start")
                .setHAlign("center")
                .setFontSize("18px")
                .setFontWeight("bold")
            );
            
            return children;
            // ]]Code created by CrossUI RAD Studio
        }
    }
});