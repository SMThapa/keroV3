export const Warranty = () => {
    return (
        <>            
            <main className="warranty">
                <div className="banner">
                    <div className="banner_content">
                        <h2 className="banner_title">Warranty</h2>
                        <p>Every Kerovit product carries our commitment to you with a long-term
warranty that ensures care, convenience and confidence. We offer up to
10 years of warranty across our range, ensuring you enjoy the same
peace of mind long after the purchase. </p>
<p>If you would like to know more about our warranty policy,  <br/><b><a href="#">click here</a></b></p>
                    </div>
                </div>

                <div className="warranty-form-container">

                    <div className="below-warranty-banner">
                        <div className="text">
                        <h2>Own a Kerovit product?</h2>
                        <h4>Let’s make it official! </h4>
                        <p>Activate your warranty to ensure seamless 
                        service, faster support, and long-term peace of 
                        mind. Just fill in your details below.</p>
                        </div>
                    </div>


            <form className="warranty-form">
                <label>
                    Name*
                    <input type="text" name="name" />
                </label>

                <label>
                    Mobile*
                    <input type="text" name="mobile" />
                </label>

                <label>
                    Address*
                    <input type="text" name="address" />
                </label>

                <label>
                    Select State*
                    <select name="state">
                        <option value="">Select State</option>
                        {/* Add state options */}
                    </select>
                </label>

                <label>
                    Select City*
                    <select name="city">
                        <option value="">Select City</option>
                        {/* Add city options */}
                    </select>
                </label>

                <label>
                    District
                    <select name="district">
                        <option value="">Select District</option>
                        {/* Add district options */}
                    </select>
                </label>

                <label>
                    Pincode
                    <input type="text" name="pincode" />
                </label>

                <button type="submit" className="submit-btn">ACTIVATE WARRANTY</button>
            </form>
        </div>


            </main>            
        </>
    );
};
