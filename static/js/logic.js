

// Navbar Logic
$(document).ready(function() {
  $("#sidebarCollapse").on("click", function() {
    $("#sidebar").toggleClass("active");
    $(this).toggleClass("active");
  });
});

// var someJavaScriptVar = '{{ db_data[0]}}';
// console.log(someJavaScriptVar);