var handler = StripeCheckout.configure({
    key: 'pk_test_fads0ZlNqu7ZE4dh5Ko3U4Mr',
    image: '/img/purple.png',
    token: function(token) {
        // Use the token to create the charge with a server-side script.
        // You can access the token ID with `token.id`
    }
});

$('#checkout').on('click', function(e) {
    console.log("hello");
    // Open Checkout with further options
    handler.open({
        name: 'Purple',
        description: 'Web Development & Design, 4 hours',
        amount: 54000
    });
    e.preventDefault();
});

// Close Checkout on page navigation
$(window).on('popstate', function() {
    handler.close();
});
