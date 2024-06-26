import Image from 'next/image';
import Street from "../../public/street.jpg"
import Heading from './Heading';

export default function Carousel() {
    return (
        <>
            <Heading title="Testimonial section" />
            <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <Image src={Street.src} width={1300} height={500} style={{width:'100%'}} alt="Picture of the author" />
                    </div>
                    <div className="carousel-item">
                        <Image src={Street.src} width={1300} height={500} style={{width:'100%'}} alt="Picture of the author" />
                    </div>
                    <div className="carousel-item">
                        <Image src={Street.src} width={1300} height={500} style={{width:'100%'}} alt="Picture of the author" />
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </>
    );
}