// menu options
const links = [
	// {
	// 	text: 'Home',
	// 	link: '/',
	// },
	{
		text: 'Playing Cards',
		link: 'areas.html#playingcards',
	},
	{
		text: 'Lego Models',
		link: 'areas.html#legomodels',
	},
	{
		text: 'Board Games',
		link: 'areas.html#boardgames',
	},
	{
		text: 'RC Toys',
		link: 'areas.html#rctoys',
	},
	{
		text: 'Contact Us',
		link: 'contact.html',
	},
];

const areas = [
	{
		areaID: 'rctoys',
		areaTitle: 'Remote Controlled Toys',
		products: [
			{
				name: 'Buldozer',
				productLink: '#rc1',
				photoLink: './assets/rc_toys/rc1.jpeg',
				price: '$ 9.99',
			},
			{
				name: 'T-Rex',
				productLink: '#rc2',
				photoLink: './assets/rc_toys/rc2.jpg',
				price: '$ 9.99',
			},
			{
				name: 'Patrol Boat',
				productLink: '#rc3',
				photoLink: './assets/rc_toys/rc3.jpg',
				price: '$ 9.99',
			},
			{
				name: 'Quad Copter',
				productLink: '#rc4',
				photoLink: './assets/rc_toys/rc4.jpg',
				price: '$ 9.99',
			},
			{
				name: 'Tank',
				productLink: '#rc5',
				photoLink: './assets/rc_toys/rc5.jpg',
				price: '$ 9.99',
			},
			{
				name: 'Boxing Robots',
				productLink: '#rc6',
				photoLink: './assets/rc_toys/rc6.jpg',
				price: '$ 9.99',
			},
			{
				name: 'Stunt Plane',
				productLink: '#rc7',
				photoLink: './assets/rc_toys/rc7.jpg',
				price: '$ 9.99',
			},
			{
				name: 'Submarine',
				productLink: '#rc8',
				photoLink: './assets/rc_toys/rc8.jpg',
				price: '$ 9.99',
			},
		],
	},
	{
		areaID: 'boardgames',
		areaTitle: 'Board Games',
		products: [
			{
				name: 'Java',
				productLink: '#bg1',
				photoLink: './assets/board_games/bg1.jpg',
				price: '$ 9.99',
			},
			{
				name: "Memoir'44",
				productLink: '#bg2',
				photoLink: './assets/board_games/bg2.jpg',
				price: '$ 9.99',
			},
			{
				name: 'Monopoly',
				productLink: '#bg3',
				photoLink: './assets/board_games/bg3.jpg',
				price: '$ 9.99',
			},
			{
				name: 'Scrabble',
				productLink: '#bg4',
				photoLink: './assets/board_games/bg4.jpg',
				price: '$ 9.99',
			},
			{
				name: 'Shogun',
				productLink: '#bg5',
				photoLink: './assets/board_games/bg5.jpg',
				price: '$ 9.99',
			},
			{
				name: 'Ticket to Ride',
				productLink: '#bg6',
				photoLink: './assets/board_games/bg6.jpg',
				price: '$ 9.99',
			},
			{
				name: 'Tikal',
				productLink: '#bg7',
				photoLink: './assets/board_games/bg7.jpg',
				price: '$ 9.99',
			},
		],
	},
	{
		areaID: 'legomodels',
		areaTitle: 'Lego Models',
		products: [
			{
				name: 'Sydney Opera House',
				productLink: '#lg1',
				photoLink: './assets/lego_models/lg1.jpg',
				price: '$ 9.99',
			},
			{
				name: 'Finger Sculpture',
				productLink: '#lg2',
				photoLink: './assets/lego_models/lg2.jpg',
				price: '$ 9.99',
			},
			{
				name: 'Superman',
				productLink: '#lg3',
				photoLink: './assets/lego_models/lg3.jpg',
				price: '$ 9.99',
			},
			{
				name: 'Ironman',
				productLink: '#lg4',
				photoLink: './assets/lego_models/lg4.jpg',
				price: '$ 9.99',
			},
			{
				name: 'Ferrari',
				productLink: '#lg5',
				photoLink: './assets/lego_models/lg5.jpg',
				price: '$ 9.99',
			},
			{
				name: 'Vintage Car',
				productLink: '#lg6',
				photoLink: './assets/lego_models/lg6.jpg',
				price: '$ 9.99',
			},
			{
				name: 'Locomotive',
				productLink: '#lg7',
				photoLink: './assets/lego_models/lg7.jpg',
				price: '$ 9.99',
			},
		],
	},
	{
		areaID: 'playingcards',
		areaTitle: 'Playing Cards',
		products: [
			{
				name: 'Bicycle',
				productLink: '#cd1',
				photoLink: './assets/playing_cards/cd1.jpg',
				price: '$ 9.99',
			},
			{
				name: 'Nomad',
				productLink: '#cd2',
				photoLink: './assets/playing_cards/cd2.jpg',
				price: '$ 9.99',
			},
			{
				name: 'Sentinels',
				productLink: '#cd3',
				photoLink: './assets/playing_cards/cd3.jpg',
				price: '$ 9.99',
			},
			{
				name: 'Tycoon',
				productLink: '#cd4',
				photoLink: './assets/playing_cards/cd4.jpg',
				price: '$ 9.99',
			},
			{
				name: 'Artisans',
				productLink: '#cd5',
				photoLink: './assets/playing_cards/cd5.jpg',
				price: '$ 9.99',
			},
			{
				name: 'Union',
				productLink: '#cd6',
				photoLink: './assets/playing_cards/cd6.jpg',
				price: '$ 9.99',
			},
			{
				name: 'Steam Punk',
				productLink: '#cd7',
				photoLink: './assets/playing_cards/cd7.jpg',
				price: '$ 9.99',
			},
		],
	},
];

