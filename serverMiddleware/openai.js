const OPENAI_API_KEY = process.env.OPENAI_API_KEY;

async function OpenAIStream(payload) {
  const response = await fetch('https://api.openai.com/v1/completions', {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${OPENAI_API_KEY}`
    },
    method: 'POST',
    body: JSON.stringify(payload)
  });
  return response.json();
}

export default async function (req, res) {
  if (req.method === 'POST') {
    const { searched } = req.body;
    const payload = {
      model: 'text-davinci-003',
      prompt: searched,
      temperature: 0.7,
      max_tokens: 2048,
      top_p: 1.0,
      frequency_penalty: 0.0,
      stream: true,
      presence_penalty: 0.0,
      n: 1
    };
    try {
      const data = await OpenAIStream(payload);
      res.end(JSON.stringify(data));
    } catch (error) {
      console.error(error);
      res.status(500).end(error.message);
    }
  } else {
    res.status(405).end();  // Method Not Allowed
  }
}
