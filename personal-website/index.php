<?php get_header(); ?>

<section id = "fade">

<main>
	<?php if (have_posts()) : while (have_posts()) : the_post(); ?>
		<?php the_content(); ?>
		<?php wp_link_pages(); ?>

	<?php endwhile; ?>
	<div>
		<div><?php posts_nav_link(); ?></div>
	</div><!-- .navigation -->
<?php endif; ?>

</main>

</article>

<?php get_footer(); ?>