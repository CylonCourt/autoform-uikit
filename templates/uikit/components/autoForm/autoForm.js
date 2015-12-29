Template.autoForm_uikit.helpers({
  atts: function() {
    let atts = Utility.attsToggleInvalidClass.call(this);
    return AutoForm.Utility.addClass(atts, 'uk-form');
  },
});
