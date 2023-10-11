import axios from 'axios';
import fs from 'fs';


const URL_Array = ['https://groww.in/digest',
'https://groww.in/download-forms',
'https://groww.in/blog',
'https://groww.in/blog/best-diwali-stocks-to-invest',
'https://groww.in/blog/best-fixed-deposit-in-india',
'https://groww.in/blog/best-gold-stocks-in-india',
'https://groww.in/p',
'https://groww.in/p/income-funds',
'https://groww.in/p/bombay-stock-exchange',
'https://groww.in/p/hybrid-funds/aggressive-mutual-funds',
'https://groww.in/p/equity-funds/large-cap-mutual-funds',
'https://groww.in/p/savings-schemes/uan-universal-account-number',
'https://groww.in/p/open-ended-funds',
'https://groww.in/calculators',
'https://groww.in/calculators/sip-calculator',
'https://groww.in/calculators/fd-calculator',
'https://groww.in/calculators/nps-calculator',
'https://groww.in/calculators/brokerage-calculator',
'https://groww.in/banking',
'https://groww.in/banking/sbi-sms-banking',
'https://groww.in/p/pan-card',
'https://groww.in/p/aadhaar-card',
'https://groww.in/p/aadhaar-card/aadhar-card-update-correction',
'https://groww.in/p/pan-card/pan-card-application',
'https://groww.in/p/savings-schemes',
'https://groww.in/p/tax',
'https://groww.in/loans/iob-home-loan-interest-rates',
'https://groww.in/p/find-your-customer-id',
'https://groww.in/p/investment-basics',
'https://groww.in/insights/stocks-in-news',
'https://groww.in/ifsc-code/hdfc-bank/karnataka/bangalore/koramangala',
'https://groww.in/academy',
'https://groww.in/academy/episode/what-is-a-stock-and-what-is-stock-market',
'https://groww.in/academy/series/stock-prices-impact',
'https://groww.in/thrive',
'https://groww.in/ebooks',
'https://groww.in/updates',
'https://groww.in/fixed-deposit',
'https://groww.in/fixed-deposit/yes-bank-fd-interest-rates',
'https://groww.in/fixed-deposit/dhfl-fd-interest-rates',
'https://groww.in/fixed-deposit/shriram-transport-finance-fd-interest-rates',
'https://groww.in/fixed-deposit/indusind-bank-fd-interest-rates',
'https://groww.in/recurring-deposit',
'https://groww.in/recurring-deposit/rd-interest-rates',
'https://groww.in/recurring-deposit/axis-bank-rd-interest-rates',
'https://groww.in/recurring-deposit/bank-of-baroda-rd-interest-rates',
'https://groww.in/ipo/harsha-engineers-ipo',
'https://groww.in/ipo/goair-ipo',
'https://groww.in/ipo/electronics-mart-ipo',
'https://groww.in/ipo/boat-ipo',
'https://groww.in/ipo/delhivery-ipo',
'https://groww.in/ipo/lic-ipo',
'https://groww.in/buy-back',
'https://groww.in/ipo',
'https://groww.in/sovereign-gold-bonds',
'https://groww.in/stocks/corporate-actions',
'https://groww.in/charts/stocks/reliance-industries-ltd',
'https://groww.in/charts/stocks/adani-enterprises-ltd',
'https://groww.in/charts/stocks/mindtree-ltd',
'https://groww.in/charts/stocks/grasim-industries-ltd',
'https://groww.in/charts/stocks/infosys-ltd',
'https://groww.in/stocks/reliance-industries-ltd',
'https://groww.in/stocks/adani-enterprises-ltd',
'https://groww.in/stocks/mindtree-ltd',
'https://groww.in/stocks/grasim-industries-ltd',
'https://groww.in/stocks/infosys-ltd',
'https://groww.in/indices/sp-bse-sensex',
'https://groww.in/indices/nifty-next',
'https://groww.in/indices/nifty-midcap',
'https://groww.in/indices/nifty',
'https://groww.in/etfs/sbi-mutual-fund-sbi-sensex-etf',
'https://groww.in/etfs/hdfc-sensex-etf-open-ended-traded-fund',
'https://groww.in/etfs/idfc-sensex-etf',
'https://groww.in/stocks/reliance-industries-ltd/company-financial',
'https://groww.in/stocks/adani-enterprises-ltd/company-financial',
'https://groww.in/stocks/mindtree-ltd/company-financial',
'https://groww.in/stocks/mindtree-ltd/peer-comparison',
'https://groww.in/stocks/grasim-industries-ltd/peer-comparison',
'https://groww.in/stocks/infosys-ltd/peer-comparison',
'https://groww.in/stocks/reliance-industries-ltd/share-holding',
'https://groww.in/stocks/adani-enterprises-ltd/share-holding',
'https://groww.in/market-news/stocks',
'https://groww.in/stocks/filter',
'https://groww.in/etfs',
'https://groww.in/charts',
'https://groww.in/open-demat-account',
'https://groww.in/stocks',
'https://groww.in/stocks/intraday',
'https://groww.in/calculators/margin-calculator',
'https://groww.in/markets/top-gainers',
'https://groww.in/markets/top-losers',
'https://groww.in/futures-and-options',
'https://groww.in/options/nifty',
'https://groww.in/options/icici-bank-ltd',
'https://groww.in/options/hdfc-bank-ltd',
'https://groww.in/futures/icici-bank-ltd',
'https://groww.in/futures/hdfc-bank-ltd',
'https://groww.in/futures/reliance-industries-ltd',
'https://groww.in/mutual-funds',
'https://groww.in/mutual-funds/amc',
'https://groww.in/mutual-funds/amc/axis-mutual-funds',
'https://groww.in/mutual-funds/amc/reliance-mutual-funds',
'https://groww.in/mutual-funds/amc/tata-mutual-funds',
'https://groww.in/mutual-funds/category',
'https://groww.in/mutual-funds/category/best-large-cap-mutual-funds',
'https://groww.in/mutual-funds/category/best-mid-cap-mutual-funds',
'https://groww.in/track',
'https://groww.in/mutual-funds/canara-robeco-small-cap-fund-direct-growth',
'https://groww.in/mutual-funds/sbi-it-fund-direct-growth',
'https://groww.in/mutual-funds/tata-digital-india-fund-direct-growth',
'https://groww.in/mutual-funds/idfc-tax-advantage-elss-fund-direct-growth',
'https://groww.in/mutual-funds/dsp-blackrock-tax-saver-fund-direct-growth',
'https://groww.in/mutual-funds/pgim-india-midcap-opportunities-fund-direct-growth',
'https://groww.in/mutual-funds/filter',
'https://groww.in/nfo',
'https://groww.in/nfo/kotak-nifty-sdl-plus-aaa-psu-bond-jul-2033-60:40-index-fund-direct-growth',
'https://groww.in/nfo/lic-mf-multi-cap-fund-direct-growth',
'https://groww.in/mutual-funds/icici-prudential-nifty-g-sec-dec-2030-index-fund-direct-growth',
'https://groww.in/smart-save',
'https://groww.in/switch',
'https://groww.in/us-stocks/aapl',
'https://groww.in/us-stocks/msft',
'https://groww.in/us-stocks/gpl',
'https://groww.in/us-stocks/xom',
'https://groww.in/us-stocks/wmt',
'https://groww.in/us-stocks',
'https://groww.in/us-etfs',
'https://groww.in/us-stocks/filter',
'https://groww.in/us-etfs/aieq',
'https://groww.in/us-etfs/itm',
'https://groww.in/us-etfs/qval',
'https://groww.in/us-etfs/blok',
'https://groww.in/us-etfs/avus',
'https://groww.in/gold',
'https://groww.in/gold-rates',
'https://groww.in/gold-rates/gold-rate-today-in-chennai',
'https://groww.in/gold-rates/gold-rate-today-in-kolkata'];



const auditUrl = async (url) => {
  try {
    const response = await axios.get(url);
    if (response.status === 404) {
      return true;
    } else {
      return false;
    }
  } catch (error) {
    console.error(error);
    return true;
  }
};

const auditUrls = async (urls) => {
  const validUrls = [];
  for (const url of urls) {
    const is404 = await auditUrl(url);
    if (!is404) {
      validUrls.push(url);
    }
  }
  return validUrls;
};

const main = async () => {
  const validUrls = await auditUrls(URL_Array);

  // Save the valid URLs to a text file
  fs.writeFileSync('valid_urls.txt', validUrls.join('\n'));
};

main();
