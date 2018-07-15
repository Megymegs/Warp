// Spreadsheet

FontAwesomeConfig = {
    autoReplaceSvg: 'nest'
};


$(document).ready(function() {
  $("#spreadsheet-data").DataTable({
    select: true,
    responsive: true,
    language: {
        info: "_START_ to _END_ of _TOTAL_",
        search: "",
        select: true,
        paging: true,
        paginate: {
            first: '<i class="fa fa-fw fa-chevron-double-left">',
            next: '<i class="fa fa-fw fa-chevron-right">',
            previous: '<i class="fa fa-fw fa-chevron-left">',
            last: '<i class="fa fa-fw fa-chevron-double-right">'
        }
    }
  });
});


(function () {
    $(document).on('shown.bs.modal', function () {
        createCard();
    });
    // Trigger Modal Containing the Table
    $(document).on('click', '.add', function () {
        // Show Modal
        $('.gift-card').modal('show');
    });
    $(document).on('click', '.next-modal', function () {
        // Show Modal
        $('.step-2').css('display', 'block');
        $('.step-1').css('display', 'none' );
    });
    $(document).on('click', '.back-modal', function () {
        // Show Modal
        $('.step-2').css('display', 'none');
        $('.step-1').css('display', 'flex' );
    });
    $(document).on('click', '.next-modal-1', function () {
        // Show Modal
        $('.step-3').css('display', 'block');
        $('.step-2').css('display', 'none' );
        $('.step-1').css('display', 'none' );
    });
    $(document).on('click', '.back-modal-1', function () {
        // Show Modal
        $('.step-3').css('display', 'none');
        $('.step-2').css('display', 'block' );
        $('.step-1').css('display', 'none' );
    });
})()
function createCard() {
    $('.gift-card').css('display', 'block');
}
