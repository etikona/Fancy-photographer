import React, { useEffect, useState } from 'react';
import Service from '../Home/Service/Service';
import './Services.css'

const Services = () => {
    const [services, setServices] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        fetch('services.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    const handleCart = (service) =>{
        const newCart = [...cart, service];
        setCart(newCart);
    }
    return (
        <div>
            <h3 className='text-primary mt-5'>Services</h3>

            <div className=' service-container'>
                {
                    services.map(service => <Service key={service.id} service={service} 
                    handleCart={handleCart}
                    ></Service>)
                }
            </div>

        </div>
    );
};

export default Services;