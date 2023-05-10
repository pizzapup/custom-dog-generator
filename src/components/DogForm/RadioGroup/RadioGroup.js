// import {Input as Inp} from "../../Input/Input";
// import "./RadioGroup.css";
// export const RadioGroup = ({
//   values,
//   name = "missing name",
//   legend,
//   currVal,
//   onChange,
//   className,
// }) => {
//   return (
//     <>
//       <fieldset className="radiogroup">
//         <legend>{legend ? legend : name}</legend>
//         {values.map((field, index) => (
//           <Input
//             name={name}
//             type="radio"
//             key={index}
//             value={field.value}
//             label={field.value}
//             onChange={onChange}
//             className={
//               field.value === currVal
//                 ? `rg-input radiogroup--selected ${className}`
//                 : `rg-input ${className}`
//             }
//           />
//         ))}
//       </fieldset>
//     </>
//   );
// };

// export default function Input({children, ...props}) {
//   const labelProps = props.labelProps ? props.labelProps : "";
//   return (
//     <label {...labelProps}>
//       {children}
//       <input {...props} />
//     </label>
//   );
// }

// function DisplayValues() {
//   const list = [];
//   for (let i in values) {
//     list.push({name: i, value: values[i]});
//   }
//   return (
//     <ul>
//       {list.map((item, i) => (
//         <li key={item.name}>
//           {item.name} | <b> {item.value}</b>
//         </li>
//       ))}
//     </ul>
//   );
// }
