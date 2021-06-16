require('dotenv').config()
const { BUX_API_KEY, BUX_BASE_URL, BUX_CLIENT_ID, SITE_DOMAIN } = process.env;

if (!BUX_API_KEY)
  throw new Error("SET BUX API KEY");

if (!BUX_BASE_URL)
  throw new Error("SET BUX BASE URL");
  
if (!BUX_CLIENT_ID)
  throw new Error("SET BUX CLIENT ID");
  
if (!SITE_DOMAIN)
throw new Error("SET SITE DOMAIN");

export { BUX_API_KEY, BUX_BASE_URL, BUX_CLIENT_ID, SITE_DOMAIN };

