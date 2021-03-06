<head>
  <link href="<?php echo base_url('assets/backend/js/plugins/data-tables/css/jquery.dataTables.min.css')?>" type="text/css" rel="stylesheet">
</head>

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
                <h5 class="breadcrumbs-title">RFC Category</h5>
                <ol class="breadcrumbs">
                    <li><a href="<?php echo base_url()?>">Dashboard</a></li>
                    <li><a >Master</a></li>
                    <li class="active">RFC Category</li>
                </ol>
              </div>
            </div>
          </div>
        </div>
        <!--breadcrumbs end-->
        

        <!--start container-->
        <div class="container">
          <div class="section">
            <div class="right pt-10" style="padding: 10px">
                <a href="<?php echo base_url('rfccategory/add')?>" class="btn waves-effect waves-light " type="submit" name="action">Add RFC Category<i class="mdi-content-add right"></i></a>              
            </div>  
            <div class="clearfix divider"></div>
            <!--DataTables example-->
            <div id="table-datatables"> 
              <div class="row"> 
                <div class="col s12 m12 l12">
                  <table id="data-table-simple" class="responsive-table display" cellspacing="0">
                    <thead>
                        <tr>
                            <th>Sr. No.</th>
                            <th>RFC Category Name</th>
                            <th>is Active</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                 
                    <tfoot>
                        <tr>
                            <th>Sr. No.</th>
                            <th>RFC Category Name</th>
                            <th>is Active</th>
                            <th>Action</th>
                        </tr>
                    </tfoot>
                 
                    <tbody>

                        <?php foreach ($rfccategory_list as $rfccategory) { ?> 
                        <tr>
                            <td><?php echo $rfccategory['id'] ?></td>
                            <td><?php echo $rfccategory['rfc_category_name'] ?></td>
                            <td>
                                <div class="switch">
                                  <label>
                                    Inactive
                                    <input class="toggleActive" type="checkbox" id="rfccategory-<?php echo $rfccategory['id']; ?>" <?php echo $rfccategory['isActive'] ==1 ? 'checked' : '' ?>>
                                    <span class="lever"></span>
                                    Active
                                  </label>
                                </div>
                            </td>
                            <td>
                                <a href="<?php echo base_url('rfccategory/edit') ?>/<?php echo $rfccategory['id'] ?>" class="btn-floating waves-effect waves-light light-blue lighten-2"><i class="mdi-editor-mode-edit"></i></a>
                                <!-- <a class="btn-floating waves-effect waves-light red lighten-1"><i class="mdi-action-delete"></i></a> -->
                            </td> 
                        </tr>
                        <?php  } ?> 
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div> 
        </div>
        <!--end container-->
      </section>
      <!-- END CONTENT -->

      <!-- //////////////////////////////////////////////////////////////////////////// -->

<script type="text/javascript">
    
    $('.toggleActive').click(function(event) { 
      var id = $(this).attr('id').split('-')[1];
      var isActive = $(this).prop("checked") ? 1 : 0 ;       
      var BasePath = "<?php echo base_url('rfccategory/changeStatus');?>"
      changeStatus(BasePath,id,isActive); 
       
     }); 

    function changeStatus(BasePath,id,isActive) {  
      $.ajax({
        url: BasePath,
        type: 'POST',
        dataType: 'json',
        data: {
            id: id,
            isActive: isActive
            },
      })
      .done(function(respo) {
        Materialize.toast('<span>'+respo.msg+'</span>', 5000);  
        console.log("success",respo);
      })
      .fail(function(respo) {
        console.error("error",respo);
      })
      .always(function() {
        console.log("complete");
      });
      
    }
</script>