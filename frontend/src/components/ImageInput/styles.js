import styled from 'styled-components';
import { colors } from 'libs/variables';

export const InputContainer = styled.div`
  position: relative;
  width: 150px;
  height: 150px;
  border-radius: 50%;
  border: 1px dashed ${colors.lightGray};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  overflow: hidden;
  .add-text {
    font-size: 16px;
    font-weight: bold;
    color: ${colors.lightGray};
    margin-top: 5px;
  }
  input {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
    cursor: pointer;
  }
`;
export const ImagePlaceholder = styled.img`
  max-width: 40px;
  width: 100%;
`;

export const ImagePreview = styled.img`
  width: 100%;
  object-fit: contain;
`;

export const ChangeImage = styled.div`
  position: relative;
  color: ${colors.gray};
  font-size: 16px;
  font-weight: bold;
  width: fit-content;
  margin: 10px auto;
  span {
    display: block;
  }
  input {
    opacity: 0;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    cursor: pointer;
  }
`;
