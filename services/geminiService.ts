import { GoogleGenAI, Type } from "@google/genai";
import { StoryPart } from '../types';

if (!process.env.API_KEY) {
    throw new Error("API_KEY environment variable not set");
}

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

const storyGenerationSchema = {
  type: Type.OBJECT,
  properties: {
    scenario: {
      type: Type.STRING,
      description: "A detailed and engaging description of the current scene, 2-4 sentences long."
    },
    imagePrompt: {
      type: Type.STRING,
      description: "A rich, detailed, and cinematic prompt for an AI image generator to create a visual for the scene. Include style hints like 'fantasy art', 'photorealistic', or 'cyberpunk'."
    },
    choices: {
      type: Type.ARRAY,
      description: "An array of 3-4 distinct and interesting actions the player can take.",
      items: {
        type: Type.STRING
      }
    }
  },
  required: ["scenario", "imagePrompt", "choices"]
};

export async function generateStoryPart(prompt: string): Promise<StoryPart> {
    try {
        const response = await ai.models.generateContent({
            model: 'gemini-2.5-flash',
            contents: prompt,
            config: {
                responseMimeType: 'application/json',
                responseSchema: storyGenerationSchema,
                temperature: 0.8,
            },
        });

        const jsonText = response.text.trim();
        const storyPart = JSON.parse(jsonText);
        
        // Basic validation
        if (!storyPart.scenario || !storyPart.imagePrompt || !Array.isArray(storyPart.choices)) {
            throw new Error("Invalid story part structure received from API.");
        }
        
        return storyPart;

    } catch (error) {
        console.error("Error generating story part:", error);
        throw new Error("Failed to weave the next thread of destiny. The cosmos seems to be in disarray.");
    }
}

export async function generateImage(prompt: string): Promise<string> {
    try {
        const response = await ai.models.generateImages({
            model: 'imagen-4.0-generate-001',
            prompt: prompt,
            config: {
                numberOfImages: 1,
                aspectRatio: "16:9",
                outputMimeType: "image/jpeg",
            },
        });

        if (response.generatedImages && response.generatedImages.length > 0) {
            const base64ImageBytes = response.generatedImages[0].image.imageBytes;
            return `data:image/jpeg;base64,${base64ImageBytes}`;
        } else {
            throw new Error("No image was generated.");
        }
    } catch (error) {
        console.error("Error generating image:", error);
        throw new Error("The world's image flickers and fades. The vision could not be conjured.");
    }
}
