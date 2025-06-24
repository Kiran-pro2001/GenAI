//now we want to take input from the terminal, we want to upgrade our LLM2.js code 

// so to take input in js, we have to use readline-sync module 
// install it -     npm i readline-sync



import { GoogleGenAI } from "@google/genai";
import readlineSync from 'readline-sync'; //npm i readline-sync

const ai = new GoogleGenAI({ apiKey: "AIzaSyCKHBZoVLizDuT3eAelOLRO7hCxw6HqTUw" });

const History = []

async function Chatting(userProblem) {

    History.push({
        role: 'user',
        parts: [{ text: userProblem }]
    })

    const response = await ai.models.generateContent({
        model: "gemini-2.0-flash",
        contents: History
    });


    History.push({
        role: 'model',
        parts: [{ text: response.text }]
    })

    console.log("\n");
    console.log(response.text);
}


async function main() {

    const userProblem = readlineSync.question("Ask me anything--> ");
    await Chatting(userProblem);
    main();
}


main();