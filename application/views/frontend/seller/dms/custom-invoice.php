<style>
    .comment-group {
        border-bottom: none;
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

    table.table tbody tr td {
        text-align: left;
    }

    @media (min-width: 840px) {
        .mdl-grid {
            padding: 8px;
            width: 100% !important;
        }
    }

    .breakup-details p {
        margin: 0;
    }

    label {
        font-weight: bold;
        margin: 0 10px 0 0;
    }

    div.editable {
        display: inline-block;
        padding: 2px 0;
    }

    div.editable input {
        /*border: none;*/
    }

    div.editable-textarea {
        display: block;
    }

    div.editable-block {
        width: 100%;

    }

    div.editable-block input {
        width: 100%;
    }

    div.editable-textarea textarea {
       /* border: none;*/
        resize: none;
        width: 100%;
        height: auto;
    }

    table.table.items-table tr td {
        padding: 0;
    }

    table.table.items-table tr td input,
    table.table.items-table tr td select {
        border: none;
        width: 100%;
        padding: 0 5px;
    }

    input.decimal-numbers,
    span.total-qty,
    span.final-total {
        text-align: right;
    }

    span.total-qty,
    span.final-total {
        padding: 0 5px;
    }

    table.table.items-table tr {
        position: relative;
    }

    table.table.items-table tr a.delete-row-btn {
        display: none;
    }

    table.table.items-table tr:hover a.delete-row-btn {
        position: absolute;
        display: block;
        left: -25px;
    }
</style>
<!-- Tracking start -->
<div class="wshipping-content-block">
    <div class="container">
        <div class="row">
            <div class="col-12 col-lg-12">
                <div class="tracking-block">
                    <div class="tab-content">
                        <!-- <pre>
                    <?php print_r($requestDetails); ?>
                    <?php
                        $other_details = $documentData->other_details;
                        $items = $documentData->items;
                    ?>
                    </pre> -->
                        <center>
                            <h3 class="heading3-border">Custom Invoice</h3>
                        </center>
                        <?=$this->session->flashdata('message')?>
<form action="" method="POST" enctype="multipart/form-data">
                        <table class="table table-bordered">
                            <colgroup>
                                <col width="25%">
                                <col width="25%">
                                <col width="25%">
                                <col width="25%">
                            </colgroup>
                            <tbody>
                                <tr>
                                    <td rowspan="3" colspan="2">
                                        <label for="">Exporter</label>
                                        <div class="editable-textarea">
                                            <textarea name="other_details[exporter]" rows="5"><?=$other_details->exporter?></textarea>
                                        </div>
                                    </td>
                                    <td colspan="2"></td>
                                </tr>
                                <tr>
                                    <td>
                                        <div><label for="">Export Invoice No.</label>
                                            <div class="editable">
                                                <input type="text" name="invoice_number" id="#invoice_number" value="INV-0001">
                                            </div>
                                        </div>
                                        <div><label for="">Export Date</label>
                                            <div class="editable">
                                                <input type="text" name="invoice_date" id="invoice_date" class="date-picker " value="<?= printFormatedDate(date('Y-m-d')) ?>">
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <label for="">Exporter's Ref</label>
                                        <div><label for="">ICE No.</label>
                                            <div class="editable"><input type="text" name="other_details[ice_no]" id="#ice_no" value="<?=$other_details->ice_no?>"></div>
                                        </div>
                                        <div><label for="">PSN No.</label>
                                            <div class="editable"><input type="text" name="other_details[pan_no]" id="#pan_no" value="<?=$other_details->pan_no?>"></div>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <label for="">Reference</label>
                                        <div><label for="">SO# Number</label>
                                            <div class="editable"><input type="text" name="other_details[so_number]" id="#so_number" value="<?=$other_details->so_number?>"></div>
                                        </div>
                                        <div><label for="">SO# Date</label>
                                            <div class="editable"><input type="text" name="other_details[so_date]" id="#so_date" class="date-picker" value="<?=$other_details->so_date?>"></div>
                                        </div>

                                    </td>
                                    <td>
                                        <label for="">Buyer Reference</label>
                                        <div><label for="">PO# Number</label>
                                            <div class="editable"><input type="text" name="other_details[po_number]" id="#po_number" value="<?=$other_details->po_number?>"></div>
                                        </div>
                                        <div><label for="">PO# Date</label>
                                            <div class="editable"><input type="text" name="other_details[po_date]" id="#po_date" class="date-picker" value="<?=$other_details->po_date?>"></div>
                                        </div>

                                    </td>
                                </tr>
                                <tr>
                                    <td colspan="2">
                                        <label for="">Consignee</label>

                                        <div class="editable-textarea">
                                            <textarea name="other_details[consignee]" rows="5"><?=$other_details->consignee?></textarea>
                                        </div>

                                    </td>
                                    <td colspan="2">
                                        <label for="">Buyer (If not Consignee)</label>

                                        <div class="editable-textarea">
                                            
                                            <textarea name="other_details[consignee_other]" rows="5"><?=$other_details->consignee_other?></textarea>

                                        </div>

                                    </td>
                                </tr>

                                <tr>
                                    <td>
                                        <label for="">Pre-Carriage by</label>
                                        <div class="editable">
                                            <input type="text" name="other_details[pre_carriage]" id="" value="<?=$other_details->pre_carriage?>">
                                        </div>
                                    </td>
                                    <td>
                                        <label for="">Place of Receipt</label>
                                        <div class="editable">
                                            <input type="text" name="other_details[place_of_receipt]" value="<?=$other_details->place_of_receipt?>">
                                        </div>
                                    </td>
                                    <td>
                                        <label for="">Country of Origin</label>
                                        <div class="editable">
                                            <input type="text" name="other_details[country_o]" value="<?=$other_details->country_o?>">
                                        </div>
                                    </td>
                                    <td>
                                        <label for="">Country of Final Destination</label>
                                        <div class="editable">
                                            <input type="text" name="other_details[country_d]" value="<?=$other_details->country_d?>">
                                        </div>
                                    </td>

                                </tr>
                                <tr>
                                    <td>
                                        <label for="">Vessel / Aircraft/ Voyage No</label>
                                        <div class="editable">
                                            <input type="text" name="other_details[vessel_aircraft_voyage_no]" value="<?=$other_details->vessel_aircraft_voyage_no?>">
                                        </div>
                                    </td>
                                    <td>
                                        <label for="">Port of Loading</label>
                                        <div class="editable">
                                            <input type="text" name="other_details[port_of_l]"   value="<?=$other_details->port_of_l?>">
                                        </div>
                                    </td>

                                    <td rowspan="2" colspan="2"><label for="">Terms / Method of Payment</label>
                                        <div class="editable-textarea">
                                            <textarea name="other_details[terms_method_payment]" rows="5"><?=$other_details->terms_method_payment?></textarea>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <label for="">Port of Discharge</label>
                                        <div class="editable">
                                            <input type="text" name="other_details[port_of_d]" id="" value="<?=$other_details->port_of_d?>">
                                        </div>
                                    </td>
                                    <td>
                                        <label for="">Final Destination</label>
                                        <div class="editable">
                                            <input type="text" name="other_details[final_destination]" id="" value="<?=$other_details->final_destination?>">
                                        </div>
                                    </td>
                                </tr>

                                <tr>
                                    <td colspan="4">
                                        <table id="itemstable" class="table items-table">
                                            <thead>
                                                <tr>
                                                    <th>Product</th>
                                                    <th>Description of Goods</th>
                                                    <th>HS Code</th>
                                                    <th>Unit Quantity</th>
                                                    <th>Unit Type</th>
                                                    <th>Price/Unit</th>
                                                    <th>Amount</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <?php if(!empty($items)){?>
                                                <?php foreach ($items as $key=>$tem) { ?>

                                                    <tr>
                                                        <td>
                                                            <a class="btn delete-row-btn" title="Delete"><i class="fa fa-trash "></i></a>
                                                            <input type="text" maxlength="30" name="items[<?=$key?>][product]" value="<?=$tem->product?>">
                                                        </td>
                                                        <td><input type="text" maxlength="50" name="items[<?=$key?>][description]" value="<?=$tem->description?>"></td>
                                                        <td><input type="text" maxlength="8" class="only-numbers" name="items[<?=$key?>][hs_code]" value="<?=$tem->hs_code?>"></td>
                                                        <td><input type="text" class="decimal-numbers qty" maxlength="12" name="items[<?=$key?>][qty]" placeholder="0.00" value="<?=$tem->qty?>"></td>
                                                        <td>
                                                            <select name="items[<?=$key?>][unit]" id="">
                                                                <?php foreach (getPackingUnitList() as $unitCode => $unitValue) { ?>
                                                                    <option value="<?= $unitCode ?>" <?=$unitCode==$item->unit?' selected ':''?>><?= $unitValue ?></option>
                                                                <?php } ?>
                                                            </select>
                                                        </td>
                                                        <td><input type="text" class="decimal-numbers price" maxlength="12" name="items[<?=$key?>][price]" placeholder="0.00" value="<?=$tem->price?>"></td>
                                                        <td><input type="text" class="decimal-numbers total-amount" name="items[<?=$key?>][total_amount]" readonly maxlength="12" placeholder="0.00" value="<?=$tem->total_amount?>"></td>
                                                    </tr>
                                                <?php } ?>
                                                <?php } ?>
                                            </tbody>

                                            <tfoot>
                                                <!-- <tr>
                                                    <td>Kind of Packages</td>
                                                    <td></td>
                                                    <td>Total This Page</td>
                                                    <td></td>
                                                    <td></td>
                                                    <td></td>
                                                    <td></td>
                                                </tr> -->
                                                <tr>
                                                    <td>Total No. of Pcakages</td>
                                                    <td></td>
                                                    <td>Total Invoice</td>
                                                    <td class="text-right"><span class="total-qty"><?=$documentData->total_qty?></span></td>
                                                    <td></td>
                                                    <td>
                                                        <div class="editable">
                                                            <input type="text" name="currency" value="<?= $requestDetails->transaction_currency ?>">
                                                        </div>
                                                    </td>
                                                    <td class="text-right"><span class="final-total"><?=$documentData->invoice_amount?></span></td>
                                                </tr>
                                                <tr>
                                                    <td colspan="7">
                                                        <a class="btn btn-sm text-primary add-new-line-btn"><i class="fa fa-plus"></i> Add new line</a>
                                                    </td>
                                                </tr>

                                            </tfoot>

                                        </table>
                                    </td>
                                </tr>

                                <tr>
                                    <td colspan="2"><label for="">Total Invoice Amount (In words)</label> <?=ucwords(getAmountInWords($documentData->invoice_amount))?></td>
                                    <td colspan="2">
                                        <label for="">Payment Term:</label>
                                        <div class="editable-block">
                                            <input type="text" name="other_details[payment_term]" value="<?=$other_details->payment_term?>">
                                        </div>
                                    </td>
                                </tr>

                                <tr>
                                    <td colspan="2">
                                        <div class="editable-textarea">
                                            <textarea  cols="30" rows="4">"We intend to claim rewards under 'Remission of Duties and Taxes on Exported Products (RoDTEP)'.""
 "I/We undertake to abide by provisions of Foreign Exchange Management Act, 1999, as amended from time to time, including realization/repatriation of foreign exchange to/from India."

Declaration :
We declare that this Invoice shows the actual price of the goods described and that all particulars are true and correct.</textarea>
                                        </div>

                                    </td>
                                    <td colspan="2">
                                        For <?=$documentData->for_consignor_company?>
                                        <input type="hidden" name="for_consignor_company" value="<?=$documentData->for_consignor_company?>">
                                        <div>
                                        <img id="userPhotoPreview" src="<?=$documentData->signature?>"  style="height:50px;width: 150px; object-fit: contain;" />
                                        <input id="clearSelectionBtn" type="button" class="btn btn-secondary btn-sm" value="Clear the Selection" style="display:none;">
                                        
                                        <div class="fileUpload btn btn-secondary">
                                            <span>Select Signature</span>
                                            <input type="file" class="upload preview" name="signature" data-previewTarget="#userPhotoPreview" id="profile_pic">
                                        <!-- <label class="custom-file-label" for="profile_pic">Slect Sign</label> -->
                                        </div>
                                        </div>
                                        <div>
                                            <label for="">Place:</label> <input type="text" name="issue_place" maxlength="50" value="<?=$documentData->issue_place?>"> &nbsp;&nbsp;&nbsp;
                                            <label for="">Date:</label> <input type="text" class="date-picker" name="issue_date" value="<?=printFormatedDate($documentData->issue_date)?>" maxlength="15">
                                        </div>
                                    </td>
                                </tr>

                                <tr>
                                    <td colspan="4">
                                        <p>Export Shipment under LUT No: AD270620003381N; LUT Valid till 31st March`2021 GST No.: 27AAMFD4893N1ZL</p>

                                        <p>Shipping Marks</p>
                                        <p>To: <?=$other_details->shipping_mark_to?></p>
                                        <p>From: <?=$other_details->shipping_mark_from?></p>
                                        <p>Package No. (Invoice number)-01/09 to (Invoice number)-09/09</p>
                                        <p>Weight: Net 7400 Kg; Gross 11880 Kg (from Shipment Summary*)</p>
                                    </td>
                                </tr>

                            </tbody>
                        </table>
                        <center>
                            <input type="submit" value="Save as Draft" class="btn btn-warning">
                        </center>

                    </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<!-- Blog content end -->
</section><!-- sidebar_dashboard-->
</div> <!-- sidebar_dashboard-->

<div id="item-table-row-template" style="display: none;">
    <table>
        <tbody>
            <tr>
                <td>
                    <a class="btn delete-row-btn" title="Delete"><i class="fa fa-trash "></i></a>
                    <input type="text" maxlength="30" name="items[{uid}][product]">
                </td>
                <td><input type="text" maxlength="50" name="items[{uid}][description]"></td>
                <td><input type="text" maxlength="8" class="only-numbers" name="items[{uid}][hs_code]"></td>
                <td><input type="text" class="decimal-numbers qty" maxlength="12" name="items[{uid}][qty]" placeholder="0.00"></td>
                <td>
                    <select name="items[{uid}][unit]" id="">
                        <?php foreach (getPackingUnitList() as $unitCode => $unitValue) { ?>
                            <option value="<?= $unitCode ?>"><?= $unitValue ?></option>
                        <?php } ?>
                    </select>
                </td>
                <td><input type="text" class="decimal-numbers price" maxlength="12" name="items[{uid}][price]" placeholder="0.00"></td>
                <td><input type="text" class="decimal-numbers total-amount" name="items[{uid}][total_amount]" readonly maxlength="12" placeholder="0.00"></td>
            </tr>
        </tbody>
    </table>

</div>

<script>
    const uid = function() {
        return Date.now().toString(36) + Math.random().toString(36).substr(2);
    }
    $(document).ready(function() {

        $(document).on('blur', 'input.qty,input.price', function(e) {
            var tr = $(this).closest('tr');
            var tableId = '#' + $(this).closest('table').attr('id');
            var categoryTotal = 0;
            var charges = parseFloat(tr.find('input.price').val()) || 0.0;
            var qty = parseFloat(tr.find('input.qty').val()) || 0.0;
            var total = (charges * qty).toFixed(2);
            tr.find('input.total-amount').val(total);
            caculateFinaltotal(tableId);
        });

        $(document).on('click', 'table.items-table a.delete-row-btn', function() {

            if (confirm("Are you sure you want to delete this line?")) {
                var tableId = '#' + $(this).closest('table').attr('id');
                $(this).closest('tr').remove();
                caculateFinaltotal(tableId);
            }
        });
        $(document).on('click', 'table.items-table tfoot tr a.add-new-line-btn', function() {
            var tableId = '#' + $(this).closest('table').attr('id');
            $(tableId + ' tbody').append($('#item-table-row-template table tbody').html().replace(/{uid}/g, uid()));
        });
    });

    function caculateFinaltotal(tableId) {
        var finalTotal = 0;
        var totalQty = 0;

        $(tableId + ' tbody tr').each(function() {
            let item_row = $(this);
            let qty = parseFloat($(item_row).find('input.qty').val()) || 0.0
            let charges = parseFloat($(item_row).find('input.price').val()) || 0.0
            console.log('qty:' + qty + ' charges:' + charges);
            finalTotal += (charges * qty)
            totalQty += qty
        });
        $(tableId + ' tfoot tr span.total-qty').text(totalQty.toFixed(2));
        $(tableId + ' tfoot tr span.final-total').text(finalTotal.toFixed(2));
    }

    $('#profile_pic').change(function() {
	        $('#clearSelectionBtn').show();
            $('.fileUpload').hide();
	    });

	    $('#clearSelectionBtn').click(function() {
	        $(this).hide();
            $('.fileUpload').show();
	        $('span#profile_pic-error').hide();
	        $('#profile_pic').val('');
	        $('#userPhotoPreview').attr('src', '');
	    });
</script>