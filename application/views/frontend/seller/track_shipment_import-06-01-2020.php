
<style>
.comment-group {
    border-bottom:none;
	padding: none;
}
.comment-img {
    position: initial !important;
}
.comment-img img {
    max-width: 80%;
    border-radius: 0%;
}
.section-title {
    text-align: left;
    padding-bottom: 0px;
    padding-top: 45px;
}
.wshipping-content-block {
    padding: 0px 0px;
}

@media (min-width: 840px){
	.mdl-grid {
		padding: 8px;
		width: 100% !important;
	}
}
ul#ui-id-1 {
    z-index: 9999 !important;
    padding: 3px !important;
    border: 1px solid #e2e9e6 !important;
	background: #fff !important;
    width: 16.5% !important;
	height:200px !important;
	overflow: auto !important;
}
ul#ui-id-2 {
    z-index: 9999 !important;
    padding: 3px !important;
    border: 1px solid #e2e9e6 !important;
	background: #fff !important;
    width: 16.5% !important;
	height:200px !important;
	overflow: auto !important;
}
.hideStepSection{
	opacity: 0; 
	display: none;
}
</style>
<link rel="stylesheet" href="//code.jquery.com/ui/1.12.1/themes/base/jquery-ui.css">
   <!-- Tracking start -->
   <div class="wshipping-content-block">
       <div class="container">
       <div class="row">
          <div class="col-12 col-lg-12">
              <div class="tracking-block">
                  <div class="tab-content">
		  <h3 class="heading3-border text-uppercase">Track your Shipment </h3>
                  <div class="wshipping-content-block shipping-block">
	     <div class="container">
	    <div class="row">
          <div class="col-12 col-lg-12">
		  
		   <!-- Customer Registration Start -->
		   <div class="wshipping-content-block shipping-block">
			 <div class="container">
			   <div class="row">
				 <div class="shipping-form-block">
				 <form class="steps" action="<?php echo base_url('seller/upload_import_process_documents'); ?>" enctype="multipart/form-data" method="post">
				   <!-- progressbar -->
				   <ul id="progressbar">
				   <?php foreach($stepData as $steps){ ?>
					 <li class="<?php echo (in_array($steps->id,$completedStep)) ? 'active' : '' ?>"><?php echo $steps->step_name; ?></li>
				   <?php } ?>
				   </ul>
				   <!-- fieldsets Shipping From Start-->
				   <fieldset class="hideStepSection" <?php echo ($currentStep->step_id == $stepData[0]->id) ? 'style="opacity: 1; display: block;"' : '' ?>>
					 <div class="shipping-form">
						<h3>Shipping Instructions</h3>
						<div class="row">
							<div class="col-12 col-lg-6">
							 <div class="ship-address">
							  <h4>Source Details</h4>
							  <p><?php echo $bookedShipment->consignor_name ?> <br/> <?php echo $bookedShipment->consignor_country_code; ?> <?php echo $bookedShipment->consignor_phone; ?></p>
                                                          <p><?php echo $bookedShipment->consignor_address_line_1; ?> <br/> <?php echo $bookedShipment->consignor_address_line_2; ?><br/><?php echo $bookedShipment->consignor_city_name; ?> - <?php echo $bookedShipment->consignor_pincode; ?></p>
							
							 </div> 
<!--							 <div class="ship-address">
							  <h4>Pick Up Address</h4>
							   </div> -->
						   </div>
						   <div class="col-12 col-lg-6">
							 <div class="ship-address">
							  <h4>Destination Details</h4>
							  <p><?php echo $bookedShipment->consignee_name; ?> <br/> <?php echo $bookedShipment->consignee_country_code; ?> <?php echo $bookedShipment->consignee_phone; ?></p>
							 <p><?php echo $bookedShipment->consignee_address_line_1; ?> <br/> <?php echo $bookedShipment->consignee_address_line_2; ?><br/><?php echo $bookedShipment->consignee_city_name; ?> - <?php echo $bookedShipment->consignee_pincode; ?></p>
							
                                                         </div> 
