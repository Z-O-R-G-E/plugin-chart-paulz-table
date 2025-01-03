import {
  DataRecordValue,
  normalizeTimestamp,
  TimeFormatFunction,
} from '@superset-ui/core';

export default class DateWithFormatter extends Date {
  formatter: TimeFormatFunction;

  input: DataRecordValue;

  constructor(
      input: DataRecordValue,
      { formatter = String }: { formatter?: TimeFormatFunction } = {},
  ) {
    let value = input;
    // assuming timestamps without a timezone is in UTC time
    if (typeof value === 'string') {
      value = normalizeTimestamp(value);
    }

    super(value as string);

    this.input = input;
    this.formatter = formatter;
    this.toString = (): string => {
      if (this.formatter === String) {
        return String(this.input);
      }
      return this.formatter ? this.formatter(this) : Date.toString.call(this);
    };
  }
}
