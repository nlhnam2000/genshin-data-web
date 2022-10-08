import React from "react";

import "scss/general.scss";

interface Props {
  style?: React.CSSProperties;
  children: React.ReactNode;
  background?: string;
}

interface SubComponentProps {
  children: React.ReactNode;
}

interface ContentWrapperSubComponent {
  Header: React.FC<SubComponentProps>;
  HeaderImage: React.FC<SubComponentProps>;
  HeaderContent: React.FC<SubComponentProps>;
}

// subcomponents
const Header: React.FC<SubComponentProps> = ({ children }) => {
  return <div className="content-wrapper-header">{children}</div>;
};
const HeaderImage: React.FC<SubComponentProps> = ({ children }) => {
  return <div className="content-wrapper-header-image">{children}</div>;
};
const HeaderContent: React.FC<SubComponentProps> = ({ children }) => {
  return <div className="content-wrapper-header-content">{children}</div>;
};

const ContentWrapper: React.FC<Props> & ContentWrapperSubComponent = ({
  style,
  children,
  background = "mondstadt",
}) => {
  return (
    <div className={`content-wrapper ${background}`} style={style}>
      {children}
    </div>
  );
};
ContentWrapper.Header = Header;
ContentWrapper.HeaderImage = HeaderImage;
ContentWrapper.HeaderContent = HeaderContent;

export default ContentWrapper;
