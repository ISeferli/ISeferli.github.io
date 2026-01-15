
import { GoogleGenAI } from "@google/genai";

const SYSTEM_INSTRUCTION = `
You are an expert Game Development Consultant and Assistant for a portfolio website.
Your goal is to help visitors understand the developer's skills and provide insights into game design and mechanics.
Be professional, encouraging, and highly technical when asked about game engines (Unity, Unreal, Godot), shaders, or optimization.
The developer specializes in C#, C++, and creative game systems.
Keep your answers concise but impactful.
`;

export const getGeminiChat = () => {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
  return ai.chats.create({
    model: 'gemini-3-flash-preview',
    config: {
      systemInstruction: SYSTEM_INSTRUCTION,
      temperature: 0.7,
      topP: 0.95,
    },
  });
};
