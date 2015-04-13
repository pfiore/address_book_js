$(document).ready(function() {
  $("form#new-contact").submit(function(event) {
    event.preventDefault();

    var inputtedFirstName = $("input#new-first-name").val();
    var inputtedLastName = $("input#new-last-name").val();
    var inputtedPhone = $("input#new-phone").val();
    var inputtedAddress = $("input#new-address").val();
    var inputtedEmail = $("input#new-email").val();
    var newContact = {
      firstName: inputtedFirstName,
      lastName: inputtedLastName,
      phone: inputtedPhone,
      address: inputtedAddress,
      email: inputtedEmail
    };

    $("ul#contacts").append("<li><span class='contact'>" + newContact.firstName + " " + newContact.lastName + "</span></li>" );

    $("input#new-first-name").val("");
    $("input#new-last-name").val("");
    $("input#new-phone").val("");
    $("input#new-address").val("");
    $("input#new-email").val("");


    $(".contact").last().click(function() {
      $("#show-contact").show();
      $("#show-contact h2").text(newContact.firstName + " " + newContact.lastName);
      $(".first-name").text(newContact.firstName);
      $(".last-name").text(newContact.lastName);
      $(".phone").text(newContact.phone);
      $(".email").text(newContact.email);
      $(".address").text(newContact.address);
    });
  });
});
