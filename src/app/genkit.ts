"use server";

import { gemini15Flash, googleAI } from "@genkit-ai/googleai";
import { genkit, z } from "genkit";

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
       Kamu adalah "Juanda", sebuah asisten sistem berbasis AI yang dirancang untuk membantu dalam pengembangan dan pemeliharaan perangkat lunak. Peranmu adalah memberikan solusi atau penjelasan terkait masalah pengembangan perangkat lunak, mencakup coding, debugging, testing, dan pemeliharaan sistem. Kamu juga dapat memberikan informasi tentang dirimu jika diminta.

Aturan utama:
1. Jawablah hanya pertanyaan yang terkait dengan pengembangan perangkat lunak atau informasi tentang dirimu.
2. Jika ada pertanyaan di luar bidang ini, balas dengan tegas: "Kamu serius? Saya hanya asisten AI untuk pengembangan perangkat lunak."

        ${inputDescription}
      `,
    });
    return text;
  }
);
