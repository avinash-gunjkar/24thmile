<fieldset <?php echo ($currentStep->step_id == $stepData[$key]->id) ? 'style="opacity: 1; display: block;"' : '' ?>>

	<div class="shipping-form">


		<div class="editableDataDiv" style="<?= in_array($shipmentProcessData[$key]->status, ['', '0', '3']) ? 'display:block' : 'display:none' ?>">
			<div class="row">
			<div class="col-12 col-lg-4">
					<div class="form-group">
						<label>Custom Cleared Date:</label>
						<input type="text" required class="form-control date-picker" required="" placeholder="DD-MM-YYYY" autocomplete="off" name="custome_cleared_date" value="<?=printFormatedDate($shipmentProcessData[$key]->action_date)?>" />
					</div>
				</div>
			</div>
		</div>
		<div class="readonlyDataDiv" style="<?= in_array($shipmentProcessData[$key]->status, ['1', '2']) ? 'display:block' : 'display:none' ?>">
			<div class="row">
			<div class="col-12 col-lg-4">
					<div class="form-group">
						<label>Custom Cleared Date:</label>
						<span><?= $shipmentProcessData[$key]->action_date ? printFormatedDate($shipmentProcessData[$key]->action_date) : '- -'; ?></span>
					</div>
				</div>
			</div>
		</div>



		</div>



	<input type="hidden" name="step4_import_step_id" value="<?php echo $stepData[$key]->id; ?>">
	<?php if ($bookedShipment->quote_status == 5) { ?>
		<a href="javascript:void(0)" class="btn btn-secondary pull-right mx-2 cancelBtn">Cancel</a>
		<input type="submit" name="step4_import" class="btn btn-success pull-right" value="Submit" style="<?= in_array($shipmentProcessData[$key]->status, ['', '0', '3']) ? 'display:inline-block' : 'display:none' ?>" />
		<button type="button" class="btn btn-primary pull-right editbtn" style="<?= in_array($shipmentProcessData[$key]->status, ['1', '2']) ? 'display:inline-block' : 'display:none' ?>">Edit</button>
	<?php } ?>

</fieldset>