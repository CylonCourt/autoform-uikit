Template.afBooleanRadioGroup_uikit.helpers({
  atts: Utility.attsToggleInvalidClass,
  dsk: Utility.dsk,
  falseAtts: function() {
    var atts = _.omit(this.atts, 'trueLabel', 'falseLabel', 'nullLabel', 'data-schema-key');
    if (this.value === false) {
      atts.checked = '';
    }
    return atts;
  },
  trueAtts: function() {
    var atts = _.omit(this.atts, 'trueLabel', 'falseLabel', 'nullLabel', 'data-schema-key');
    if (this.value === true) {
      atts.checked = '';
    }
    return atts;
  },
  nullAtts: function() {
    var atts = _.omit(this.atts, 'trueLabel', 'falseLabel', 'nullLabel', 'data-schema-key');
    if (this.value !== true && this.value !== false) {
      atts.checked = '';
    }
    return atts;
  },
});
