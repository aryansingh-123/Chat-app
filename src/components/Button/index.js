import React from "react";
 const Button =({
     label ='Button',
     type ='button',
     className = '',
     disabled = false,
 }) => {
     return(
         <div className="p-4 flex justify-center item-center">
         <button type={type} className={`text-white bg-blue-600 hover:bg-blue-700  font-medium 
         rounded-lg text-sm  px-16 p-2 text-center ${className}`} disabled={disabled}>{label}</button>
         </div>
     )
 }
 export default Button