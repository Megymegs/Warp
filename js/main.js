// Spreadsheet

$(document).ready(function() {
  $("#spreadsheet-data").DataTable({
    select: true,
    language: {
        info: "_START_ to _END_ of _TOTAL_",
        search: "",
        aria: {
            "sortAscending":  ": activate to sort column ascending",
            "sortDescending": ": activate to sort column descending"
        },
        paging: true,
        pagingType: "full_numbers",
        paginate: {
            first: '<i class="fa fa-fw fa-chevron-double-left">',
            next: '<i class="fa fa-fw fa-chevron-right">',
            previous: '<i class="fa fa-fw fa-chevron-left">',
            last: '<i class="fa fa-fw fa-chevron-double-right">'
        }
    }
  });
});
