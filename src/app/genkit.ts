"use server";

import { gemini15Flash, googleAI } from "@genkit-ai/googleai";
import { genkit, z } from "genkit";
import { DIAGNOSIS_PROMPT } from "./prompt"; // Import prompt dari file terpisah

const ai = genkit({
  plugins: [googleAI()],
  model: gemini15Flash,
});

export const SuggestionFlow = ai.defineFlow(
  {
    name: "diagnosisAssistantFlow",
    inputSchema: z.string(),
    outputSchema: z.string(),
  },
  async (inputDescription) => {
    const { text } = await ai.generate({
      model: gemini15Flash,
      prompt: `
        ${DIAGNOSIS_PROMPT}
        
        ${inputDescription}
      `,
    });
    return text;
  }
);
