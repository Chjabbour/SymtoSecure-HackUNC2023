  import { encode, decode } from "js-base64";
  import OpenAI from "openai";

  const openai = new OpenAI({
    apiKey: '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', 
    dangerouslyAllowBrowser: true
  });


  async function main() {
    const chatCompletion = await openai.chat.completions.create({
      messages: [{ role: 'user', content: 'Say this is a test' }],
      model: 'gpt-3.5-turbo',
    });
  
    console.log(chatCompletion.choices);
  }
  

  export const encodeData = (obj) => {
    main();
    return encode(JSON.stringify(obj));
  };

  export const decodeData = (base64) => JSON.parse(decode(base64));
