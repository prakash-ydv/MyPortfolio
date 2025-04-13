const getGfgStats = async (username) => {
    const response = await fetch('/gfg/prakash___ydv');

    const data = await response.json();
    return data;
  };

export default getGfgStats;
