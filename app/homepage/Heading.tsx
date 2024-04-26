export default function Heading(props) {
    return(
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12">
                        <h1>{props.title}</h1>
                    </div>
                </div>
            </div>
        </>
    );
}