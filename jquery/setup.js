$(document).ready(function() {
    $('#promo').cycle({
        fx: 'fade',
        timeout:    4000,
        speed:      1000,
        next: '#promonav .next',
        pager:    '#promoindex',
        height: 190,
        pause: 1
    });
});