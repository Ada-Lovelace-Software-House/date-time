import { addDays } from './addDays';
import { changeUTCTime } from './changeUTCTime';

export function setToUTCLastMinuteOfDay(date: Date | string) {
  const newDate = new Date(date);
  const adjustedDate = changeUTCTime(newDate, 2, 59, 59, 999);
  const lastMinuteOfDay = addDays({ date: adjustedDate, days: 1 });
  return lastMinuteOfDay;
}
