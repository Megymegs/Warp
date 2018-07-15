// Spreadsheet

FontAwesomeConfig = {
    autoReplaceSvg: 'nest'
};


$(document).ready(function() {
  $("#spreadsheet-data").DataTable({
    select: true,
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

$(document).ready(function() {
    $('#spreadsheet-data').DataTable( {
        responsive: {
            details: {
                display: $.fn.dataTable.Responsive.display.modal( {
                    header: function ( row ) {
                        var data = row.data();
                        return 'Details for '+data[0]+' '+data[1];
                    }
                } ),
                renderer: $.fn.dataTable.Responsive.renderer.tableAll( {
                    tableClass: 'table'
                } )
            }
        }
    } );
} );