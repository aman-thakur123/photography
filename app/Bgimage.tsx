import bg from "../public/street.jpg";
export default function Bgimage() {
    return(
        <>
            <div style={{backgroundImage: `url(${bg.src})`, width: '100%', height: '100vh' }}></div>
        </>
    );
}