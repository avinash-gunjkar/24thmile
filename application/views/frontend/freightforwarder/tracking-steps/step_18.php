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
         <h3>Upload Final Custom Documents / Final Bill of Entry <?php echo $status; ?></h3>


         <div class="editableDataDiv" style="<?= in_array($shipmentProcessData[$key]->status, ['', '0', '3']) ? 'display:block' : 'display:none' ?>">
             <div class="row">
             <div class="col-12 col-lg-4">
                 <div class="form-group">
                 <div class="fileUpload btn btn-secondary">
                             <span>Select Final Bill of Entry</span>
                             <input type="file" aria-describedby="final_bill_of_entry-error" id="final_bill_of_entry" name="final_bill_of_entry" class="upload"  />
                         </div>
                         <div class="selected-file-name">
                         <p><?= printDocumentLink($preshipdocs->final_bill_of_entry) ?></p>
                         </div>
                         <span id="final_bill_of_entry-error" class="error"></span>

                 </div>
             </div>

             <div class="col-12 col-lg-4">
                     <div class="form-group">
                         <label> Bill of Entry Number</label>
                         <input type="text" required class="form-control width-150" name="bill_of_entry_no" value="<?= $bookedShipment->bill_of_entry_no ?>" />
                         
                     </div>
                 </div>
                 <div class="col-12 col-lg-4">
                     <div class="form-group">
                         <label> Bill of Entry Date</label>
                         <input type="text" required autocomplete="off" placeholder="DD-MM-YYYY" class="form-control date-picker width-100" name="bill_of_entry_date" value="<?= printFormatedDate($bookedShipment->bill_of_entry_date) ?>" />
                         
                     </div>
                 </div>
             <div class="col-12 col-lg-4">
                     <div class="form-group">
                         <label>Import Duty Amount (INR): </label>
                         <input type="text" required maxlength="20" class="form-control decimal-numbers width-150" id="import_duty_amount" name="import_duty_amount" value="<?php echo isset($bookedShipment->import_duty_amount) ? $bookedShipment->import_duty_amount : ''; ?>" />
                     </div>
                 </div>

                 
                 <div class="col-12 col-lg-4">
                     <div class="form-group">
                         <label>Import Under Scheme: </label>
                         <select id="import_under_schment" name="import_under_schment" class="form-control">
                             <option value="">-Select-</option>
                             <option value="Advance Authorization" <?= $bookedShipment->import_under_schment == 'Advance Authorization' ? ' selected ' : '' ?>>Advance Authorization</option>
                             <option value="Export Promotion Capital Goods" <?= $bookedShipment->import_under_schment == 'Export Promotion Capital Goods' ? ' selected ' : '' ?>>Export Promotion Capital Goods</option>
                             <option value="Inbound Bill of entry" <?= $bookedShipment->import_under_schment == 'Inbound Bill of entry' ? ' selected ' : '' ?>>Inbound Bill of entry</option>
                             <option value="Outbound Bill of entry" <?= $bookedShipment->import_under_schment == 'Outbound Bill of entry' ? ' selected ' : '' ?>>Outbound Bill of entry</option>
                             <option value="Other" <?= $bookedShipment->import_under_schment == 'Other' ? ' selected ' : '' ?>>Other</option>
                         </select>
                     </div>
                 </div>

                 <div class="col-12 col-lg-4">
                     <div class="form-group">
                         <label> Custom Cleared at Destination Port Date</label>
                         <input type="text" required autocomplete="off" placeholder="DD-MM-YYYY" class="form-control date-picker" name="step7_import_ccd_date" value="<?= printFormatedDate($shipmentProcessData[$key]->action_date) ?>" />
                         
                     </div>
                 </div>
                 <div class="col-12 col-lg-12">
                     <div class="form-group">
                         <label>Remark</label>
                         <input type="text" class="form-control" name="step7_import_details" placeholder="Remark" value="<?=$shipmentProcessData[$key]->corrections?>">
                     </div>
                 </div>

                 <div class="col-12 col-lg-4" style="display: none;">
                 <div class="form-group">
                     <div class="form-check form-check-inline mt-20">
                         <input type="radio" name="step7_import_status" class="form-check-input" checked="" value="1">
                         <label for="approve" class="form-check-label">Approved</label>
                     </div>
                 </div>
             </div>

             </div>
         </div>
         <div class="readonlyDataDiv" style="<?= in_array($shipmentProcessData[$key]->status, ['1', '2']) ? 'display:block' : 'display:none' ?>">
             <div class="row">
             <div class="col-12 col-lg-4">
                 <div class="form-group">
                     <label>Final Bill of Entry:</label>
                     <p><?= printDocumentLink($preshipdocs->final_bill_of_entry) ?></p>
                    
                 </div>
             </div>

             <div class="col-12 col-lg-4">
                     <div class="form-group">
                         <label>Import Duty Amount (INR): </label>
                         <p><?= isset($bookedShipment->import_duty_amount) ? number_format($bookedShipment->import_duty_amount, 2) : '- -'; ?></p>
                     </div>
                 </div>

                 <div class="col-12 col-lg-4">
                     <div class="form-group">
                         <label> Bill of Entry Number: </label>
                         <p><?php echo isset($bookedShipment->bill_of_entry_no) ? $bookedShipment->bill_of_entry_no : '- -'; ?></p>

                     </div>
                 </div>
                 <div class="col-12 col-lg-4">
                     <div class="form-group">
                         <label> Bill of Entry Date: </label>
                         <p><?php echo isset($bookedShipment->import_under_schment) ? printFormatedDate($bookedShipment->bill_of_entry_date) : '- -'; ?></p>

                     </div>
                 </div>
                 <div class="col-12 col-lg-4">
                     <div class="form-group">
                         <label>Import Under Scheme: </label>
                         <p><?php echo isset($bookedShipment->import_under_schment) ? $bookedShipment->import_under_schment : '- -'; ?></p>

                     </div>
                 </div>



                 <div class="col-12 col-lg-4">
                     <label> Custom Cleared at Destination Port Date</label>
                     <p><?= $shipmentProcessData[$key]->action_date ? printFormatedDate($shipmentProcessData[$key]->action_date) : '- -'; ?></p>
                 </div>
                 <div class="col-12 col-lg-12">
                     <label>Remark:</label>
                     <span><?= $shipmentProcessData[$key]->corrections ? $shipmentProcessData[$key]->corrections : '- -'; ?></span>
                 </div>

             </div>
         </div>
         
     </div>


     <input type="hidden" name="step7_import_step_id" value="<?php echo $stepData[$key]->id; ?>">
     <?php if ($bookedShipment->quote_status == 5) { ?>
         <a href="javascript:void(0)" class="btn btn-secondary pull-right mx-2 cancelBtn">Cancel</a>
         <input type="submit" name="step7_import" class="btn btn-success pull-right" value="Submit" style="<?= in_array($shipmentProcessData[$key]->status, ['', '0', '3']) ? 'display:inline-block' : 'display:none' ?>" />
         <button type="button" class="btn btn-primary pull-right editbtn" style="<?= in_array($shipmentProcessData[$key]->status, ['1', '2']) ? 'display:inline-block' : 'display:none' ?>">Edit</button>
     <?php } ?>



 </fieldset>