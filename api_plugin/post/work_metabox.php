<?php

/**
 * Calls the class on the post edit screen.
 */
function call_japanClass() {
    new japan_Class();
}
 
if ( is_admin() ) {
    add_action( 'load-post.php',     'call_japanClass' );
    add_action( 'load-post-new.php', 'call_japanClass' );
}
 
/**
 * The Class.
 */
class japan_Class {
 
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
                'artist_class',
                __( '相關資訊', 'textdomain' ),
                array( $this, 'render_meta_box_content' ),
                $post_type,
                'advanced',
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
        $mydata1 = sanitize_text_field( $_POST['_my_meta1_link'] );
        update_post_meta( $post_id, '_my_meta1_link', $mydata1 );


        $mydata2 = sanitize_text_field( $_POST['_my_meta2_title'] );
        update_post_meta( $post_id, '_my_meta2_title', $mydata2 );

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
        $value1 = get_post_meta( $post->ID, '_my_meta1_link', true );
        $value2 = get_post_meta( $post->ID, '_my_meta2_title', true );
 

        ?>

        <style>
            .xitem{margin-top:10px;}
            .xitem input{width:100%;}
            .xupload{ display:flex; }
            .xupload .button{ max-width:120px; }
            .xpreview img{max-width:200px;max-height:200px;}
            .xpreview{margin-top:5px;max-width:200px;max-height:200px;border:2px dotted #999;margin-bottom:20px;}
        </style>


        <div class="xitem" >
            <label for="myplugin_new_field">
                <b><?php _e( '副標題', 'textdomain' ); ?></b>
                <input type="text" id="class_sub_title"  class=""  name="_my_meta2_title" value="<?php echo esc_attr( $value2 ); ?>" size="25" />
            </label>
        </div>

        <div class="xitem">
            <label for="myplugin_new_field">
                <b><?php _e( 'Link', 'textdomain' ); ?></b>
                <input type="text" id="class_time"   name="_my_meta1_link" value="<?php echo esc_attr( $value1 ); ?>" size="25" />
            </label>
        </div>


    





        <script>
   

        </script>        
        <?php
    }
}
