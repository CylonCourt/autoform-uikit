Template.afBooleanRadioGroup_uikit.helpers({
  atts: Utility.attsToggleInvalidClass,
});

Template.afBooleanRadioGroup_uikit.helpers({
  falseAtts: function() {
    let atts = _.omit(this.atts, 'id', 'trueLabel', 'falseLabel', 'data-schema-key');
    if (this.value === false) {
      atts.checked = '';
    }
    return atts;
  },
  trueAtts: function() {
    let atts = _.omit(this.atts, 'id', 'trueLabel', 'falseLabel', 'data-schema-key');
    if (this.value === true) {
      atts.checked = '';
    }
    return atts;
  },
});
