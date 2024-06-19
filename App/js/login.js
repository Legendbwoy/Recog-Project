xui.Class('App.login', 'xui.Module',{
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
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_user")
                .setName("Username")
                .setLeft("19.80952380952381em")
                .setTop("9.904761904761905em")
                .setWidth("24.076190476190476em")
                .setHeight("2.5142857142857142em")
                .setLabelSize("8em")
                .setLabelCaption("Username")
            );
            
            host.ctl_pane10.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_pass")
                .setName("Password")
                .setLeft("19.80952380952381em")
                .setTop("15.238095238095237em")
                .setWidth("24.076190476190476em")
                .setHeight("2.5142857142857142em")
                .setLabelSize("8em")
                .setLabelCaption("Password")
            );
            
            host.ctl_pane10.append(
                xui.create("xui.UI.Label")
                .setHost(host,"xui_ui_log_reg")
                .setLeft("27.428571428571427em")
                .setTop("19.047619047619047em")
                .setWidth("16.152380952380952em")
                .setHeight("1.2190476190476192em")
                .setCaption("Don't have an account? Register.")
            );
            
            host.ctl_pane10.append(
                xui.create("xui.UI.Button")
                .setHost(host,"xui_ui_login")
                .setName("Log In")
                .setLeft("29.714285714285715em")
                .setTop("22.095238095238095em")
                .setWidth("9.82857142857143em")
                .setHeight("2.8190476190476192em")
                .setCaption("Log In")
            );
            
            host.ctl_pane10.append(
                xui.create("xui.UI.Label")
                .setHost(host,"xui_ui_label4")
                .setLeft("26.666666666666668em")
                .setTop("5.333333333333333em")
                .setWidth("13.866666666666667em")
                .setHeight("2.742857142857143em")
                .setCaption("LOG IN")
                .setHAlign("center")
                .setFontSize("22px")
                .setFontWeight("bold")
            );
            
            return children;
            // ]]Code created by CrossUI RAD Studio
        }
    }
});