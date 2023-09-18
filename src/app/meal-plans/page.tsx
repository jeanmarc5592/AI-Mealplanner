'use client'

import PageHeader from "@/components/common/page-header/PageHeader"
import { Add } from "@mui/icons-material"
import { Box, Button, Grid, Typography } from "@mui/material"
import { MealPlansLink } from "@/lib/constants"
import { useRouter } from "next/navigation"
import PageContent from "@/components/common/page-content/PageContent"
import { useQuery } from "convex/react"
import { api } from "../../../convex/_generated/api"
import { MealPlan } from "@/store/slices/mealPlanSlice"
import ContentCard from "@/components/common/content-card/ContentCard"
import MealPlanOverview from "@/components/meal-plans/MealPlanOverview"

const Actions = () => {
  const router = useRouter();

  const handleClick = () => {
    router.push(`${MealPlansLink.href}/create`);
  };

  return (
    <>
      <Button variant="contained" startIcon={<Add />} onClick={handleClick}>New Meal Plan</Button>
    </>
  )
}

const MealPlansOverviewPage = () => {
  const mealPlans: MealPlan[] | undefined = useQuery(api.mealPlans.getMealPlans);

  return (
    <main>
      <PageHeader 
        title='Your meal plans'
        subTitle='A quick overview of all your saved meal plans.'
        actions={<Actions />}
      />
      <PageContent>
        <MealPlanOverview mealPlans={mealPlans} />
      </PageContent>
    </main>
  )
}

export default MealPlansOverviewPage
