// ╔╗ ╔═╗╔╗╔╔╦╗╔═╗
// ╠╩╗║╣ ║║║ ║ ║ ║
// ╚═╝╚═╝╝╚╝ ╩ ╚═╝
// ┌─┐┌─┐┌┐┌┌─┐┬┌─┐┬ ┬┬─┐┌─┐┌┬┐┬┌─┐┌┐┌
// │  │ ││││├┤ ││ ┬│ │├┬┘├─┤ │ ││ ││││
// └─┘└─┘┘└┘└  ┴└─┘└─┘┴└─┴ ┴ ┴ ┴└─┘┘└┘

const CONFIG = {
	// ┌┐ ┌─┐┌─┐┬┌─┐┌─┐
	// ├┴┐├─┤└─┐││  └─┐
	// └─┘┴ ┴└─┘┴└─┘└─┘

	// General
	name: 'Cali',
	imageBackground: false,
	openInNewTab: true,
	twelveHourFormat: false,

	// Greetings
	greetingMorning: 'Morning!',
	greetingAfternoon: 'Afternoon!,',
	greetingEvening: 'Its Getting Late!,',
	greetingNight: 'Degenerate Hours ):',

	// Layout
	bentoLayout: 'bento', // 'bento', 'lists', 'buttons'

	// Weather
	weatherKey: 'InsertYourAPIKeyHere123456', // Write here your API Key
	weatherIcons: 'OneDark', // 'Onedark', 'Nord', 'Dark', 'White'
	weatherUnit: 'C', // 'F', 'C'
	language: 'en', // More languages in https://openweathermap.org/current#multi

	trackLocation: true, // If false or an error occurs, the app will use the lat/lon below
	defaultLatitude: '37.775',
	defaultLongitude: '-122.419',

	// Autochange
	autoChangeTheme: true,

	// Autochange by OS
	changeThemeByOS: true,

	// Autochange by hour options (24hrs format, string must be in: hh:mm)
	changeThemeByHour: false,
	hourDarkThemeActive: '18:30',
	hourDarkThemeInactive: '07:00',

	// ┌┐ ┬ ┬┌┬┐┌┬┐┌─┐┌┐┌┌─┐
	// ├┴┐│ │ │  │ │ ││││└─┐
	// └─┘└─┘ ┴  ┴ └─┘┘└┘└─┘

	firstButtonsContainer: [
		{
			id: '1',
			name: 'Github',
			icon: 'github',
			link: 'https://github.com/cali-mbv',
		},
		{
			id: '2',
			name: 'Proton Mail',
			icon: 'mail',
			link: 'https://mail.protonmail.com/',
		},
		{
			id: '3',
			name: 'Youtube',
			icon: 'youtube',
			link: 'https://youtube.com',
		},
		{
			id: '4',
			name: 'Gmail',
			icon: 'mail-open',
			link: 'https://gmail.com',
		},
		{
			id: '5',
			name: 'Twitch',
			icon: 'twitch',
			link: 'https://twitch.tv',
		},
		{
			id: '6',
			name: 'Hacker News',
			icon: 'newspaper',
			link: 'https://thehackernews.com/',
		},
	],

	secondButtonsContainer: [
		{
			id: '1',
			name: 'Music',
			icon: 'headphones',
			link: 'https://open.spotify.com',
		},
		{
			id: '2',
			name: 'twitter',
			icon: 'twitter',
			link: 'https://twitter.com/',
		},
		{
			id: '3',
			name: 'bot',
			icon: 'bot',
			link: 'https://discord.id',
		},
		{
			id: '4',
			name: 'Outlook',
			icon: 'inbox',
			link: 'https://outlook.com',
		},
		{
			id: '5',
			name: 'Hashnode',
			icon: 'pen-tool',
			link: 'https://hashnode.com/',
		},
		{
			id: '6',
			name: 'Figma',
			icon: 'figma',
			link: 'https://figma.com/',
		},
	],

	// ┬  ┬┌─┐┌┬┐┌─┐
	// │  │└─┐ │ └─┐
	// ┴─┘┴└─┘ ┴ └─┘

	// First Links Container
	firstlistsContainer: [
		{
			icon: 'music',
			id: '1',
			links: [
				{
					name: '<3',
					link: 'https://www.youtube.com/watch?v=yhGCk1Nlyfw',
				},
				{
					name: '<3',
					link: 'https://www.youtube.com/watch?v=L4sbDxR22z4',
				},
				{
					name: '<3',
					link: 'https://www.youtube.com/watch?v=GGaWDNNYqhQ',
				},
				{
					name: '<3',
					link: 'https://www.youtube.com/watch?v=VVPw4rypdcw',
				},
			],
		},
		{
			icon: 'coffee',
			id: '2',
			links: [
				{
					name: 'Linkedin',
					link: 'https://www.linkedin.com',
				},
				{
					name: 'Dribbble',
					link: 'https://www.dribbble.com',
				},
				{
					name: 'Trello',
					link: 'https://www.trello.com',
				},
				{
					name: 'Slack',
					link: 'https://www.slack.com',
				},
			],
		},
	],

	// Second Links Container
	secondListsContainer: [
		{
			icon: 'binary',
			id: '1',
			links: [
				{
					name: 'Spotify',
					link: 'https://www.spotify.com',
				},
				{
					name: 'Reddit',
					link: 'https://www.reddit.com',
				},
				{
					name: 'Hashnode',
					link: 'https://www.hashnode.com',
				},
				{
					name: 'Pocket',
					link: 'https://www.pocket.com',
				},
			],
		},
		{
			icon: 'github',
			id: '2',
			links: [
				{
					name: 'ArchBtw',
					link: 'https://github.com/BlackArch/blackarch',
				},
				{
					name: 'Lua',
					link: 'https://github.com/lua/lua',
				},
				{
					name: 'Python',
					link: 'https://github.com/python',
				},
				{
					name: 'Repos',
					link: 'https://github.com/cali-mbv',
				},
			],
		},
	],
};
