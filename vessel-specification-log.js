// JavaScript (jQuery) file for 'Vessel Specification Log' custom module:

// Wrap all the code in an anonymous function in order to prevent namespace collisions, and to
// allow for jQuery to be set in a safe mode where it will not collide with other javascript libraries.
(function ($) {
// In Drupal 7, each element of Drupal.behaviors is an object with an element 'attach'
// (and optionally an element'detach'), which is executed when the document is ready
Drupal.behaviors.formTheme = {
  attach:function() {
        var defaults = [];
		// First, define an empty array. Next, add three elements to the array, one for each of the form elements. The value
		// is of the array element is set as the default text. This text is run through Drupal.t(),
		// which is the Drupal JavaScript equivalent of the Drupal PHP t() function, and allows
		// for translating of text in a JavaScript document defaults["#edit-vessel_id"] = Drupal.t("Id");
			defaults["#edit-vessel_name"] = Drupal.t("Vessel Name");
			defaults["#edit-vessel_type"] = Drupal.t("Vessel Type");
			defaults["#edit-machine_id"] = Drupal.t("Id");
			defaults["#edit-machine_type"] = Drupal.t("machine_type");
			defaults["#edit-machine_manufacturer"] = Drupal.t("Manufacturer");
			defaults["#edit-machine_model"] = Drupal.t("Model");
			defaults["#edit-machine_serial_nbr"] = Drupal.t("Serial No.");
			defaults["#edit-machine_tech_data"] = Drupal.t("machine_tech_data");
			defaults["#edit-parts_id"] = Drupal.t("Id");
			defaults["#edit-parts_type"] = Drupal.t("Parts Type");
			defaults["#edit-parts_tech_spec_id"] = Drupal.t("Id");
			defaults["#edit-parts_tech_spec_desc"] = Drupal.t("Description");
			defaults["#edit-parts_tech_spec_value"] = Drupal.t("Value");
			// Next we loop through each of the elements of the array
			var element;
			for(element in defaults)
			{
				// We wrap the body in the following if() statement as each element in an array will also have a
				// prototype element.
				if(defaults.hasOwnProperty(element)) {
					// 1) Set a placeholder in the form element
					// 2) Set the CSS text color to white for the placeholder
					// 3) Attach an onfocus and onblur listener to each element
					$(element).val(defaults[element]).css("color", "#E1E1E1").focus(function() {
						// This is entered on focus. It checks if the value of the form element is
						// the default value of the placeholder, and if it is, it clears the value and
						// sets the text color to pink,as the entered text will be the actual text
						// and not the greyed out placeholder text.
						var key = "#" + $(this).attr("id");
						if($(this).val() === defaults[key]) {
							$(this).css("color", "#FFD2DB").val("");
						}
					}).blur(function()
					{
						// This is entered on blur, when the element is exited out of. It checks if the element
						// is empty, and if it is, it sets the default placeholder text back into the element, and
						// changes the text color to the white placeholder text color.
						if($(this).val() == "") {
							var key = "#" + $(this).attr("id");
							$(this).css("color", "#E1E1E1").val(defaults[key]);
						}
					});
				}
			}
		}
	};
}(jQuery));
