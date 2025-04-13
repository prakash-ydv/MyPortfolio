const gfgAPI = async (username) => {
  const baseURL = import.meta.env.DEV
    ? '/gfg' // local: uses Vite proxy
    : 'https://geeks-for-geeks-api.vercel.app'; // deployed: direct API

  const response = await fetch(`${baseURL}/${username}`);

  // Optional: helpful in debugging production errors
  const text = await response.text();
  try {
    return JSON.parse(text);
  } catch (err) {
    console.error("Error parsing JSON:", text);
    throw err;
  }
};

export default gfgAPI;
