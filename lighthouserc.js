// module.exports = {
// 	ci: {
// 		collect: {
// 			url: 'http://localhost:3000',
// 			startServerCommand: 'npm run start',
// 		},
// 		assert: {
// 		  preset: 'lighthouse:recommended'
// 		},
// 		upload: {
// 			target: 'temporary-public-storage',
// 		},
// 	},
// };

module.exports = {
	ci: {
		collect: {
			url: [`https://${process.env.PREVIEW_URL}`],
			startServerCommand: 'npm run start',
		},
		assert: {
			// preset: 'lighthouse:recommended',
			preset: 'lighthouse:no-pwa',
		},
		upload: {
			target: 'temporary-public-storage',
		},
	},
};