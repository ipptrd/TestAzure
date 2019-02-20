

/**
 * Ex1. Simple method
 */

/*
$('#b1').click(function() {
    $('#info').html('Button1'); 
});

$('#b2').click(function() {
    $('#info').html('Button2'); 
});

$('#b3').click(function() {
    $('#info').html('Button3'); 
});

$('#b4').click(function() {
    $('#info').html('Button4'); 
});

$('#b5').click(function() {
    $('#info').html('Button5'); 
});

$('#b6').click(function() {
    $('#info').html('Button6'); 
});
*/


/**
 * Ex2. Optimized method
 */
$('.btn').click(function() {
    $('#info').html(this.innerHTML); 
});
