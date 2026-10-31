export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  if (req.method === 'OPTIONS') return res.status(200).end();

  const NOTION_TOKEN = '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';
  const DATABASE_ID  = '3f9e9aaa2ab3806aa047dfa4af0c60b0';

  const response = await fetch(`https://api.notion.com/v1/databases/${DATABASE_ID}/query`, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${NOTION_TOKEN}`,
      'Notion-Version': '2022-06-28',
      'Content-Type': 'application/json'
    },
  body: JSON.stringify({
  page_size: 100,
  sorts: [{ property: 'Orden', direction: 'ascending' }]
})
    
  const data = await response.json();
  return res.status(response.status).json(data);
}
