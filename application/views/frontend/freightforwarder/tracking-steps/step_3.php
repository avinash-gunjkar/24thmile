 <fieldset <?php echo ($currentStep->step_id == $stepData[$key]->id) ? 'style="opacity: 1; display: block;"' : '' ?>>
   <?php $preshipdocs = isset($shipmentProcessData[$key]->documents) ? json_decode($shipmentProcessData[$key]->documents) : '';
    $showDownloadbtn = $shipmentProcessData[$key]->status == 2 || $shipmentProcessData[$key]->status == 1;
    $status = "<span class='badge badge-danger'>Upload Pending</span>";
    if (!empty($shipmentProcessData[$key])) {
      if (!empty($shipmentProcessData[$key]->status == 1)) {
        $status = "<span class='badge badge-success'>Approved</span>";
      } else if (!empty($shipmentProcessData[$key]->status == 2)) {
        $status = "<span class='badge badge-info'>Uploaded</span>";
      } else if (!empty($shipmentProcessData[$key]->status == 3)) {
        $status = "<span class='badge badge-warning'>Reupload</span>";
      } else {
        $status = "<span class='badge badge-danger'>Upload Pending</span>";
      }
    } ?>
   <div class="shipping-form">
     <h3>Upload Custom Document.</h3>

     <div class="editableDataDiv" style="<?= in_array($shipmentProcessData[$key]->status, ['', '0', '3']) ? 'display:block' : 'display:none' ?>">
       <div class="row">
         <div class="col-12 col-lg-4">
           <div class="form-group">
             <div class="fileUpload btn btn-secondary">
               <span>Select Final Shipping Bill</span>
               <input type="file" aria-describedby="final_sb_checklist_ff-error" id="final_sb_checklist_ff" name="final_sb_checklist_ff" class="upload"  />
             </div>

             <div class="selected-file-name">
             <p> <?= printDocumentLink($preshipdocs->Final_shipping_bill) ?></p>
             </div>
             <span id="final_sb_checklist_ff-error" class="error"></span>


           </div>
         </div>

         <div class="col-12 col-lg-4">
           <div class="form-group">
             <label>Shipping Bill Number: </label>

             <input maxlength="20" required="" type="text" class="form-control" id="step3_export_SB_number" name="step3_export_SB_number" value="<?php echo isset($bookedShipment->shipping_bill_number) ? $bookedShipment->shipping_bill_number : ''; ?>" />

           </div>
         </div>

         <div class="col-12 col-lg-4">
         <div class="form-group">
           <label>Shipping Bill Date: </label>
            <input type="text" required="" placeholder="DD-MM-YYYY" autocomplete="off" class="form-control date-picker" name="step3_export_SB_date" value="<?= printFormatedDate($bookedShipment->shipping_bill_date) ?>" />
         </div>
       </div>

       <div class="col-12 col-lg-4">
         <div class="form-group">
           <label>DBK Amount (INR):</label>
            <input type="text" required="" class="form-control decimal-numbers" id="step3_export_dbk_amount" name="step3_export_dbk_amount" value="<?php echo isset($bookedShipment->DBK_amount) ? $bookedShipment->DBK_amount : ''; ?>" />
         </div>
       </div>
       <div class="col-12 col-lg-4">
         <div class="form-group">
           <label>FOB Value (INR):</label>
            <input type="text" required="" class="form-control decimal-numbers" id="step3_export_fob_value" onblur="calculateMeisAmount()" name="step3_export_fob_value" value="<?php echo isset($bookedShipment->fob_value) ? $bookedShipment->fob_value : ''; ?>" />
         </div>
       </div>
       <div class="col-12 col-lg-4">
         <div class="form-group">
           <label>MEIS Rate(%):</label>
            <input type="text" class="form-control decimal-numbers" id="step3_export_meis_rate" onblur="calculateMeisAmount()" name="step3_export_meis_rate" value="<?php echo isset($bookedShipment->MEIS_rate) ? $bookedShipment->MEIS_rate : ''; ?>" />
         </div>
       </div>
       <div class="col-12 col-lg-4">
         <div class="form-group">
           <label>MEIS Amount (INR):</label>
            <input type="text" class="form-control decimal-numbers" id="step3_export_meis_amount" name="step3_export_meis_amount" readonly="" value="<?php echo isset($bookedShipment->MEIS_amount) ? $bookedShipment->MEIS_amount : ''; ?>" />
         </div>
       </div>

       <div class="col-12 col-lg-4">
           <div class="form-group">
             <label>Reached at Loading Port Date:</label>
             <input required="" type="text" class="form-control date-picker" autocomplete="off" name="step3_export_act_date" placeholder="DD-MM-YYYY" value="<?= printFormatedDate($shipmentProcessData[$key]->action_date); ?>" />
           </div>
         </div>

         <div class="col-12 col-lg-12">
           <div class="form-group">
             <label>Remark: </label>
             <input type="text" class="form-control" name="step3_export_details" placeholder="Remark" maxlength="200" value="<?= $shipmentProcessData[$key]->corrections; ?>" />
           </div>
         </div>


       </div>
     </div>

     <div class="readonlyDataDiv" style="<?= in_array($shipmentProcessData[$key]->status, ['1', '2']) ? 'display:block' : 'display:none' ?>">
       <div class="row">
         <div class="col-12 col-lg-4">
           <div class="form-group">
             <label>Final Shipping Bill: </label>
            <p> <?= printDocumentLink($preshipdocs->Final_shipping_bill) ?></p>
            
           </div>
         </div>

         <div class="col-12 col-lg-4">
           <div class="form-group">
             <label>Shipping Bill Number: </label>
             <p><?php echo isset($bookedShipment->shipping_bill_number) ? $bookedShipment->shipping_bill_number : '- -'; ?></p>

           </div>
         </div>

         <div class="col-12 col-lg-4">
         <div class="form-group">
           <label>Shipping Bill Date: </label>
           <p><?= $bookedShipment->shipping_bill_date?printFormatedDate($bookedShipment->shipping_bill_date):'- -' ?></p>
          
         </div>
       </div>
       <div class="col-12 col-lg-4">
         <div class="form-group">
           <label>DBK Amount (INR):</label>
          <p> <?php echo isset($bookedShipment->DBK_amount) ? number_format($bookedShipment->DBK_amount,2) : '- -'; ?></p>
          
         </div>
       </div>
       <div class="col-12 col-lg-4">
         <div class="form-group">
           <label>FOB Value (INR):</label>
           <p><?php echo isset($bookedShipment->fob_value) ? number_format($bookedShipment->fob_value,2) : '- -'; ?></p>
           
         </div>
       </div>
       <div class="col-12 col-lg-4">
         <div class="form-group">
           <label>MEIS Rate(%):</label>
           <p><?php echo isset($bookedShipment->MEIS_rate) ? $bookedShipment->MEIS_rate : '- -'; ?></p>
           
         </div>
       </div>
       <div class="col-12 col-lg-4">
         <div class="form-group">
           <label>MEIS Amount (INR):</label>
           <p><?php echo isset($bookedShipment->MEIS_amount) ? number_format($bookedShipment->MEIS_amount,2) : '- -'; ?></p>
          
         </div>
       </div>
       <div class="col-12 col-lg-4">
           <div class="form-group">
             <label>Reached at Loading Port Date:</label>
             <p><?= $shipmentProcessData[$key]->action_date?printFormatedDate($shipmentProcessData[$key]->action_date):'- -'; ?> </p>
           </div>
         </div>

         <div class="col-12 col-lg-12">
           <div class="form-group">
             <label>Remark: </label><p><?php echo isset($shipmentProcessData[$key]->corrections) ? $shipmentProcessData[$key]->corrections : '- -'; ?></p>
           </div>
         </div>

         <div class="col-12 col-lg-12">
           <span class="text-info">Email has been sent.</span>
         </div>
       </div>
     </div>

     <div class="row">

       <div class="col-12 col-lg-4" style="display: none;">
         <div class="form-group">
           <div class="form-check form-check-inline mt-20">
             <input type="radio" name="step3_export_status" class="form-check-input" checked="" value="1">
             <label for="approve" class="form-check-label">Approved</label>
           </div>
         </div>
       </div>
       
     </div>
   </div>

   <input type="hidden" name="step3_export_step_id" value="<?php echo $stepData[$key]->id; ?>">
   <?php if ($bookedShipment->quote_status == 5) { ?>
                 <a href="javascript:void(0)" class="btn btn-secondary pull-right mx-2 cancelBtn">Cancel</a>
                 <input type="submit" name="step3_export" class="btn btn-success pull-right" value="Submit" style="<?= in_array($shipmentProcessData[$key]->status, ['', '0', '3']) ? 'display:inline-block' : 'display:none' ?>" />
                 <button type="button" class="btn btn-primary pull-right editbtn" style="<?= in_array($shipmentProcessData[$key]->status, ['1', '2']) ? 'display:inline-block' : 'display:none' ?>">Edit</button>
         <?php } ?>


 </fieldset>