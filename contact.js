// Demo form handler. Before launch, replace this with the practice's
// HIPAA-appropriate contact or booking form (see README).
(function () {
  var form = document.getElementById("contact-form");
  var status = document.getElementById("cf-status");
  if (!form) return;

  var fields = [
    { el: document.getElementById("cf-name"), test: function (v) { return v.trim() !== ""; }, msg: "Enter your name." },
    { el: document.getElementById("cf-email"), test: function (v) { return /^\S+@\S+\.\S+$/.test(v); }, msg: "Enter a valid email address, like name@example.com." }
  ];

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    var problems = [];
    fields.forEach(function (f) {
      var ok = f.test(f.el.value);
      if (ok) {
        f.el.removeAttribute("aria-invalid");
        f.el.removeAttribute("aria-describedby");
      } else {
        f.el.setAttribute("aria-invalid", "true");
        f.el.setAttribute("aria-describedby", "cf-status");
        problems.push(f);
      }
    });

    if (problems.length) {
      status.textContent = "Please fix the following: " + problems.map(function (f) { return f.msg; }).join(" ");
      status.classList.add("error");
      
      problems[0].el.focus();
    } else {
      status.textContent = "Demo only: nothing was sent. On the live site this form will connect to the practice's secure inbox.";
      status.classList.remove("error");
      
    }
  });
})();
