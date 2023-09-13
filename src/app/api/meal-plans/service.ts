import { NewMealPlanFormSchemaType } from "@/components/meal-plans/NewMealPlanForm";

export class MealPlansApiService {
  async generate(data: NewMealPlanFormSchemaType) {
    const prompt = this.buildPrompt(data);
    // TODO: Send Prompt to OpenAI
    // TODO: Return Answer 
    return [{ title: 'DAY 1' }];
  }

  private buildPrompt(data: NewMealPlanFormSchemaType): string {
    // TODO: Build Prompt
    return "OPEN API PROMPT";
  }
}