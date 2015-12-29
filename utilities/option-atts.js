Utility.optionAtts = function() {
  let item = this;
  let atts  = {
    value: item.value,
  };

  if (item.selected) {
    atts.selected = '';
  }

  return atts;
};
