import style from "./inputField.module.scss";
// import { useState } from 'react';
import classNames from "classnames/bind";
const cx = classNames.bind(style);

interface FooProp {
  name?: string;
  inputType: string;
  maxlength?: number;
  error?: string;
  placeholder: string,
    value: string,
}

//test

const InputField = (props: FooProp) => {
  const { name, inputType, maxlength, error, value, placeholder } = props;
  return (
    <div className={style.inputField}>
      {inputType == "textArea" ? (
        <textarea
          className={cx(style["input-text-area"], { [style.errorField]: !!error })}
          name={name}
          maxLength={maxlength}
          value={value}
          placeholder={placeholder}
        />
      ) : (
        <input
          className={cx(style["input-field"], { [style.errorField]: !!error })}
          name={name}
          type={inputType}
          maxLength={maxlength}
          value={value}
          placeholder={placeholder}
        />
      )}
      <div className={cx(style["error-msg"], { [style.active]: !!error })}>
        {error}
      </div>
    </div>
  );
};

export default InputField;
