export default function format(date) {
    const months = {
        0: 'January',
        1: 'Feburary',
        2: 'March',
        3: 'April',
        4: 'May',
        5: 'June',
        6: 'July',
        7: 'August',
        8: 'September',
        9: 'October',
        10: 'November',
        11: 'December',
    }
    const _date = new Date(date);
    const day = _date.getDate();
    const month = _date.getMonth();
    const year = _date.getFullYear();
    return `${day} ${months[month]} ${year}`;
}
