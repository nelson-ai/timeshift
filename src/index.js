const OriginalDate = Date;

function timeshift(...args) {
  // Nil argument means reset
  if (!args.length || args[0] === null || typeof args[0] === 'undefined') return Date = OriginalDate;

  // Create fake Date object
  const diff = OriginalDate.now() - new OriginalDate(...args).getTime();

  class FakeDate extends OriginalDate {
    constructor(...args) {
      if (args.length) super(...args);
      else super(OriginalDate.now() - diff);
    }
  }

  FakeDate.now = () => OriginalDate.now() - diff;

  // Assign global variable (!)
  Date = FakeDate;

  return OriginalDate;
}

module.exports = timeshift;
