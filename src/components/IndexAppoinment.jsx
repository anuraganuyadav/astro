import React from 'react'

const IndexAppoinment = () => {
  return (
   <>
    <div
        className="container-xxl py-5 px-0 wow fadeInUp"
        data-wow-delay="0.1s">
        <div className="row g-0">
          {/* Left Side: Image */}
          <div className="col-md-6">
            <div
              className="image-container"
              style={{ height: "350px", overflow: "hidden" }}
            >
              <img
                src="img/vas.jpeg"
                alt="Image"
                className="w-100 h-100"
                style={{ objectFit: "cover" }} // Ensures the image fits nicely
              />
            </div>
          </div>

          {/* Right Side: Contact Form */}
          <div
            className="col-md-6 bg-dark d-flex align-items-center"
            style={{ height: "350px" }}>
            <div className="p-4 wow fadeInUp w-100" data-wow-delay="0.2s">

              <h1 className="text-white mb-3">Book An Appointment</h1>
              <form>
                <div className="row g-3">
                  <div className="col-md-6">
                    <div className="form-floating">
                      <input
                        type="text"
                        className="form-control"
                        id="name"
                        placeholder="Your Name"
                      />
                      <label htmlFor="name">Your Name</label>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-floating">
                      <input
                        type="email"
                        className="form-control"
                        id="email"
                        placeholder="Your Email"
                      />
                      <label htmlFor="email">Your Email</label>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-floating">
                      <input
                        type="text"
                        className="form-control"
                        id="datetime"
                        placeholder="Date & Time"
                      />
                      <label htmlFor="datetime">Date & Time</label>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-floating">
                      <input
                        type="number"
                        className="form-control"
                        id="number"
                        placeholder="Your Number"
                      />
                      <label htmlFor="number">Your Number</label>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-floating">
                      <textarea
                        className="form-control"
                        placeholder="Special Request"
                        id="message"
                        style={{ height: "80px" }}
                      ></textarea>
                      <label htmlFor="message">Special Request</label>
                    </div>
                  </div>
                  <div className="col-12">
                    <button
                      className="btn btn-primary w-100 py-2"
                      type="submit"
                    >
                      Book Now
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
   </>
  )
}

export default IndexAppoinment