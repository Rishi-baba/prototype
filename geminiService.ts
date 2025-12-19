
import { GoogleGenAI } from "@google/genai";
import { BUSINESS_MODEL_TEXT } from "./constants";

export const askGemini = async (prompt: string): Promise<string> => {
  try {
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `Context: ${BUSINESS_MODEL_TEXT}\n\nUser Question: ${prompt}\n\nAnswer concisely based on the business model context provided.`,
      config: {
        temperature: 0.7,
        maxOutputTokens: 500,
        systemInstruction: "You are a strategic defense-tech consultant. You have access to the business model of a startup building a logistics platform for the Indian Army. Be professional, data-driven, and concise."
      }
    });
    return response.text || "No response generated.";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "Error communicating with AI. Please check your API key.";
  }
};
