const username = "prakash___ydv";

const getLeetcodeStats = async (username) => {
  const response = await fetch(
    `https://leetcode-api-red.vercel.app/api/user/${username}`
  );
  const data = await response.json();
  return data; 
};

export default getLeetcodeStats;