const randomText = [
	'porttitor lacus luctus accumsan tortor',
	'gravida neque convallis a cras',
	'euismod lacinia at quis risus',
	'potenti nullam ac tortor vitae',
	'felis donec et odio pellentesque',
	'nec tincidunt praesent semper feugiat',
	'nibh tellus molestie nunc non',
	'quam nulla porttitor massa id',
	'porta nibh venenatis cras sed',
	'urna molestie at elementum eu',
	'amet nisl purus in mollis',
	'velit sed ullamcorper morbi tincidunt',
	'morbi tristique senectus et netus',
	'urna neque viverra justo nec',
	'sed arcu non odio euismod',
	'sed arcu non odio euismod',
	'dolor morbi non arcu risus',
];

const loremIpsumLong =
	'<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Et sollicitudin ac orci phasellus egestas tellus rutrum. Tortor pretium viverra suspendisse potenti nullam ac. Sem et tortor consequat id. Leo duis ut diam quam nulla porttitor massa id. Tempor commodo ullamcorper a lacus vestibulum sed. Pellentesque elit eget gravida cum sociis natoque. Ut aliquam purus sit amet luctus venenatis lectus magna. Ac orci phasellus egestas tellus. Mattis molestie a iaculis at erat. Maecenas pharetra convallis posuere morbi leo. </p><p> Mauris in aliquam sem fringilla. In egestas erat imperdiet sed euismod nisi porta. Libero nunc consequat interdum varius sit amet mattis vulputate enim. In hac habitasse platea dictumst quisque sagittis purus sit amet. Tortor dignissim convallis aenean et tortor. Enim facilisis gravida neque convallis. Donec ultrices tincidunt arcu non sodales neque sodales ut etiam. Nec sagittis aliquam malesuada bibendum.</p><p> Adipiscing commodo elit at imperdiet dui. Condimentum id venenatis a condimentum vitae sapien. Quisque id diam vel quam elementum pulvinar etiam non. Elit duis tristique sollicitudin nibh sit amet commodo nulla. Ac tortor vitae purus faucibus ornare suspendisse sed. Neque viverra justo nec ultrices dui sapien eget mi. Nulla facilisi cras fermentum odio eu feugiat pretium. Nisl nisi scelerisque eu ultrices vitae auctor eu. Neque ornare aenean euismod elementum nisi. Cras semper auctor neque vitae tempus quam pellentesque. Sapien pellentesque habitant morbi tristique senectus et netus et malesuada. Eget arcu dictum varius duis at consectetur lorem donec. Maecenas ultricies mi eget mauris pharetra et ultrices neque. Cum sociis natoque penatibus et magnis dis parturient montes. Euismod in pellentesque massa placerat duis ultricies lacus sed. Mattis rhoncus urna neque viverra justo.</p>';

