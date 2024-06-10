import { CheckSVG } from "@/components/Icons/CheckSvg";
import React from "react";
import Select, { components } from "react-select";
import "./select.css";
const colourStyles = {
  control: (styles) => ({ ...styles, backgroundColor: "#FFFFFF14" }),
  option: (styles, { data, isDisabled, isFocused, isSelected }) => {
    return {
      ...styles,
    };
  },
  input: (styles) => ({ ...styles }),
  placeholder: (styles) => ({ ...styles }),
  singleValue: (styles, { data }) => ({ ...styles }),
};

const Option = (props) => {
  const {
    children,
    className,
    cx,
    getStyles,
    isDisabled,
    isFocused,
    isSelected,
    innerRef,
    innerProps,
  } = props;
  return (
    <div
      ref={innerRef}
      css={getStyles("option", props)}
      className={cx(
        {
          option: true,
          "option--is-disabled": isDisabled,
          "option--is-focused": isFocused,
          "option--is-selected": isSelected,
        },
        className
      )}
      {...innerProps}
    >
      <div className="flex items-center justify-between">
        {children}
        {isSelected ? <CheckSVG /> : null}
      </div>
    </div>
  );
};
// const SingleValue = ({ children, ...props }) => (
//   <components.SingleValue {...props}>
//     <div
//       className="flex items-center"
//       style={{
//         columnGap: '8px',
//       }}
//     >
//       {children}
//     </div>
//   </components.SingleValue>
// );

export const ReSelect = ({
  options = [],
  label = "",
  value,
  SingleValue,
  onChange,
}: any) => {
  return (
    <div>
      {label && (
        <label
          htmlFor=""
          style={{
            fontFamily: "Inter",
            fontSize: "14px",
            fontWeight: 400,
            lineHeight: "20px",
            textAlign: "left",
            color: "#ffffff",
            display: "block",
            marginBottom: "4px",
          }}
        >
          {label}
        </label>
      )}
      <Select
        options={options}
        className="react-select-container"
        classNamePrefix="react-select"
        styles={colourStyles}
        placeholder=""
        components={{ Option, ...(SingleValue ? { SingleValue } : {}) }}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};
