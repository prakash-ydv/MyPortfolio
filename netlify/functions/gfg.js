// netlify/functions/gfg.js
import fetch from 'node-fetch';

export const handler = async (event) => {
  // Extract the username from the URL path
  const username = event.path.split("/").pop();
  
  try {
    // Fetch data from GeeksforGeeks API
    const response = await fetch(`https://geeks-for-geeks-api.vercel.app/${username}`);
    const data = await response.json();
    
    // Return the fetched data as JSON
    return {
      statusCode: 200,
      headers: {
        "Access-Control-Allow-Origin": "*", // Allow cross-origin requests
      },
      body: JSON.stringify(data),
    };
  } catch (error) {
    // Handle errors if any
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Unable to fetch data from GeeksforGeeks API.' }),
    };
  }
};