const textRights = '©2022 Juan Palomino Wolff @CQU University';

document.addEventListener('DOMContentLoaded', function (event) {
	loadContent();
});

function loadContent() {
	loadMenu('topMenu');
	loadMenu('footerMenu');
	setTextRights();
	loadArea();
	loadProduct();
}

function loadMenu(menu) {
	links.forEach((data) => {
		// create link
		let li = document.createElement('li');
		let link = document.createElement('a');
		let linkText = document.createTextNode(data.text);
		link.appendChild(linkText);
		link.title = data.text + 'ds';
		link.href = `javascript:reloadpage('${data.link}');`;
		link.id = 'menuLink';

		// append links to the menu
		document.getElementById(menu).appendChild(li).appendChild(link);
	});
}

function setTextRights() {
	document.getElementById('textRights').appendChild(document.createTextNode(textRights));
}

function loadArea() {
	let area = window.location?.hash !== '' && window.location.pathname.includes('area') ? window.location.hash.replace('#', '') : undefined;

	if (area !== undefined) {
		const areaData = areas.filter((areaF) => areaF.areaID === area)[0];

		let h1 = document.createElement('h1');
		let title = document.createTextNode(areaData.areaTitle);
		h1.appendChild(title);
		document.getElementById('titlePage').appendChild(h1);

		areaData.products.forEach((data) => {
			// create card
			let card = document.createElement('div');
			card.className = 'card';
			// product link
			let link = document.createElement('a');
			link.title = data.name;
			link.href = `product.html${data.productLink}`;
			// product image
			let image = document.createElement('img');
			image.src = data.photoLink;
			image.alt = data.name;
			image.className = 'productImagePrev';
			// info div
			let infoDiv = document.createElement('div');
			infoDiv.className = 'cardContainer';
			// product name
			let productName = document.createElement('h4');
			let productNameBold = document.createElement('b');
			let nameText = document.createTextNode(data.name);
			productNameBold.appendChild(nameText);
			productName.appendChild(productNameBold);
			// product desc
			let productDesc = document.createElement('p');
			const randomTextDesc = pickRanomShortText();
			let descText = document.createTextNode(randomTextDesc);
			productDesc.appendChild(descText);

			// put all together
			infoDiv.appendChild(productName);
			infoDiv.appendChild(productDesc);
			link.appendChild(image);
			link.appendChild(infoDiv);
			card.appendChild(link);

			// append products
			document.getElementById('productsDisplay').appendChild(card);
		});
	}
}

