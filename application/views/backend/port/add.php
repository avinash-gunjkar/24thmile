
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
                <h5 class="breadcrumbs-title">Add Port</h5>
                <ol class="breadcrumbs">
                  <li><a href="index.html">Dashboard</a>
                  </li>
                  <li><a href="#">Master</a>
                  </li>
                  <li class="active">Port</li>
                </ol>
              </div>
            </div>
          </div>
        </div>
        <!--breadcrumbs end-->


        <!--start container-->
        <div class="container">
          <div class="section">

            <p class="caption">Add Port</p>

            <div class="divider"></div>
            <!--Basic Form-->
            <div id="port_list_err"></div>
            <div id="basic-form" class="section">
              <div class="row">
                <div class="col s12 m12 l8 offset-l2">
                  <div class="card-panel">
                    <!-- <h4 class="header2">Basic Form</h4> -->
                    <div class="row">
                      <form class="col s12" id="port_add_form" action="<?php echo base_url('port/add');?>" method="POST">
                        <div class="row">
                          <div class="input-field col s12">
                            <input id="port_name" name="port_name" type="text" class="validate">
                            <label for="port_name">Port Name</label>
                          </div>
                      </div>

                        <div class="row">
                          <div class="input-field col s12">
                            <textarea id="port_description" name="port_description" class="materialize-textarea validate"></textarea>
                            <label for="port_description">Port Description</label>
                          </div> 

                          <div class="row">
                          <div class="input-field col s12 m4 l4">
                                  <input type="checkbox" id="loading" class="selectcheck" name="loading" value="1" >
                                  <label for="loading">Loading</label>
                         </div> 

                          <div class="input-field col s12 m4 l4">
                                  <input type="checkbox" class="selectcheck" id="discharge" name="discharge" value="2">
                                  <label for="discharge">Discharge</label>
                         </div>
                        </div>
                          <div class="row">
                            <div class="input-field col s12">
                              <button class="btn cyan waves-effect waves-light right" type="submit" id="doSubmit" name="doSubmit"  value="doSubmit" name="action">Add Port<i class="mdi-content-send right"></i>
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
    $('#port_add_form').submit(function(e) {
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
                Materialize.toast('<span>Port added successfully.</span>', 5000);
                $("#port_add_form")[0].reset();
 
            }else{
                Materialize.toast('<span>Failed to add Port.</span>', 5000)
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

