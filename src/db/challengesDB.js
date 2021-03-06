import {nanoid} from 'nanoid';

const challengesDB = [
	{
		id: nanoid(),
		title: 'Historic Route 66',
		logo: 'map:route',
		logoSize: '1.8rem',
		img: 'https://images.pexels.com/photos/210112/pexels-photo-210112.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
		distance: '3945',
		startingPoint: 'Chicago',
		endingPoint: 'Santa Monica',
	},
	{
		id: nanoid(),
		title: 'The Great Wall of China',
		logo: 'icon-park-outline:great-wall',
		logoSize: '1.8rem',
		img: 'https://images.unsplash.com/photo-1509624780899-f812439647e4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
		distance: '5000',
		startingPoint: 'Jiayuguan Pass',
		endingPoint: 'Shanhai Pass',
	},
	{
		id: nanoid(),
		title: 'Camino de Santiago',
		logo: 'cib:shell',
		logoSize: '1.8rem',
		img: 'https://cdn.pixabay.com/photo/2018/04/10/10/01/nature-3306920_960_720.jpg',
		distance: '800',
		startingPoint: 'Saint-Jean-Pied-de-Port',
		endingPoint: 'Santiago de Compostela',
	},
	{
		id: nanoid(),
		title: 'New York City Marathon',
		logo: 'emojione-monotone:statue-of-liberty',
		logoSize: '1.8rem',
		img: 'https://images.pexels.com/photos/7729432/pexels-photo-7729432.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
		distance: '42.2',
		startingPoint: 'Fort Wadsworth',
		endingPoint: 'Central Park',
	},
	{
		id: nanoid(),
		title: 'Amazonas',
		logo: 'iconoir:sea-waves',
		logoSize: '2rem',
		img: 'https://images.unsplash.com/photo-1585926494452-3bbf4064af50?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
		distance: '6800',
		startingPoint: 'Mount Mismi',
		endingPoint: 'Atlanic Ocean',
	},
	{
		id: nanoid(),
		title: 'Lauf zwischen den Meeren',
		logo: 'mdi:lighthouse',
		logoSize: '1.8rem',
		img: 'https://images.unsplash.com/photo-1558366761-abbf5fee4cea?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
		distance: '96.6',
		startingPoint: 'Husum',
		endingPoint: 'Damp',
	},
	{
		id: nanoid(),
		title: 'Sparthathlon',
		logo: 'emojione-monotone:amphora',
		logoSize: '1.8rem',
		img: 'https://images.pexels.com/photos/951531/pexels-photo-951531.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
		distance: '246',
		startingPoint: 'Akropolis',
		endingPoint: 'Sparta',
	},
];

export default challengesDB;
