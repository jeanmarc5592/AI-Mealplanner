'use client'

import PageHeader from "@/components/common/page-header/PageHeader"
import { Add } from "@mui/icons-material"
import { Button } from "@mui/material"
import { MealPlansLink } from "@/lib/constants"
import { useRouter } from "next/navigation"

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
  return (
    <main>
      <PageHeader actions={<Actions />} />
    </main>
  )
}

export default MealPlansOverviewPage
