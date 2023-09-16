import { NewMealPlanFormSchemaType } from "@/components/meal-plans/MealPlanForm";
import { NextRequest, NextResponse } from "next/server";
import { MealPlansApiService } from "../service";

export async function POST(request: NextRequest) {
  // TODO: Check if request is authenticated

  const service = new MealPlansApiService();
  
  const body: NewMealPlanFormSchemaType = await request.json();

  // TODO: Validate request body (zod)

  const mealPlan = await service.generate(body);

  return NextResponse.json({ mealPlan });
}