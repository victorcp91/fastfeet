import React, { useRef, useEffect } from 'react';
import { OptionTypeBase } from 'react-select';
import Select from 'react-select/async';
import { useField } from '@rocketseat/unform';
import PropTypes from 'prop-types';

export default function AsyncSelect({ name, ...rest }) {
  const selectRef = useRef(null);
  const { fieldName, defaultValue, registerField, error } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: selectRef.current,
      path: 'select.state.value',
      getValue: (ref: any) => {
        if (rest.isMulti) {
          if (!ref.select.state.value) {
            return [];
          }

          return ref.select.state.value.map(
            (option: OptionTypeBase) => option.value
          );
        }
        if (!ref.select.state.value) {
          return '';
        }

        return ref.select.state.value.value;
      },
    });
  }, [fieldName, registerField, rest.isMulti]);

  return (
    <>
      <Select
        cacheOptions
        defaultValue={defaultValue}
        ref={selectRef}
        classNamePrefix="react-select"
        {...rest}
      />
      {error && <span>Selecione</span>}
    </>
  );
}

AsyncSelect.propTypes = {
  name: PropTypes.string.isRequired,
};
