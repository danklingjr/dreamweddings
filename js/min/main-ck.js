$(".logo").hide(),$(".logo").delay(1e3).fadeIn(800);var stickyPanelOptions={topPadding:0,afterDetachCSSClass:"BoxGlow_Grey2",savePanelSpace:!0,onDetached:function(e,t){e.html(e.html()+""),t.css("background-color","")},onReAttached:function(e){e.html(e.html().replace(" has been detached!",""))},parentSelector:null};$("#nav").stickyPanel(stickyPanelOptions),$(".content").fitVids();