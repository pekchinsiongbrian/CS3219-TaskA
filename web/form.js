document.querySelector("form.form").addEventListener("submit", (e) => {
  e.preventDefault();
  let nameInput = document.getElementById("name");
  let emailInput = document.getElementById("email");
  console.log("Name: ", nameInput.value);
  console.log("Email: ", emailInput.value);
  alert(
    "Form submitted\n\nThank you for your registration! Our team will contact you soon via the email that you provided."
  );
});
