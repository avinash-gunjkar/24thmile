<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/chosen/1.4.2/chosen.css" />
<style>
    .steps .card-body {
        min-height: 250px;
        max-height: 250px;
    }

    .steps .card-body h5 {
        font-weight: bold;
    }

    table.table {
        counter-reset: srno;
    }

    .sr-no::before {
        counter-increment: srno;
        content: counter(srno);
    }

    .table-sticky-header thead tr .header {
        position: sticky;
        top: 0;
    }

    .table-sticky-header thead tr .header2 {
        position: sticky;
        top: 32px;
    }

    .table-sticky-header thead {
        position: sticky;
        top: 0
    }

    @media (min-width: 840px) {
        .mdl-grid {
            padding: 8px 0px;
            width: 100% !important;
        }
    }
</style>

<!-- Tracking start -->
<div class="wshipping-content-block">
    <div class="container">
        <div class="row">
            <div class="col-12 col-lg-12">
                <div class="tracking-block">
                    <div class="tab-content">
                        <h3 class="heading3-border">Create Annual Contract</h3>


                        <form id="frmRequirement" name="frmRequirement" class="" action="" accept-charset="UTF-8" enctype="multipart/form-data" method="post">
                            <input type="hidden" name="annual_contract_id" value="<?= $annualContractDetails->id ?>" />


                            <div class="form-group">
                                <div class="row">
                                    <div class="col-lg-3">

                                        <label class="mr-3">Annual Contract ID: </label>
                                        <span><?= $annualContractDetails->id ?></span>

                                    </div>
                                    <div class="col-lg-4">

                                        <label class="mr-3">Title:</label>
                                        <span><?= $annualContractDetails->annual_contract_title ?></span>
                                    </div>
                                    <div class="col-lg-2">

                                        <label class="mr-3">Start Date:</label>
                                        <span><?= printFormatedDate($annualContractDetails->start_date) ?></span>

                                    </div>
                                    <div class="col-lg-2">

                                        <label class="mr-3">End Date:</label>
                                        <span><?= printFormatedDate($annualContractDetails->end_date) ?></span>
                                    </div>
                                </div>
                            </div>
                            <!-- <div class="row mb-3">
                                            <?php if (!empty($requestDetails->request_id)) { ?>
                                                <div class="col-12 col-lg-12">
                                                    <label>Contract ID : </label>
                                                    <?= $requestDetails->request_id ?>
                                                </div>
                                            <?php } ?>
                                            <div class="col-lg-6">

                                                <div class="radio">
                                                    <label class="mr-3">Transaction <sup>* </sup></label>

                                                    <label class="mr-3 ml-3"><input type="radio" aria-describedby="transaction-error" name="transaction" id="transaction_export" value="Export" <?= $requestDetails->transaction == "Export" ? 'checked' : ''; ?>> Export</label>&nbsp;
                                                    <label class="mr-3 ml-3"><input type="radio" aria-describedby="transaction-error" name="transaction" id="transaction_import" value="Import" <?= $requestDetails->transaction == "Import" ? 'checked' : ''; ?>> Import</label>&nbsp;
                                                    <span id="transaction-error" class="error"></span>
                                                </div>

                                            </div>

                                            <div class="col-lg-6">

                                                <div class="radio">
                                                    <label class="mr-3">Mode<sup>* </sup></label>
                                                    <?php foreach ($modes as $mode) { ?>
                                                        <label class="mr-3 ml-3"><input type="radio" name="mode" aria-describedby="mode-error" class="mode" value="<?php echo $mode['id']; ?>" <?= $requestDetails->mode_id == $mode['id'] ? 'checked' : ''; ?>> <?php echo $mode['type']; ?></label>&nbsp;
                                                    <?php } ?>
                                                    <span id="mode-error" class="error"></span>
                                                </div>

                                            </div>

                                            <!-- <div class="col-12 col-lg-3 mb-2">
                                                <label>Delivery Term <sup>* </sup></label>
                                                <select name="delivery_term" class="custom-select">
                                                    <option value="">Select</option>
                                                    <?php foreach ($delivery_terms as $delivery_term) { ?>
                                                        <option value="<?php echo $delivery_term['id']; ?>" <?= $requestDetails->delivery_term_id == $delivery_term['id'] ? 'selected' : ''; ?>><?php echo $delivery_term['name'] . ' (' . $delivery_term['description'] . ')'; ?></option>
                                                    <?php } ?>
                                                </select>
                                            </div> -->
                            <!-- <div class="col-12 col-lg-3 mb-2">
                                                <label>Shipment Type <sup>* </sup></label>
                                                <div class="input-comment">
                                                    <select name="shipment" id="shipment" class="custom-select">
                                                        <option value="">Select</option>
                                                        <?php foreach ($shipments as $shipment) { ?>
                                                            <option value="<?php echo $shipment['id']; ?>" <?= ($shipment['id'] == '1' && in_array($requestDetails->mode_id, ['1', '2'])) ? 'disabled="true"' : '' ?> <?= $requestDetails->shipment_id == $shipment['id'] ? 'selected' : ''; ?>><?php echo $shipment['type']; ?></option>
                                                        <?php } ?>
                                                    </select>
                                                </div>
                                            </div> -->
                            <!-- <div class="col-12 col-lg-3 mb-2">
                                                <label>Cargo <sup>* </sup></label>
                                                <div class="input-comment">
                                                    <select name="container_stuffing" id="container_stuffing" class="custom-select">
                                                        <option value="">Select</option>
                                                        <option value="Stackable" <?= $requestDetails->container_stuffing == "Stackable" || $requestDetails->container_stuffing == "" ? 'selected' : ''; ?>>Stackable</option>
                                                        <option value="Non-Stackable" <?= $requestDetails->container_stuffing == "Non-Stackable" ? 'selected' : ''; ?>>Non-Stackable</option>

                                                    </select>

                                                </div>
                                            </div> -->
                            <!-- <div class="col-12 col-lg-3 mb-2">
                                                <label>Cargo Nature<sup>* </sup></label>
                                                <div class="input-comment">
                                                    <select name="cargo_status" id="cargo_status" class="custom-select">
                                                        <option value="">Select</option>
                                                        <option value="Hazardous" <?= $requestDetails->cargo_status == "Hazardous" ? 'selected' : ''; ?>>Hazardous</option>
                                                        <option value="Non-Hazardous" <?= $requestDetails->cargo_status == "Non-Hazardous" || $requestDetails->cargo_status == "" ? 'selected' : ''; ?>>Non-Hazardous</option>

                                                    </select>

                                                </div>
                                            </div> -->
                            <!-- <div class="col-12 col-lg-3 hideLCL mb-2" style="<?= $requestDetails->shipment_id != 1 ? 'display:none' : '' ?>">
                                                <label for="stuffing"><span><?= ($requestDetails->transaction == "Import") ? "De-stuffing" : "Stuffing" ?></span><sup>* </sup></label>
                                                <div class="input-comment">
                                                    <select name="stuffing" id="stuffing" class="custom-select">
                                                        <option value="">Select</option>
                                                        <option value="Factory" <?= $requestDetails->stuffing == "Factory" ? 'selected' : ''; ?>>Factory</option>
                                                        <option value="Port" <?= $requestDetails->stuffing == "Port" ? 'selected' : ''; ?>>Port</option>
                                                    </select>
                                                </div>
                                            </div> -->


                            <!-- </div> -->


                            <!-- <div class="row mb-3 mode-sea">

                                            <div class="col-12 col-lg-4 loading-port-search ">
                                                <label>Port of Loading<sup>*</sup></label>
                                                <div class="input-comment">
                                                    <input type="text" class="form-control search-box" name="port_loading_name" id="port_loading_name" placeholder="Type port name" autocomplete="off" value="<?= $requestDetails->port_loading_name; ?>" />
                                                    <div class="suggesstion-box" style="padding:0px;border:#F0F0F0 1px solid; display:none;"></div>
                                                    <input type="hidden" class="port_loading_id" id="port_loading_id" name="port_loading_id" value="<?= $requestDetails->port_loading_id; ?>">

                                                </div>
                                            </div>
                                            <div class="col-12 col-lg-4 discharge-port-search">
                                                <label>Port of Discharge<sup>*</sup></label>
                                                <div class="input-comment">
                                                    <input type="text" class="form-control search-box" name="port_discharge_name" id="port_discharge_name" placeholder="Type port name" autocomplete="off" value="<?= $requestDetails->port_discharge_name; ?>" />
                                                    <div class="suggesstion-box" style="padding:0px;border:#F0F0F0 1px solid; display:none;"></div>
                                                    <input type="hidden" class="port_discharge_id" id="port_discharge_id" name="port_discharge_id" value="<?= $requestDetails->port_discharge_id; ?>">
                                                </div>
                                            </div>
                                        </div> -->

                            <div class="form-group">
                                <div class="row">
                                    <div class="col-lg-12">
                                        <div class=" fileUpload btn btn-secondary btn-sm">
                                            <span>Import from Excel File</span>
                                            <input type="file" id="import_contract_template" name="import_contract_template" class="upload" />
                                            <div class="css-animated-loader" style="vertical-align:middle;height:15px;width:15px;display:none;"></div>
                                        </div>

                                        <a href="<?= base_url("ff-download-annual-contract-template/$annualContractDetails->id?mode_id=$mode_id") ?>" class="hideLCL btn btn-sm btn-success">Download Excel File Template</a>
                                        <a href="<?= base_url("ff-edit-annual-contract/$annualContractDetails->id?mode_id=3") ?>" class="hideLCL btn btn-sm <?= $mode_id == '3' ? 'btn-primary' : 'btn-default' ?>">Sea</a>
                                        <a href="<?= base_url("ff-edit-annual-contract/$annualContractDetails->id?mode_id=2") ?>" class="hideLCL btn btn-sm <?= $mode_id == '2' ? 'btn-primary' : 'btn-default' ?> ">Air</a>
                                        <a href="<?= base_url("ff-edit-annual-contract/$annualContractDetails->id?mode_id=1") ?>" class="hideLCL btn btn-sm <?= $mode_id == '1' ? 'btn-primary' : 'btn-default' ?> ">Road</a>
                                        <input type="hidden" name="mode_id" id='mode_id' value="<?= $mode_id ?>">
                                        <!-- <span class="btn btn-small btn-secondary hideLCL mb-3 pull-right" id="add_more_container" >Add</span> -->
                                    </div>
                                </div>
                            </div>

                            <div class="row">
                                <div class="col-12" style="max-height: 70vh;">
                                    <table id="annualContractListTable" class="table-sticky-header table-responsive table table-hover table-sm">
                                        <thead>
                                            <tr>
                                                <th class='header'>#</th>
                                                <th class='header'>Loading Place</th>
                                                <th class='header'>Loading Country</th>
                                                <th class='header'>Port of Loading</th>
                                                <th class='header'>Delivery Place</th>
                                                <th class='header'>Destination Country</th>
                                                <th class='header'>Port of Discharge</th>
                                                <th class='header'>Mode</th>
                                                <th class='header'>Transaction</th>
                                                <th class='header'>Cargo Type</th>
                                                <th class='header'>Cargo Nature</th>
                                                <th class='header'>Shipment Type</th>
                                                <th class='header'>Currency</th>
                                                <th class='header'>Volume per Annum</th>
                                                <th class='header'>Container Type</th>
                                                <?php foreach ($rfcCategory as $category) {
                                                    // $colspan = count($category->subCategory);
                                                    echo "<th  class='header'>$category->rfc_category_name Total</th>";
                                                } ?>
                                                <th class='header'>Total</th>
                                                <th class='header'>Counter Rate</th>
                                                <th class='header'>Actions</th>
                                            </tr>

                                        </thead>
                                        <tbody>
                                            <?php if ($annualContractDetails->routes) {
                                                foreach ($annualContractDetails->routes as $item) {
                                                    $this->load->view('frontend/ajax/ajaxContractRFC_Row', [
                                                        'containerCounter' => uniqid(),
                                                        'item_details' => $item,
                                                        'cargoTypeList' => $cargoTypeList,
                                                        'cargoNatureList' => $cargoNatureList,
                                                        'transactionList' => $transactionList,
                                                        'modeList' => $modeList,
                                                        'rfcCategory' => $rfcCategory,
                                                        'shipmentList' => $shipmentList
                                                    ]);
                                                }
                                            } ?>
                                        </tbody>
                                    </table>

                                </div>
                                <!-- <div class="col-lg-12">
                                                <span class="btn btn-sm btn-secondary mb-3 pull-right" onclick="addNewRowAnnualContract()"><i class="fa fa-plus"></i> Add New Row</span>
                                            </div> -->
                            </div>

                            <div class="form-group">
                                <div class="row">
                                    <div class="col-lg-12">

                                        <label class="mr-3"><input type="checkbox" name="accept_terms_and_conditions" id="accept_terms_and_conditions"> <a href="javascript:void(0);" onclick="$('#modal_terms').modal('show')" class="text-primary">Accept Terms and Conditions <sup>*</sup> </a> </label>

                                        <div class="modal fade" id="modal_terms" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                            <div class="modal-dialog modal-lg mw-100 w-75" role="document">
                                                <div class="modal-content">
                                                    <div class="modal-header">
                                                        <h5 class="modal-title" id="exampleModalLabel">Terms and Conditions</h5>
                                                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                            <span aria-hidden="true">&times;</span>
                                                        </button>
                                                    </div>
                                                    <div class="modal-body">
                                                        <?= $annualContractDetails->terms_and_conditions ?>

                                                    </div>
                                                    <div class="modal-footer">

                                                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>


                                    </div>
                                </div>
                            </div>
                            <!--<input type="submit" name="submit" class="submit action-button" value="Save & Continue" />-->
                            <div class="col-lg-12 text-center">
                                <!-- <input type="submit" name="submit" class="btn btn-submit btn-md" value="Save" /> -->
                                <!-- <input type="submit" name="submit" class="btn btn-submit btn-md" value="Save & continue" /> -->
                                <a href="<?= base_url('ff-annual-contract-list'); ?>" class="btn btn-secondary btn-md">Cancel</a>
                            </div>

                        </form>

                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- Blog content end -->
    </section><!-- sidebar_dashboard-->
