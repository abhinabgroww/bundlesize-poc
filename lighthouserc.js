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
			startServerCommand: process.env.NODE_ENV === 'production' ? undefined : 'npm run dev',
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