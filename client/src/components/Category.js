import React from 'react';
import CategoryWrapper from './style/Category.style';
import School from '../images/Learning-cuate.svg';
import College from '../images/Graduation-pana.svg';
import { NavLink } from 'react-router-dom';

export const Category = () => {
  return (
    <CategoryWrapper>
    <div className="main-category">
        <h1>Get started as</h1>
        <div id="category">
            <div className="subcategory">
              <NavLink to='/school-dashboard'>
                <img src={School} alt=""/>
                <span>School Student</span>
              </NavLink>
            </div>
            <div className="subcategory">
              <NavLink to='/college-dashboard'>
                <img src={College} alt=""/>
                <span>College Student</span>
            </NavLink>
            </div>
        </div>
    </div>
    </CategoryWrapper>
  )
}

export default Category;
