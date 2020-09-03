/**
 * @file
 * Hide the permissions grid for all field permission types except custom.
 */

(function ($) {

  Drupal.behaviors.dreactPermissions = {
    attach: function (context, settings) {
      if(drupalSettings.brown_d8react_integration.dreact_permissions.canOnlyEditConfig === true) {

        $("input[data-drupal-selector^='edit-field-content-components-add-more-add-more-button-react-app']").each(function() {
          $(this).parent().hide();
        });

        $("div[class *='-subform-field-react-apps']").each(function() {
          $(this).hide();
        });

        $(".paragraph-type-title:contains('React App')").each(function() {
          $(this).parent().parent().parent().find('.remove').hide();
        });

        $("div[class *='-subform-field-pass-user-data-value']").each(function() {
          $(this).hide();
        });
      }
    }
  }
})(jQuery);
