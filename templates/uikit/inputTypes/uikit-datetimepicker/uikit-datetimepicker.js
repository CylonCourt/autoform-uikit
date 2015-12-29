AutoForm.addInputType('uikit-datetimepicker', {
  template: 'afUikitDateTimePicker',
  valueIn: function(val, atts) {
    // datetimepicker expects the date to represent local time,
    // so we need to adjust it if there's a timezoneId specified
    let timezoneId = atts.timezoneId;
    if (typeof timezoneId === 'string') {
      if (typeof moment.tz !== 'function') {
        throw new Error('If you specify a timezoneId, make sure that you\'ve added a moment-timezone package to your app');
      }
      if (val instanceof Date) {
        return moment(AutoForm.Utility.dateToNormalizedLocalDateAndTimeString(val, timezoneId), 'YYYY-MM-DD[T]HH:mm:ss.SSS').toDate();
      }
    }

    return val;
  },
  valueOut: function() {
    let m = this.data('datepicker').current;

    if (!m) {
      return m;
    }

    var timezoneId = this.attr('data-timezone-id');
    // default is local, but if there's a timezoneId, we use that
    if (typeof timezoneId === 'string') {
      if (typeof moment.tz !== 'function') {
        throw new Error('If you specify a timezoneId, make sure that you\'ve added a moment-timezone package to your app');
      }
      m = moment.tz(AutoForm.Utility.dateToNormalizedLocalDateAndTimeString(m.toDate()), timezoneId);
    }
    return m.toDate();
  },
  valueConverters: {
    'string': function(val) {
      return (val instanceof Date) ? val.toString() : val;
    },
    'stringArray': function(val) {
      if (val instanceof Date) {
        return [val.toString()];
      }
      return val;
    },
    'number': function(val) {
      return (val instanceof Date) ? val.getTime() : val;
    },
    'numberArray': function(val) {
      if (val instanceof Date) {
        return [val.getTime()];
      }
      return val;
    },
    'dateArray': function(val) {
      if (val instanceof Date) {
        return [val];
      }
      return val;
    }
  },
  contextAdjust: function(context) {
    if (context.atts.timezoneId) {
      context.atts['data-timezone-id'] = context.atts.timezoneId;
    }
    delete context.atts.timezoneId;
    return context;
  }
});

Template.afUikitDateTimePicker.helpers({
  atts: function() {
    let atts = _.clone(this.atts);
    delete atts.dateTimePickerOptions;
    return atts;
  },
});

Template.afUikitDateTimePicker.onRendered(function() {
  let $input = this.$('input');
  let data = this.data;
  let opts = data.atts.dateTimePickerOptions || {};

  // instantiate datetimepicker
  UIkit.datepicker($input, opts);

  // set and reactively update values
  this.autorun(function() {
    let data = Template.currentData();
    let dtp = $input.data('datepicker');

    // set month value
    if (data.month) {
      dtp.setMonth(data.month);
    }

    if (data.year) {
      dtp.setYear(data.year);
    }
  });
});

Template.afUikitDateTimePicker.onDestroyed(function() {
  let dtp = this.$('input').data('datepicker');
  if (dtp) {
    dtp.destroy();
  }
});
