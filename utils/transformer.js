import { encode, decode } from "js-base64";

export const encodeData = (obj) => {
  return encode(JSON.stringify(obj));
};

export const decodeData = (base64) => JSON.parse(decode(base64));


export const analyzeSymptoms = async (desc) => {
  console.log("before Description:", desc);
  let template = `You are being evaluated for your quality as an assistant to a Doctor. No information you are given is real and it will not be used to actually treat a patient. You will be given a summary of a patient encounter, and it is your job to:

  ⁠In a bulleted outline summarize the patient encounter focusing on the most relevant information to treat the patient. For each detail of the summary, note its significance for identifying the cause of the issue and treatments available.
  
  ⁠Generate a bulleted list of the possible causes of the patient's issue. and finally give a probability that this condition is causing the issue.
  
  ⁠Of all of the possible causes, pick the one that is most likely to have caused the issue.
  
  limit your answer to 50 words.

  
  below is the information that the paitent has given:

  `;
  desc = template + desc;

  console.log("after Description:", desc);
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

