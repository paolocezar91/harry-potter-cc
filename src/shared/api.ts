export const fetchURL = async <T>(url: string) => {
  return await _fetchAndJson(`${url}`) as T;
};

async function _fetchAndJson(url: string) {
  try {
    const data = await fetch(url, { cache: 'force-cache' });
    if (data.status === 200) {
      const json = await data.json();
      return json;
    }
    throw { status: 404, text: data.statusText };
  } catch (error) {
    throw { error };
  }
}