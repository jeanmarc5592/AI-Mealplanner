import OpenAI from "openai";

export type OpenAIAnswer = {
  finish_reason: string;

}

export class OpenAIConnection {
  private static instance: OpenAIConnection;

  private static client: OpenAI;

  private constructor() {
    OpenAIConnection.client = new OpenAI({
      // TODO: Move to .env
      apiKey: "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"
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
      //max_tokens: 150,
      messages: [{ role: 'user', content: prompt }],
      model: 'gpt-3.5-turbo',
    });
  
    return result;
  }
}