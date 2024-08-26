import React from 'react';
import './Homepage.css'; // Import CSS file for custom styling if needed
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

const Homepage = () => {
  return (
    <div className="homepage">
      <header className="hero-banner text-center py-5">
        <h1 className="display-4">Welcome to Mystical Tarot and Crystals</h1>
        <p className="lead">Your journey into the mystical begins here.</p>
      </header>
      
      <section className="services text-center my-5">
        <h2 className="mb-4">Our Services</h2>
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <div className="card mb-4">
                <img src="https://ishtarcollective.blob.core.windows.net/rider-waite-tarot/cups-12.jpg" className="card-img-top" alt="Tarot Readings" />
                <div className="card-body">
                  <h5 className="card-title">Personal Tarot Readings</h5>
                  <p className="card-text">Get insights into your life and future with a personal tarot reading.</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card mb-4">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeiD2iCRWWRX19K_Yl_EiydTzGBcHIKZl86Q&s" className="card-img-top" alt="Crystal Healing" />
                <div className="card-body">
                  <h5 className="card-title">Crystal Healing</h5>
                  <p className="card-text">Experience the power of crystals to heal and balance your energy.</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card mb-4">
                <img src="https://ishtarcollective.blob.core.windows.net/rider-waite-tarot/pentacles-2.jpg" className="card-img-top" alt="Numerology Analysis" />
                <div className="card-body">
                  <h5 className="card-title">Numerology Analysis</h5>
                  <p className="card-text">Discover your life's purpose and potential through numerology.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="cta text-center my-5">
        <button className="btn btn-primary mx-2" onClick={() => window.location.href = '/bookings'}>Book a Reading</button>
        <button className="btn btn-secondary mx-2" onClick={() => window.location.href = '/shop'}>Explore the Shop</button>
        <button className="btn btn-info mx-2" onClick={() => window.location.href = '/newsletter'}>Subscribe to Newsletter</button>
      </section>
    </div>
  );
};

export default Homepage;
