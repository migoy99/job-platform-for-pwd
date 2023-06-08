import { useState } from 'react';
// import Button from 'react-bootstrap/Button';
// import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
// import SendProposalModal from './SendProposalModal';

function JobDetailModal() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <button style={{ flex: '1', height: '50%', marginRight: '1%', borderRadius: '8px', backgroundColor: '#009087', color: 'white' }} variant="primary" onClick={handleShow}>
                Full Details
            </button>

            <Modal show={show} onHide={handleClose} style={{}}>
                <Modal.Header closeButton>
                    <Modal.Title>Full Job Details</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>
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
                    </p>
                </Modal.Body>
                <Modal.Footer>
                    <button style={{backgroundColor: '#009087', color: 'white' , borderRadius: '8px'}} variant="secondary" onClick={handleClose}>
                        Close
                    </button>
                    <button style={{backgroundColor: '#009087', color: 'white' , borderRadius: '8px'}} variant="primary" onClick={handleClose}>
                        Send a Proposal
                    </button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default JobDetailModal;