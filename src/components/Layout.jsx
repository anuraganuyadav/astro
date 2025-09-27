import React from 'react'
import Header from './Common/Header'
import Footer from './Common/Footer'
import Index from './Index'

const Layout = () => {
    return (
        <>
            <div className="container-xxl bg-white p-0">
                {/* Spinner Start */}

                <Header></Header>
                <Index></Index>
                <Footer></Footer>
                {/* Back to Top */}
                <a href="#" className="btn btn-lg btn-primary btn-lg-square back-to-top"><i className="bi bi-arrow-up"></i></a>
            </div>

        </>
    )
}

export default Layout