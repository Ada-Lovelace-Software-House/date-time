export interface IRemoveDays {
  date: Date;
  days: number;
}

export function removeDays({ date, days }: IRemoveDays) {
  const newDate = new Date(date);
  newDate.setDate(newDate.getDate() - days);
  return newDate;
}
