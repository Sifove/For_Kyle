$(document).ready(function() {
    var envelop = $("#envelope");
    var btn_open = $("#open");
    var btn_reset = $("#reset");

    envelop.click(function() {
        open ();
    });
    btn_open.click(function() {
        open();
    });
    btn_reset.click(function() {
        close();
    });

    function open() {
        envelop.addClass("open")
            .removeClass("close");
    }
    
    function close() {
        envelop.addClass("close")
            .removeClass("open");
    }

})

