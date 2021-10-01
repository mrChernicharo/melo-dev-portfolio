import { intervalToDuration, Duration } from 'date-fns';

export function getXPTime(startDate: Date): string {
  const duration: globalThis.Duration = intervalToDuration({
    start: new Date(startDate),
    end: new Date(),
  });

  let [years, months, days] = ['', '', ''];

  // @ts-ignore
  if (duration?.years > 0) {
    years = duration.years === 1 ? '1 year' : `${duration.years} years`;
  }
  // @ts-ignore
  if (duration?.months > 0) {
    months = duration.months === 1 ? '1 month' : `${duration.months} months`;
  }
  // @ts-ignore
  if (duration?.days > 0) {
    days = duration.days === 1 ? '1 day' : `${duration.days} days`;
  }

  const response = [years, months, days].filter(Boolean);

  switch (response.length) {
    case 3:
      response[1] += ' and';
      response[0] += ',';
      break;
    case 2:
      response[0] += ' and';
      break;
  }
  return response.join(' ');
}
