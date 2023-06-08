// import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import JobDetailModal from './SeekerDashboardComponents/JobDetailModal';
import SendProposalModal from './SeekerDashboardComponents/SendProposalModal';

function JobListingCard() {
    return (
        <div>
            <Card style={{ width: '95%', backgroundColor: 'white', padding: '10px', borderRadius: '8px' }} >
                <Card.Header style={{ fontWeight: 'bold' }}>Graphic Designer</Card.Header>
                <Card.Body>
                    <Card.Title style={{}}> Full Time - Monthly Salary - Expert - Posted 1 day ago </Card.Title>
                    <Card.Text style={{ fontSize: '15px' }}>
                        Responsibilities:
                        -create templates for E-Commerce listings
                        -given stock photos, create lifestyle product images
                        -create product images showing size and scale
                        -Develop Website banners and Special promotion images for E-commerce and Social Media
                        -receive guidance and develop original digital art for posters and canvasses.
                        -given popular word art and motivational posters, develop similar posters but different enough to avoid copyright issues.

                        Requirements:
                        • Bachelor's Degree in graphic design and/or at least experience in graphic design with a portfolio of work
                        • Proven experience as a graphic designer or Illustrator.
                        • Demonstrable graphic design skills with a strong portfolio.
                        • Experience and knowledge of graphic design software such as Adobe PhotoShop, Illustrator and Canva etc.
                        • A strong eye for visual composition and an excellent eye for detail.
                        • Creative thinking.
                        • Effective time management skills and the ability to meet deadlines.
                        • Able to give and receive constructive criticism.
                        • An understanding of marketing, branding and product design is highly desirable.
                        • Preferably with Amazon Listing Experience
                        • Strong communication skills, with the ability to effectively collaborate and articulate design choices to stakeholders in English.
                    </Card.Text>
                    <div style={{ display: 'flex' }}>
                        <JobDetailModal/>
                        <SendProposalModal/>
                        <button style={{ flex: '1', height: '50%', marginRight: '1%', borderRadius: '8px' , backgroundColor: '#009087', color:'white'}}>Save Job</button>
                    </div>
                </Card.Body>
            </Card>
            <Card style={{ marginTop: '10px', width: '95%', backgroundColor: 'white', padding: '10px', borderRadius: '8px' }} >
                <Card.Header style={{ fontWeight: 'bold' }}>WordPress Developer</Card.Header>
                <Card.Body>
                    <Card.Title style={{ fontSize: '20px' }}> Full Time - Monthly Salary - Entry Level - Posted 2 hours ago </Card.Title>
                    <Card.Text style={{ fontSize: '15px' }}>
                        Role Description

                        The WordPress Developer is responsible for both back-end and front-end development including the implementation of WordPress themes and plugins as well as site integration and security updates.
                        WordPress Developer relies heavily on their communication skills to succeed. S/he needs to actively listen to understand what clients want and make it a reality. The WordPress Developer will be responsible for coding websites and quality assurance, testing, and developing fixes. They also need excellent collaboration skills to work with designers and other developers as they work towards creating a finished website. The WordPress Developer needs to be an expert in WordPress, Javascript, JQuery, HTML, HTML 5, XML, CSS 3, Laravel Framework, AWS LightSail, Vue.js, and PHP backend development.



                        KEY RESPONSIBILITIES

                        ·Formulating a website design that is responsive and error-free
                        ·Developing and maintaining websites, intranets, applications, and custom programs
                        ·Maintaining the CMS for optimal performance
                        ·Working with Designers to Perfect Site Aesthetics
                        ·Working with the back-end and website architecture
                        ·Generating, creating and updating WordPress themes and plugins
                        ·Monitoring live website performance
                        ·Conducting performance tests and troubleshooting issues
                        ·Providing diagnostic reports of website performance
                        ·Taking care of security and compliance standards
                        ·Contribute in all phases of the development lifecycle
                        ·Liaising with other developers in the team.
                        ·Establishing strong professional relationships with clients and other professionals.
                        ·Conducting research and keeping abreast of software development trends.
                        ·Create/update guidelines, records and documentation.
                    </Card.Text>
                    <div style={{ display: 'flex' }}>
                        <button style={{ flex: '1', height: '50%', marginRight: '1%', borderRadius: '8px' , backgroundColor: '#009087', color:'white'}}>Full Details</button>
                        <button style={{ flex: '1', height: '50%', marginRight: '1%', borderRadius: '8px' , backgroundColor: '#009087', color:'white'}}>Send Proposal</button>
                        <button style={{ flex: '1', height: '50%', marginRight: '1%', borderRadius: '8px' , backgroundColor: '#009087', color:'white'}}>Save Job</button>
                    </div>
                </Card.Body>
            </Card>
            <Card style={{ marginTop: '10px', width: '95%', backgroundColor: 'white', padding: '10px', borderRadius: '8px' }} >
                <Card.Header style={{ fontWeight: 'bold' }}>Virtual Assistant</Card.Header>
                <Card.Body>
                    <Card.Title style={{ fontSize: '20px' }}>Part Time - Hourly Salary - Intermediate Skill Level -  30 hrs/week - Posted 1 day ago </Card.Title>
                    <Card.Text style={{ fontSize: '15px' }}>
                        We are seeking a skilled data entry specialist to assist with a project involving transferring events from Google Calendar into Band Pencil CRM. The ideal candidate will have proficiency in copy and paste, accuracy verification, and experience with Band Pencil or similar software and data entry. The project is expected to take a week or so. As the selected candidate, you will be responsible for accurately transferring events from Google Calendar into Band Pencil CRM. You should possess excellent computer skills, including proficiency in Google Suite. Attention to detail and accuracy are crucial to the success of this project. To be considered for this role, please submit a proposal outlining your relevant experience and how you can help with the project. Please include links to past completed projects that demonstrate your data entry and CRM software skills. We look forward to reviewing your proposal and potentially working with you on this project. Note: Some of the content in this job post may have been auto-generated using advanced AI.
                    </Card.Text>
                    <div style={{ display: 'flex' }}>
                        <button style={{ flex: '1', height: '50%', marginRight: '1%', borderRadius: '8px' , backgroundColor: '#009087', color:'white'}}>Full Details</button>
                        <button style={{ flex: '1', height: '50%', marginRight: '1%', borderRadius: '8px' , backgroundColor: '#009087', color:'white'}}>Send Proposal</button>
                        <button style={{ flex: '1', height: '50%', marginRight: '1%', borderRadius: '8px' , backgroundColor: '#009087', color:'white'}}>Save Job</button>
                    </div>
                </Card.Body>
            </Card>
        </div>
    );
}

export default JobListingCard;