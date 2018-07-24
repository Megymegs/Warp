// placing svg icon into div
FontAwesomeConfig = {
  autoReplaceSvg: "nest"
};

// styling data table
$(document).ready(function() {
  $("#spreadsheet-data").DataTable({
    responsive: true,
    language: {
      info: "_START_ to _END_ of _TOTAL_",
      search: "",
      select: true
    },
    data: dataSet,
      columns: [
          { title: "" },
          { title: 'Job Title' },
          { title: 'Location' },
          { title: 'Attendees' },
          { title: 'Date of Census' },
          { title: 'Par Revenue' },
          { title: '<a href="#" tabIndex="5" data-toggle="popover" data-trigger="focus" data-placement="left" data-content="Double click to delete row."><i class="fas fa-trash clear-all"></i></a>'}
      ],
      columnDefs: [ {
        targets: [0,6],
        orderable: false
        } ]
  });
});


// modal pop-up
(function() {
  $(document).on("shown.bs.modal", function() {
    createCard();
  });
  // Trigger Modal Containing the Table
  $(document).on("click", ".add", function() {
    // Show Modal 1 first step
    $(".gift-card").modal("show");
  });
  $(document).on("click", ".next-modal", function() {
    // Show Modal 2 second step
    $(".step-2").css("display", "block");
    $(".step-1").css("display", "none");
  });
  $(document).on("click", ".back-modal", function() {
    // Show Modal 1 previous step
    $(".step-2").css("display", "none");
    $(".step-1").css("display", "flex");
  });
  $(document).on("click", ".next-modal-1", function() {
    // Show Modal 3 final step
    $(".step-3").css("display", "block");
    $(".step-2").css("display", "none");
    $(".step-1").css("display", "none");
  });
  $(document).on("click", ".back-modal-1", function() {
    // Show Modal 2 previous step
    $(".step-3").css("display", "none");
    $(".step-2").css("display", "block");
    $(".step-1").css("display", "none");
  });
})();

$(document).ready(function(){
  $('[data-toggle="popover"]').popover(); 
});
// display modal
function createCard() {
  $(".gift-card").css("display", "block");
}

var myBackup = $('.gift-card').clone();
// reseting modal once steps have been completed
$('body').on('click','.done',function() {
  $('.modal-backdrop.in').modal('hide').remove();
  $('.gift-card').modal('hide').remove();
      var myClone = myBackup.clone();
      $('body').append(myClone);
});

// adding row to spreadsheet
$(document).ready(function() {
  var t = $("#spreadsheet-data").DataTable();
  
  var addSelect = "<input type='checkbox' name='record'>";
  var addJob = $('tr').find('#jobTitle').text();
  var addLocation = $("#location").val();
  var addAttendees = $("#attendees").val();
  var addDate = $("#dateOf").val();
  var addPay = $("#income").val();
  var addDelete = '<a href="#" tabIndex="5" data-toggle="tooltip" title="Clear table" data-placement="left"><i class="fas fa-trash delete"></i></a>';
  var markup = "<tr><td><input type='checkbox' name='record'></td><td>" + addJob + "</td><td>" + addLocation + "</td></tr>" + addAttendees + "</td><td>" + addDate + "</td></tr>" + addPay + "</td></tr>";
  $("table tbody").append(markup);

  // last modal preview new row
  document.getElementById("preview-row-data").innerHTML = "<ul><li>" + addJob + "</li><li>" + addLocation + "</li><li>" + addAttendees + "</li><li>" + addDate + "</li><li>" + addPay + "</li></ul>";

  // adding data to new row
  $(".done").on("click", function() {
    t.row.add([
        addSelect,
        addJob,
        addLocation,
        addAttendees ,
        addDate,
        addPay,
        addDelete
    ]).draw();
  });
   
  // add a row of data
  $("#addRow").click();
});

$('body').on( 'click', function () {
  if ( $(this).hasClass('modal-open') ) {
    $('.done').click( function () {
      $('.modal-open').removeClass(); 
    } );
  }
});


$(document).ready(function() {
  var table = $('#spreadsheet-data').DataTable();
// select row
  $('#spreadsheet-data tbody').on( 'click', 'tr', function () {
      if ( $(this).hasClass('selected') ) {
        $('.fa-trash').click( function () {
          table.row().remove().draw();
          $('[data-toggle="popover"]').popover(); 
        } );
        $(this).removeClass('selected');
        $('#select-me').removeClass('selected');
      }
      else {
          table.$('tr.selected').removeClass('selected');
          $(this).addClass('selected');
          $("#select-me").addClass('selected');     
      }
  } );
} );

// clear table data
$(document).ready(function() {
  var table = $('#spreadsheet-data').DataTable();
  table.order([3, 'asc']).draw();
  $('.clear-all').click( function () {
    table.clear().draw();
  });
});

// order columns ascending
$('#job-up').click(function() {
  var table = $('#spreadsheet-data').DataTable();
  table.order([1, 'asc']).draw();
});
$('#location-up').click(function() {
  var table = $('#spreadsheet-data').DataTable();
  table.order([2, 'asc']).draw();
});
$('#attendees-up').click(function() {
  var table = $('#spreadsheet-data').DataTable();
  table.order([3, 'asc']).draw();
});
$('#date-up').click(function() {
  var table = $('#spreadsheet-data').DataTable();
  table.order([4, 'asc']).draw();
});
$('#pay-up').click(function() {
  var table = $('#spreadsheet-data').DataTable();
  table.order([5, 'asc']).draw();
});

// order columns descending
$('#job-down').click(function() {
  var table = $('#spreadsheet-data').DataTable();
  table.order([1, 'desc']).draw();
});
$('#location-down').click(function() {
  var table = $('#spreadsheet-data').DataTable();
  table.order([2, 'desc']).draw();
});
$('#attendees-down').click(function() {
  var table = $('#spreadsheet-data').DataTable();
  table.order([3, 'desc']).draw();
});
$('#date-down').click(function() {
  var table = $('#spreadsheet-data').DataTable();
  table.order([4, 'desc']).draw();
});
$('#pay-down').click(function() {
  var table = $('#spreadsheet-data').DataTable();
  table.order([5, 'desc']).draw();
});

$(document).ready(function(){
  $('.dataTables_filter input').attr('placeholder', 'Search');
  $('.form-control').css({
    'background-color': '#000000bf',
    'color':'white',
    'border':'1px solid $border',
  });
  $('.col-sm-5, .col-sm-7').css('margin-top','1em');
});