<!--							 <div class="ship-address">
							  <h4>Delivery Address</h4>
							   </div> -->
						   </div>
						 </div>
						 <h3>Preshipment Document</h3>
						 <div class="row">
						 <?php $preshipdocs = isset($shipmentProcessData[0]->documents) ? json_decode($shipmentProcessData[0]->documents) : '';  
						 $status = "<i style='color: #ed2325;font-size: 17px;margin-left: 10px;' class='fa fa-exclamation mt-10'></i>&nbsp;Upload Pending";
						 if(!empty($shipmentProcessData[0])){
							 if(!empty($shipmentProcessData[0]->status ==1)){ 
								$status = "<i style='color: #27ae60;font-size: 17px;margin-left: 10px;' class='fa fa-check-circle-o mt-10'></i>&nbsp;Approved";
							 }else if(!empty($shipmentProcessData[0]->status ==2)){ 
								$status = "<i style='color: #ffb723;font-size: 17px;margin-left: 10px;' class='fa fa-upload mt-10'></i>&nbsp;Uploaded";
							 }else if(!empty($shipmentProcessData[0]->status ==3)){ 
								$status = "<i style='color: #e133ff;font-size: 17px;margin-left: 10px;' class='fa fa-exclamation mt-10'></i>&nbsp;Reupload";
							 }else{
								 $status = "<i style='color: #ed2325;font-size: 17px;margin-left: 10px;' class='fa fa-exclamation mt-10'></i>&nbsp;Upload Pending";
							 }
						 }
						 ?>
							 <div class="col-12 col-lg-4">
								 <div class="form-group">
									<div class="fileUpload btn btn-primary">
										<span>Commercial Invoice Document</span>
										<input type="file" id="step1_import_custom_invoice" name="step1_import_custom_invoice" class="upload" <?php echo (strpos($status, 'Approved') !== false) ? 'disabled' : ''; ?>/>
									</div>
									<span id="step1_import_custom_invoice_file"></span>
									<?php echo $status; ?>
								 </div>
							 </div>
							 <div class="col-12 col-lg-4">
								 <div class="form-group">
									<div class="fileUpload btn btn-primary">
										<span>Packaging List Document</span>
										<input type="file" id="step1_import_packing_list" name="step1_import_packing_list" class="upload" <?php echo (strpos($status, 'Approved') !== false) ? 'disabled' : ''; ?>/>
									</div>
									<span id="step1_import_packing_list_file"></span>
									<?php echo $status; ?>
								 </div>
							 </div>
							 <div class="col-12 col-lg-4">
								 <div class="form-group">
									<div class="fileUpload btn btn-primary">
										<span>Transit Insurance Document</span>
										<input type="file" id="step1_import_transit_insurance" name="step1_import_transit_insurance" class="upload" <?php echo (strpos($status, 'Approved') !== false) ? 'disabled' : ''; ?>/>
									</div>
									<span id="step1_import_transit_insurance_file"></span>
									<?php echo $status; ?>
								 </div>
							 </div>
							 <div class="col-12 col-lg-4">
								 <div class="form-group">
									<div class="fileUpload btn btn-primary">
										<span>Other Document</span>
										<input type="file" id="step1_import_other_documents" name="step1_import_other_documents" class="upload" <?php echo (strpos($status, 'Approved') !== false) ? 'disabled' : ''; ?>/>
									</div>
									<span id="step1_import_other_documents_file"></span>
									<?php echo $status; ?>
								 </div>
							 </div>
						</div>
						<h3>Correction/Suggestion</h3>
						<div class="row">
                                                    <div class="col-12 col-lg-12">
							 <div class="comment-content" style="padding: 10px;background: #d2e1f1;border-radius: 25px;">
								<p><?php echo isset($shipmentProcessData[0]->corrections) ? $shipmentProcessData[0]->corrections : 'No correction Found'; ?></p>
							 </div>
							 <br/>
                                                    </div>
						</div>
						<div class="step1_import_message" style="display:none;">
							<div class="alert alert-success">
								Document uploaded successfully
							</div>
						</div>
					 </div>
					 <input type="hidden" name="request_id" value="<?php echo $bookedShipment->request_id; ?>">
                                         
					 <?php if(!empty($shipmentProcessData[0]->step_id)){ 
					if(isset($shipmentProcessData[0]->step_id) && $stepData[0]->id == $shipmentProcessData[0]->step_id && $shipmentProcessData[0]->status != 1){ ?>
					 <input type="hidden" name="step_id" value="<?php echo $stepData[0]->id; ?>">
					 <input type="submit" name="step1_import" class="action-button" value="Save" />
					 <?php } 
					 }else{ ?>
					 <input type="hidden" name="step_id" value="<?php echo $stepData[0]->id; ?>">
					 <input type="submit" name="step1_import" class="action-button" value="Save" />
					 <?php } ?>
					 <?php if(isset($shipmentProcessData[0]->step_id) && $stepData[0]->id == $shipmentProcessData[0]->step_id && $shipmentProcessData[0]->status == 1){ ?>
					 <input type="button" name="next" class="next action-button" value="Next" />
					 <?php } ?>
				   </fieldset>
				   <!-- fieldsets Shipping From end-->
				  
				   <!-- fieldsets Shipping going Start-->
				   <fieldset <?php echo ($currentStep->step_id == $stepData[1]->id) ? 'style="opacity: 1; display: block;"' : '' ?>>
				   <?php $preshipdocs = isset($shipmentProcessData[1]->documents) ? json_decode($shipmentProcessData[1]->documents):''; 
						$status = "<i style='color: #ed2325;font-size: 17px;margin-left: 10px;' class='fa fa-exclamation mt-10'></i>&nbsp;Upload Pending";
						if(!empty($shipmentProcessData[1])){
							if(!empty($shipmentProcessData[1]->status ==1)){ 
								$status = "<i style='color: #27ae60;font-size: 17px;margin-left: 10px;' class='fa fa-check-circle-o mt-10'></i>&nbsp;Approved";
							 }else if(!empty($shipmentProcessData[1]->status ==2)){ 
								$status = "<i style='color: #ffb723;font-size: 17px;margin-left: 10px;' class='fa fa-upload mt-10'></i>&nbsp;Uploaded";
							 }else if(!empty($shipmentProcessData[1]->status ==3)){ 
								$status = "<i style='color: #e133ff;font-size: 17px;margin-left: 10px;' class='fa fa-exclamation mt-10'></i>&nbsp;Reupload";
							 }else{
								 $status = "<i style='color: #ed2325;font-size: 17px;margin-left: 10px;' class='fa fa-exclamation mt-10'></i>&nbsp;Upload Pending";
							 } 
						 } ?>
					 <div class="shipping-form">
						<h3>Shipping Bill Checklist Document</h3>
						 <div class="row">
							 <div class="col-12 col-lg-4">
								 <div class="form-group">
									<label>Shipping Bill Document</label>
									&nbsp;<a target="_blank" href="<?php echo isset($preshipdocs->Shipping_bill_checklist) ? $preshipdocs->Shipping_bill_checklist : '#'; ?>" class="btn btn-warning">Download </a><?php echo $status; ?>
								 </div>
							 </div>
							 <div class="col-12 col-lg-3">
								 <div class="form-group">
									<div class="radio">
									 <input type="radio" name="step2_import_status" class="css-radio" value="1">
									 <label for="approve" class="css-label">Approved</label>
									 <input type="radio" name="step2_import_status" class="css-radio" value="3">
									 <label for="reupload" class="css-label">Reupload</label>
									</div>
								 </div>
							 </div>
						</div>
						<h3>Corrections/Suggestions</h3>
						  <div class="form-group">
							 <textarea class="form-control" name="step2_import_correction" placeholder="If any Correction/Suggestion in uploaded document please enter here.."></textarea>
						  </div>
						 <br/>
						 <hr>
						  <p>Corrections/Suggestions History</p>
						<div class="row">
                                                    <div class="col-12 col-lg-12">
							 <div class="comment-content" style="padding: 19px;background: #d2e1f1;border-radius: 25px;">
								<p><?php echo isset($shipmentProcessData[1]->corrections) ? $shipmentProcessData[1]->corrections : 'No correction Found'; ?></p>
							 </div>
							 <br/>
                                                         </div>
						</div>
					 </div>
					 <input type="button" name="previous" class="previous action-button" value="Previous" />
					 <?php 
					 if(!empty($shipmentProcessData[1]->step_id)){
					if(isset($shipmentProcessData[1]->step_id) && $stepData[1]->id == $shipmentProcessData[1]->step_id && $shipmentProcessData[1]->status != 1){ ?>
						 <input type="hidden" name="step_id_2" value="<?php echo $stepData[1]->id; ?>">
						 <input type="submit" name="step2_import" class="action-button" value="Save" />
					 <?php } 
						}else{ ?>
						<input type="hidden" name="step_id_2" value="<?php echo $stepData[1]->id; ?>">
						<input type="submit" name="step2_import" class="action-button" value="Save" />
						<?php } ?>
						<?php if(isset($shipmentProcessData[1]->step_id) && $stepData[1]->id == $shipmentProcessData[1]->step_id && $shipmentProcessData[1]->status == 1){ ?>
						<input type="button" name="next" class="next action-button" value="Next" />
						<?php } ?>
				   </fieldset>
				   <!-- fieldsets Shipping going end-->
				  
				   <!-- fieldsets package Start-->
				   <fieldset <?php echo ($currentStep->step_id == $stepData[2]->id) ? 'style="opacity: 1; display: block;"' : '' ?>>
					 <p>Reached at Loading Port on Date of &nbsp;<strong><i class="fa fa-clock-o"></i> <?php echo isset($shipmentProcessData[2]->action_date) ? date('j F, Y',strtotime($shipmentProcessData[2]->action_date)) : ''; ?> __ <?php echo isset($shipmentProcessData[2]->time) ? date('h:i A',strtotime($shipmentProcessData[2]->time)) : ''; ?> </span></strong> </p>	
					 <input type="button" name="previous" class="previous action-button" value="Previous" />
					 <?php 
					 if(!empty($shipmentProcessData[2]->step_id)){
					if(isset($shipmentProcessData[2]->step_id) && $stepData[2]->id == $shipmentProcessData[2]->step_id && $shipmentProcessData[2]->status != 1){ ?>
						 <input type="hidden" name="step_id_3" value="<?php echo $stepData[2]->id; ?>">
						 <input type="submit" id="step3_import" class="action-button" value="Save" />
					 <?php } 
						}else{ ?>
						<input type="hidden" name="step_id_3" value="<?php echo $stepData[2]->id; ?>">
						<input type="submit" name="step3_import" class="action-button" value="Save" />
						<?php } ?>
						<?php if(isset($shipmentProcessData[2]->step_id) && $stepData[2]->id == $shipmentProcessData[2]->step_id && $shipmentProcessData[2]->status == 1){ ?>
						<input type="button" name="next" class="next action-button" value="Next" />
						<?php } ?>			   
					</fieldset>
				   <!-- fieldsets package end-->
				  
				   <!-- fieldsets pick up Start-->
				   <fieldset <?php echo ($currentStep->step_id == $stepData[3]->id) ? 'style="opacity: 1; display: block;"' : '' ?>>
					 <p>Reached in Custom Clearance on Date of &nbsp;<strong><i class="fa fa-clock-o"></i> <?php echo isset($shipmentProcessData[3]->action_date) ? date('j F, Y',strtotime($shipmentProcessData[3]->action_date)) : ''; ?> __ <?php echo isset($shipmentProcessData[3]->time) ? date('h:i A',strtotime($shipmentProcessData[3]->time)) : ''; ?> </span></strong></p>
					 <input type="button" name="previous" class="previous action-button" value="Previous" />
					 <?php 
					 if(!empty($shipmentProcessData[3]->step_id)){
					if(isset($shipmentProcessData[3]->step_id) && $stepData[3]->id == $shipmentProcessData[3]->step_id && $shipmentProcessData[3]->status != 1){ ?>
						 <input type="hidden" name="step_id_4" value="<?php echo $stepData[3]->id; ?>">
						 <input type="submit" name="step4_import" class="action-button" value="Save" />
					 <?php } 
						}else{ ?>
						<input type="hidden" name="step_id_4" value="<?php echo $stepData[3]->id; ?>">
						<input type="submit" name="step4_import" class="action-button" value="Save" />
						<?php } ?>
						<?php if(isset($shipmentProcessData[3]->step_id) && $stepData[3]->id == $shipmentProcessData[3]->step_id && $shipmentProcessData[3]->status == 1){ ?>
						<input type="button" name="next" class="next action-button" value="Next" />
						<?php } ?>	
				   </fieldset>
				   <!-- fieldsets package end-->
				  
				   <!-- fieldsets payment Start-->
				   <fieldset <?php echo ($currentStep->step_id == $stepData[4]->id) ? 'style="opacity: 1; display: block;"' : '' ?>>
					<?php $preshipdocs = isset($shipmentProcessData[4]->documents) ? json_decode($shipmentProcessData[4]->documents):''; 
						$status = "<i style='color: #ed2325;font-size: 17px;margin-left: 10px;' class='fa fa-exclamation mt-10'></i>&nbsp;Upload Pending";
						if(!empty($shipmentProcessData[4])){
							if(!empty($shipmentProcessData[4]->status ==1)){ 
								$status = "<i style='color: #27ae60;font-size: 17px;margin-left: 10px;' class='fa fa-check-circle-o mt-10'></i>&nbsp;Approved";
							 }else if(!empty($shipmentProcessData[4]->status ==2)){ 
								$status = "<i style='color: #ffb723;font-size: 17px;margin-left: 10px;' class='fa fa-upload mt-10'></i>&nbsp;Uploaded";
							 }else if(!empty($shipmentProcessData[4]->status ==3)){ 
								$status = "<i style='color: #e133ff;font-size: 17px;margin-left: 10px;' class='fa fa-exclamation mt-10'></i>&nbsp;Reupload";
							 }else{
								 $status = "<i style='color: #ed2325;font-size: 17px;margin-left: 10px;' class='fa fa-exclamation mt-10'></i>&nbsp;Upload Pending";
							 } 
						 } ?>
					 <div class="shipping-form">
						<h3>Bill of Lading Document</h3>
						 <div class="row">
							 <div class="col-12 col-lg-4">
								 <div class="form-group">
									<label>Bill of Lading Document</label>
									&nbsp;<a target="_blank" href="<?php echo isset($preshipdocs->Bill_of_lading) ? $preshipdocs->Bill_of_lading : '#'; ?>" class="btn btn-warning">Download </a><?php echo $status; ?>
								 </div>
							 </div>
							  <div class="col-12 col-lg-3">
								 <div class="form-group">
									<div class="radio">
									 <input type="radio" name="step5_import_status" class="css-radio" value="1">
									 <label for="approve" class="css-label">Approved</label>
									 <input type="radio" name="step5_import_status" class="css-radio" value="3">
									 <label for="reupload" class="css-label">Reupload</label>
									</div>
								 </div>
							 </div>
						</div>
						<h3>Corrections/Suggestions</h3>
						<div class="form-group">
							 <textarea class="form-control" name="step5_import_correction" placeholder="If any Correction/Suggestion in uploaded document please enter here.."></textarea>
						  </div>
						 <br/>
						 <hr>
						  <p>Corrections/Suggestions History</p>
							<div class="row">
								<div class="col-12 col-lg-12">
								 <div class="comment-content" style="padding: 19px;background: #d2e1f1;border-radius: 25px;">
									<p><?php echo isset($shipmentProcessData[4]->corrections)? $shipmentProcessData[4]->corrections : 'No correction Found'; ?></p>
								 </div>
								 <br/>
							</div>
							</div>
					 </div>
					 <input type="button" name="previous" class="previous action-button" value="Previous" />
					
						<?php 
					 if(!empty($shipmentProcessData[4]->step_id)){
					if(isset($shipmentProcessData[4]->step_id) && $stepData[4]->id == $shipmentProcessData[4]->step_id && $shipmentProcessData[4]->status != 1){ ?>
						 <input type="hidden" name="step_id_5" value="<?php echo $stepData[4]->id; ?>">
						 <input type="submit" name="step5_import" class="action-button" value="Save" />
					 <?php } 
						}else{ ?>
						<input type="hidden" name="step_id_5" value="<?php echo $stepData[4]->id; ?>">
						<input type="submit" name="step5_import" class="action-button" value="Save" />
						<?php } ?>
						<?php if(isset($shipmentProcessData[4]->step_id) && $stepData[4]->id == $shipmentProcessData[4]->step_id && $shipmentProcessData[4]->status == 1){ ?>
						<input type="button" name="next" class="next action-button" value="Next" />
						<?php } ?>
				   </fieldset>
				   <!-- fieldsets payment Start-->
				  
					<!-- fieldsets package Start-->
				   <fieldset <?php echo ($currentStep->step_id == $stepData[5]->id) ? 'style="opacity: 1; display: block;"' : '' ?>>
					 <p>ETD ( Estimated Time of Departure) is &nbsp;<strong><i class="fa fa-clock-o"></i> <?php echo isset($shipmentProcessData[5]->action_date) ? date('j F, Y',strtotime($shipmentProcessData[5]->action_date)) : ''; ?> __ <?php echo isset($shipmentProcessData[5]->time) ? date('h:i A',strtotime($shipmentProcessData[5]->time)) : ''; ?> </span></strong> </p>	
					 <input type="button" name="previous" class="previous action-button" value="Previous" />
					 <?php 
					 if(!empty($shipmentProcessData[5]->step_id)){
					if(isset($shipmentProcessData[5]->step_id) && $stepData[5]->id == $shipmentProcessData[5]->step_id && $shipmentProcessData[5]->status != 1){ ?>
						 <input type="hidden" name="step_id_6" value="<?php echo $stepData[5]->id; ?>">
						 <input type="submit" name="step6_import" class="action-button" value="Save" />
					<?php } 
						}else{ ?>
						<input type="hidden" name="step_id_6" value="<?php echo $stepData[5]->id; ?>">
						<input type="submit" name="step6_import" class="action-button" value="Save" />
						<?php } ?>
						<?php if(isset($shipmentProcessData[5]->step_id) && $stepData[5]->id == $shipmentProcessData[5]->step_id && $shipmentProcessData[5]->status == 1){ ?>
						<input type="button" name="next" class="next action-button" value="Next" />
						<?php } ?>	
				   </fieldset>
				   <!-- fieldsets package end-->
				  
				   <!-- fieldsets pick up Start-->
				   <fieldset <?php echo ($currentStep->step_id == $stepData[6]->id) ? 'style="opacity: 1; display: block;"' : '' ?>>
					 <p>Loaded on Vessel/Flight Date &nbsp;<strong><i class="fa fa-clock-o"></i> <?php echo isset($shipmentProcessData[6]->action_date) ? date('j F, Y',strtotime($shipmentProcessData[6]->action_date)) : ''; ?> __ <?php echo isset($shipmentProcessData[6]->time) ? date('h:i A',strtotime($shipmentProcessData[6]->time)) : ''; ?> </span></strong></p>
					 <input type="button" name="previous" class="previous action-button" value="Previous" />
					  <?php 
					 if(!empty($shipmentProcessData[6]->step_id)){
					if(isset($shipmentProcessData[6]->step_id) && $stepData[6]->id == $shipmentProcessData[6]->step_id && $shipmentProcessData[6]->status != 1){ ?>
						 <input type="hidden" name="step_id_7" value="<?php echo $stepData[6]->id; ?>">
						 <input type="submit" name="step7_import" class="action-button" value="Save" />
					<?php } 
						}else{ ?>
						<input type="hidden" name="step_id_7" value="<?php echo $stepData[6]->id; ?>">
						<input type="submit" name="step7_import" class="action-button" value="Save" />
						<?php } ?>
						<?php if(isset($shipmentProcessData[6]->step_id) && $stepData[6]->id == $shipmentProcessData[6]->step_id && $shipmentProcessData[6]->status == 1){ ?>
						<input type="button" name="next" class="next action-button" value="Next" />
						<?php } ?>	
				   </fieldset>
				   <!-- fieldsets package end-->
				   
				   <!-- fieldsets pick up Start-->
				   <fieldset <?php echo ($currentStep->step_id == $stepData[7]->id) ? 'style="opacity: 1; display: block;"' : '' ?>>
					<?php $preshipdocs = isset($shipmentProcessData[7]->documents) ? json_decode($shipmentProcessData[7]->documents):''; 
						$status = "<i style='color: #ed2325;font-size: 17px;margin-left: 10px;' class='fa fa-exclamation mt-10'></i>&nbsp;Upload Pending";
						if(!empty($shipmentProcessData[7])){
							if(!empty($shipmentProcessData[7]->status ==1)){ 
								$status = "<i style='color: #27ae60;font-size: 17px;margin-left: 10px;' class='fa fa-check-circle-o mt-10'></i>&nbsp;Approved";
							 }else if(!empty($shipmentProcessData[7]->status ==2)){ 
								$status = "<i style='color: #ffb723;font-size: 17px;margin-left: 10px;' class='fa fa-upload mt-10'></i>&nbsp;Uploaded";
							 }else if(!empty($shipmentProcessData[7]->status ==3)){ 
								$status = "<i style='color: #e133ff;font-size: 17px;margin-left: 10px;' class='fa fa-exclamation mt-10'></i>&nbsp;Reupload";
							 }else{
								 $status = "<i style='color: #ed2325;font-size: 17px;margin-left: 10px;' class='fa fa-exclamation mt-10'></i>&nbsp;Upload Pending";
							 } 
						 } ?>
					  <div class="shipping-form">
						<h3>Loading Confirmation Document</h3>
						 <div class="row">
							 <div class="col-12 col-lg-4">
								 <div class="form-group">
									<label>Loading Confirmation Document</label>
									&nbsp;<a target="_blank" href="<?php echo isset($preshipdocs->load_confirm) ? $preshipdocs->load_confirm : '#'; ?>" class="btn btn-warning">Download </a><?php echo $status; ?>
								 </div>
							 </div>
							 <div class="col-12 col-lg-3">
								 <div class="form-group">
									<div class="radio">
									 <input type="radio" name="step8_import_status" class="css-radio" value="1">
									 <label for="approve" class="css-label">Approved</label>
									 <input type="radio" name="step8_import_status" class="css-radio" value="3">
									 <label for="reupload" class="css-label">Reupload</label>
									</div>
								 </div>
							 </div>
						</div>
						<h3>Corrections/Suggestions</h3>
						<div class="form-group">
							 <textarea class="form-control" name="step8_import_correction" placeholder="If any Correction/Suggestion in uploaded document please enter here.."></textarea>
						  </div>
						 <br/>
						 <hr>
						  <p>Corrections/Suggestions History</p>
							<div class="row">
								<div class="col-12 col-lg-12">
								 <div class="comment-content" style="padding: 19px;background: #d2e1f1;border-radius: 25px;">
									<p><?php echo isset($shipmentProcessData[7]->corrections)? $shipmentProcessData[7]->corrections : 'No correction Found'; ?></p>
								 </div>
								 <br/>
							</div>
							</div>
					 </div>
					 <input type="button" name="previous" class="previous action-button" value="Previous" />
					 <?php 
					 if(!empty($shipmentProcessData[7]->step_id)){
					if(isset($shipmentProcessData[7]->step_id) && $stepData[7]->id == $shipmentProcessData[7]->step_id && $shipmentProcessData[7]->status != 1){ ?>
						 <input type="hidden" name="step_id_8" value="<?php echo $stepData[7]->id; ?>">
						 <input type="submit" name="step8_import" class="action-button" value="Save" />
					<?php } 
						}else{ ?>
						<input type="hidden" name="step_id_8" value="<?php echo $stepData[7]->id; ?>">
						<input type="submit" name="step8_import" class="action-button" value="Save" />
						<?php } ?>
						<?php if(isset($shipmentProcessData[7]->step_id) && $stepData[7]->id == $shipmentProcessData[7]->step_id && $shipmentProcessData[7]->status == 1){ ?>
						<input type="button" name="next" class="next action-button" value="Next" />
						<?php } ?>	
				   </fieldset>
				   <!-- fieldsets package end-->
				   
				   <!-- fieldsets pick up Start-->
				   <fieldset <?php echo ($currentStep->step_id == $stepData[8]->id) ? 'style="opacity: 1; display: block;"' : '' ?>>
					<p>ETA ( Estimated Time of Arrival ) Date &nbsp;<strong><i class="fa fa-clock-o"></i> <?php echo isset($shipmentProcessData[8]->action_date) ? date('j F, Y',strtotime($shipmentProcessData[8]->action_date)) : ''; ?> __ <?php echo isset($shipmentProcessData[8]->time) ? date('h:i A',strtotime($shipmentProcessData[8]->time)) : ''; ?> </span></strong></p>
					 <input type="button" name="previous" class="previous action-button" value="Previous" />
					 <?php 
					 if(!empty($shipmentProcessData[8]->step_id)){
					if(isset($shipmentProcessData[8]->step_id) && $stepData[8]->id == $shipmentProcessData[8]->step_id && $shipmentProcessData[8]->status != 1){ ?>
						 <input type="hidden" name="step_id_9" value="<?php echo $stepData[8]->id; ?>">
						 <input type="submit" name="step9_import" class="action-button" value="Save" />
					 <?php } 
						}else{ ?>
						<input type="hidden" name="step_id_9" value="<?php echo $stepData[8]->id; ?>">
						<input type="submit" name="step9_import" class="action-button" value="Save" />
						<?php } ?>
						<?php if(isset($shipmentProcessData[8]->step_id) && $stepData[8]->id == $shipmentProcessData[8]->step_id && $shipmentProcessData[8]->status == 1){ ?>
						<input type="button" name="next" class="next action-button" value="Next" />
						<?php } ?>	
				   </fieldset>
				   <!-- fieldsets package end-->
				   
				   <!-- fieldsets pick up Start-->
				   <fieldset <?php echo ($currentStep->step_id == $stepData[9]->id) ? 'style="opacity: 1; display: block;"' : '' ?>>
					 <p>Reached at destination port Date &nbsp;<strong><i class="fa fa-clock-o"></i> <?php echo isset($shipmentProcessData[9]->action_date) ? date('j F, Y',strtotime($shipmentProcessData[9]->action_date)) : ''; ?> __ <?php echo isset($shipmentProcessData[9]->time) ? date('h:i A',strtotime($shipmentProcessData[9]->time)) : ''; ?> </span></strong></p>
					 <input type="button" name="previous" class="previous action-button" value="Previous" />
					 <?php 
					 if(!empty($shipmentProcessData[9]->step_id)){
					if(isset($shipmentProcessData[9]->step_id) && $stepData[9]->id == $shipmentProcessData[9]->step_id && $shipmentProcessData[9]->status != 1){ ?>
						 <input type="hidden" name="step_id_10" value="<?php echo $stepData[9]->id; ?>">
						 <input type="submit" name="step10_import" class="action-button" value="Save" />
					 <?php } 
						}else{ ?>
						<input type="hidden" name="step_id_10" value="<?php echo $stepData[9]->id; ?>">
						<input type="submit" name="step10_import" class="action-button" value="Save" />
						<?php } ?>
						<?php if(isset($shipmentProcessData[9]->step_id) && $stepData[9]->id == $shipmentProcessData[9]->step_id && $shipmentProcessData[9]->status == 1){ ?>
						<input type="button" name="next" class="next action-button" value="Next" />
						<?php } ?>	
				   </fieldset>
				   <!-- fieldsets package end-->
				   
				   <!-- fieldsets pick up Start-->
				   <fieldset <?php echo ($currentStep->step_id == $stepData[10]->id) ? 'style="opacity: 1; display: block;"' : '' ?>>
					 <p>Custom Cleared at Destination Port Date &nbsp;<strong><i class="fa fa-clock-o"></i> <?php echo isset($shipmentProcessData[10]->action_date) ? date('j F, Y',strtotime($shipmentProcessData[10]->action_date)) : ''; ?> __ <?php echo isset($shipmentProcessData[10]->time) ? date('h:i A',strtotime($shipmentProcessData[10]->time)) : ''; ?> </span></strong></p>
					 <input type="button" name="previous" class="previous action-button" value="Previous" />
					 <?php 
					 if(!empty($shipmentProcessData[10]->step_id)){
					if(isset($shipmentProcessData[10]->step_id) && $stepData[10]->id == $shipmentProcessData[10]->step_id && $shipmentProcessData[10]->status != 1){ ?>
						 <input type="hidden" name="step_id_11" value="<?php echo $stepData[10]->id; ?>">
						 <input type="submit" name="step11_import" class="action-button" value="Save" />
					 <?php } 
						}else{ ?>
						<input type="hidden" name="step_id_11" value="<?php echo $stepData[10]->id; ?>">
						<input type="submit" name="step11_import" class="action-button" value="Save" />
						<?php } ?>
						<?php if(isset($shipmentProcessData[10]->step_id) && $stepData[10]->id == $shipmentProcessData[10]->step_id && $shipmentProcessData[10]->status == 1){ ?>
						<input type="button" name="next" class="next action-button" value="Next" />
						<?php } ?>	
				   </fieldset>
				   <!-- fieldsets package end-->
				   
				   <!-- fieldsets Review Start-->
				   <fieldset <?php echo ($currentStep->step_id == $stepData[11]->id) ? 'style="opacity: 1; display: block;"' : '' ?>>
				   <?php $preshipdocs = isset($shipmentProcessData[11]->documents) ? json_decode($shipmentProcessData[11]->documents):''; 
						$status = "<i style='color: #ed2325;font-size: 17px;margin-left: 10px;' class='fa fa-exclamation mt-10'></i>&nbsp;Upload Pending";
						if(!empty($shipmentProcessData[11])){
							if(!empty($shipmentProcessData[11]->status ==1)){ 
								$status = "<i style='color: #27ae60;font-size: 17px;margin-left: 10px;' class='fa fa-check-circle-o mt-10'></i>&nbsp;Approved";
							 }else if(!empty($shipmentProcessData[11]->status ==2)){ 
								$status = "<i style='color: #ffb723;font-size: 17px;margin-left: 10px;' class='fa fa-upload mt-10'></i>&nbsp;Uploaded";
							 }else if(!empty($shipmentProcessData[11]->status ==3)){ 
								$status = "<i style='color: #e133ff;font-size: 17px;margin-left: 10px;' class='fa fa-exclamation mt-10'></i>&nbsp;Reupload";
							 }else{
								 $status = "<i style='color: #ed2325;font-size: 17px;margin-left: 10px;' class='fa fa-exclamation mt-10'></i>&nbsp;Upload Pending";
							 } 
						 } ?>
					 <div class="shipping-form">
					  <h3>Invoice</h3>
						 <div class="row">
							 <div class="col-12 col-lg-4">
								 <div class="form-group">
									<label>Invoice Document</label>
									&nbsp;<a target="_blank" href="<?php echo isset($preshipdocs->invoice_confirm) ? $preshipdocs->invoice_confirm : '#'; ?>" class="btn btn-warning">Download </a><?php echo $status; ?>
								 </div>
							 </div>
							 <div class="col-12 col-lg-3">
								 <div class="form-group">
									<div class="radio">
									 <input type="radio" name="step12_import_status" class="css-radio" value="1">
									 <label for="approve" class="css-label">Approved</label>
									 <input type="radio" name="step12_import_status" class="css-radio" value="3">
									 <label for="reupload" class="css-label">Reupload</label>
									</div>
								 </div>
							 </div>
						</div>
						<h3>Corrections/Suggestions</h3>
						<div class="form-group">
							 <textarea class="form-control" name="step12_import_correction" placeholder="If any Correction/Suggestion in uploaded document please enter here.."></textarea>
						  </div>
						 <br/>
						 <hr>
						  <p>Corrections/Suggestions History</p>
							<div class="row">
								<div class="col-12 col-lg-12">
								 <div class="comment-content" style="padding: 19px;background: #d2e1f1;border-radius: 25px;">
									<p><?php echo isset($shipmentProcessData[11]->corrections)? $shipmentProcessData[11]->corrections : 'No correction Found'; ?></p>
								 </div>
								 <br/>
							</div>
							</div>
					 </div>
					 <input type="button" name="previous" class="previous action-button" value="Previous" />
					 <?php 
					 if(!empty($shipmentProcessData[11]->step_id)){
					if(isset($shipmentProcessData[11]->step_id) && $stepData[11]->id == $shipmentProcessData[11]->step_id && $shipmentProcessData[11]->status != 1){ ?>
						 <input type="hidden" name="step_id_12" value="<?php echo $stepData[11]->id; ?>">
						 <input type="submit" name="step12_import" class="action-button" value="Save" />
					 <?php } 
					 }else{ ?>
						 <input type="hidden" name="step_id_12" value="<?php echo $stepData[11]->id; ?>">
						 <input type="submit" name="step12_import" class="action-button" value="Save" />
					 <?php } ?>
					<!--<input type="submit" name="submit" class="submit action-button" value="Submit" />-->
				   </fieldset>
				   <!-- fieldsets payment Start-->
				 </form>
				 </div>
			   </div>
			 </div>
		   </div>
		   <!-- Customer Registration end -->
          </div>
       </div>
     </div>
                      </div>
          </div>
          </div>
          </div>
       </div>
     </div>
   </div>
   <!-- Blog content end --> 
   </section><!-- sidebar_dashboard-->
</div> <!-- sidebar_dashboard-->