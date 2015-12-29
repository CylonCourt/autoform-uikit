Template.afInputSubmit_uikit.helpers({
  atts: function() {
    let atts = Utility.attsToggleInvalidClass.call(this);
    return AutoForm.Utility.addClass(atts, 'uk-button uk-button-primary');
  },
});
