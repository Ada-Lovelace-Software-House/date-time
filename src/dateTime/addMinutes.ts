export interface IAddMinutes {
  date: Date;
  minutes: number;
}

export function addMinutes({ date, minutes }: IAddMinutes) {
  const newDate = new Date(date);
  newDate.setTime(newDate.getTime() + minutes * 60000);
  return newDate;
}
