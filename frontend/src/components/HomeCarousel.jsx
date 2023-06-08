import Carousel from 'react-bootstrap/Carousel';

function HomeCarousel() {
    return (
        <div style={{ marginRight: '15%', marginLeft: '15%' }}>
            <Carousel variant="dark" style={{transition: 'transform 1s ease-in-out;'}}>
                <Carousel.Item>
                    <div style={{ marginBottom: '30%', marginTop: '25%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <h1 style={{ justifyContent: 'center', alignItems: 'center' }}>Are you looking to discover new opportunities?</h1>
                    </div>
                    <Carousel.Caption>
                        <div style={{ marginBottom: '5%', marginTop: '45%', justifyContent: 'center', alignItems: 'center' }}>
                            <h4>Unleash Your Potential: Find Opportunities that Embrace Abilities!</h4>
                        </div>

                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <div style={{ marginBottom: '30%', marginTop: '25%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <h1 style={{ justifyContent: 'center', alignItems: 'center' }}>Are you looking for amazing and talented workers?</h1>
                    </div>
                    <Carousel.Caption>
                        <div style={{ marginBottom: '5%', marginTop: '45%', justifyContent: 'center', alignItems: 'center' }}>
                            <h4>Empower Your Workforce: Connect with Exceptional Talent!</h4>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>

        </div>


    );
}

export default HomeCarousel;