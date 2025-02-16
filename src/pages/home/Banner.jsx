const Banner = () => {
    return (
        <div>
            <div className="carousel w-full">
                <div id="slide1" className="carousel-item  relative md:w-full h-60 md:h-96 lg:h-[600px]">
                    <img src="https://i.ibb.co/fN3LBfd/Another-Mountain-view-canvas.jpg" className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative md:w-full h-60 md:h-96 lg:h-[600px]">
                    <img src="https://i.ibb.co/KWM9LyC/Pencil-Sketch-Portrait.jpg" className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative md:w-full h-60 md:h-96 lg:h-[600px]">
                    <img src="https://i.ibb.co/L6pKFD0/Figure-Charcoal-Sketch.jpg" className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative md:w-full h-60 md:h-96 lg:h-[600px]">
                    <img src="https://i.ibb.co/GtDSGZC/Another-Abstract-Oil-Painting.jpg" className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;