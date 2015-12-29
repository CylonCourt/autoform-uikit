Package.describe({
  name: 'cyloncourt:autoform-uikit',
  summary: 'uikit theme for Autoform',
  version: '0.0.2',
  git: 'https://github.com/CylonCourt/autoform-uikit',
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.0.1');
  api.use([
    'ecmascript@0.1.6',
    'templating',
    'underscore',
  ], 'client');

  api.use([
    'aldeed:autoform@5.8.1',
  ]);

  api.addFiles([
    // utility
    'utilities/utility.js',
    // utility template helpers
    'utilities/atts-check-selected.js',
    'utilities/atts-toggle-invalid-class.js',
    'utilities/dsk.js',
    'utilities/option-atts.js',
    'utilities/selected-atts-adjust.js',
    // input types
    'templates/uikit/inputTypes/boolean-checkbox/boolean-checkbox.html',
    'templates/uikit/inputTypes/boolean-checkbox/boolean-checkbox.js',
    'templates/uikit/inputTypes/boolean-radios/boolean-radios.html',
    'templates/uikit/inputTypes/boolean-radios/boolean-radios.js',
    'templates/uikit/inputTypes/boolean-select/boolean-select.html',
    'templates/uikit/inputTypes/boolean-select/boolean-select.js',
    'templates/uikit/inputTypes/button/button.html',
    'templates/uikit/inputTypes/button/button.js',
    'templates/uikit/inputTypes/color/color.html',
    'templates/uikit/inputTypes/color/color.js',
    'templates/uikit/inputTypes/date/date.html',
    'templates/uikit/inputTypes/date/date.js',
    'templates/uikit/inputTypes/datetime/datetime.html',
    'templates/uikit/inputTypes/datetime/datetime.js',
    'templates/uikit/inputTypes/datetime-local/datetime-local.html',
    'templates/uikit/inputTypes/datetime-local/datetime-local.js',
    'templates/uikit/inputTypes/email/email.html',
    'templates/uikit/inputTypes/email/email.js',
    'templates/uikit/inputTypes/file/file.html',
    'templates/uikit/inputTypes/hidden/hidden.html',
    'templates/uikit/inputTypes/icon/icon.html',
    'templates/uikit/inputTypes/image/image.html',
    'templates/uikit/inputTypes/month/month.html',
    'templates/uikit/inputTypes/month/month.js',
    'templates/uikit/inputTypes/number/number.html',
    'templates/uikit/inputTypes/number/number.js',
    'templates/uikit/inputTypes/password/password.html',
    'templates/uikit/inputTypes/password/password.js',
    'templates/uikit/inputTypes/radio/radio.html',
    'templates/uikit/inputTypes/radio/radio.js',
    'templates/uikit/inputTypes/range/range.html',
    'templates/uikit/inputTypes/reset/reset.html',
    'templates/uikit/inputTypes/search/search.html',
    'templates/uikit/inputTypes/select/select.html',
    'templates/uikit/inputTypes/select/select.js',
    'templates/uikit/inputTypes/select-checkbox/select-checkbox.html',
    'templates/uikit/inputTypes/select-checkbox/select-checkbox.js',
    'templates/uikit/inputTypes/select-checkbox-inline/select-checkbox-inline.html',
    'templates/uikit/inputTypes/select-checkbox-inline/select-checkbox-inline.js',
    'templates/uikit/inputTypes/select-multiple/select-multiple.html',
    'templates/uikit/inputTypes/select-multiple/select-multiple.js',
    'templates/uikit/inputTypes/select-radio/select-radio.html',
    'templates/uikit/inputTypes/select-radio/select-radio.js',
    'templates/uikit/inputTypes/select-radio-inline/select-radio-inline.html',
    'templates/uikit/inputTypes/select-radio-inline/select-radio-inline.js',
    'templates/uikit/inputTypes/submit/submit.html',
    'templates/uikit/inputTypes/submit/submit.js',
    'templates/uikit/inputTypes/tel/tel.html',
    'templates/uikit/inputTypes/tel/tel.js',
    'templates/uikit/inputTypes/text/text.html',
    'templates/uikit/inputTypes/text/text.js',
    'templates/uikit/inputTypes/textarea/textarea.html',
    'templates/uikit/inputTypes/textarea/textarea.js',
    'templates/uikit/inputTypes/time/time.html',
    'templates/uikit/inputTypes/time/time.js',
    'templates/uikit/inputTypes/uikit-datetimepicker/uikit-datetimepicker.html',
    'templates/uikit/inputTypes/uikit-datetimepicker/uikit-datetimepicker.js',
    'templates/uikit/inputTypes/uikit-timepicker/uikit-timepicker.html',
    'templates/uikit/inputTypes/uikit-timepicker/uikit-timepicker.js',
    'templates/uikit/inputTypes/url/url.html',
    'templates/uikit/inputTypes/url/url.js',
    'templates/uikit/inputTypes/week/week.html',
    'templates/uikit/inputTypes/week/week.js',
    'templates/uikit/inputTypes/label/label.html',
    'templates/uikit/inputTypes/label/label.js',
    // components that render a form
    'templates/uikit/components/autoForm/autoForm.html',
    'templates/uikit/components/autoForm/autoForm.js',
    'templates/uikit/components/quickForm/quickForm.html',
    'templates/uikit/components/quickForm/quickForm.js',
    // components that render controls within a form
    'templates/uikit/components/afArrayField/afArrayField.html',
    'templates/uikit/components/afFormGroup/afFormGroup.html',
    'templates/uikit/components/afFormGroup/afFormGroup.js',
    'templates/uikit/components/afObjectField/afObjectField.html',
    'templates/uikit/components/afQuickField/afQuickField.html',
  ], 'client');
});
