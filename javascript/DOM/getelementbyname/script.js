function collectData() {
  const languageProficiencyEl = document.getElementsByName(
    "languageProficiency",
  );
  console.log(languageProficiencyEl);
  for (let i = 0; i < languageProficiencyEl.length; i++) {
    if (languageProficiencyEl[i].checked) {
      console.log(`selected language is ${languageProficiencyEl[i].value}`);
    }
  }
  const emailsEl = document.getElementsByName("email");
  console.log(emailsEl);
}
