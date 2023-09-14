import { NewMealPlanFormSchemaType } from "@/components/meal-plans/NewMealPlanForm";
import { OpenAIConnection } from "@/lib/openai";
export class MealPlansApiService {
  async generate(data: NewMealPlanFormSchemaType) {
    const prompt = this.buildPrompt(data);
  
    const openAI = OpenAIConnection.getInstance();
    const answer = await openAI.generateAnswer(prompt);

    const result = answer?.choices?.[0]?.message?.content || "No result";

    return result;
  }

  private buildPrompt(data: NewMealPlanFormSchemaType): string {
    // TODO: Build Prompt
    return "Generate a meal plan on a vegan diet for 3 days and with 4 meals per day.";
  }
}
