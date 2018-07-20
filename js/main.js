// Spreadsheet

FontAwesomeConfig = {
  autoReplaceSvg: "nest"
};

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
          { title: '<input type="checkbox" id="select-me">' },
          { title: "Job Title" },
          { title: "Location" },
          { title: "Attendees" },
          { title: "Date of Survey" },
          { title: "Par Revenue" },
          { title: '<i class="fas fa-trash"></i>' }
      ]
  });
});

(function() {
  $(document).on("shown.bs.modal", function() {
    createCard();
  });
  // Trigger Modal Containing the Table
  $(document).on("click", ".add", function() {
    // Show Modal
    $(".gift-card").modal("show");
  });
  $(document).on("click", ".next-modal", function() {
    // Show Modal
    $(".step-2").css("display", "block");
    $(".step-1").css("display", "none");
  });
  $(document).on("click", ".back-modal", function() {
    // Show Modal
    $(".step-2").css("display", "none");
    $(".step-1").css("display", "flex");
  });
  $(document).on("click", ".next-modal-1", function() {
    // Show Modal
    $(".step-3").css("display", "block");
    $(".step-2").css("display", "none");
    $(".step-1").css("display", "none");
  });
  $(document).on("click", ".back-modal-1", function() {
    // Show Modal
    $(".step-3").css("display", "none");
    $(".step-2").css("display", "block");
    $(".step-1").css("display", "none");
  });
})();
function createCard() {
  $(".gift-card").css("display", "block");
}

var myBackup = $('.gift-card').clone();

$('body').on('click','.done',function() {
  $('.modal-backdrop.in').modal('hide').remove();
  $('.gift-card').modal('hide').remove();
      var myClone = myBackup.clone();
      $('body').append(myClone);
});

function jobTitle() {
    var x = document.getElementsByClassName("design-holder").value;
    document.getElementsByClassName("sorting_1").innerHTML = x;
}

// adding row to spreadsheet
$(document).ready(function() {
  var t = $("#spreadsheet-data").DataTable();
  $(".done").on("click", function() {
    t.row
      .add([
        '<input type="checkbox" id="select-me">',
        "0",
        "0" ,
        "0" ,
        "0",
        "0",
        '<i class="fas fa-trash delete"></i>' 
    ])
      .draw(false);
  });

  // Automatically add a first row of data
  $("#addRow").click();
});

$(document).ready(function() {
  var table = $('#spreadsheet-data').DataTable();

  $('#spreadsheet-data tbody').on( 'click', 'tr', function () {
      if ( $(this).hasClass('selected') ) {
          $(this).removeClass('selected');
          $('#select-me').removeClass('selected');
      }
      else {
          table.$('tr.selected').removeClass('selected');
          $(this).addClass('selected');
          $("#select-me").addClass('selected');
      }
  } );

  $('.delete').click( function () {
      table.row('.selected').remove().draw( false );
  } );
} );
