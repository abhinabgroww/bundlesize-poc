 
module.exports = {

	"ci": {
  
		collect: {
  
			startServerCommand: "npm run start",
  
			startServerReadyPattern: "ready on",
  
			url: [
  
				"http://localhost:3000"
  
			],
  
			numberOfRuns: 1,
  
			settings: {
  
				preset: "desktop"
  
			}
  
		},
  
		assert: {
      assertions: {
        'categories:performance': ['warn', {minScore: 0.90}],
        'categories:accessibility': ['error', {minScore: 0.80}]
      }
    },
		"upload": {
  
			"target": "temporary-public-storage"
  
		},
  
		"server": {}
  
	}
  
  };