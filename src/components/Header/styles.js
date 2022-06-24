import styled from "styled-components";

export const Container = styled.div`
  height: 150px;
  text-align: center;
  background: teal;
`;

export const Header = styled.h1`
  height: 150px;
  text-align: center;
  background: DarkSlateBlue;
`;

export const Title = styled.div`
    padding-top: 20px;
    color: #fff;
    animation: flipTitle 3s;

    @keyframes flipTitle {
    from {
        transform: rotateX(90deg)
    }
    to {
        transform: rotateX(0deg)
    }
}
`;