</div> <!-- sidebar_dashboard-->



<script src="<?php echo base_url('assets/frontend/js/vendor/jquery-2.2.4.min.js'); ?>"></script>
<script src="<?php echo base_url('assets/frontend/js/vendor/jquery.validate.js'); ?>"></script>
<!-- <script src="https://cdnjs.cloudflare.com/ajax/libs/chosen/1.4.2/chosen.jquery.js"></script> -->

<script type="text/javascript">
    var session_user_id = '<?= $this->session->userdata("seller_logged_in")['id']; ?>';
    var ff_company_id = '<?= $this->session->userdata("seller_logged_in")['company_id']; ?>';
    var annual_contract_id = '<?= $annualContractDetails->id ?>';


    $("#import_contract_template").change(function(e) {

        var file_data = $(this).prop("files")[0]; // Getting the properties of file from file field
        var form_data = new FormData(); // Creating object of FormData class
        var mode_id = $('#mode_id').val();
        if (confirm("Are your sure" + ' Import from ' + file_data.name + "?")) {
            form_data.append("file", file_data);
            form_data.append("ff_company_id", ff_company_id);
            form_data.append("annual_contract_id", annual_contract_id);
            form_data.append("mode_id", mode_id);
            //                    console.log(file_data);
            uploadAnnualContractFile(form_data);
            return true;
        }
    });

    function uploadAnnualContractFile(form_data) {
        $('.fileUpload .css-animated-loader').show();
        $.ajax({
            url: '<?php echo base_url('Cn_ajax/ajax_ff_UploadAnnualContract'); ?>', //Server script to process data
            type: 'POST',
            //        cache: false,
            contentType: false,
            processData: false,
            data: form_data,
            //Ajax events
            success: function(html) {
                // $('#annualContractListTable tbody').append(html);
                if (html == 'success') {
                    // toastr.success('File imported successfully.');
                    window.location.reload();
                } else {
                    toastr.error('Something went wrong.');
                }
                $('.fileUpload .css-animated-loader').hide();
            }
        });
    }

    $('.break-up-btn').click(function() {
        var trargetClass = $(this).attr('data-target');
        //$(tr).find('span.total').fadeToggle(100, 'swing');
        $('tr.' + trargetClass).fadeToggle(100, 'swing')
    });
    $(document).ready(function() {
        $('#annualContractListTable').DataTable();
    });
</script>