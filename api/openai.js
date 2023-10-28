const OPENAI_API_KEY = process.env.OPENAI_API_KEY;

async function OpenAIStream(payload) {
  const response = await fetch('https://api.openai.com/v1/engines/gpt-3.5-turbo-16k-0613/completions', {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${OPENAI_API_KEY}`
    },
    method: 'POST',
    body: JSON.stringify(payload)
  });
  return response.json();
}

export default async (req, res) => {
  if (req.method === 'POST') {
    const { symptoms } = req.body;
    const payload = {
      model: 'gpt-3.5-turbo',
      messages: [
        { role: "user", content: symptoms },
        { role: "system", content: "chatbot" }
      ],
      temperature: 0.8,
      max_tokens: 2048,
      top_p: 1.0,
      frequency_penalty: 0.2,
      presence_penalty: 0.0,
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
};
