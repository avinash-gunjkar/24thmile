
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
                <h5 class="breadcrumbs-title">Document Mapping</h5>
                <ol class="breadcrumbs">
                    <li><a href="<?php echo base_url()?>">Dashboard</a></li>
                    <li><a >Master</a></li>
                    <li class="active">Document Mapping</li>
                </ol>
              </div>
            </div>
          </div>
        </div>
        <!--breadcrumbs end-->
        

        <!--start container-->
                    <div id="card-widgets">
                      <div class="row"  style="margin-top: 60px;">
                         <div class="col s12 m8 l8  offset-l2 offset-m2">
                            <select class="mdb-select md-form" name="sector" id="sector">
                              <option value="" disabled selected>Choose your sector</option>
                              <?php foreach($sector_list as $sector){ ?>
                              <option value="<?php echo $sector['id']; ?>"><?php echo $sector['name']; ?></option>
                            <?php } ?>
                            </select>
                           </div>
                      </div>

                        <div class="row" id="document_selection_area" style="display: none;">
                            <div class="col s4 m4 l4 offset-s2 offset-l2">
                              <form class="col s12" id="documentverification_add_form" action="<?php echo base_url('documentverification/sectorwiseAddDocuments');?>" method="POST">
                                  <ul id="select_document_list" class="collection with-header">
                                      <li class="collection-header cyan">
                                          <h5 class="task-card-title" style="color: #fff;">Document List</h5>
                                      </li>
                                        <?php   
                                          foreach ($documentverification_list as $documentverification) {
                                           // if (in_array($documentverification['id'], $checked_document_id))
                                           //      {
                                           //        $checked ="checked='true'";
                                           //      }
                                           //    else
                                           //      {
                                           //        $checked ="";
                                           //      }

                                         ?> 
                                              <li class="collection-item dismissable">
                                                  <input type="checkbox" id="doc-<?php echo $documentverification['id'] ?>" class="select_doc" data-doc-name="<?php echo $documentverification['name']; ?>" name="document[]" value="<?php echo $documentverification['id'] ?>"  <?php // echo $checked; ?> />
                                                  <label for="doc-<?php echo $documentverification['id'] ?>" ><?php echo $documentverification['name']; ?>
                                                  </label>
                                              </li>
                                        <?php }

                                       ?>
                                  </ul>
                                  <input type="hidden" name="sector_id" id="sector_id" value="">
                                  <div class="input-field col s6">
                                    <button class="btn cyan waves-effect waves-light right" type="button" name="doSubmit"  value="doSubmit" id="selected_all_doc">Select Documents<i class="mdi-av-fast-forward right"></i>
                                    </button>
                                </div>
                                  <div class="input-field col s6">
                                    <button class="btn cyan waves-effect waves-light right" type="submit" name="doSubmit"  value="doSubmit" id="select_doc">Save Documents<i class="mdi-av-fast-forward right"></i>
                                    </button>
                                </div>
                              </form>
                            </div>
                            <div class="col s4 m4 l4">
                               
                                    <div class="collection-header cyan">
                                        <h5 class="task-card-title" style="padding: 20px;
                                        color: #fff;margin-bottom: 0px;">Selected Document List </h5>
                                    </div>
                                <ul id="selected_doc_list" class="collection with-header" style="margin-top: 0px;">
                                </ul>
                            </div>

          </div> 
        </div>
        <!--end container-->
      </section>
      <!-- END CONTENT -->

      <!-- //////////////////////////////////////////////////////////////////////////// -->


