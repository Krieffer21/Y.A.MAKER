import React from "react";
import "./style.css";

function Gallery(props) {
    return (
        <section className="container gallery">
            {/* !--Modal-- */}
            {/* !-- Button trigger modal -- */}
            <button type="button" className="gallery-btn btn-dark" data-toggle="modal" data-target="#exampleModal">
                Upload New Product
          </button>

            {/* !-- Modal -- */}
            <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Upload New Product Thumbnail</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            ...
                </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-light">Load Product</button>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!--Gallery--> */}
            <div className="col-12 mt-5">

                <img src="/images/playThing.png" alt="climbing structure for children" className="img-fluid gallery-images" />
                <img src="/images/shelf.png" alt="custom shelf" className="img-fluid gallery-images" />
                <img src="/images/bunkBed.png" alt="bunk bed" className="img-fluid gallery-images" />
                <img src="/images/table.jpg" alt="table" className="img-fluid gallery-images" />
                <img src="/images/playThing2.png" alt="climbing structure for childrenable" className="img-fluid gallery-images" />
                <img src="/images/table.jpg" alt="table" className="img-fluid gallery-images" />
                <img src="/images/table.jpg" alt="table" className="img-fluid gallery-images" />
                <img src="/images/playThing3.png" alt="climbing structure for children" className="img-fluid gallery-images" />
                <img src="/images/table.jpg" alt="table" className="img-fluid gallery-images" />

            </div>

        </section>

    );
}

export default Gallery;