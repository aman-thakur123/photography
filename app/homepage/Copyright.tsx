import "../globals.css";
export default function Copyright() {
    function getYear(){
        return new Date().getFullYear();
    }
    return(
        <>
            <section className="copyright-section">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-12">
                            <p>
                                © {getYear()} Aman Thakur. All rights reserved
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}