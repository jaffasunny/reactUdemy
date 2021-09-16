import classes from "./TopBar.module.css";

import React from "react";

export default function TopBar() {
	return (
		<header>
			<nav className={classes.TopBar}>
				<img src="./amazon_logo.png" alt="Amazon Logo" />
			</nav>
		</header>
	);
}
