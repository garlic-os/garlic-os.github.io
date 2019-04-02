
// /common/imports/hamburger-menu.js
// A hamburger-menu-style directory for The House of 6446
// <script type="text/javascript" src="/common/imports/hamburger-menu.js"></script>

document.addEventListener("DOMContentLoaded", function () {
	document.body.insertAdjacentHTML("afterbegin", `
<!--    Made by Erik Terwan    -->
<!--   24th of November 2015   -->
<!--        MIT License        -->
<nav id="menuToggle">
	<style>

		/* All <a> tags inside the MenuToggle */
		#menuToggle a {
			color: #171717;
			text-decoration: none;
			transition: color .3s ease;
		} #menuToggle a:hover {
			color: #F9A825;
			text-decoration: underline;
		}
		
		.hm-red:hover {
			color: #ba000d !important;
		}
		
		#menuToggle {
			display: block;
			position: fixed;
			top: 25px;
			left: 25px;
			z-index: 100;
			-webkit-user-select: none;
			user-select: none;
			font-family: "Roboto", sans-serif;
		}

		/* Position the invisible checkbox over the hamburger <span>s */
		#menuToggle input {
			display: block; /* Not none, otherwise you couldn't interact with it */
			width: 50px;
			height: 40px;
			position: absolute;
			top: -11px;
			left: -12px;
			cursor: pointer;
			opacity: 0; /* Invisible */
			z-index: 101; /* Place the invisibutton over the "icon" */
			-webkit-touch-callout: none;
		}

		#menuToggle span {
			display: block;
			width: 33px;
			height: 4px;
			margin-bottom: 5px;
			position: relative;
			background: rgba(255,204,0,0.7);
			border-radius: 3px;
			z-index: 100;
			transform-origin: 4px 0;
			transition: transform .3s cubic-bezier(.77,.2,.05,1),
				background .3s cubic-bezier(.77,.2,.05,1),
				opacity .35s ease;
		}


		#menuToggle span:first-child {
			transform-origin: 0 0;
		}

		#menuToggle span:nth-last-child(2) {
			transform-origin:0 100%;
		}

		#menuToggle input:checked~span {
			opacity: 1;
			transform: rotate(45deg) translate(-2px,-1px);
			background: #171717;
		}

		#menuToggle input:checked:hover~span {
			background:#FFCC00;
		}


		#menuToggle input:checked~span:nth-last-child(3) {
			opacity: 0;
			transform: rotate(0) scale(.2,.2);
		}

		#menuToggle input:checked~span:nth-last-child(2) {
			transform: rotate(-45deg) translate(0,-1px);
		}

		/* The menu card */
		#hm-menu {
			position: fixed; /* Stay onscreen regardless of the page's position */
			width: 300px;
			margin: -5% 0 0 -2%; /* I don't know why this needs to be here but it does */
			padding: 75px 25px;
			height: 87%;
			box-shadow: 0 0 10px 0 rgba(0,0,0,.3); /* Nice little shadow on the edge */
			background: #EDEDED;
			list-style-type: none; /* No bullets on list */
			-webkit-font-smoothing: antialiased; /* Prevent flickering in Safari */

			transform-origin: 0 0;
			transform: translate(-100%,0); /* Start offscreen */
			transition: transform .3s cubic-bezier(.77,.2,.05,1);

			overflow-y: auto; /* Allow scrolling */
		}

		/* Entries in the menu */
		#hm-menu dt {
			padding: 10px 0;
			font-size: 16pt;
		}
		#hm-menu dd {
			margin: 0;
			padding: 0 0 10px;
			font-size: 12pt;
		}	

		#menuToggle input:checked~dl {
			transform: none;
		}
		#menuToggle input:checked~#hm-menu {
			transform: none;
		}

	</style>

	<!-- A hidden checkbox is used as a click reciever,
         so you can use the :checked selector on it -->
	<input type="checkbox" />

	<span></span> <!-- ham -->
	<span></span> <!-- bur -->
	<span></span> <!-- ger -->

	<!-- The actual menu -->
	<dl id="hm-menu">
		<a href="/"><dt>Home</dt></a>
		<a href="/contact"><dt>Contact</dt></a>
		<a href="/endless-he"><dt>Endless he</dt></a>
		<a href="/endless-song"><dt>Endless song</dt></a>
		<a href="/f"><dt>f</dt></a>
		<a href="/flash"><dt>Flash</dt></a>
		<a href="/harold"><dt>Harold</dt></a>
		<a href="/trading-cards"><dt>Trading cards</dt></a>
	</dl>
</nav>
		`);
	}
);
