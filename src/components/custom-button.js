import React from "react";

const CustomBtn = ({children, ...rest})=>(
    <button className="custom-button" {...rest}>
        {children}
    </button>
);

export default CustomBtn;