function loadProduct() {
	let product = window.location?.hash !== '' && window.location.pathname.includes('product') ? window.location.hash : undefined;

	if (product !== undefined) {
		let productData = undefined;
		let tempData = undefined;
		let areaData = undefined;
		areas.forEach((element) => {
			tempData = element.products.filter((prod) => prod.productLink === product)[0];
			productData = tempData !== undefined ? tempData : productData;
			if (productData !== undefined && areaData === undefined) {
				areaData = element;
			}
		});

		// create product information
		let h1 = document.createElement('h1');
		let productName = document.createTextNode(productData.name);
		h1.appendChild(productName);

		// Product Image
		let productImage = document.createElement('img');
		productImage.src = productData.photoLink;
		productImage.alt = productData.name;
		productImage.className = 'productImage';

		//Product category
		let caterogy = document.createElement('p');
		let bold = document.createElement('b');
		bold.appendChild(document.createTextNode('Category: '));
		let productCategory = document.createTextNode(areaData.areaTitle);
		caterogy.appendChild(bold);
		caterogy.appendChild(productCategory);

		//Product Reference
		let reference = document.createElement('p');
		let boldR = document.createElement('b');
		boldR.appendChild(document.createTextNode('Reference: '));
		let productReference = document.createTextNode(productData.productLink.replace('#', ''));
		reference.appendChild(boldR);
		reference.appendChild(productReference);

		//Product Price
		let price = document.createElement('p');
		let boldP = document.createElement('b');
		boldP.appendChild(document.createTextNode('Price: '));
		let productPrice = document.createTextNode(productData.price);
		price.appendChild(boldP);
		price.appendChild(productPrice);

		//Product Description
		let description = document.createElement('p');
		let productDescription = document.createTextNode(pickRanomShortText());
		description.appendChild(productDescription);

		// product long description
		let textContainer = document.getElementById('textContainer');
		textContainer.innerHTML = loremIpsumLong;

		// breadcrumbs
		let breadcrumbsContainer = document.getElementById('breadcrumbs');
		let linkHome = document.createElement('a');
		let textHome = document.createTextNode('> Home');
		linkHome.href = './index.html';
		linkHome.appendChild(textHome);
		breadcrumbsContainer.appendChild(linkHome);

		// link category
		let linkCategory = document.createElement('a');
		let textCat = document.createTextNode(` > ${areaData.areaTitle}`);
		linkCategory.href = `./areas.html#${areaData.areaID}`;
		linkCategory.appendChild(textCat);
		breadcrumbsContainer.appendChild(linkCategory);

		//text product
		let textProd = document.createTextNode(` > ${productData.name}`);
		breadcrumbsContainer.appendChild(textProd);

		document.getElementById('productInformation').appendChild(h1);
		document.getElementById('productInformation').appendChild(productImage);
		document.getElementById('productInformation').appendChild(caterogy);
		document.getElementById('productInformation').appendChild(reference);
		document.getElementById('productInformation').appendChild(price);
		document.getElementById('productInformation').appendChild(description);
		document.getElementById('productInformation').appendChild(description);
	}
}

function reloadpage(link) {
	let page = window.location.pathname;
	let newLink = window.location.href.split("#")[0];
	newlink = newLink.replace(page.split("/").pop(), '') + link;

	window.location.replace(newlink);
	let reload = newlink.includes(window.location.pathname);
	if (newlink?.includes('#') && window.location.hash !== '' && reload) {
		location.reload();
	}
}

function submitForm(msg) {
	alert(`Thanks for ${msg}!`);
}

function submitNewsletter() {
	const container = document.getElementById('newsletterContainer');

	// validate input data

	const name = document.getElementById('newsletterName').value;
	const age = document.getElementById('newsletterAge').value;
	const email = document.getElementById('newsletterEmail').value;

	if (name === '' || name === undefined) {
		alert('Please enter your name');
		return;
	}
	if (age === '' || age === undefined) {
		alert('Please enter your age');
		return;
	}
	if (email === '' || email === undefined) {
		alert('Please enter your email');
		return;
	} else if (!validateEmail(email)) {
		alert('Email is not valid');
		return;
	}
	// validate input data

	// get data
	let contactDetails = {
		name: name,
		age: age,
		email: email,
	};

	// save data
	localStorage.setItem('contactDetails', JSON.stringify(contactDetails));

	const response =
			`<div class="card w-500 h-200">
				<div class='cardContainer spacer-5 pb-9' id='newsletterContainerResult'>
					<h4>Thank you for subscribing, We will use the following details you provided us:</h4>
					<div class='flexRow flexRow-JustifyStart grid-2'>
						<span class='pr-9 text-right bold'>Name:</span>
						<span class='pr-9 text-left'>${name}</span>
					</div>
					<div class='flexRow flexRow-JustifyStart grid-2'>
						<span class='pr-9 text-right bold'>Age:</span>
						<span class='pr-9 text-left'>${age}</span>
					</div>
					<div class='flexRow flexRow-JustifyStart grid-2'>
						<span class='pr-9 text-right bold'>Email:</span>
						<span class='pr-9 text-left'>${email}</span>
					</div>
				</div>
			</div>`;

	container.innerHTML = response;

	alert(`Thanks for ${msg}!`);
}

function pickRanomShortText() {
	const value = randomText[getRandomArbitrary(0, randomText.length - 1)];
	return value;
}

function getRandomArbitrary(min, max) {
	const value = Math.random() * (max - min) + min;
	return Math.floor(value);
}

function validateEmail(email) {
	return String(email)
		.toLowerCase()
		.match(
			/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
		);
}
