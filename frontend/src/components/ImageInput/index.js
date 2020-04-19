import React, {
  ChangeEvent,
  useRef,
  useEffect,
  useCallback,
  useState,
} from 'react';
import { useField } from '@rocketseat/unform';
import PropTypes from 'prop-types';

import imagePlaceholder from 'assets/images/image-placeholder.png';
import {
  InputContainer,
  ImagePlaceholder,
  ImagePreview,
  ChangeImage,
} from './styles';

export default function ImageInput({ name, ...rest }) {
  const inputRef = useRef();
  const { fieldName, registerField, defaultValue } = useField(name);
  const [preview, setPreview] = useState(defaultValue);
  const handlePreview = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) {
      setPreview(null);
    }
    const previewURL = URL.createObjectURL(file);
    setPreview(previewURL);
  }, []);
  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'files[0]',
      clearValue(ref: HTMLInputElement) {
        ref.value = '';
        setPreview(null);
      },
      setValue(_: HTMLInputElement, value: string) {
        setPreview(value);
      },
    });
  }, [fieldName, registerField]);
  return (
    <>
      <InputContainer>
        {preview ? (
          <>
            <ImagePreview src={preview} alt="Preview" />
          </>
        ) : (
          <>
            <ImagePlaceholder src={imagePlaceholder} alt="avatar area" />
            <p className="add-text">Adicionar foto</p>
            <input
              type="file"
              ref={inputRef}
              onChange={handlePreview}
              {...rest}
            />
          </>
        )}
      </InputContainer>
      {preview && (
        <ChangeImage>
          <span>Mudar foto</span>
          <input
            type="file"
            ref={inputRef}
            onChange={handlePreview}
            {...rest}
          />
        </ChangeImage>
      )}
    </>
  );
}

ImageInput.propTypes = {
  name: PropTypes.string.isRequired,
};
