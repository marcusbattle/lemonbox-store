(function($){
	
	$('select[name="fields[product_id][]"]').on( 'change', function(){

		var selected = $(this).find('option:selected');
		var payment_type = (selected.data('payment-type')) ? selected.data('payment-type') : null ;
		var amount_field = selected.closest('.field').find('input[name="fields[amount][]"]');

		if ( payment_type == 'fixed' ) {

			amount_field.val('100');

		} else {

			amount_field.val('0');

		}

	});

})(jQuery);