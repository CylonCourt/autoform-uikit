AutoForm.addInputType('uikit-timepicker', {
  template: 'afUikitTimePicker',
  valueConverters: {
    'stringArray': AutoForm.valueConverters.stringToStringArray
  },
});

Template.afUikitDateTimePicker.onDestroyed(function() {
  let dtp = this.$('input').data('timepicker');
  if (dtp) {
    dtp.destroy();
  }
});
