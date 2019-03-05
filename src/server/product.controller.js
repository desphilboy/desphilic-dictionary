import product from  './product.model';

//Simple version, without validation or sanitation
export  function test(req, res) {
	console.log('from test>>>>>>>>>>>>>>>>>>>>', product)
    res.json({ 
    	message: 'Greetings 3 from the Test controller!',
    	product: product(),
    });
};
