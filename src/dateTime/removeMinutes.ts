export interface IRemoveMinutes {
  date: Date;
  minutes: number;
}

export function removeMinutes({ date, minutes }: IRemoveMinutes) {
  const newDate = new Date(date);
  newDate.setTime(newDate.getTime() - minutes * 60000);
  return newDate;
}
