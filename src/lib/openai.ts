import OpenAI from "openai";

export type OpenAIAnswer = {
  finish_reason: string;

}

export class OpenAIConnection {
  private static instance: OpenAIConnection;

  private static client: OpenAI;

  private constructor() {
    OpenAIConnection.client = new OpenAI({
      apiKey: process.env.OPEN_AI_API_KEY
    });
  }

  public static getInstance(): OpenAIConnection {
    if (!OpenAIConnection.instance) {
      this.instance = new OpenAIConnection();
    }
    return OpenAIConnection.instance;
  }

  public async generateAnswer(prompt: string) {
    const result = await OpenAIConnection.client.chat.completions.create({
      messages: [{ role: 'user', content: prompt }],
      model: 'gpt-3.5-turbo',
    });
  
    return result;
  }
}