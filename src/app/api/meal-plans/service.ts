import { NewMealPlanFormSchemaType } from "@/components/meal-plans/NewMealPlanForm";
import { OpenAIConnection } from "@/lib/openai";
export class MealPlansApiService {
  async generate(data: NewMealPlanFormSchemaType) {
    const prompt = this.buildPrompt(data);
  
    const openAI = OpenAIConnection.getInstance();
    const answer = await openAI.generateAnswer(prompt);

    const result = answer?.choices?.[0]?.message?.content || "{ mealPlan: {}}";

    return JSON.parse(result);
  }

  private buildPrompt(data: NewMealPlanFormSchemaType): string {
    const { 
      calories,
      carbs,
      proteins,
      fats,
      meals,
      totalDays,
      dietaryPreferences,
      allergies,
      foodLikes,
      foodDislikes,
    } = data;

    const resultStructure = [
      {
        day: "Day 1",
        totalCalories: "sum of all calories from all meals of this day",
        totalCarbs: "sum of all carbs from all meals of this day",
        totalProteins: "sum of all proteins from all meals of this day",
        totalFats: "sum of all fats from all meals of this day",
        meals: [{
          name: "Meal 1",
          recipe: "name of the dish",
          calories: "amount of calories for this meal",
          carbs: "amount of carbs for this meal",
          proteins: "amount of proteins for this meal",
          fats: "amount of fats for this meal",
        }],
      }
    ];

    const introPrompt = `Generate a meal plan for ${totalDays} days and with ${meals} meals each day without deviation.`;
    const nutritionalNeedsPrompt = `The maximum nutrional needs per day are ${calories}kcal calories, ${carbs}g carbs, ${proteins}g proteins and ${fats}g fats per day.`;
    const dietaryPreferencesPrompt = !!dietaryPreferences ? `Dietary preferences are ${dietaryPreferences.replaceAll("\n", ",")}` : "";
    const allergiesPrompt = !!allergies ? `Allergies are ${allergies.replaceAll("\n", ",")}` : "";
    const foodLikesPrompt = !!foodLikes ? `Food likes are ${foodLikes.replaceAll("\n", ",")}` : "";
    const foodDislikesPrompt = !!foodDislikes ? `Food likes are ${foodDislikes.replaceAll("\n", ",")}` : "";
    const resultPrompt = `Do not include any explanations, only provide a RFC8259 compliant JSON response following this format without deviation. ${JSON.stringify(resultStructure)}.`

    return `
      ${introPrompt} 
      ${nutritionalNeedsPrompt}
      ${dietaryPreferencesPrompt}
      ${allergiesPrompt}
      ${foodLikesPrompt}
      ${foodDislikesPrompt}
      ${resultPrompt}
    `;
  }
}