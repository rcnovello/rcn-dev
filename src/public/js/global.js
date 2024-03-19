
"use strict"

/*$(document).ready(function() {

});*/
/* Executar no carregamento do arquivo JS */
$(document).ready(function() {

  funcPoliticaPrivacidade();

});


//Exibir politica de privacidade
function funcPoliticaPrivacidade(){
  const cNavPoliticaPrivacidade = $('.pushpin-demo-nav'); 
  cNavPoliticaPrivacidade.prop("hidden", true);

  const cPrivacyPolicyAccepted = getCookie('privacyPolicyAccepted');

  if (cPrivacyPolicyAccepted != 'true'){  

    cNavPoliticaPrivacidade.prop("hidden", false);

    cNavPoliticaPrivacidade.each(function() {
      var $this = $(this);
      var $target = $('#' + $this.attr('data-target'));
      $this.pushpin({
        top: $target.offset().bottom,
        bottom: $target.offset().bottom + $target.outerHeight() - $this.height()
      });
    });

  };

  function getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
  };

};

function setPrivacyPolicyCookie() {
    var date = new Date();
    date.setTime(date.getTime() + (365 * 24 * 60 * 60 * 1000)); // Expires in 1 year
    document.cookie = "privacyPolicyAccepted=true; expires=" + date.toUTCString() + "; path=/";
    console.log(document.cookie);
    funcPoliticaPrivacidade();
};