
function toggleDescription(event) {
    
    var description = event.querySelector('.description');

   
    if (description.style.display === 'none' || description.style.display === '') {
        description.style.display = 'block';
    } else {
        description.style.display = 'none';
    }
}


function goToBookingPage(eventName) {
    
    var bookingPageUrl = 'booking.html';
    
    console.log('Booking now for', eventName);
}


var eventImages = document.querySelectorAll('.event img');
eventImages.forEach(function(image) {
    image.addEventListener('click', function() {
     
        toggleDescription(this.parentElement);
    });
});

