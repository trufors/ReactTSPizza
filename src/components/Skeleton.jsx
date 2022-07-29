import React from 'react';
import ContentLoader from 'react-content-loader';

const Skeleton = (props) => (
  <ContentLoader
    speed={2}
    width={400}
    height={460}
    viewBox="0 0 400 460"
    backgroundColor="#e9e2e2"
    foregroundColor="#ecebeb"
    {...props}>
    <circle cx="128" cy="128" r="112" />
    <rect x="2" y="247" rx="15" ry="15" width="256" height="101" />
    <rect x="13" y="356" rx="3" ry="3" width="97" height="22" />
    <rect x="145" y="355" rx="3" ry="3" width="97" height="22" />
  </ContentLoader>
);

export default Skeleton;
