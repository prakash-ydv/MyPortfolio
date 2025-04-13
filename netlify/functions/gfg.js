import fetch from 'node-fetch';

export const handler = async (event) => {
  const username = event.path.split("/").pop();

  try {
    const response = await fetch(`https://geeks-for-geeks-api.vercel.app/${username}`);
    const data = await response.json();

    return {
      statusCode: 200,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({
        message: 'Failed to fetch from GFG API',
        error: error.message,
      }),
    };
  }
};
