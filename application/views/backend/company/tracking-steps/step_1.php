 <!-- fieldsets Shipping From Start-->
 <fieldset class="hideStepSection" <?php echo ($currentStep->step_id == $stepData[$key]->id) ? 'style="opacity: 1; display: block;"' : '' ?>>
         <div class="shipping-form">
                 <h5>Shipping Instructions</h5>
                 <div class="row">
                         <div class="col l6">
                                 <div class="ship-address">
                                         <h6><strong>Pick-up Address</strong></h6>
                                         <p><?php echo $bookedShipment->consignor_name ?> <br /> <?php echo $bookedShipment->consignor_country_code; ?> <?php echo $bookedShipment->consignor_phone; ?></p>
                                         <p><?php echo $bookedShipment->consignor_address_line_1; ?> <br /> <?php echo $bookedShipment->consignor_address_line_2; ?><br /><?php echo $bookedShipment->consignor_city_name; ?> - <?php echo $bookedShipment->consignor_pincode; ?></p>

                                 </div>
                                 <!--							 <div class="ship-address">
                       <h4>Pick Up Address</h4>
                        </div> -->
                         </div>
                         <div class="col l6">
                                 <div class="ship-address">
                                         <h6><strong>Delivery Address</strong></h6>
                                         <p><?php echo $bookedShipment->consignee_name; ?> <br /> <?php echo $bookedShipment->consignee_country_code; ?> <?php echo $bookedShipment->consignee_phone; ?></p>
                                         <p><?php echo $bookedShipment->consignee_address_line_1; ?> <br /> <?php echo $bookedShipment->consignee_address_line_2; ?><br /><?php echo $bookedShipment->consignee_city_name; ?> - <?php echo $bookedShipment->consignee_pincode; ?></p>

                                 </div>
                                 <!--							 <div class="ship-address">
                       <h4>Delivery Address</h4>
                        </div> -->
                         </div>
                 </div>
                 <div class="row">
                         <div class="col l4">
                                 <div class="form-group">
                                         <label>Pick-up Date:</label> <?= $bookedShipment->pick_up_datetime ? printFormatedDateTime($bookedShipment->pick_up_datetime) : '- -' ?>
                                 </div>
                         </div>
                         <div class="col l8">
                                 <div class="form-group">
                                         <label>Any other specific instructions:</label> <?= $bookedShipment->shipping_instruction ? $bookedShipment->shipping_instruction : 'NA'; ?>
                                 </div>
                         </div>
                 </div>
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
                        }
                        ?>
                 <h5>Pre-Shipment Documents <?php echo $status; ?></h5>
                 <!-- <div class="editableDataDiv" style="<?= in_array($shipmentProcessData[$key]->status, ['', '0', '3']) ? 'display:block' : 'display:none' ?>">
                         <div class="row">
                                 <div class="col l3">
                                         <div class="form-group">

                                                 <div class="fileUpload btn btn-secondary">
                                                         <span>Select Custom Invoice</span>
                                                         <input type="file" aria-describedby="step1_export_custom_invoice-error" id="step1_export_custom_invoice" name="step1_export_custom_invoice" class="upload" />
                                                 </div>
                                                 <div class="selected-file-name">
                                                         <?= printDocumentLink($preshipdocs->Custom_Invoice) ?>
                                                 </div>
                                                 <span id="step1_export_custom_invoice-error" class="error" style=""></span>

                                         </div>


                                 </div>

                                 <div class="col l3">
                                         <div class="form-group">
                                                 <label>Custom Invoice Number : </label>
                                                 <input maxlength="20" required="" class="form-control width-150" type="text" id="step1_export_custom_invoice_number" name="step1_export_custom_invoice_number" value="<?php echo isset($bookedShipment->custom_invoice_number) ? $bookedShipment->custom_invoice_number : ''; ?>" />
                                         </div>
                                 </div>
                                 <div class="col l3">
                                         <div class="form-group">
                                                 <label>Custom Invoice Date : </label>

                                                 <input type="text" required="" class="form-control date-picker" placeholder="DD-MM-YYYY" autocomplete="off" name="step1_export_custom_invoice_date" value="<?= printFormatedDate($bookedShipment->custom_invoice_date); ?>" />
                                         </div>
                                 </div>
                                 <div class="col l12 m12 s12 "></div>
                                 <div class="col l3 ">
                                         <div class="form-group">
                                                 <div class="fileUpload btn btn-secondary">
                                                         <span>Select Other Document 2</span>
                                                         <input type="file" aria-describedby="step1_export_other_documents_2-error" id="step1_export_other_documents_2" name="step1_export_other_documents_2" class="upload" />
                                                 </div>
                                                 <div class="selected-file-name">
                                                         <?= printDocumentLink($preshipdocs->other_documents_2) ?>
                                                 </div>
                                         </div>
                                         <span id="step1_export_other_documents_2-error" class="error"></span>
                                 </div>

                                 <div class="col l3">
                                         <div class="form-group">
                                                 <div class="fileUpload btn btn-secondary">
                                                         <span>Select Other Document 3</span>
                                                         <input type="file" aria-describedby="step1_export_other_documents_3-error" id="step1_export_other_documents_3" name="step1_export_other_documents_3" class="upload" />
                                                 </div>
                                                 <div class="selected-file-name">
                                                         <?= printDocumentLink($preshipdocs->other_documents_3) ?>
                                                 </div>
                                         </div>
                                         <span id="step1_export_other_documents_3-error" class="error" style=""></span>
                                 </div>


                                 <div class="col l3">
                                         <div class="form-group">

                                                 <div class="fileUpload btn btn-secondary">
                                                         <span>Select Packing List</span>
                                                         <input type="file" aria-describedby="step1_export_packing_list-error" id="step1_export_packing_list" name="step1_export_packing_list" class="upload" />
                                                 </div>
                                                 <div class="selected-file-name">
                                                         <?= printDocumentLink($preshipdocs->packing_List) ?>

                                                 </div>
                                                 <span id="step1_export_packing_list-error" class="error" style=""></span>

                                         </div>
                                 </div>
                                 <div class="col l3">
                                         <div class="form-group">

                                                 <div class="fileUpload btn btn-secondary">
                                                         <span>Select Other Document 1</span>
                                                         <input type="file" aria-describedby="step1_export_other_documents_1-error" id="step1_export_other_documents_1" name="step1_export_other_documents_1" class="upload" />
                                                 </div>
                                                 <div class="selected-file-name">
                                                         <?= printDocumentLink($preshipdocs->other_documents_1) ?>
                                                 </div>
                                                 <span id="step1_export_other_documents_1-error" class="error" style=""></span>


                                         </div>
                                 </div>

                         </div>


                 </div> -->
                 <div class="readonlyDataDiv" style="<?= in_array($shipmentProcessData[$key]->status, ['1', '2']) ? 'display:block' : 'display:block' ?>">
                         <div class="row">
                                 <div class="col l3">
                                         <div class="form-group">
                                                 <label style="display:inline">Custom Invoice:</label>
                                                 <p> <?= printDocumentLink($preshipdocs->Custom_Invoice) ?></p>

                                         </div>
                                 </div>

                                 <div class="col l3">
                                         <div class="form-group">
                                                 <label>Custom Invoice Number : </label>
                                                 <p> <?php echo isset($bookedShipment->custom_invoice_number) ? $bookedShipment->custom_invoice_number : '- -'; ?><p>
                                         </div>
                                 </div>
                                 <div class="col l3">
                                         <div class="form-group">
                                                 <label>Custom Invoice Date : </label>
                                                 <p><?= $bookedShipment->custom_invoice_date ? printFormatedDate($bookedShipment->custom_invoice_date) : '- -'; ?></p>

                                         </div>
                                 </div>
                                 <div class="col-12 l3">
                                         <div class="form-group">
                                                 <label>Custom Invoice Value (<?= $bookedShipment->custom_invoice_currency ? $bookedShipment->custom_invoice_currency : 'INR' ?>):</label>
                                                 <p><?php echo isset($bookedShipment->custom_invoice_value) ? $bookedShipment->custom_invoice_value : '- -'; ?></p>
                                         </div>
                                 </div>

                                 <div class="col l12"></div>
                                 <div class="col l3">
                                         <div class="form-group">
                                                 <label style="display:inline">Packing List:</label>
                                                 <p> <?= printDocumentLink($preshipdocs->packing_List) ?><p>

                                         </div>
                                 </div>
                                 <div class="col l3">
                                         <div class="form-group">
                                                 <label style="display:inline">Other Document 1:</label>
                                                 <p> <?= printDocumentLink($preshipdocs->other_documents_1) ?></p>


                                         </div>
                                 </div>
                                 <div class="col l3">
                                         <div class="form-group">
                                                 <label style="display:inline">Other Document 2:</label>
                                                 <p><?= printDocumentLink($preshipdocs->other_documents_2) ?><p>
                                         </div>
                                 </div>
                                 <div class="col l3">
                                         <div class="form-group">
                                                 <label style="display:inline">Other Document 3:</label>
                                                 <p><?= printDocumentLink($preshipdocs->other_documents_3) ?></p>

                                         </div>
                                 </div>




                                 <!-- <div class="col l12">
                                         <span class="text-info">Email has been sent.</span>
                                 </div> -->

                                 <br />
                         </div>
                 </div>

                 <p>Correction/Suggestions History</p>
                 <div class="row">
                         <div class="col l12">
                                 <div class="comment-content-box">
                                         <p><?php echo isset($shipmentProcessData[$key]->corrections) ? $shipmentProcessData[$key]->corrections : 'No correction Found'; ?></p>
                                 </div> <br />
                         </div>
                 </div>
         </div>

         <input type="hidden" name="step1_export_step_id" value="<?php echo $stepData[$key]->id; ?>">
         <?php if ($bookedShipment->status == 5) { ?>
                 <!-- <a href="javascript:void(0)" class="btn btn-secondary pull-right mx-2 cancelBtn">Cancel</a> -->
                 <!-- <input type="submit" name="step1_export" class="btn btn-success pull-right" value="Submit" style="<?= in_array($shipmentProcessData[$key]->status, ['', '0', '3']) ? 'display:inline-block' : 'display:none' ?>" /> -->
                 <!-- <button type="button" class="btn btn-primary pull-right editbtn" style="<?= in_array($shipmentProcessData[$key]->status, ['1', '2']) ? 'display:inline-block' : 'display:none' ?>">Edit</button> -->
         <?php } ?>

 </fieldset>
 <!-- fieldsets Shipping From end-->