<script type="text/javascript">


  $( document ).ready(function() {
    // var base_url = "<?php echo base_url('documentverification/getSelectedDocumentsIsArray'); ?>";
    // $.ajax({
    //         url: base_url,
    //         type: 'POST',
    //         dataType: 'json',
    //         data: null,
    //     })
    //     .done(this,function(respo) {
    //         console.log(respo);
    //         selected_doc = respo;
    //         renderSelectedDoc(selected_doc);
    //     })
  });


  var selected_doc = [];

    $('#selected_all_doc').click(function(){

       selected_doc.length = 0;
      console.log("0");
      console.log($('.select_doc').prop("checked"));

      $.each($("input[name='document[]']:checked"), function(){  
         console.log("1");          
                selected_doc.push({value:this.id,name:$(this).data('docName')});
            });
        renderSelectedDoc(selected_doc);
    });


    // $('.select_doc').click(function(){
    //   if($(this).prop("checked") == true){
    //    selected_doc.push({value:this.id,name:$(this).data('docName')});

    //    renderSelectedDoc(selected_doc);
    //   }
    //   else if($(this).prop("checked") == false){
    //     var removeItem = this.id;
    //     console.log("before -> ",selected_doc);
    //     $.each(selected_doc,function(index,ele){
          

    //       if(ele.value == removeItem){

    //         console.log("each index ==>",index);
    //       console.log("each ele ==>",ele);
    //         selected_doc.splice(index,1);
    //         return false;
    //       }

    //     });

    //     renderSelectedDoc(selected_doc);
        
    //     console.log("after -> ",selected_doc);      }
    // });

function callback(add, element) {

      console.log('add', add);
      console.log('element', element);
      if (add == element.value) {
        console.log("fsafsa->", $(this)[0].id);
        var sel_chkbx = '#'+ $(this)[0].id; 
        console.log("sel_chkbx", sel_chkbx);
        jQuery('#'+sel_chkbx).attr("checked", "checked");
      }
      else{
         jQuery('#'+sel_chkbx).attr("checked", "");
      }
};
  
   function makeSelected(docList){

    // console.log("docList ---> ",docList);

    $('#select_document_list li input').each(function (index, value) {
        // console.log('div' + index + ':' + $(this).attr('value'));
        var docvalue = $(this).val();

        docList.map(callback.bind($(this), docvalue));

        // console.log("mapped", mapped);

        // $.map(docList, function(ele, index){
        //   console.log('ele.name ->', ele.name);
        //   console.log('index ->', index);
 
        // });

      });

   }

    function renderSelectedDoc(docList) {
    

      $("#selected_doc_list").empty();
      $("#selected_doc_list p").remove();
      var html = '';

      // console.log("render -> ",docList);
      $.map(docList, function(ele, index){
          // console.log('ele.name ->', ele.name);
          // console.log('index ->', index);
          html += '<li class="collection-item dismissable"><input type="checkbox" class="select_doc" checked="true" ><label>'+ele.value+'-'+ele.name+'</label></li>'
      });
      $("#selected_doc_list").append(html);
    }

    $('#documentverification_add_form').submit(function(e) {
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
                Materialize.toast('<span>Company add successfully.</span>', 5000);
                $("#documentverification_add_form")[0].reset();
 
            }else{
                Materialize.toast('<span>Failed to add company.</span>', 5000)
            }
        })
        .fail(function(respo) {
            console.log("error",respo);
        })
        .always(function(respo) {
            console.log("complete",respo);
        });
        
    });


    $('.toggleActive').click(function(event) { 
      var id = $(this).attr('id').split('-')[1];
      var isActive = $(this).prop("checked") ? 1 : 0 ;       
      var BasePath = "<?php echo base_url('document/changeStatus');?>"
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

    $('#sector').change(function(){
      $('#document_selection_area').show();
      var sector = $(this).val();
      $('#sector_id').val(sector);

      console.log("---> ",$('#select_document_list li input'));

      // var selectedDocumentListInput = $('#select_document_list li input');

       var base_url = "<?php echo base_url('documentverification/getSelectedDocumentsIsArray'); ?>";
        $.ajax({
                url: base_url,
                type: 'POST',
                dataType: 'json',
                data: {sector_id:sector},
            })
            .done(this,function(respo) {

                

                renderSelectedDoc(respo);
                makeSelected(respo)
            })


    });
</script>