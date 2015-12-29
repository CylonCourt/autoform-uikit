Template.afFormGroup_uikit.helpers({
  addInputField: function() {
    let skipInputType = [
      'checkbox',
      'checkbox-group',
      'boolean-checkbox',
      'select-radio',
      'select-checkbox-inline',
      'select-radio-inline',
      'boolean-radios',
      'toggle',
      'switch',
    ];
    let type = AutoForm.getInputType(this);
    let result = !_.contains(skipInputType, type);
    return result;
  },
  skipLabel: function() {
    let skipLabelTypes = [
      'checkbox',
      'checkbox-group',
      'boolean-checkbox',
      'select-radio',
      'select-checkbox-inline',
      'select-radio-inline',
      'boolean-radio',
      'toggle',
      'switch',
    ];
    let type = AutoForm.getInputType(this);
    let result = this.skipLabel || _.contains(skipLabelTypes, type);
    return result;
  },
});

Template.afFormGroup_uikit.onRendered(function() {
  let formId = AutoForm.getFormId();
  this.autorun((function(_this) {
    return function() {
      let value = AutoForm.getFieldValue(_this.data.name, formId);
      let inputValue = AutoForm.getInputValue(_this.find('input'));
      let type = AutoForm.getInputType(_this.data);
      let placeholder = _this.data.afFieldInputAtts.placeholder;
      let skipActiveLabelTypes = [
        'select',
        'checkbox',
        'checkbox-group',
        'boolean-checkbox',
        'select-radio',
        'select-checkbox-inline',
        'select-radio-inline',
        'boolean-radio',
        'toggle',
        'switch',
      ];

      if (!_.contains(skipActiveLabelTypes, type)) {
        if (!!value || !!inputValue || inputValue === 0 || !!placeholder) {
          return _this.$('.input-field > label:not(:focus)').addClass('active');
        }
        return _this.$('.input-field > label:not(:focus)').removeClass('active');
      }
    };
  })(this));
});
