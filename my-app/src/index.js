import React from 'react'
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import Landing from './components/landing/landing';
import PriceSection from './components/price-section/price-section';
import PropertyType from './components/propertyType/propertyType';
import GetInspired from './components/get-inspired/getInspired';
import PopularApartments from './components/popular-apartments/popularApartments';
import Footer from './components/footer/footer';


function Page() {
    return (
        <div>
            <Landing />
            <PriceSection />
            <PropertyType />
            <GetInspired />
            <PopularApartments />
            <Footer />
        </div>
    )
}

ReactDOM.render(<Page />, document.getElementById('root'));