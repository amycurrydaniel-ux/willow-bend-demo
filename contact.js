// Demo form handler. Before launch, replace this with the practice's
// HIPAA-appropriate contact or booking form (see README).
(function () {
  var form = document.getElementById("contact-form");
  var status = document.getElementById("cf-status");
  if (!form) return;
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    var name = document.getElementById("cf-name");
    var email = document.getElementById("cf-email");
    if (!name.value.trim() || !/^\S+@\S+\.\S+$/.test(email.value)) {
      status.textContent = "Please enter your name and a valid email address so we can reply.";
    } else {
      status.textContent = "Demo only: nothing was sent. On the live site this form will connect to the practice's secure inbox.";
    }
    status.hidden = false;
  });
})();
