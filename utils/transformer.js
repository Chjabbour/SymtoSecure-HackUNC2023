import { encode, decode } from "js-base64";

export const encodeData = (obj) => {
  return encode(JSON.stringify(obj));
};

export const decodeData = (base64) => JSON.parse(decode(base64));


export const analyzeSymptoms = async (desc) => {
  console.log("Description:",desc)
  const payload = {
    model: 'gpt-3.5-turbo',
    messages: [
      { role: "user", content: desc },
      { role: "system", content: "chatbot" }
    ],
    temperature: 0.8,
    max_tokens: 2048,
    top_p: 1.0,
    frequency_penalty: 0.2,
    presence_penalty: 0.0,
  };

  try {
    const res = await fetch('https://api.openai.com/v1/chat/completions', {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer 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`
      },
      method: 'POST',
      body: JSON.stringify(payload)
    });
    const data = await res.json();
    console.log("gpt response is :",data)
    return data.choices[0]?.message?.content || 'No response'; 
  } catch (error) {
    console.error("API ERROR:",error);
    return 'Error occurred'; 
  }
};

