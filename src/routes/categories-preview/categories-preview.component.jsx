import {Fragment,useEffect } from 'react';
import {useSelector} from "react-redux";
import CategoryPreview from '../../components/category-preview/category-preview.component';
import {
  selectCategoriesIsLoading,
  selectCategoriesMap
} from "../../store/categories/category.selector";
import Spinner from "../../components/spinner/Spinner.component";

const CategoriesPreview = () => {
  const categoriesMap=useSelector(selectCategoriesMap)
  const loading = useSelector(selectCategoriesIsLoading)


  return (
   loading ? (
       <Spinner/>
   ):(
       <Fragment>
         {Object.keys(categoriesMap).map((title) => {
           const products = categoriesMap[title];
           return (
               <CategoryPreview key={title} title={title} products={products} />
           );
         })}
       </Fragment>
   )
  );
};

export default CategoriesPreview;
