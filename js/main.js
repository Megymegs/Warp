// Spreadsheet

FontAwesomeConfig = {
  autoReplaceSvg: "nest"
};

$(document).ready(function() {
  $("#spreadsheet-data").DataTable({
    select: true,
    responsive: true,
    language: {
      info: "_START_ to _END_ of _TOTAL_",
      search: "",
      select: true
    },
    data: dataSet,
      columns: [
          { title: ' <input type="checkbox" id="select-all"> ' },
          { title: "Date Created" },
          { title: "CVC No" },
          { title: "Amount" },
          { title: "Customer" },
          { title: "Quantity" },
          { title: "Status" },
          { title: ' <i class="fas fa-caret-down"></i> ' }
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

$('.gift-card').on('hidden',function(e){
  $(this).remove();
});

// adding row to spreadsheet
$(document).ready(function() {
  var data = table.$('input, select').serialize();
  var t = $("#spreadsheet-data").DataTable();
  var status = ' Active ';
  var quantity = '';
  var customer = '';
  var counter = '';
  var select = '';
  
  var amount = '';
  document.querySelector("#amount").value;


// adding date to new row
  var today = new Date();
  var dd = today.getDate();
  var mm = today.getMonth()+1; //January is 0!
  var yyyy = today.getFullYear();

  if(dd<10) {
      dd = '0'+dd
  } 
  if(mm<10) {
      mm = '0'+mm
  } 
  // returns date in year-month-day format
  today = yyyy + '.' + mm + '.' + dd;

  var cvc = getRandomArbitrary()

  function getRandomArbitrary(min, max) {
    return Math.floor(Math.random() * ((10000-1)+1) + 1);  
  }

  $(".done").on("click", function() {
    t.row
      .add([
        select + "",
        today + "",
        "#"+cvc ,
        amount + "",
        customer + ".4",
        quantity + ".5",
        status + "",
        counter + '<i class="fas fa-caret-down"></i>'
      ])
      .draw(false);

    counter++;
  });

  // Automatically add a first row of data
  $("#addRow").click();
});
