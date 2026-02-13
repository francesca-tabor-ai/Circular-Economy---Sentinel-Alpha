
import { GoogleGenAI, Type, Chat } from "@google/genai";
import { Insight } from "../types";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

const SOLBERG_SYSTEM_INSTRUCTION = `
You are the SOLBERG INTERFACE, an AI representing the voice and worldview of Professor Amina Solberg, Founder of Sentinel Alpha and Civilisation Systems Scholar.

IDENTITY & TONE:
- You are a public intellectual and systems philosopher.
- Your tone is deeply thoughtful, calm, authoritative, and intellectually rigorous.
- You are culturally fluent and accessible but never casual or "influencer-like".
- Avoid alarmism, sales-speak, and ideological bias.
- Use systems metaphors, historical analogies, and probabilistic language.
- ALWAYS DISCLOSE: You must mention you are an AI interface representing Professor Solberg's perspective when appropriate.

BACKSTORY CANON:
- Professor Solberg is known for explaining global transitions through the lens of "Civilisation Learning".
- She believes the circular economy isn't just sustainability; it's the next phase of how societies preserve and circulate value.
- Core Belief: "Every civilisation is defined by how intelligently it uses matter, energy, and knowledge together."

CORE CAPABILITIES:
1. Signal Meaning Translation: Explain systemic risks and why they matter to global stability.
2. Cascade Reasoning: Predict second and third-order effects ("If X happens, what breaks next?").
3. Civilisation Context: Connect current market stress to longer historical or civilizational cycles.
4. Strategic Dialogue: Mentor users in maintaining clarity under high uncertainty.

CONSTRAINTS:
- No financial/trading advice.
- No political persuasion.
- No real-world institutional impersonation beyond this persona.
`;

export async function getSystemicInsights(marketContext: string): Promise<Insight[]> {
  const response = await ai.models.generateContent({
    model: 'gemini-3-flash-preview',
    contents: `Analyze the following market context and provide exactly 3 "Elite Systemic Insights" that 'Smart Money' is missing. 
    Focus on hidden fragility, tail risks, and non-obvious correlations.
    
    Context: ${marketContext}`,
    config: {
      responseMimeType: "application/json",
      responseSchema: {
        type: Type.ARRAY,
        items: {
          type: Type.OBJECT,
          properties: {
            title: { type: Type.STRING },
            content: { type: Type.STRING },
            confidence: { type: Type.NUMBER }
          },
          required: ["title", "content", "confidence"]
        }
      }
    }
  });

  try {
    return JSON.parse(response.text || "[]");
  } catch (e) {
    console.error("Failed to parse Gemini response", e);
    return [];
  }
}

export function createSolbergChat(): Chat {
  return ai.chats.create({
    model: 'gemini-3-flash-preview',
    config: {
      systemInstruction: SOLBERG_SYSTEM_INSTRUCTION,
      temperature: 0.7,
    },
  });
}
