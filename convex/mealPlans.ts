import { mutation } from "./_generated/server";
import { v } from "convex/values";

export const createMealPlan = mutation({
  args: {
    name: v.string(),
    content: v.array(
      v.object({
        day: v.string(),
        totalCalories: v.string(),
        totalCarbs: v.string(),
        totalProteins: v.string(),
        totalFats: v.string(),
        meals: v.array(
          v.object({
            name: v.string(),
            recipe: v.string(),
            calories: v.string(),
            carbs: v.string(),
            proteins: v.string(),
            fats: v.string()
          })
        )
    }
  ))
  },
  handler: async (ctx, args) => {
    const mealPlanId = await ctx.db.insert("mealPlans", args);
    return mealPlanId;
  }
})