const getGfgStats = async (username) => {
    const response = await fetch('https://geeks-for-geeks-api.vercel.app/prakash___ydv');
    const data = await response.json();
    return data;
  };

export default getGfgStats;
