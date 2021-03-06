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
      select: {
        style:    'os',
        selector: 'td:first-child'
      },
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
        targets: 0,
        orderable: false,
        className: 'select-checkbox',
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
    $(".add-census").modal("show");
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
  $('[data-toggle="hover"]').popover(); 
});
// display modal
function createCard() {
  $(".add-census").css("display", "block");
}

var myBackup = $('.add-census').clone();
// reseting modal once steps have been completed
$('body').on('click','.done',function() {
  $('.modal-backdrop.in').modal('hide').remove();
  $('.add-census').modal('hide').remove();
      var myClone = myBackup.clone();
      $('body').append(myClone);
});

// adding row to spreadsheet
$(document).ready(function() {
  var t = $("#spreadsheet-data").DataTable();
  
  var addSelect = "<input type='checkbox' name='record' class='checked-row'>";
  var addJob = $('tr').find('#jobTitle').text();
  var addLocation = $("#location").val();
  var addAttendees = $("#attendees").val();
  var addDate = $("#dateOf").val();
  var addPay = $("#income").val();
  var addDelete = '<a href="#" tabIndex="5" data-toggle="tooltip" title="Clear table" data-placement="left"><i class="fas fa-trash delete"></i></a>';
  var markup = "<tr><td><input type='checkbox' name='record' class='checked-row'></td><td>" + addJob + "</td><td>" + addLocation + "</td></tr>" + addAttendees + "</td><td>" + addDate + "</td></tr>" + addPay + "</td></tr>";
  $("table tbody").append(markup);

  // last modal preview new row
  document.getElementById("preview-row-data").innerHTML = "<ul><li>Job Title:" + addJob + "</li><li>Location:" + addLocation + "</li><li>Amount of Attendees:" + addAttendees + "</li><li>Census Date:" + addDate + "</li><li>par Salary:" + addPay + "</li></ul>";

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
    var checkBoxes = $("#spreadsheet-data tbody .selected input[name=record]");

    if ( $(this).hasClass('selected') ) {
        $(this).removeClass('selected');
        $('.checked-row').attr('checked',false);

        $('.fa-trash').hover( function(){
          $('[data-toggle="popover"]').popover(); 
      });
      $('.fa-trash').click( function () {
        table.row().remove().draw();
      });
    } else {
      $(this).addClass('selected');
      $('.checked-row').attr('checked',true);
    };
  });
});

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
