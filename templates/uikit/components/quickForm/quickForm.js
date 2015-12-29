Template.quickForm_uikit.helpers({
  submitButtonAtts: function() {
    const qfAtts = this.atts;
    let atts = {
      class: 'uk-button uk-button-primary',
    };
    if (typeof qfAtts.buttonClasses === 'string') {
      atts.class = qfAtts.buttonClasses;
    }
    return atts;
  },
  qfAutoFormContext() {
    let ctx = _.clone(this.qfAutoFormContext || {});

    ctx = AutoForm.Utility.addClass(ctx, 'ui-form');
    delete ctx['id-prefix'];
    return ctx;
  }
});
