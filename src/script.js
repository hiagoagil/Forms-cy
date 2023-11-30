let isPhoneRequired = false;

const phoneLabelSpan = document.querySelector('.phone-label-span');
const phoneField = document.getElementById('phone');
const phoneCheckbox = document.getElementById('phone-checkbox');

// Esconde o campo e a mensagem inicialmente
phoneLabelSpan.style.display = 'none';

phoneCheckbox.addEventListener('change', function () {
  if (this.checked) {
    phoneLabelSpan.style.display = 'inline';
    // Se o checkbox está marcado, ajusta a obrigatoriedade
    phoneField.required = isPhoneRequired;
  } else {
    phoneLabelSpan.style.display = 'none';
    phoneField.required = false;
  }
});
      document.querySelector('button[type="submit"]')
        .addEventListener('click', function(event) {
          event.preventDefault();
          const firstNameField = document.getElementById('firstName');
          const lastNameField = document.getElementById('lastName');
          const emailField = document.getElementById('email');
          const textareaField = document.getElementById('open-text-area');
          const productField = document.getElementById('product');
          const helpRadio = document.querySelector('input[value="ajuda"]');
          const emailCheckbox = document.getElementById('email-checkbox');
          const phoneCheckbox = document.getElementById('phone-checkbox');
          const fileField = document.querySelector('input[type="file"]');
          const successMessage = document.querySelector('.success-message');
          if (!firstNameField.value || !lastNameField.value || !emailField.value || !textareaField.value) {
            return showAndHideErrorMessage();
          }
          if (isPhoneRequired && !phoneField.value) {
            return showAndHideErrorMessage();
          }
          if (!emailField.value.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)) {
            return showAndHideErrorMessage();
          }
          firstNameField.value = '';
          lastNameField.value = '';
          emailField.value = '';
          textareaField.value = '';
          phoneField.value = '';
          productField.selectedIndex = 0;
          helpRadio.checked = true;
          emailCheckbox.checked = false;
          phoneCheckbox.checked = false;
          fileField.value = '';
          phoneLabelSpan.style.display = 'none';
          successMessage.style.display = 'block';
          isPhoneRequired = false;
          scroll(0, 0);
          hideMessageAfterTimeout(successMessage);
        }, false);

      function showAndHideErrorMessage() {
        const errorMessage = document.querySelector('.error');
        errorMessage.style.display = 'block';
        scroll(0, 0);
        hideMessageAfterTimeout(errorMessage);
        return;
      }

      function hideMessageAfterTimeout(element) {
        setTimeout(function() {
          element.style.display = 'none';
        }, 3000);
      }