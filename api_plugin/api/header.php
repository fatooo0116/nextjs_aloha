<?php
/**
 * The header for our theme
 *
 * This is the template that displays all of the <head> section and everything up until <div id="content">
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package pira
 */

?>
<!doctype html>
<html <?php language_attributes(); ?>>
<head>
	<meta charset="<?php bloginfo( 'charset' ); ?>">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<link rel="profile" href="https://gmpg.org/xfn/11">

	<link rel="shortcut icon" href="/wp-content/uploads/2021/10/ico.gif" />
	<link rel="stylesheet" href="/wp-content/themes/estate/assets/css/font-awesome-4/css/font-awesome.min.css">

	<meta property="og:image" content="/wp-content/uploads/2021/10/ico.gif">
	

	<?php wp_head(); ?>
	<meta property="og:description" content="共創更好的都市未來-人人享有適足韌性的居住">
</head>

<body <?php body_class(); ?>>
<?php wp_body_open(); ?>
<div id="page" class="site">
	



	<header id="main_menuv2" class="site-header">
			<div class="top_inner">
				<div class="site-branding">
				<a href="<?php echo home_url('/'); ?>"><img src='/wp-content/uploads/2021/10/ico.gif'  alt=""></a>

					<?php
					the_custom_logo();
					if ( is_front_page() && is_home() ) :				
						?>
						<h1 class="site-title">
							<a href="<?php echo esc_url( home_url( '/' ) ); ?>" rel="home"  title="<?php bloginfo( 'name' ); ?>"><?php if(get_option('ddg_header_logo')){ echo '<img src="'.esc_attr( get_option('ddg_header_logo') ).'" />'; } ?></a>
						</h1>
						<?php
					else :
						?>
						<p class="site-title"><a href="<?php echo esc_url( home_url( '/' ) ); ?>" rel="home" title="<?php bloginfo( 'name' ); ?>" > <?php if(get_option('ddg_header_logo')){ echo '<img src="'.esc_attr( get_option('ddg_header_logo') ).'" />'; } ?></a></p>
						<?php
					endif;
					$bluextrade_description = get_bloginfo( 'description', 'display' );
					if ( $bluextrade_description || is_customize_preview() ) :
						?>
						<p class="site-description hide"><?php echo $bluextrade_description; /* WPCS: xss ok. */ ?></p>
					<?php endif; ?>
				</div><!-- .site-branding -->


				<button class="menu-toggle" aria-controls="primary-menu" aria-expanded="false">
						<span class="msep"></span>						
						<span class="msep"></span>
				</button>

				<nav id="site-navigation" class="main-navigation">
					<div class="global_menu">
						<?php
						if(is_front_page() ){
							wp_nav_menu( array(
								'theme_location' => 'menu-1',
								'menu_id'        => 'primary-menu',
							) );
						}else{
							wp_nav_menu( array(
								'theme_location' => 'menu-en',
								'menu_id'        => 'PrimaryEn',
							) );
						}

						?>
					</div><!-- global menu-->
				</nav><!-- #site-navigation -->
		</div>
	</header><!-- #masthead -->	
