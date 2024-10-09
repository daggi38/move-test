import HeroDescription from "../../../../common/components/hero-component/HeroDescription";
import { Categories } from "../../../../models/categories/categories";

interface CategoryProps {
  category: Categories;
}

const CategoryDescription: React.FC<CategoryProps> = ({ category }) => {
  return (
    <HeroDescription
      isCategoryPage={true}
      descriptionOne={category.description}
      title={category.title}
    />
  );
};

export default CategoryDescription;
