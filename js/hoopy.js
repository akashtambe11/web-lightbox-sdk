$(document).ready(function () {

    $.fn.loadPopup = function () {
        var modal = $('<div id="alertModal" class="modal" style="display: block;"><div class="modal-content"><p class="modalTxt">This is hoopy SDK modal</p><p class="btnPara"><button class="nextBtn btn btn-primary">Close</button></p></div></div>').attr('id', 'hoopy');
        modal.appendTo('body');
    }

    // To remove hoopy UI
    $(document).off('click', '.nextBtn ').on('click', '.nextBtn ', function () {
        $('#hoopy').remove();
    })

})