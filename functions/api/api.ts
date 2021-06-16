
import { Handler, HandlerContext, HandlerEvent } from "@netlify/functions";
import fetch from 'node-fetch';
import { BUX_API_KEY, BUX_BASE_URL, BUX_CLIENT_ID, SITE_DOMAIN } from "./env-check";
import { HttpMethods } from "./interface/methods";


const handler: Handler = async (event:HandlerEvent, context:HandlerContext ) => {
  
    
  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: "Method Not Allowed!" }),
      headers: { Allow: "POST" },
    };
  }
  
  if (event.headers.host !== SITE_DOMAIN){
     return {
          statusCode: 403,
          body: JSON.stringify({ error: "Forbidden Access To Api" }),
          headers: { Allow: "POST" },
        };
  }

  let params = null;
  try {
    params =  JSON.parse(event.body|| '{}');
  } catch (error) {
    console.log(error)
    return {
      statusCode: 500,
      // Could be a custom message or object i.e. JSON.stringify(err)
      body: JSON.stringify({ msg: error.message }),
    }
  }
  
  const {req_id} : {req_id: string } = params;

  if (!req_id) {
    let error = {
      statusCode: 422,
      body: `Validation Error: req_id: ${req_id}`,
    };
    return error;
  }

  const apiURL = `${BUX_BASE_URL}/check_code?req_id=${req_id}&client_id=${BUX_CLIENT_ID}&mode=API`


  const payload = {
    headers: { 
      'x-api-key': `${BUX_API_KEY}` 
    },
    method: HttpMethods.GET,
  };

  
  try {
    const response = await fetch(apiURL, payload);
    if (!response.ok) {
      return { statusCode: response.status, body: response.statusText }
    }
    
    const data = await response.json()

    return {
      statusCode: 200,
      body: JSON.stringify(data),
    }
  } catch (error) {
    // output to netlify function log
    console.log(error)
    return {
      statusCode: 500,
      body: JSON.stringify({ msg: error.message }),
    }
  }

}


export { handler };
