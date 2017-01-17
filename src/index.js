const OriginalDate = Date;

function timeshift(...args) {

  if (!args.length) return Date = OriginalDate;

  const diff = OriginalDate.now() - new OriginalDate(...args).getTime();

  class FakeDate extends OriginalDate {
    constructor(...args) {
      if (args.length) super(...args);
      else super(OriginalDate.now() - diff);
    }
  }

  FakeDate.now = () => OriginalDate.now() - diff;

  Date = FakeDate;
}

module.exports = timeshift;
