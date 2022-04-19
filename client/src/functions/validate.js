export const validate = ({
  sku,
  name,
  price,
  size,
  weight,
  length,
  height,
  width,
}) => {
  const errors = {}

  if (!sku) {
    errors.sku = 'SKU is required'
  }
  if (!name) {
    errors.name = 'Name is required'
  }
  if (!price) {
    errors.price = 'Price is required'
  }
  if (!size) {
    errors.size = 'Size is required'
  }
  if (!weight) {
    errors.weight = 'Weight is required'
  }
  if (!height) {
    errors.height = 'Height is required'
  }
  if (!width) {
    errors.width = 'Width is required'
  }
  if (!length) {
    errors.length = 'Length is required'
  }
  return errors
}
