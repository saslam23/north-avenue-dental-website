import React from "react";

const Whitening = () => {
    return (
        <div className="service-pages" id="teeth-whitening">
            <div>
                <img className="service-banner" src={process.env.PUBLIC_URL + "/assets/teeth-whitening-banner.jpg"} alt="banner_image" />
                <h1 data-aos="fade-right" data-aos-duration="2000" className="banner-sm-left">Let Us Perfect Your Smile</h1>
            </div>
            <h1 style={{ marginBottom: "3rem" }}>Wondering how teeth are whitened? Watch this video!</h1>
            <div className="text-center"><iframe title="whitening" width="850" height="500" src="https://www.youtube.com/embed/Wlv8eP_ANEo" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe></div>
        </div>
    )
}


export default Whitening;