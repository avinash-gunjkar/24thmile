$('.fileUpload input[type="file"]').change(function() {
var fullPath = $(this).val();
var filename = fullPath.replace(/^.*[\\\/]/, '');
  $(this).parent().siblings('.selected-file-name').html(filename);
  console.log(filename);
});

// $('#step3_export_act_date').datepicker({
// 	dateFormat: 'dd-M-yy',
// 	timeFormat: "hh:MMM tt",
// 	onSelect: function(datetext){
// 		var d = new Date(); // for now
// 		console.log('date=>',d);
// 		var h = d.getHours();
// 			h = (h < 10) ? ("0" + h) : h ;

// 			var m = d.getMinutes();
// 		m = (m < 10) ? ("0" + m) : m ;

// 		var s = d.getSeconds();
// 		s = (s < 10) ? ("0" + s) : s ;

// 			datetext = datetext + " " + h + ":" + m + ":" + s;
// 			console.log('datetm=>',datetext);
// 		$('#step3_export_act_date').val(datetext);
// 	},
// 	maxDate: 0
// });
// $('#step4_export_act_date').datepicker({
// 	dateFormat: 'dd-M-yy',
// 	timeFormat: "hh:mm tt",
// 	onSelect: function(datetext){
// 		var d = new Date(); // for now
// 		console.log('date=>',d);
// 		var h = d.getHours();
// 			h = (h < 10) ? ("0" + h) : h ;

// 			var m = d.getMinutes();
// 		m = (m < 10) ? ("0" + m) : m ;

// 		var s = d.getSeconds();
// 		s = (s < 10) ? ("0" + s) : s ;

// 			datetext = datetext + " " + h + ":" + m + ":" + s;
// 			console.log('datetm=>',datetext);
// 		$('#step4_export_act_date').val(datetext);
// 	},
// 	maxDate: 0
// });
// $('#step6_export_etd_date').datepicker({
// 	dateFormat: 'dd-M-yy',
// 	timeFormat: "hh:mm tt",
// 	onSelect: function(datetext){
// 		var d = new Date(); // for now
// 		console.log('date=>',d);
// 		var h = d.getHours();
// 			h = (h < 10) ? ("0" + h) : h ;

// 			var m = d.getMinutes();
// 		m = (m < 10) ? ("0" + m) : m ;

// 		var s = d.getSeconds();
// 		s = (s < 10) ? ("0" + s) : s ;

// 			datetext = datetext + " " + h + ":" + m + ":" + s;
// 			console.log('datetm=>',datetext);
// 		$('#step6_export_etd_date').val(datetext);
// 	},
// 	minDate: 0
// });
// $('#step6_export_lov_date').datepicker({
// 	dateFormat: 'dd-M-yy',
// 	timeFormat: "hh:mm tt",
// 	onSelect: function(datetext){
// 		var d = new Date(); // for now
// 		console.log('date=>',d);
// 		var h = d.getHours();
// 			h = (h < 10) ? ("0" + h) : h ;

// 			var m = d.getMinutes();
// 		m = (m < 10) ? ("0" + m) : m ;

// 		var s = d.getSeconds();
// 		s = (s < 10) ? ("0" + s) : s ;

// 			datetext = datetext + " " + h + ":" + m + ":" + s;
// 			console.log('datetm=>',datetext);
// 		$('#step6_export_lov_date').val(datetext);
// 	},
// 	maxDate: 0
// });
// $('#step6_export_eta_date').datepicker({
// 	dateFormat: 'dd-M-yy',
// 	timeFormat: "hh:mm tt",
// 	onSelect: function(datetext){
// 		var d = new Date(); // for now
// 		console.log('date=>',d);
// 		var h = d.getHours();
// 			h = (h < 10) ? ("0" + h) : h ;

// 			var m = d.getMinutes();
// 		m = (m < 10) ? ("0" + m) : m ;

// 		var s = d.getSeconds();
// 		s = (s < 10) ? ("0" + s) : s ;

// 			datetext = datetext + " " + h + ":" + m + ":" + s;
// 			console.log('datetm=>',datetext);
// 		$('#step6_export_eta_date').val(datetext);
// 	},
// 	minDate: 0
// });
// $('#step8_export_rdp_date').datepicker({
// 	dateFormat: 'dd-M-yy',
// 	timeFormat: "hh:mm tt",
// 	onSelect: function(datetext){
// 		var d = new Date(); // for now
// 		console.log('date=>',d);
// 		var h = d.getHours();
// 			h = (h < 10) ? ("0" + h) : h ;

// 			var m = d.getMinutes();
// 		m = (m < 10) ? ("0" + m) : m ;

// 		var s = d.getSeconds();
// 		s = (s < 10) ? ("0" + s) : s ;

// 			datetext = datetext + " " + h + ":" + m + ":" + s;
// 			console.log('datetm=>',datetext);
// 		$('#step8_export_rdp_date').val(datetext);
// 	},
// 	maxDate: 0
// });
// $('#step9_export_ccd_date').datepicker({
// 	dateFormat: 'dd-M-yy',
// 	timeFormat: "hh:mm tt",
// 	onSelect: function(datetext){
// 		var d = new Date(); // for now
// 		console.log('date=>',d);
// 		var h = d.getHours();
// 			h = (h < 10) ? ("0" + h) : h ;

