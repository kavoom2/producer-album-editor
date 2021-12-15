import React from "react";
import styled, { css } from "styled-components";
import { ReactComponent as SvgImage } from "./assets/kit-album-case.svg";

const DynamicKitCase = ({
  sideColor = "#99C1BB",
  topColor = "#A5CAFB",
  isIamgeExist,
  imageUrl,
}) => {
  return (
    <Wrapper>
      <ImageWrapper>
        <Image src={imageUrl} />
      </ImageWrapper>

      <DynamicSvg
        sideColor={sideColor}
        topColor={topColor}
        isIamgeExist={isIamgeExist}
      />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
`;

const ImageWrapper = styled.span`
  position: absolute;
  top: 50%;
  left: 50%;

  width: 100%;
  height: 100%;

  transform: translate(-53%, -62%) scale(0.8, 0.7);
  border-radius: 100%;

  transform-origin: center;

  z-index: 0;

  perspective: 1252px;
  perspective-origin: -134% -390%;
`;

const Image = styled.img`
  transform: scaleX(1.12) scaleY(1.12) scaleZ(0.36) rotateX(110deg)
    rotateY(0deg) rotateZ(-2deg) translateX(30px) translateY(10px)
    translateZ(130px) skewX(3deg) skewY(-39deg);

  border-radius: 110px;

  width: 100%;
  height: auto;
  object-fit: contain;
  object-position: center;
`;

const DynamicSvg = styled(SvgImage)`
  ${({ ...props }) => {
    const { sideColor, topColor, isIamgeExist } = props;

    return css`
    position: relative;
    z-index: 11;
    
      .cls-1 {
        // 측면 클래스
        fill: ${sideColor};
      }

      .cls-8 {
        // 상부 클래스
        fill: ${topColor};
        ${isIamgeExist && `visibility: hidden;`}
    `;
  }}
`;

export default DynamicKitCase;
