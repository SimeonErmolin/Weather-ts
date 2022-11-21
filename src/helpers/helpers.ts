export const TEMPLATE_CITY = 'City not selected';

export const TABS = {
    NOW: 'now',
    DETAILS: 'details',
    FORECAST: 'forecast',
}

export const collectionMounths = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

export function getTime(timestamp: number) {
    const time = new Date(timestamp * 1000);
    return formatTime(time, 0);
}

export function formatTime(time: Date, utc: number) {
    let hours: any = time.getHours();
    let minutes: any = time.getMinutes();

    if (utc) {
        hours = time.getHours() + utc;
    }
    if (hours < 10) {
        hours = "0" + hours;
    }
    if (minutes < 10) {
        minutes = "0" + minutes;
    }

    return `${hours}:${minutes}`
}