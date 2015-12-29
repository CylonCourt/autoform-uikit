Template.afLabel_uikit.helpers({
  atts: function() {
    var ctx = _.clone(this.afFieldLabelAtts || {});
    ctx = AutoForm.Utility.addClass(ctx, 'uk-form-label');

    return ctx;
  },
});