// 			var m = d.getMinutes();
// 		m = (m < 10) ? ("0" + m) : m ;

// 		var s = d.getSeconds();
// 		s = (s < 10) ? ("0" + s) : s ;

// 			datetext = datetext + " " + h + ":" + m + ":" + s;
// 			console.log('datetm=>',datetext);
// 		$('#step9_export_ccd_date').val(datetext);
// 	},
// 	maxDate: 0
// });
// $('#step10_export_delivery_date').datepicker({
// 	dateFormat: 'dd-M-yy',
// 	timeFormat: "hh:mm tt",
// 	onSelect: function(datetext){
// 		var d = new Date(); // for now
// 		console.log('date=>',d);
// 		var h = d.getHours();
// 			h = (h < 10) ? ("0" + h) : h ;

// 			var m = d.getMinutes();
// 		m = (m < 10) ? ("0" + m) : m ;

// 		var s = d.getSeconds();
// 		s = (s < 10) ? ("0" + s) : s ;

// 			datetext = datetext + " " + h + ":" + m + ":" + s;
// 			console.log('datetm=>',datetext);
// 		$('#step10_export_delivery_date').val(datetext);
// 	},
// 	minDate: 0
// });
// $('#step11_export_erbc_date').datepicker({
// 	dateFormat: 'dd-M-yy',
// 	timeFormat: "hh:mm tt",
// 	onSelect: function(datetext){
// 		var d = new Date(); // for now
// 		console.log('date=>',d);
// 		var h = d.getHours();
// 			h = (h < 10) ? ("0" + h) : h ;

// 			var m = d.getMinutes();
// 		m = (m < 10) ? ("0" + m) : m ;

// 		var s = d.getSeconds();
// 		s = (s < 10) ? ("0" + s) : s ;

// 			datetext = datetext + " " + h + ":" + m + ":" + s;
// 			console.log('datetm=>',datetext);
// 		$('#step11_export_erbc_date').val(datetext);
// 	},
// 	minDate: 0
// });

/************* Import Dates Start ***********************************************************/

// $('#step3_import_act_date').datetimepicker();  
$('#step3_import_act_date').datetimepicker({
           format: 'DD/MM/YYYY'  
}); 
$('#step4_import_act_date').datetimepicker({
           format: 'DD/MM/YYYY'  
}); 
$('#step6_import_etd_date').datetimepicker({
           format: 'DD/MM/YYYY'  
}); 
$('#step7_import_lov_date').datetimepicker({
           format: 'DD/MM/YYYY'  
}); 
$('#step9_import_eta_date').datetimepicker({
           format: 'DD/MM/YYYY'  
}); 
$('#step10_import_rdp_date').datetimepicker({
           format: 'DD/MM/YYYY'  
}); 
$('#step11_import_ccd_date').datetimepicker({
           format: 'DD/MM/YYYY'  
}); 
$('#step12_date').datetimepicker({
           format: 'DD/MM/YYYY'  
}); 
$('.date-picker').datetimepicker({
           format: 'd-M-Y'  ,
           scrollInput :false,
           timepicker:false
}); 
$('.future-date-picker').datetimepicker({
           format: 'd-M-Y',
           minDate: new Date(),
           scrollInput :false,
           timepicker:false
}); 
$('.pickup_datetimepicker').datetimepicker({
           format: 'd-M-Y H:i',
           minDate: new Date(),
           scrollInput :false
}); 


// $('#step1_export_custom_invoice_date').datepicker({
// 	dateFormat: 'dd-M-yy',
// 	onSelect: function(datetext){
// 		var d = new Date(); // for now
// 		console.log('date=>',d);
// 		var h = d.getHours();
// 			h = (h < 10) ? ("0" + h) : h ;

// 			var m = d.getMinutes();
// 		m = (m < 10) ? ("0" + m) : m ;

// 		var s = d.getSeconds();
// 		s = (s < 10) ? ("0" + s) : s ;

// 			datetext = datetext;
// 			console.log('datetm=>',datetext);
// 		$('#step1_export_custom_invoice_date').val(datetext);
// 	},
// 	maxDate: 0
// });

// $('#step2_export_SB_date').datepicker({
// 	dateFormat: 'dd-M-yy',
// 	onSelect: function(datetext){
// 		var d = new Date(); // for now
// 		console.log('date=>',d);
// 		var h = d.getHours();
// 			h = (h < 10) ? ("0" + h) : h ;

// 			var m = d.getMinutes();
// 		m = (m < 10) ? ("0" + m) : m ;

// 		var s = d.getSeconds();
// 		s = (s < 10) ? ("0" + s) : s ;

// 			datetext = datetext;
// 			console.log('datetm=>',datetext);
// 		$('#step2_export_SB_date').val(datetext);
// 	},
// 	maxDate: 0
// });

