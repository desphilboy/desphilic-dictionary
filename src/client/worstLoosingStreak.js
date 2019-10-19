export const wls = priceArray => {
	let ans = 0;
	priceArray.forEach((p, i) => {
		let invArr = priceArray.slice(i + 1, priceArray.length);
		invArr.forEach(e => {
			ans = p - e > ans ? p - e : ans;
		});
	});

	return ans;
};
