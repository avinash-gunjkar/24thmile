   <style type="text/css">
  .input-field div.error{
    position: relative;
    top: -1rem;
    left: 0rem;
    font-size: 0.8rem;
    color:#FF4081;
    -webkit-transform: translateY(0%);
    -ms-transform: translateY(0%);
    -o-transform: translateY(0%);
    transform: translateY(0%);
  }
  .input-field label.active{
      width:100%;
  }
 
  </style>

      <!-- START CONTENT -->
      <section id="content">
        <!--breadcrumbs start-->
        <div id="breadcrumbs-wrapper">
            <!-- Search for small screen -->
            <div class="header-search-wrapper grey hide-on-large-only">
                <i class="mdi-action-search active"></i>
                <input type="text" name="Search" class="header-search-input z-depth-2" placeholder="Explore Materialize">
            </div>
          <div class="container">
            <div class="row">
              <div class="col s12 m12 l12">
                <h5 class="breadcrumbs-title">Add Dimension</h5>
                <ol class="breadcrumbs">
                  <li><a href="#">Dashboard</a>
                  </li>
                  <li><a href="#">Master</a>
                  </li>
                  <li class="active">Dimension</li>
                </ol>
              </div>
            </div>
          </div>
        </div>
        <!--breadcrumbs end-->

        <!--start container-->
        <div class="container">
          <div class="section">
            <p class="caption">Add Dimension</p>
            <div class="divider"></div>
            <!--Basic Form-->
            <div id="basic-form" class="section">
              <div class="row">
                <div class="col s12 m12 l8 offset-l2">
                  <div class="card-panel">
                    <!-- <h4 class="header2">Basic Form</h4> -->
                    <div class="row">
                      <form class="col s12" id="dimension_add_form" action="<?php echo base_url('dimension/add');?>" method="POST">
                        <div class="row">
                          <div class="input-field col s12">
                               <select class="mdb-select md-form" name="sector_id" id="sector_id">
                                <option value="" disabled selected>Choose your Sector</option>
                                <?php foreach($sector_list as $sector){ ?>
                                <option value="<?php echo $sector['id']; ?>"><?php echo $sector['name']; ?></option>
                              <?php } ?>
                              </select>
                          </div>
                        </div>
                        <div class="row">
                          <div class="input-field col s12">
                            <input id="name" name="name" type="text" class="validate">
                            <label for="name">Dimension name</label>
                          </div>
                        </div>
                        <div class="row">
                          <div class="input-field col s12">
                            <select class="mdb-select md-form" name="unit_id" id="unit_id">
                               <option value="#" disabled selected>Choose your Unit</option>
                               <option value="1">KG</option>
                               <option value="2">Litre</option>
                               <option value="3">Ton</option>
                               <option value="4">Barrels</option>
                               <option value="5">Cubic Foot</option>
                               <option value="6">Meter</option>
                            </select>
                          </div>
                       </div>
                          <div class="row">
                            <div class="input-field col s12">
                              <button class="btn cyan waves-effect waves-light right" type="submit" name="doSubmit"  value="doSubmit" name="action">Add Dimension<i class="mdi-content-send right"></i>
                              </button>
                            </div>
                          </div>
                      </form>
                    </div>
                  </div>
                </div> 
              </div>
            </div>         
         </div>
      </div>
  </section>
  <!-- END CONTENT -->

<!-- //////////////////////////////////////////////////////////////////////////// -->

<script type="text/javascript">
    $('#dimension_add_form').submit(function(e) {
        e.preventDefault();
        var action = $(this).attr('action');
        var FORMDATA = $(this).serialize();
        $.ajax({
            url: action,
            type: 'POST',
            dataType: 'json',
            data: FORMDATA,
        })
        .done(this,function(respo) {

            if(respo.status==1){
                Materialize.toast('<span>Dimension added successfully.</span>', 5000);
                $("#dimension_add_form")[0].reset();
 
            }else{
                Materialize.toast('<span>Failed to add Dimension.</span>', 5000)
            }
        })
        .fail(function(respo) {
            console.log("error",respo);
        })
        .always(function(respo) {
            console.log("complete",respo);
        });
    });
</script>

