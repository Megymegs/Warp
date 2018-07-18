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
          { title: "Job Title" },
          { title: "Location" },
          { title: "Attendees" },
          { title: "Date of Survey" },
          { title: "Par Revenue" }
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

// adding row to spreadsheet
$(document).ready(function() {
  var t = $("#spreadsheet-data").DataTable();
  $(".done").on("click", function() {
    t.row
      .add([
        { title: "Job Title" },
        { title: "Location" },
        { title: "Attendees" },
        { title: "Date of Survey" },
        { title: "Par Revenue" }
      ])
      .draw(false);
  });

  // Automatically add a first row of data
  $("#addRow").click();
});
