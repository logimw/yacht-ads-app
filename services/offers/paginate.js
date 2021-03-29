export default async (offset, category) => {
  let apiUrl = `https://api.airtable.com/v0/${process.env.AIRTABLE_BASE}/offer?pageSize=12&&view=Grid%20view`;
  if (offset) {
    apiUrl += `&offset=${offset}`;
  }
  if (category) {
    apiUrl += '&' + encodeURI(`filterByFormula=(category="${category}")`);
  }

  const response = await fetch(apiUrl, {
    headers: { Authorization: `Bearer ${process.env.AIRTABLE_API_KEY}` }
  });

  const records = await response.json();

  return records;
};
