<?php
add_action( 'rest_api_init', function () {
  register_rest_route( 'work/v1', '/post_api', array(
    'methods' => 'POST',
    'callback' => 'category_post_api_handler',
  ) );
});
function category_post_api_handler($data){
  
    /*
  $ck1 = (isset($data['check1'])) ? $data['check1'] : 0; 
  $ck2 = (isset($data['check2'])) ? $data['check2'] : 0; 
  
  global $wpdb;
  $table_name =  $wpdb->prefix . 'post';;
  $error = [];

  foreach($ck1 as $item){
    // echo $item;
     
    $sql = "SELECT * FROM $table_name WHERE product_id='".$item."'";
    $results = $wpdb->get_results($sql,ARRAY_A);
    if(count($results)>0){
       //  print_r($ck2);
        
       if($results[0]['woo_id']>0){
        if($ck2){
            wp_set_object_terms( $results[0]['woo_id'], $ck2,'product_cat');
        }
       }else{
            $error[]= array( 'info'=> $item.'-woo_id為0', 'data'=> $results);
       }

        
    }else{
        $error[]= array( 'info'=>$item.'-找不到產品', 'data'=> $results);
    }
  }
  */

  $args = array(
     // 'post_type'=> array('work'),
      'post_status' => array('publish'),
      'orderby' => 'date',
      'order' => 'DESC',
      'posts_per_page' => 50,
  );

  $out = array();

    // The Query
    $the_query = new WP_Query( $args );
    
    // The Loop
    if ( $the_query->have_posts() ) {
    
        while ( $the_query->have_posts() ) {
            $the_query->the_post();
            

            $out[] = array(
                'id' => get_the_ID(),
                'title' => get_the_title(),
                'content'=> get_the_content(),
                'date' => get_the_date('Y-m-d'),
                'terms'=> get_the_terms(get_the_ID(),'type'),
                'img'=> get_the_post_thumbnail_url(get_the_ID()),
                'img_s'=> get_the_post_thumbnail_url(get_the_ID(),'medium'),                    
            );
        }
        
    } else {
        // no posts found
    }
    /* Restore original Post Data */
    wp_reset_postdata();


  $error = '';  
  if(count($out)>0){
    $outp = array(
        'status' => 1,
        'data' => $out,
    );
  }else{
    $outp = array(
        'status' => 0        
    );
  }
  
  return  $outp;
}








/* 取得  Post By Title  */


add_action( 'rest_api_init', function () {
  register_rest_route( 'work/v1', '/get_blog_by_title', array(
    'methods' => 'POST',
    'callback' => 'get_blog_by_title_func',
  ) );
});
function get_blog_by_title_func($data){

    $title = (isset($data['title'])) ? $data['title'] : 0; 
      
    $args = array(
      'title' => $title,
      'post_type'=> array('post')
    );
    $data_item = "";
    
    $the_query = new WP_Query( $args );

    if ( $the_query->have_posts() ) {
        while ( $the_query->have_posts() ) {
            $the_query->the_post();

  
            

            $post_item = array(
              'id' => get_the_ID(),
              'title' => get_the_title(),           
              'excerpt' => get_the_excerpt(get_the_ID()),
              'link' => get_permalink(),
              'date'=>get_the_date('Y-m-d m:i:s'),
              'content'=> get_the_content(),
              'img'=> get_the_post_thumbnail_url(get_the_ID()),
              'img_s'=> get_the_post_thumbnail_url(get_the_ID(),'medium'),              
            );

            
            
            $the_content = apply_filters('the_content', get_the_content());
            if ( !empty($the_content) ) {
              $post_item['content'] = $the_content;
            }
            
      


            return $post_item;; 
        }
    } else { 
      
   
      return 0; 
    }


}
