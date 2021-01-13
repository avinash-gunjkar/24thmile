<tr class="list-container-item container_<?= $containerCounter ?>">
    <td class='sr-no'>

    </td>
    <td>
        <input type="hidden" name="route[<?= $containerCounter ?>][id]" value="<?= $item_details->id; ?>">
        <?= $item_details->loading_place; ?>
    </td>
    <td>
        <?= $item_details->loading_country; ?>

    </td>
    <td>
        <?= $item_details->port_loading_name; ?>
    </td>
    <td>
        <?= $item_details->discharge_place; ?>
    </td>
    <td>
        <?= $item_details->discharge_country; ?>
    </td>
    <td>
        <?= $item_details->port_discharge_name; ?>

    </td>
    <td>
        <?= $item_details->mode; ?>
    </td>
    <td>
        <?= $item_details->transaction; ?>
    </td>
    <td>
        <?= $item_details->container_stuffing; ?>
    </td>
    <td>
        <?= $item_details->cargo_status; ?>
    </td>
    <td>
        <?= $item_details->shipment; ?>
    </td>
    <td>
        <?= $item_details->currency; ?>
    </td>
    <td>
        <?= $item_details->volume_per_annum; ?>
    </td>
    <td>
        <?= $item_details->container_type; ?>
    </td>
    <?php $total = 0;
    foreach ($item_details->charges as $key_1 => $category) {
        echo "<td>$category->categoryTotal</td>";
        $total +=     $category->categoryTotal;
    } ?>
    <td><?= $total ?></td>
    <td><?= $item_details->counter_rate ?></td>
    <td>
        <a href="javascript:void(0);" onclick="$('#modal_<?= $containerCounter ?>').modal('show')" class="text-primary" title="View Charges">View Charges</a>
        <div class="modal fade" id="modal_<?= $containerCounter ?>" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-lg mw-100 w-75" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">View Charges</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <table>
                            <thead>

                                <th rowspan="2" class='header'>Loading Place</th>
                                <th rowspan="2" class='header'>Loading Country</th>
                                <th rowspan="2" class='header'>Port of Loading</th>
                                <th rowspan="2" class='header'>Delivery Place</th>
                                <th rowspan="2" class='header'>Destination Country</th>
                                <th rowspan="2" class='header'>Port of Discharge</th>
                                <th rowspan="2" class='header'>Mode</th>
                                <th rowspan="2" class='header'>Transaction</th>
                                <th rowspan="2" class='header'>Cargo Type</th>
                                <th rowspan="2" class='header'>Cargo Nature</th>
                                <th rowspan="2" class='header'>Shipment Type</th>
                                <th rowspan="2" class='header'>Currency</th>
                                <th rowspan="2" class='header'>Volume per Annum</th>
                                <th rowspan="2" class='header'>Container Type</th>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>
                                        <input type="hidden" name="route[<?= $containerCounter ?>][id]" value="<?= $item_details->id; ?>">
                                        <?= $item_details->loading_place; ?>
                                    </td>
                                    <td>
                                        <?= $item_details->loading_country; ?>

                                    </td>
                                    <td>
                                        <?= $item_details->port_loading_name; ?>
                                    </td>
                                    <td>
                                        <?= $item_details->discharge_place; ?>
                                    </td>
                                    <td>
                                        <?= $item_details->discharge_country; ?>
                                    </td>
                                    <td>
                                        <?= $item_details->port_discharge_name; ?>

                                    </td>
                                    <td>
                                        <?= $item_details->mode; ?>
                                    </td>
                                    <td>
                                        <?= $item_details->transaction; ?>
                                    </td>
                                    <td>
                                        <?= $item_details->container_stuffing; ?>
                                    </td>
                                    <td>
                                        <?= $item_details->cargo_status; ?>
                                    </td>
                                    <td>
                                        <?= $item_details->shipment; ?>
                                    </td>
                                    <td>
                                        <?= $item_details->currency; ?>
                                    </td>
                                    <td>
                                        <?= $item_details->volume_per_annum; ?>
                                    </td>
                                    <td>
                                        <?= $item_details->container_type; ?>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <div class="row">
                        <div class="col-lg-6">
                        <table class="table">
                            <tbody>
                                <?php
                                $toalOfAllCharges = 0;
                                foreach ($item_details->charges as $key_1 => $category) {   ?>
                                    <?php if (!empty($category->subCategory)) {

                                    
                                        echo "<tr class='breakupBtnContainer'><th style='background-color:#4285f426;color:#000;' class='text-left'>$category->rfc_category_name</th><th class='text-left'>$category->categoryTotal <a href='javascript:void(0)' class='pull-right break-up-btn text-primary' data-target='breakup-details-$key_1' role='button'>+ Break Up</a></th></tr>";
                                        $toalOfAllCharges += $category->categoryTotal;

                                        foreach ($category->subCategory as $subcat) {
                                            
                                            echo "<tr class='breakup-details-$key_1' style='display:none;'><td class='text-left'>$subcat->rfcChargesTitle:</td><td class='text-left'> $subcat->charges</td></tr>";
                                        }


                                        // echo "<tr  ><th></th><th>$th1</th> </tr>";

                                        } ?>
                                <?php } ?>
                            </tbody>
                            <tfoot>
                            <tr><th class='text-left'>Total</th><th class='text-left'><?=$toalOfAllCharges?></th></tr>
                            <tr><th class='text-left'>Counter Rate</th><th class='text-left'><?=$item_details->counter_rate?></th></tr>
                            </tfoot>
                        </table>
                        </div>
                        <div class="col-lg-6">
                        <table class="table col-lg-6">
                        <thead>
                        <tr class='breakupBtnContainer'><th style='background-color:#4285f426;color:#000;' class='text-left'> Riders</th><th> <a href='javascript:void(0)' class='pull-right break-up-btn text-primary' data-target='rider-breakup-details' role='button'>+ Break Up</a></th></tr>
                        </thead>
                            <tbody>
                                <?php
                                foreach ($item_details->ridersLables as $key_1 => $rider) {   ?>
                                    <?php if (!empty($item_details->ridersLables)) {

                                        echo "<tr class='rider-breakup-details' style='display:none;'><td class='text-left'>".(str_replace('{mode}',$item_details->mode,$rider->rider_title)).":</td><td class='text-left'>$rider->value_1</td></tr>";

                                         } 
                                     } ?>
                            </tbody>
                        </table>
                        </div>
                        
                        
                        

                        </div>
                        
                    </div>
                    <div class="modal-footer">

                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                    </div>
                </div>
            </div>
        </div>

    </td>
</tr>