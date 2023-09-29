module.exports = {
  ci: {
    collect: {
      method: "node",
      url: [
        "https://groww.in/",
        // 'https://groww.in/download-forms',
        // 'https://groww.in/blog',
        // 'https://groww.in/blog/best-diwali-stocks-to-invest',
        // 'https://groww.in/blog/best-fixed-deposit-in-india',
        // 'https://groww.in/blog/best-gold-stocks-in-india',
        // 'https://groww.in/p',
        // 'https://groww.in/p/income-funds',
        // 'https://groww.in/p/bombay-stock-exchange',
        // 'https://groww.in/p/hybrid-funds/aggressive-mutual-funds',
        // 'https://groww.in/p/equity-funds/large-cap-mutual-funds',
        // 'https://groww.in/p/savings-schemes/uan-universal-account-number',
        // 'https://groww.in/p/open-ended-funds',
        // 'https://groww.in/calculators'
      ],

  

          numberOfRuns: 1,

          settings: {
            preset: "desktop",
          },
        },

        assert: {
          assertions: {
            "categories:performance": ["warn", { minScore: 0.8}],
            "categories:accessibility": ["warn", { minScore: 0.9 }],
          },
        },

        upload: {
          target: "temporary-public-storage",
        },

        server: {},
      },
    };
