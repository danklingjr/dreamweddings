$('.logo').hide();
$('.logo').delay(1000).fadeIn(800);

var stickyPanelOptions = {
                topPadding: 0,
                afterDetachCSSClass: "BoxGlow_Grey2",
                savePanelSpace: true,
                onDetached: function (detachedPanel, spacerPanel) {
                    detachedPanel.html(detachedPanel.html() + "");
                },
                onReAttached: function (detachedPanel) {
                    detachedPanel.html(detachedPanel.html().replace(" has been detached!", ""));
                },
                parentSelector: null
            };
$("#nav").stickyPanel(stickyPanelOptions);

$(".content").fitVids();

$(".close-popup").on( "click", function() {
    $(".popup-overlay").fadeOut(200);
    return false;
});