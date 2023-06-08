import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import JobListingCard from './JobListingCard';

function MatchSaveTab() {
  return (
    <Tabs
      defaultActiveKey="profile"
      id="justify-tab-example"
      className="mb-3"
      justify
      display="flex"
    >
      <Tab eventKey="home" title="Home" style={{flex: 1}}>
        <JobListingCard />
      </Tab>
      <Tab eventKey="profile" title="Profile">
        Tab content for Profile
      </Tab>
    </Tabs>
  );
}

export default MatchSaveTab;