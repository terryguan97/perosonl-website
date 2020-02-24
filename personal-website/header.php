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
    <link href="https://fonts.googleapis.com/css?family=Josefin+Slab:100&display=swap" rel="stylesheet">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
    <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet">
    <script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>
    <script>
        $(document).ready(function(){
            $("#body").fadeIn(3000);
        });
    </script>
    <?php wp_head(); ?>
</head>
<body id = "fade wrapper">
    <header>
        <div id="header-wrapper">
            <div id="logodiv">
                <a href="http://dev-terrygua.pantheonsite.io/"><img src="<?php echo get_template_directory_uri(); ?>/images/logo.png" alt="logo"></a>
            </div>
             <nav>
                <?php wp_nav_menu( array( 'theme_location' => 'header-menu' ) ); ?>
            </nav>
        </div>

    </header>
