Utility.attsCheckSelected = function() {
  let atts = Utility.attsToggleInvalidClass.call(this);
  if (this.selected) {
    atts.checked = '';
  }
  return atts;
};
