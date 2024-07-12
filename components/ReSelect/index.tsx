import { CheckSVG } from "@/components/Icons/CheckSvg";
import React from "react";
import Select, { components } from "react-select";
import "./select.css";
const colourStyles = {
  control: (styles: any) => ({ ...styles, backgroundColor: "#FFFFFF14" }),
  option: (styles: any, { data, isDisabled, isFocused, isSelected }: any) => {
    return {
      ...styles,
    };
  },
  input: (styles: any) => ({ ...styles }),
  placeholder: (styles: any) => ({ ...styles }),
  singleValue: (styles: any, { data }: any) => ({ ...styles }),
};

const Option = (props: { children: any; className: any; cx: any; getStyles: any; isDisabled: any; isFocused: any; isSelected: any; innerRef: any; innerProps: any; }) => {
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
        components={{ Option: Option as any, ...(SingleValue ? { SingleValue } : {}) }}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};
