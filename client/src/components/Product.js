import styled from "styled-components";

const Product = ({
  _id,
  sku,
  name,
  price,
  dimensions,
  weight,
  size,
  select,
  toggleProduct,
}) => {
  return (
    <Wrapper>
      <div className='header'>
        <input
          type='checkbox'
          name={name}
          checked={select}
          id={_id}
          onChange={toggleProduct}
        />
        <span>{sku}</span>
      </div>
      <div>
        <h4>{name}</h4>
        <p className='price'>${price}</p>
        <p className='desc'>
          {weight && `Weight: ${weight}KG`}
          {size && `Size: ${size}MB`}
          {dimensions &&
            `Dimensions: ${dimensions.height}x${dimensions.width}x${dimensions.length}`}
        </p>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.article`
  max-width: 25rem;
  width: 350px;
  border-radius: 0.25rem;
  background-color: #f1f4ca;
  padding: 2rem 1rem;
  border: 1px;
  border-color: rgb(226 232 240);
  box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
  .header {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  h4 {
    color: #474839;
  }
  .price {
    color: #303026;
  }
  .desc {
    font-weight: 400;
    font-style: italic;
    color: #77795f;
    font-size: 0.8rem;
  }
`;

export default Product;
