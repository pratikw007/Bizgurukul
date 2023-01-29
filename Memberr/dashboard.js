/// <reference path="../../../content/bower_components/jquery/js/jquery.min.js" />
$(document).ready(function () {
    chkConfirm();
    function chkConfirm() {

        $.ajax({
            type: "POST",
            url: "dashboard.aspx/chkConfirm",
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            data: {},
            success: function (data) {
                var obj = jQuery.parseJSON(data.d);
                if (obj == "0") {
              
                    $("#myModal2").modal({
                        backdrop: 'static', keyboard: false
                    });
        
                }
            
            },
            error: function (xhr, ajaxOptions, thrownError) {
                $("#dv_finish").show();
                var obj = jQuery.parseJSON(xhr.responseText);
                alert(obj.Message);
            }
        });


    }

    $("#popup_redirect").click(function () {

        window.location = "Approvedkyc.aspx?q=1"

    })

    $(".getsalesdata").click(function () {

        var days = $(this).attr('id')

        $.ajax({
            type: "POST",
            url: "dashboard.aspx/getSalesDetail",
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            data: '{"days":"' + days + '"}',
            success: function (data) {
 
                $("#tbl_salesdetails").html(data.d)

                    $("#myModal3").modal();


            },
            error: function (xhr, ajaxOptions, thrownError) {
                $("#dv_finish").show();
                var obj = jQuery.parseJSON(xhr.responseText);
                alert(obj.Message);
            }
        });

    })
});


//NEW DASHBOARD



