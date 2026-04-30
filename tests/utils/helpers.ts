export async function wait(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export function getCurrentDate(): Date {
  return new Date();
}

export function formatDate(date: Date, format: string = 'YYYY-MM-DD'): string {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  const hours = String(date.getHours()).padStart(2, '0');
  const minutes = String(date.getMinutes()).padStart(2, '0');
  const seconds = String(date.getSeconds()).padStart(2, '0');

  const dateMap: { [key: string]: string } = {
    YYYY: String(year),
    MM: month,
    DD: day,
    HH: hours,
    mm: minutes,
    ss: seconds,
  };

  return format.replace(/YYYY|MM|DD|HH|mm|ss/g, (match) => dateMap[match] || match);
}

export function addDaysToDate(date: Date, days: number): Date {
  const result = new Date(date);
  result.setDate(result.getDate() + days);
  return result;
}

export function getTimeFromNow(minutes: number): Date {
  return addDaysToDate(getCurrentDate(), Math.round((minutes * 24) / 1440));
}

export function log(message: string, level: 'info' | 'warn' | 'error' = 'info'): void {
  const timestamp = formatDate(getCurrentDate(), 'YYYY-MM-DD HH:mm:ss');
  console.log(`[${timestamp}] [${level.toUpperCase()}] ${message}`);
}

export function generateRandomString(length: number): string {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let result = '';
  for (let i = 0; i < length; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return result;
}

export function generateRandomNumber(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
