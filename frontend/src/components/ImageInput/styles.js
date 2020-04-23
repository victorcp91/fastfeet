import styled from 'styled-components';
import { colors } from 'libs/variables';

export const Container = styled.div`
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

export const ButtonContainer = styled.div`
  margin-top: 10px;
  width: 100%;
  text-align: center;
`;

export const ClearImage = styled.button`
  margin: 0 auto;
  border: none;
  background-color: #e64747;
  color: #fff;
  text-align: center;
  padding: 5px 10px;
  border-radius: 4px;
  font-weight: bold;
`;
