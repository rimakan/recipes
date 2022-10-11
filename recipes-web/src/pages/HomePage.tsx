import FirstSection from "../components/HomePage/FirstSection/FirstSection";
import FourthSection from "../components/HomePage/ForthSection/FourthSection";
import SecondSection from "../components/HomePage/SecondSection/SecondSection";
import ThirdSection from "../components/HomePage/ThirdSection/ThirdSection";
import { useEffect } from "react";
import { getRandomRecipe } from "../store/recipeSearch/recipe-search-actions";
import { randomRecipeSelector } from "../store/recipeSearch/recipe-search-selectors";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "../store";

const HomePage = () => {
  const dispatch: AppDispatch = useDispatch();
  const randomRecipe = useSelector(randomRecipeSelector);

  useEffect(() => {
    dispatch(getRandomRecipe());
  }, [dispatch]);

  const { title, img } = randomRecipe;

  return (
    <>
      <FirstSection />
      <SecondSection />
      <ThirdSection />
      <FourthSection title={title} src={img} alt={title} />
    </>
  );
};

export default HomePage;
