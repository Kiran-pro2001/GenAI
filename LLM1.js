// we are trying to talk with the LLM Model - this time, no external tool is used (keep in mind).....so we can't the current temperature, or how many r in strawberry or what is 2+2
// otherwise on ChatGPT, it uses external tool, it may write Python code and execute on external tool.

import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: "AIzaSyCKHBZoVLizDuT3eAelOLRO7hCxw6HqTUw" });

async function main() {
  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: "What is a Tree Data Structure?",
  });
  console.log();
  console.log();
  
  console.log(response.text);
}

await main();

//npm init
// npm i @google/genai      --- you can go to their documentation as well - @google/genai
// to run -   node LLM.js