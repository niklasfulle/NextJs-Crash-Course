export default function getFormattedDate(dateString: string): string {
  return new Intl.DateTimeFormat('de-De', { dateStyle: 'long' }).format(new Date(dateString))
}