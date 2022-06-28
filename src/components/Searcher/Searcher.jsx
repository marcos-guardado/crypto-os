import React from "react";
import CustomInput from "../CustomInput/CustomInput";
function Searcher({ placeholder, onChange }, ref) {
  return (
    <CustomInput onChange={onChange} placeholder={placeholder} ref={ref} />
  );
}

export default React.forwardRef(Searcher);
