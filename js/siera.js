console.log("Hii!")




// pick-up
//flatpickr for date input
flatpickr('#pickupDate', {
    dateFormat: "Y-m-d",
});

//flatpickr for time input
flatpickr('#pickupTime', {
    enableTime: true,
    noCalendar: true,
    time_24hr: true,
    dateFormat: "H:i",
});

// drop-off
// flatpickr for date input
flatpickr('#Dropoffdate', {
    dateFormat: "Y-m-d",
});

//flatpickr for time input
flatpickr('#Dropofftime', {
    enableTime: true,
    noCalendar: true,
    time_24hr: true,
    dateFormat: "H:i",
});

