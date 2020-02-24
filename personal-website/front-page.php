<!doctype html>
<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, minimum-scale=1.0, maximum-scale=1.0" />
    <title><?php global $page, $paged; wp_title( '|', true, 'right' ); bloginfo( 'name' ); ?></title>
    <link href="<?php bloginfo('stylesheet_url');?>" rel="stylesheet" />
    <link href="https://fonts.googleapis.com/css?family=Major+Mono+Display&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css?family=Open+Sans:700&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css?family=Space+Mono&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css?family=Lexend+Zetta&display=swap" rel="stylesheet">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
    <script>
        $(document).ready(function(){
            $("#body").fadeIn(3000);
        });
    </script>
    <?php wp_head(); ?>
</head>
<body id = "fade wrapper" style="overflow:hidden;">
    <header style="position:absolute">
        <div id="header-wrapper">
            <div id="logodiv">
                <a href="http://dev-terrygua.pantheonsite.io/"><img src="<?php echo get_template_directory_uri(); ?>/images/logo.png" alt="logo"></a>
            </div>
             <nav>
                <?php wp_nav_menu( array( 'theme_location' => 'header-menu' ) ); ?>
            </nav>
        </div>

    </header>

<section id="fade">
<canvas id="canvas"></canvas>   

<div style="display:none;">
<img id="terry" src="<?php echo get_template_directory_uri(); ?>/images/terry.png">;
</div>
<script  src = "<?php echo get_template_directory_uri(); ?>/canvastemplate.js" type="text/javascript">

</script>

</article>

<?php get_footer(); ?>