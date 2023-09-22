 
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
        'categories:performance': ['warn', {minScore: 95}],
        'categories:accessibility': ['error', {minScore: 2}]
      }
    },
		"upload": {
  
			"target": "temporary-public-storage"
  
		},
  
		"server": {}
  
	}
  
  };