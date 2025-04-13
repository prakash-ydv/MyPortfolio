const getGfgStats = async (username) => {
  const response = await fetch(`/.netlify/functions/gfg/${username}`);
  const data = await response.json();
  return data;
};

export default getGfgStats;
