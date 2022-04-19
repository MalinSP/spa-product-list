// const useValidation = (value, validations) => {
//   const [isEmpty, setEmpty] = useState(true)
//   const [minLengthError, setMinLengthError] = useState(false)

//   useEffect(() => {
//     for (const validation in validations) {
//       switch (validation) {
//         case 'minLength':
//           value.length < validations[validation]
//             ? setMinLengthError(true)
//             : setMinLengthError(false)
//           break
//         case 'isEmpty':
//           value ? setEmpty(false) : setEmpty(true)
//           break
//       }
//     }
//   }, [value])
//   return { isEmpty, minLengthError }
// }
// const [formValues, setFormValues] = useState({
//   sku,
//   name,
//   price,
//   weight,
//   size,
//   height,
//   width,
//   length,
// });

// const valid = useValidation()