// $('#step5_export_bol_date').datepicker({
// 	dateFormat: 'dd-M-yy',
// 	onSelect: function(datetext){
// 		var d = new Date(); // for now
// 		console.log('date=>',d);
// 		var h = d.getHours();
// 			h = (h < 10) ? ("0" + h) : h ;

// 			var m = d.getMinutes();
// 		m = (m < 10) ? ("0" + m) : m ;

// 		var s = d.getSeconds();
// 		s = (s < 10) ? ("0" + s) : s ;

// 			datetext = datetext;
// 			console.log('datetm=>',datetext);
// 		$('#step5_export_bol_date').val(datetext);
// 	},
// 	maxDate: 0
// });

// $('#step7_export_commercial_invoice_date').datepicker({
// 	dateFormat: 'dd-M-yy',
// 	onSelect: function(datetext){
// 		var d = new Date(); // for now
// 		console.log('date=>',d);
// 		var h = d.getHours();
// 			h = (h < 10) ? ("0" + h) : h ;

// 			var m = d.getMinutes();
// 		m = (m < 10) ? ("0" + m) : m ;

// 		var s = d.getSeconds();
// 		s = (s < 10) ? ("0" + s) : s ;

// 			datetext = datetext;
// 			console.log('datetm=>',datetext);
// 		$('#step7_export_commercial_invoice_date').val(datetext);
// 	},
// 	maxDate: 0
// });
 
 /*Start::file preview */
   $('input[type="file"].preview').change(function(){
                    
                    var previewTarget = $(this).attr('data-previewTarget');
                    if(this.files && this.files[0]){
                        var reader = new FileReader();
                        reader.onload = function(e){
                            $(previewTarget).attr('src',e.target.result);
                        }
                        reader.readAsDataURL(this.files[0]);
                    }
                }); 
/*End::file preview */



$(document).on("keypress",'.only-numbers',function(e){
    
    var ok = /[0-9]/.test(String.fromCharCode(e.charCode));
    if(e.charCode==0)
        ok=true;
    if (!ok)
        e.preventDefault();
});

$(document).on("keypress",'.only-alphabet',function(e){
    
    var ok = /[A-Za-z]/.test(String.fromCharCode(e.charCode));
    if(e.charCode==0)
        ok=true;
    if (!ok)
        e.preventDefault();
});

$(document).on("keypress",'.alpha-numeric',function(e){
    
    var ok = /[A-Za-z0-9]/.test(String.fromCharCode(e.charCode));
    if(e.charCode==0)
        ok=true;
    if (!ok)
        e.preventDefault();
});

$(document).on("keypress",'.alpha-num-space',function(e){
    var ok = /[A-Za-z0-9 ]/.test(String.fromCharCode(e.charCode));
    if(e.charCode==0)
        ok=true;
    if (!ok)
        e.preventDefault();
});
$(document).on("keypress",'.numeric-with-special-characters',function(e){
    var ok = /[0-9\/\-_]/.test(String.fromCharCode(e.charCode));
    if(e.charCode==0)
        ok=true;
    if (!ok)
        e.preventDefault();
});

// $(document).on("input paste drop",'.decimal-numbers',function(e){
//     this.value = this.value.replace(/[^0-9.]/g, ''); 
//     this.value = this.value.replace(/(\..*)\./g, '$1');
// });

$(".decimal-numbers").numeric({ decimalPlaces: 2 });

$(document).on("input paste drop",'.only-numbers',function(e){
    this.value = this.value.replace(/[^0-9]/g, ''); 
    // this.value = this.value.replace(/(\..*)\./g, '$1');
});



// $(document).on("paste drop",'.only-alphabet,.alpha-numeric,.alpha-num-space,.numeric-with-special-characters,.decimal-numbers',function(e){
// 	e.preventDefault();
// });

$(document).on('submit','form',function(e){
     
      if($(this).hasClass('not-hide-submit-btn')){
          return;
      }
        if($(this).valid()){
            
            $(this).find('input[type="submit"],button[type="submit"]').css('display','none');
            $(this).find('input[type="submit"],button[type="submit"]').after('<div class="css-animated-loader"></div>'); 
            
        }
        
    });
 
 $(document).ready(function(){
     $('#progressbar li.active .step-label, #progressbar li.active:before').click(function(){
         $(this).parent('li').find('fieldset').toggle();
     });
 });
 
 
$('.pannelGroup .heading').on('click', function(){
   $(this).parent('.pannelGroup').toggleClass('show'); 
});

$(document).on('mouseover','.drplist',function(){
	var $actionsBtn = $(this);
	var $menuList = $actionsBtn.find('ul.d-list');
	$menuList.height();
	$menuList.css({top:(-($menuList.height() - $actionsBtn.height())/2)+'px'});

});

function slugify(input) {
    return input.toString().toLowerCase().replace(/\s+/g, '-') //replace space with -
  .replace(/[^\w\-]+/g, '') //remove all non-word character
  .replace(/\-\-+/g, '-') //replace multiple -  with single -
  .replace(/^-+/, '') //trim - from start of text
  .replace(/-+$/, ''); //trim - from end of text
  }
  

  function numberWithCommas(x) {
	//return x.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
	var parts = x.toString().split(".");
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return parts.join(".");
}