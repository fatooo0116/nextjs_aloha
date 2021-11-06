<?php 
/**
 * Plugin Name: Aloha Woocommerce product slider
 * Plugin URI: https://aloha-tech.com/
 * Description: Custom plugin
 * Version: 1.0.1
 * Author: Mike Hsu
 * Author URI: https://aloha-tech.com/
 * 
 */

 /**
 * Calls the class on the post edit screen.
 */
function call_product_mediaClass() {
    new product_mediaClass();
}
 
if ( is_admin() ) {
    add_action( 'load-post.php',     'call_product_mediaClass' );
    add_action( 'load-post-new.php', 'call_product_mediaClass' );
}
 
/**
 * The Class.
 */
class product_mediaClass {
 
    /**
     * Hook into the appropriate actions when the class is constructed.
     */
    public function __construct() {
        add_action( 'add_meta_boxes', array( $this, 'add_meta_box' ) );
        add_action( 'save_post',      array( $this, 'save'         ) );
    }
 
    /**
     * Adds the meta box container.
     */
    public function add_meta_box( $post_type ) {
        // Limit meta box to certain post types.
        $post_types = array( 'work' );
 
        if ( in_array( $post_type, $post_types ) ) {
            add_meta_box(
                'product_media',
                __( 'Product Media', 'textdomain' ),
                array( $this, 'render_meta_box_content' ),
                $post_type,
                'side',
                'high'
            );
        }
    }
 
