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
                .setLeft("33.523809523809526em")
                .setTop("21.333333333333332em")
                .setWidth("8.685714285714285em")
                .setHeight("7.161904761904762em")
                .setSrc("{xui.ini.img_pic}")
            );
            
            host.ctl_pane10.append(
                xui.create("xui.UI.Label")
                .setHost(host,"xui_ui_label11")
                .setLeft("29.714285714285715em")
                .setTop("31.238095238095237em")
                .setWidth("18.438095238095237em")
                .setHeight("1.980952380952381em")
                .setCaption("Click on Logo to Start")
                .setHAlign("center")
                .setFontSize("18px")
                .setFontWeight("bold")
            );
            
            return children;
            // ]]Code created by CrossUI RAD Studio
        }
    }
});