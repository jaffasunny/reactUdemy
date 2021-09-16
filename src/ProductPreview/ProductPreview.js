import React from "react";
import classes from "./ProductPreview.module.css";

export default function ProductPreview(props) {
	const currHour =
		new Date().getHours() > 9
			? new Date().getHours()
			: "0" + new Date().getHours();
	const currMinutes =
		new Date().getMinutes() > 9
			? new Date().getMinutes()
			: "0" + new Date().getMinutes();
	return (
		<div className={classes.ProductPreview}>
			<img src="https://imgur.com/iOeUBV7.png" alt="" />
			{
			props.showHeartBeatSection ? (
				<div className={classes.HeartSection}>
					<i class="fas fa-heartbeat"></i>
					<p>78</p>
				</div>
			) : (
				<div className={classes.TimeSection}>
					<p>{`${currHour}:${currMinutes}`}</p>
				</div>
			)}
		</div>
	);
}
