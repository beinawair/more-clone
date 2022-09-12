import Image from "next/image";

const UiCardExperience = ({ data }) => {

    return (
        <>
            {
                data?.map((item, index) => (
                    <div key={index} className="carousel-cell experience-wrapper">
                            <div className={"image-experience-" + (item.id)}></div>
                            <div className="experience-text">
                                <hr />
                                <h5 className="heading-caps slider-title">{item.title}</h5>
                                <p className="slider-subhead secondary-text">{item.subhead}</p>
                                {item.desc?.map((text, index) => (
                                    <p key={index} className="intro-content">{text.text}</p>
                                ))}
                                <div className="carousel-navigation">
                                    <div className="arrow-button-left"></div>
                                    <div className="carousel-indicator"></div>
                                    <div className="arrow-button-right"></div>
                                </div>
                            </div>
                    </div>
                ))
            }
        </>
    );
}

export default UiCardExperience;