import { Link } from "react-router-dom";
import styled from "styled-components";
import { Icon } from "../../../../components";

const LargeText = styled.div`
  font-size: 32px;
  font-weight: 600;
  line-height: 46px;
  margin-top: 8px;
`;

const SmallText = styled.div`
  font-size: 16px;
  font-weight: bold;
  line-height: 12px;
`;

const LogoContainer = ({ className }) => (
  <Link className={className} to="/">
    <Icon id="fa code" size="56px" margin_r="0 10px 0 0" />
    <div>
      <LargeText>Blog</LargeText>
      <SmallText>веб-разработка</SmallText>
    </div>
  </Link>
);
export const Logo = styled(LogoContainer)`
  display: flex;
`;
