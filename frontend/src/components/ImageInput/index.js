import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

import filePlaceholder from 'assets/images/image-placeholder.png';
import {
  Container,
  ImagePreview,
  ImagePlaceholder,
  ButtonContainer,
  ClearImage,
} from './styles';

const ImageInput = ({ initialValue, onChange }) => {
  const [preview, setPreview] = useState('');

  const inputRef = useRef();

  useEffect(() => {
    setPreview(initialValue);
  }, [initialValue]);

  const handleFile = (e) => {
    const file = e.target.files?.[0];
    if (!file) {
      setPreview(null);
    }
    const previewURL = URL.createObjectURL(file);
    setPreview(previewURL);
    onChange(file);
  };

  const clearFile = () => {
    inputRef.current.value = null;
    setPreview(null);
    onChange();
  };

  return (
    <>
      <Container>
        {preview && <ImagePreview src={preview} alt="Preview" width="100" />}
        {!preview && (
          <>
            <ImagePlaceholder src={filePlaceholder} alt="adicionar foto" />
            <span className="add-text">Adicionar foto</span>
          </>
        )}
        <input ref={inputRef} type="file" onChange={handleFile} />
      </Container>

      {preview && (
        <ButtonContainer>
          <ClearImage type="button" onClick={clearFile}>
            Apagar
          </ClearImage>
        </ButtonContainer>
      )}
    </>
  );
};

ImageInput.propTypes = {
  initialValue: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

ImageInput.defaultProps = {
  initialValue: '',
};

export default ImageInput;
