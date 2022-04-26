export const formatDate = date => {
    const dateObj = new Date(date);
    const monthsArray = ["Jan", "Feb", "March", "April", "May", "June", "July", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const year = dateObj.getFullYear();
    const monthDay = dateObj.getDate();
    const month = dateObj.getMonth();
    // const time = dateObj.toLocaleTimeString().slice(0, 5);
    const dateMessage = `${monthsArray[month]} ${monthDay}, ${year}`;
    return dateMessage;
};