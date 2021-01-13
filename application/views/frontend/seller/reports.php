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

    .dataTables_length .form-control.input-sm {
        margin: 0px 10px;
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
                        <h3 class="heading3-border"><?= $reportType ?> Report
                            <a style="float:right;" href="<?= base_url('fs-reports/' . $reportType . "?download=true&from_dt=$from_dt&to_dt=$to_dt") ?>" class="btn btn-primary btn-sm pull-right mt-2 mx-3">Download Xls Report</a>
                            <a style="float:right;" href="<?= base_url('fs-reports/' . $reportType . "?send=true&from_dt=$from_dt&to_dt=$to_dt") ?>" class="btn btn-success btn-sm pull-right mt-2 mx-3">Send Xls Report</a>
                        </h3>

                        <div class="col-12 col-lg-12">
                            <form method="get" action="">
                                <table class="table">
                                    <colgroup>
                                        <col style="width:250px">
                                        <col style="width:250px">
                                        <col>
                                    </colgroup>
                                    <tr>
                                        <td><label>From</label><input type="text" class="date-picker mx-3" name="from_dt" value="<?= $from_dt ?>" /></td>
                                        <td><label>To</label><input type="text" class="date-picker mx-3" name="to_dt" value="<?= $to_dt ?>" /></td>
                                        <td class="text-left"><input type="submit" class="btn btn-sm btn-secondary" name="btnSearch" value="Search"></td>
                                    </tr>
                                </table>
                            </form>
                        </div>
                        <div class="table-responsive">

                            <table id="request_list" class="mdl-data-table" style="width:100%">
                                <thead>
                                    <tr>
                                        <th class="text-left">RFC ID</th>
                                        <th class="text-left">RFC Date</th>
                                        <th class="text-left">Mode</th>
                                        <th class="text-left">D.Term</th>
                                        <th class="text-left">Shipment</th>
                                        <th class="text-right">Invoice Value</th>
                                        <?php if ($reportType == 'Export') { ?>
                                            <th class="text-left">Custom Inv</th>
                                            <th class="text-left">Custom Inv Date</th>
                                            <th class="text-left">Custom Inv Value</th>
                                            <th class="text-left">Custom Inv Currency</th>
                                            <th class="text-left">Consignor</th>
                                            <th class="text-right">DBK in (INR)</th>
                                            <th class="text-right">DBK Payment Status</th>
                                            <th class="text-right">MEIS Incentive</th>
                                            <th class="text-right">MEIS Payment</th>
                                            <th class="text-left">SB Number</th>
                                            <th class="text-left">SB Date</th>
                                        <?php } ?>
                                        <?php if ($reportType == 'Import') { ?>
                                            <th class="text-left">Comm Inv</th>
                                            <th class="text-left">Comm Inv Date</th>
                                            <th class="text-left">Comm Inv Value</th>
                                            <th class="text-left">Comm Inv Currency</th>
                                            <th class="text-left">Consignee</th>
                                            <th class="text-left">Importer Under any Incentive Scheme</th>
                                            <!-- <th class="text-left">Foreign Trade Policy Compliance, if any </th> -->
                                            <th class="text-left">Closed Advance License/EPCG or other license if any </th>
                                            <th class="text-left">BOE Number</th>
                                            <th class="text-left">BOE Date</th>
                                        <?php } ?>

                                        <th class="text-right">BL/AWB Number</th>
                                        <th class="text-right">BL/AWB Date</th>
                                        <th class="text-right">FF Name</th>
                                        <th class="text-right">FF Invoice Value</th>
                                        <th class="text-right">FF Payment Status</th>
                                        <th class="text-right">Status</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <?php foreach ($shippig_requirment_list as $requirment) {

                                        $skipComparative = ($requirment->delivery_term_id == 1 && $requirment->transaction == 'Export') || (in_array($requirment->delivery_term_id, ['5', '6', '7']) && $requirment->transaction == 'Import');                       ?>
                                        <tr>
                                            <td class="text-left"><?php echo $requirment->request_id; ?></td>
                                            <td class="text-left"><?= printFormatedDate($requirment->created_at); ?></td>
                                            <td class="text-left"><?php echo $requirment->mode; ?></td>
                                            <td class="text-left"><?php echo $requirment->delivery_term_name; ?></td>
                                            <td class="text-left"><?php echo $requirment->shipment; ?></td>
                                            <!-- <td class="text-right"><?php echo $requirment->shipment_value_currency . ' ' . number_format($requirment->shipment_value) ?></td> -->
                                            <td class="text-right"><?php echo number_format($requirment->Invoice_amount) ?></td>
                                            <?php if ($reportType == 'Export') { ?>
                                                <td class="text-left"><?= $requirment->custom_invoice_number ?></td>
                                                <td class="text-left"><?= printFormatedDate($requirment->custom_invoice_date) ?></td>
                                                <td class="text-left"><?= $requirment->custom_invoice_value ?></td>
                                                <td class="text-left"><?= $requirment->custom_invoice_currency ?></td>
                                                <td class="text-left"><?php echo wordwrap($requirment->consignor_company_name, 15, "<br>"); ?></td>
                                                <td class="text-right"><?php echo number_format($requirment->DBK_amount) ?></td>
                                                <td class="text-right"><?= $requirment->DBK_status == '1' ? 'Received' : 'Pending' ?></td>
                                                <td class="text-right"><?php echo number_format($requirment->MEIS_amount) ?></td>
                                                <td class="text-right"><?= $requirment->MEIS_status == '1' ? 'Received' : 'Pending' ?></td>
                                                <td class="text-right"><?= $requirment->shipping_bill_number ?></td>
                                                <td class="text-right"><?= $requirment->shipping_bill_date ? printFormatedDate($requirment->shipping_bill_date) : '- -'; ?></td>

                                            <?php } ?>
                                            <?php if ($reportType == 'Import') { ?>
                                                <td class="text-left"><?= $requirment->commercial_invoice_number ?></td>
                                                <td class="text-left"><?= printFormatedDate($requirment->commercial_invoice_date) ?></td>
                                                <td class="text-left"><?= $requirment->commercial_invoice_value ?></td>
                                                <td class="text-left"><?= $requirment->commercial_invoice_currency ?></td>
                                                <td class="text-left"><?php echo wordwrap($requirment->consignee_company_name, 15, "<br>"); ?></td>
                                                <td class="text-left"><?= $requirment->import_under_schment ?></td>
                                                <td class="text-left"><?= $requirment->foreign_trade_policy_compliance ? 'Done' : 'Pending' ?></td>
                                                <td class="text-right"><?= $requirment->bill_of_entry_no ?></td>
                                                <td class="text-right"><?= $requirment->bill_of_entry_date ? printFormatedDate($requirment->bill_of_entry_date) : '- -'; ?></td>

                                            <?php } ?>
                                            <td class="text-right"><?= $requirment->bill_of_lading_number ?></td>
                                            <td class="text-right"><?= $requirment->bill_of_lading_date ? printFormatedDate($requirment->bill_of_lading_date) : '- -'; ?></td>
                                            <td class="text-right"><?= $requirment->ff_company_name ?></td>
                                            <td class="text-right"><?php echo number_format($requirment->Invoice_amount) ?></td>
                                            <td class="text-right"><?= $requirment->bill_amount_received == '1' ? 'Received' : ($skipComparative ? 'Not Applicable' : 'Pending') ?></td>
                                            <td class="text-right"><?php echo $requirment->status_title ? $requirment->status_title : '- -'; ?></td>



                                        </tr>
                                    <?php } ?>
                                </tbody>

                            </table>
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