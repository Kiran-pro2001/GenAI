import { GoogleGenAI } from "@google/genai";
const ai = new GoogleGenAI({ apiKey: "AIzaSyCKHBZoVLizDuT3eAelOLRO7hCxw6HqTUw" });
async function main() {
  const response = await ai.models.generateContent({
    model: "gemini-2.0-flash",
    // Now, we are giving all the previous chats for the context. 
    contents: [
      {
        role: 'user',
        parts: [{ text: "Hi, I am Rohit" }]
      },
      {
        role: 'model',
        parts: [{ text: "Hi Rohit, nice to meet you! How can I help you today?" }]
      },
      {
        role: 'user',
        parts: [{ text: "What is my name" }]
      }
    ]
  });
  console.log(response.text);
}
main();