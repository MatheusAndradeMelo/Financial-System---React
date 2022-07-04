import styled from "styled-components";

export const Container = styled.div`
  height: 150px;
  text-align: center;
  background: teal;
`;

export const Header = styled.h1`
  height: 150px;
  text-align: center;
  background: linear-gradient(
    -45deg, 
        rgba(59,173,227,1) 0%, 
        rgba(87,111,230,1) 25%, 
        rgba(152,68,183,1) 51%, 
        rgba(255,53,127,1) 100%
  );
  background-size: 300% 300%;
  animation: AnimateBG 20s ease infinite;

  @keyframes AnimateBG { 
  0%{background-position:0% 50%}
  50%{background-position:100% 50%}
  100%{background-position:0% 50%}
}
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
