Template.afSelectMultiple_uikit.helpers({
  optionAtts: Utility.optionAtts,
  atts: function() {
    let atts = Utility.attsToggleInvalidClass.call(this);
    return AutoForm.Utility.addClass(atts, 'browser-default');
  },
});
