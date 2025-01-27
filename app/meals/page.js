import Link from "next/link";
import classes from "./page.module.css";
import { MealGrid } from "@/component/meals/meals-grid";
import { getMeals } from "@/lib/meals";

export default async function MealsPage() {
  const meals = await getMeals();
  return (
    <>
      <header className={classes.header}>
        <h1>
          Delicious meals, created{" "}
          <span className={classes.highlight}>by you</span>
        </h1>
        <p>
          Choose your favroite recipe and cook it yourself. It is easy and fun!
        </p>
        <p className={classes.cta}>
          <Link href="/meals/share">Share your favroite recipe</Link>
        </p>
      </header>
      <main className={classes.main}>
        <MealGrid meals={meals} />
      </main>
    </>
  );
}
