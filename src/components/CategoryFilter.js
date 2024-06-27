import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchCategories,
  fetchProductsByCategory,
} from "../redux/actions/productActions";

const CategoryFilter = () => {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.products.categories);
  const status = useSelector((state) => state.products.status);
  const error = useSelector((state) => state.products.error);

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchCategories());
    }
  }, [status, dispatch]);

  const handleCategoryChange = (event) => {
    const selectedCategory = event.target.value;
    if (selectedCategory) {
      dispatch(fetchProductsByCategory(selectedCategory));
    }
  };

  if (status === "loading") {
    return <div>Loading categories...</div>;
  }

  if (status === "failed") {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="flex flex-wrap gap-2 mb-6">
      <select
        onChange={handleCategoryChange}
        className="bg-blue-500 text-white p-2 rounded outline-pink-300 hover:bg-pink-500"
      >
        <option value="">Select a category</option>
        {categories.map((category) => (
          <option value={category} key={category}>
            {category}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CategoryFilter;
