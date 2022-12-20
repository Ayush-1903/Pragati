import styled from "styled-components";

const CategoryWrapper = styled.div`
.main-category {
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column; 
	font-family: 'Montserrat', sans-serif;
    height: 95vh;
}

h1 {
	font-weight: bold;
	color: #000000;
}

#category {
    display: flex;
}

#category :hover{
    transform: scale(1.07);
}

#category .subcategory{
    display: flex;
    flex-direction: column;
    background-color: #ffffff;
    padding: 40px;
    margin: 30px;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    border-radius: 20px;
    transition: all 0.5s;
}

#category .subcategory img{
    align-items: center;
    min-width: 20px;
    transition: all 0.5s;
}

#category .subcategory a{
    font-family: 'Poppins', sans-serif;
    text-align: center;
    text-decoration: none;
    margin-top: 10px;
    display: inline-block;
    font-size: 20px;    
    font-weight: 600;
    color: #2a2a2a;
    transition: all 0.5s;
}
`

export default CategoryWrapper;