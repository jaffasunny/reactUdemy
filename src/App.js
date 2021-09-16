import React, { Component } from "react";
import classes from "./App.module.css";
import ProductPreview from "./ProductPreview/ProductPreview";
import ProductDetails from "./ProductDetails/ProductDetails";
import TopBar from "./TopBar/TopBar";
import ProductData from "./Utils/ProductData";

class App extends Component {
	state = {
		productData: ProductData,
		currentPreviewImage: "https://imgur.com/iOeUBV7.png",
		showHeartBeatSection: false,
	};
	render() {
		return (
			<div className="App">
				<TopBar />

				<div className={classes.MainContainer}>
					<ProductPreview
						currentPreviewImage={this.state.currentPreviewImage}
						showHeartBeatSection={this.state.showHeartBeatSection}
					/>
					<ProductDetails data={this.state.productData} />
				</div>
			</div>
		);
	}
}

export default App;
