//Hidden Collapsed Banner
$(document).ready(function(){
	
	$("#nix_banner").removeClass("hidden_banner");
	
    $("#nix_banner_small").hide();
});

//Expanded Banner Animations
$(document).ready(function() { 
	
//If user clicks collapse before animations end, finish
$("#collapse").click(function(){
    $("#wavy").finish();
    $("#woke").finish();
    $("#banner_shade").finish();
    $("#alive").finish();
    $("#big_logo").finish();
    $("#watch").finish();
    $("#diplomat").finish();
    $("#shop").finish();
    $("#shop_box").finish();
    $("#logo1").finish();
    
});
//Expanded animation sequences
    $('#wavy')
    .hide()
    .fadeIn({queue: false, duration: 5500})
    .animate({'top': '-250px'}, 7000);
    	$('#wavy')
    	.delay(3500)
    	.fadeOut({ duration: 1000});
    
    $('#woke')
    .delay(3000)
    .css({'display':'block', 'opacity':'0'})
    .animate({'opacity':'1','bottom':'0px'}, 1500);
	    $('#woke')
	    .delay(500)
		.fadeOut({ duration: 1000});

    $('#banner_shade')
    .hide()
    .delay(6000)
    .fadeIn({queue: true, duration: 1000});
    
    $('#alive')
	.hide()
    .delay(7000)
    .css({'display':'block', 'opacity':'0'})
    .animate({'opacity':'1','top':'20px'}, 1000);
    	$('#alive')
    	.delay(1500)
    	.fadeOut({ duration: 1000});
    
    $('#big_logo')
    .hide()
    .delay(7500)
    .css({'display':'block', 'opacity':'0'})
    .animate({'opacity':'1','top':'20px'}, 1000);
    	$('#big_logo')
    	.delay(1000)
    	.fadeOut({ duration: 1000});
    	
    //Final Sequence
    $('#watch')
    .hide()
    .delay(11500)
    .fadeIn({queue: true, duration: 1000});
    $('#diplomat')
    .hide()
    .delay(11750)
    .fadeIn({queue: true, duration: 1000});
    $('#shop')
    .hide()
    .delay(12000)
    .fadeIn({queue: true, duration: 1000});
    $('#shop_box')
    .hide()
    .delay(12000)
    .fadeIn({queue: true, duration: 1000});
    $('#logo1')
    .hide()
    .delay(12250)
    .css({'display':'block', 'opacity':'0'})
    .animate({'opacity':'1','top':'25px'}, 1000);
  
});
	
//Onclick conversion to collapsed banner
$(document).ready(function(){
    $("#collapse").click(function(){
    	
    	$("#nix_banner").hide();
        $("#nix_banner_small").show();
        
    });
     
    
    $("#expand").click(function(){
        $("#nix_banner_small").hide();
        $("#nix_banner").show();
    //Repeated final sequence after banner reexpanded
    $('#watch')
    .hide()
    .delay(500)
    .fadeIn({queue: true, duration: 1000});
    $('#diplomat')
    .hide()
    .delay(750)
    .fadeIn({queue: true, duration: 1000});
    $('#shop')
    .hide()
    .delay(1000)
    .fadeIn({queue: true, duration: 1000});
    $('#shop_box')
    .hide()
    .delay(1000)
    .fadeIn({queue: true, duration: 1000});
    $('#logo1')
    .hide()
    .delay(1250)
    .css({'display':'block', 'opacity':'0'})
    .animate({'opacity':'1','top':'30px'}, 1000);
    });
});