import ReactFullpage from '@fullpage/react-fullpage';

const FullPageWrapper = ({ children }) => {
  return (
    <ReactFullpage
      licenseKey={'OPEN-SOURCE-GPLV3-LICENSE'}
      scrollingSpeed={1000}
      navigation
      navigationPosition='right'
      anchors={['home', 'about', 'projects', 'contact']}
      navigationTooltips={['Home', 'About', 'Projects', 'Contact']}
      render={({ state, fullpageApi }) => (
        <ReactFullpage.Wrapper>
          {children}
        </ReactFullpage.Wrapper>
      )}
    />
  );
};

export default FullPageWrapper;