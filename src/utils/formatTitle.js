export const formatTitle = (source, title) => {
    switch (source) {
        case 'developers':
            return `Developed by ${title}`;
        case 'publishers':
            return `Published by ${title}`;
        default:
            return title;
    }
}
