Utility.attsToggleInvalidClass = function() {
  let atts = _.clone(this.atts);
  let context = AutoForm.getFormSchema().namedContext(AutoForm.getFormId());

  if (context.keyIsInvalid(atts.name)) {
    atts = AutoForm.Utility.addClass(atts, 'uk-form-danger');
  }

  return atts;
};
