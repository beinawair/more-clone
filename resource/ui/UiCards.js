const UiCards = ({ data }) => {
    return (
        <>
            {
                data?.map((item, index) => (
                    <div key={index} className={"carousel-cell image image-" + (item.id)}>
                        <div className="overlay-carousel"></div>
                        <div className="inner-wrapper">
                            <div className="text-carousel">
                                <h3 className="subtitle">{item.heading}</h3>
                                <h2 className="title">{item.title}</h2>
                                <p className="carousel-text-body">{item.body}</p>
                            </div>
                            <div className="button-carousel">
                                <button className="btn">Explore</button>
                            </div>
                        </div>
                    </div>
                ))
            }
        </>
    );
}

export default UiCards;