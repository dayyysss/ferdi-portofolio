import ReactFullpage from '@fullpage/react-fullpage';

const FullPageWrapper = ({ children }) => {
  return (
    <ReactFullpage
      scrollingSpeed={1000}
      navigation
      navigationPosition='right'
      navigationTooltips={['Home', 'About', 'Projects', 'Contact']}
      showActiveTooltip={true}
      anchors={['home', 'about', 'projects', 'contact']}
      render={({ state, fullpageApi }) => (
        <ReactFullpage.Wrapper>
          {children}
        </ReactFullpage.Wrapper>
      )}
    />
  );
};

export default FullPageWrapper;