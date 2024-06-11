export function timeAgo(date: string) {
    const now = new Date();
    const then = new Date(date);
    const diff = now.getTime() - then.getTime();
    const seconds = diff / 1000;
    const minutes = seconds / 60;
    const hours = minutes / 60;
    const days = hours / 24;
    const weeks = days / 7;
    const months = days / 30;
    const years = days / 365;

    const formatTime = (value: number, unit: string) => {
        const roundedValue = Math.floor(value);
        return roundedValue === 1 ? `1 ${unit} ago` : `${roundedValue} ${unit}s ago`;
    };

    if (seconds < 60) {
        return formatTime(seconds, 'second');
    } else if (minutes < 60) {
        return formatTime(minutes, 'minute');
    } else if (hours < 24) {
        return formatTime(hours, 'hour');
    } else if (days < 7) {
        return formatTime(days, 'day');
    } else if (weeks < 4) {
        return formatTime(weeks, 'week');
    } else if (months < 12) {
        return formatTime(months, 'month');
    } else {
        return formatTime(years, 'year');
    }
}
