import React from 'react';
import pt from 'prop-types';
import Button from './Button';

export default function Form({ className, textarea }) {
  return (
    <form className={`form flex flex-col max-w-[445px] w-full ${className}`}>
      <input
        className="form-name p-md mb-md rounded-[50px] border-white border-opacity-50 border-[1px] bg-inherit outline-none hover:border-btnBorder focus:border-btnBorder"
        type="text"
        placeholder="Name"
      />
      <input
        className="form-number p-md mb-md rounded-[50px] border-white border-opacity-50 border-[1px] bg-inherit outline-none hover:border-btnBorder focus:border-btnBorder"
        type="tel"
        placeholder="Phone"
      />
      {textarea && (
        <textarea
          className="form-message p-md mb-md resize-none rounded-[24px] border-white border-opacity-50 border-[1px] bg-inherit outline-none hover:border-btnBorder focus:border-btnBorder"
          name="message"
          cols="30"
          rows="10"
          placeholder="Message"
        />
      )}
      <Button
        text="send"
        className="uppercase w-full md:w-[70%]"
        type="cta"
        buttonType="submit"
        size="l"
      />
    </form>
  );
}

Form.propTypes = {
  className: pt.string,
  textarea: pt.bool,
};

Form.defaultProps = {
  className: '',
  textarea: false,
};