    /**
     * Save the meta when the post is saved.
     *
     * @param int $post_id The ID of the post being saved.
     */
    public function save( $post_id ) {
 
        /*
         * We need to verify this came from the our screen and with proper authorization,
         * because save_post can be triggered at other times.
         */
 
        // Check if our nonce is set.
        if ( ! isset( $_POST['myplugin_inner_custom_box_nonce'] ) ) {
            return $post_id;
        }
 
        $nonce = $_POST['myplugin_inner_custom_box_nonce'];
 
        // Verify that the nonce is valid.
        if ( ! wp_verify_nonce( $nonce, 'myplugin_inner_custom_box' ) ) {
            return $post_id;
        }
 
        /*
         * If this is an autosave, our form has not been submitted,
         * so we don't want to do anything.
         */
        if ( defined( 'DOING_AUTOSAVE' ) && DOING_AUTOSAVE ) {
            return $post_id;
        }
 
        // Check the user's permissions.
        if ( 'page' == $_POST['post_type'] ) {
            if ( ! current_user_can( 'edit_page', $post_id ) ) {
                return $post_id;
            }
        } else {
            if ( ! current_user_can( 'edit_post', $post_id ) ) {
                return $post_id;
            }
        }
 
        /* OK, it's safe for us to save the data now. */
 
        // Sanitize the user input.
        $mydata =  $_POST['xmyplugin_new_field'] ;
 
        // Update the meta field.
        update_post_meta( $post_id, '_xmy_meta_value_key', json_encode($mydata) );


        $website_link =  $_POST['website_link'] ;
        update_post_meta( $post_id, '_website_link', $website_link );
		
		
		$website_link2 =  $_POST['wp_style'] ;
        update_post_meta( $post_id, '_wp_style', $website_link2 );
		
		
	
		
    }
 
 
    /**
     * Render Meta Box content.
     *
     * @param WP_Post $post The post object.
     */
    public function render_meta_box_content( $post ) {
 
        // Add an nonce field so we can check for it later.
        wp_nonce_field( 'myplugin_inner_custom_box', 'myplugin_inner_custom_box_nonce' );
 
        // Use get_post_meta to retrieve an existing value from the database.
        $ori = get_post_meta( $post->ID, '_xmy_meta_value_key', true );
 
             // $value = stripslashes($value);
             //  $value = str_replace('\"', '', $value);
            $value  = json_decode($ori,true);
            // $value = stripslashes($value);
           //  $value = str_replace('"', '\'', $value);
       // print_r($value);
       
       // echo $post->ID;
        // Display the form, using the current value.
        ?>
   
        <link rel="stylesheet" href="//code.jquery.com/ui/1.12.1/themes/base/jquery-ui.css">
        <script src="https://code.jquery.com/ui/1.12.1/jquery-ui.js"></script>

        <script>
        var init_media_box = null;
        (function($){
        
           init_media_box = function(data){
                let mediaObj = JSON.parse(data);

                let imgObj='';
                if(mediaObj.length>0){
                    mediaObj.forEach(function(item){
                        imgObj += '<li ><div class="prev_box"   ptid="'+item.id+'" style="background-image:url('+item.url+')" ><div class="exit">x</div></div></li>';
                    });
                  //  console.log(imgObj);                
                }


                $(".pmedia ul").html(imgObj);
                $(".pmedia ul").sortable();
                
                $(".pmedia ul").on( "sortstop", function( event, ui ) {
                    let imgs = $(".pmedia ul li .prev_box");
                    let new_order = [];
                    
                    console.log(imgs);
                    imgs.each(function(itm){
                        let me = this;
                        mediaObj.filter(function(pix){
                            if(pix.id == $(me).attr('ptid')){

                                
                                new_order.push(pix);
                            }
                        });
                    });

                    // console.log(new_order);
                    $("#_unique_name88").val(JSON.stringify(new_order));
                });

                $(".pmedia ul li .exit").on("click",function(){
                    if(!window.confirm('確定刪除')){
                        return false;
                    }
                    $(this).parent().remove();
                    let dataid = $(this).parent().attr('ptid');
                    console.log(dataid);
                    let new_order = [];
                    let imgs = $(".pmedia ul li .prev_box");
                    imgs.each(function(itm){
                        let me = this;
                        mediaObj.filter(function(pix){
                                if(pix.id!=dataid){
                                    if(pix.id == $(me).attr('ptid')){
                                    new_order.push(pix);
                                }
                            }
                        });
                    });
                    $("#_unique_name88").val(JSON.stringify(new_order));
                });                
            }
            

            $(document).ready(function(){

             ///   let init_val = "<?php // echo $value;  ?>";

                $("#_unique_name88").val(JSON.stringify(<?php  echo $value; ?>));

                init_media_box('<?php  echo $value; ?>');
            });
        })(jQuery);    
        </script>

        <style>
            
            .pmedia ul{ display:flex; flex-wrap:wrap;}
            .pmedia ul li .prev_box{
                width:50px;
                height:50px;
                background-size:cover;
                margin:5px;
                border-radius:5px;
                box-shadow: 0 0 3px #999;
                position: relative;
            }  
            .pmedia ul li .exit{ 
                position: absolute;
                /* width: 30px; */
                /* height: 30px; */
                background: #fff;
                border-radius: 50%;
                color: #666;
                display: flex;
                align-items: center;
                justify-content: center;
                /* line-height: 10px; */
                padding: 2px 5px 7px;
                width: 20px;
                height: 20px;
                box-sizing: border-box;
                cursor: pointer;
                left: -5px;
                top: -5px;
                box-shadow: 0 0 2px #666;       
            }
            #_unique_name88{opacity: 1; }
        </style>

        <div class="pmedia">
            <ul>
            </ul>
        </div>


        <input id="_unique_name88" class="form-control" name="xmyplugin_new_field" type="text" value=""/><br/>
        <input id="_unique_name88_button" class="button _unique_name_button" name="_unique_name_button" type="text" value="Upload" />

        
        <script>




     let json = [];
      jQuery(document).ready(function($){
          var _custom_media = true,
              _orig_send_attachment = wp.media.editor.send.attachment;

          $('._unique_name_button').click(function(e) {
              
              

            let frame = null;

             json = [];

             /*
              var send_attachment_bkp = wp.media.editor.send.attachment;
              var button = $(this);
              var id = button.attr('id').replace('_button', '');
              _custom_media = true;
              wp.media.editor.send.attachment = function(props, attachment){
                  if ( _custom_media ) {
                    json.push(attachment);
                   

                    let xobj = [];                               
                    json.forEach(function(item){
                        xobj.push({
                            'id':item.id,
                            'url': encodeURI(item.url),
                            'title':item.title,
                            'alt':item.alt,
                        })
                    });

                    console.log( xobj);

                    $("#"+id).val(JSON.stringify(xobj));
                    init_media_box(JSON.stringify(xobj))

                  } else {
                      return _orig_send_attachment.apply( this, [props, attachment] );
                  };
              }
              */

                  // If the media frame already exists, reopen it.
                if ( frame ) {
                frame.open();
                return;
                }
                
                // Create a new media frame
                frame = wp.media({
                title: '請選擇作品照片',
                button: {
                    text: '選擇作品照片'
                },
                multiple: true  // Set to true to allow multiple files to be selected
                });

                

                    // When an image is selected in the media frame...
                frame.on( 'select', function() {
                    
                    // Get media attachment details from the frame state
                    var attachment = frame.state().get('selection').toJSON();

                    console.log(attachment);                                   
                    
                    /*
                    xobj.push({
                            'id':attachment.id,
                            'url': encodeURI(attachment.url),
                            'title':attachment.title,
                           // 'alt':item.alt,
                        })
                        */
                        let xobj = [];  
                    for(var ib in attachment){
                        
                        xobj.push({
                            'id':attachment[ib].id,
                            'url': encodeURI(attachment[ib].url),
                            'title':attachment[ib].title.replace(/[!@#$^&%*()+=[\]\/{}|:<>?,.\\-]/g, '').replace(/\"/g, "").replace(/\'/g, ""),
                           // 'alt':item.alt,
                        })
                        
                       // console.log(attachment[ib])
                   }

                   // console.log(xobj)

                    $("#_unique_name88").val(JSON.stringify(xobj));
                    init_media_box(JSON.stringify(xobj))

                   // console.log(attachment);
                });



                    // Finally, open the modal on click
          

                    frame.on('open',function() {
                        var selection = frame.state().get('selection');
                        var ids_value = '';
                        let default_val = $("#_unique_name88").val();
                        ids_value = JSON.parse(default_val);
                        console.log(ids_value);



                        if(ids_value.length > 0) {
                           // var ids = ids_value.split(',');

                           ids_value.forEach(function(id) {
                            attachment = wp.media.attachment(id.id);
                            attachment.fetch();
                            selection.add(attachment ? [attachment] : []);
                            });
                        }
                    });




                frame.open();

           //    wp.media.editor.open(button);
           //   return false;
             


          });


         


          $('.add_media2').on('click', function(){
              _custom_media = false;
          });
      });

        </script>

        <br/><br/>
        <hr />

        <?php 
            $website_link = get_post_meta( $post->ID, '_website_link', true );
			// $website_link2 = get_post_meta( $post->ID, '_website_link2', true );
			// $website_link3 = get_post_meta( $post->ID, '_website_link3', true );

            $wp_style = get_post_meta( $post->ID, '_wp_style', true );
        ?>

        <br/>
        <h3>Website Style</h3>
        <?php  // echo $wp_style; ?>
        <select name="wp_style" id="wp_style">                  
            <option value="light" <?php echo ($wp_style=='light')? 'selected' :''; ?> >Light</option>
            <option value="dark"  <?php echo ($wp_style=='dark')? 'selected' :''; ?> >Dark</option>
        </select>


		<h3>網站連結 1</h3>
        <input id="website_link" class="form-control" name="website_link" type="text" value="<?php echo esc_attr( $website_link  ); ?>"/><br/>


        <?php
    }
}