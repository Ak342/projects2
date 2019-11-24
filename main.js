

$(document).ready(function(){
	alert("Page is refreshed, Now you can Add New items to the Cart....!! Enjoy Your Food.. :)");
});





$("#pizza").click(function(){
	$("#pizza").toggleClass("abc");
});
	
$("#burger").click(function(){
	$("#burger").toggleClass("abc");
});
	
$("#cp").click(function(){
		$("#cp").toggleClass("abc");
});

$("#gs").click(function(){
		$("#gs").toggleClass("abc");
});






/* CART 2 Hiding Option */

$("#pizza").click(function(){
	$("#cart2").hide();
});

$("#burger").click(function(){
	$("#cart2").hide();
});

$("#cp").click(function(){
	$("#cart2").hide();
});

$("#gs").click(function(){
	$("#cart2").hide();
});






/* Adding & Removing */

/* CART 3 */

$("#pizza2").hide();
$("#pizza_price").hide();

$("#burger2").hide();
$("#burger_price").hide();

$("#cp2").hide();
$("#cp_price").hide();

$("#gs2").hide();
$("#gs_price").hide();


$("#total").hide();
$("#total_price").hide();







/* REST */


/*ADDING TO CART*/

$("#pizza").click(function(){
	$("#addItem").click(function(){
		$("#pizza2").show();
		$("#pizza_price").show();
		$("#total").show();
		$("#total_price").show();
	});
});


$("#burger").click(function(){
	$("#addItem").click(function(){
		$("#burger2").show();
		$("#burger_price").show();
		$("#total").show();
	});
});


$("#cp").click(function(){
	$("#addItem").click(function(){
		$("#cp2").show();
		$("#cp_price").show();
		$("#total").show();
	});
});


$("#gs").click(function(){
	$("#addItem").click(function(){
		$("#gs2").show();
		$("#gs_price").show();
		$("#total").show();
	});
});






/*REMOVING FROM CART*/


$("#removeItem").click(function(){
	$("#pizza2").hide();
	$("#pizza_price").hide();
	$("#total").hide();
	$("#total_price").hide();
});


$("#removeItem").click(function(){
	$("#burger2").hide();
	$("#burger_price").hide();
	$("#total").hide();
	$("#total_price").hide();
});


$("#removeItem").click(function(){
	$("#cp2").hide();
	$("#cp_price").hide();
	$("#total").hide();
	$("#total_price").hide();
});


$("#removeItem").click(function(){
	$("#gs2").hide();
	$("#gs_price").hide();
	$("#total").hide();
	$("#total_price").hide();
});




