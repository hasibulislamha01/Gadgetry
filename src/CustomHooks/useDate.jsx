
const useDate = ({ date }) => {

    console.log(date);
    const isoDate = date;
    // const isoDate = "2024-07-29T11:45:00Z"
    const options = {
        weekday: 'long', year: 'numeric', month: 'long', day: 'numeric',
        hour: '2-digit', minute: '2-digit', timeZoneName: 'short'
    };
    const formattedDate = new Date(isoDate).toLocaleString('en-US', options);
    console.log(formattedDate);
    // Output: Monday, July 29, 2024, 11:45 AM UTC
    return (formattedDate)
};

export default useDate;