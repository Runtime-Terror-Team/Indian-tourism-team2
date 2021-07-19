import React from 'react';
import './Cards.css'
import CardItem from './CardItem';

const Cards=()=>{
    return (
        <div className="cards">
            <h1>Check out the epic Destination !</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        
                        <CardItem 
                        src="https://cdn.discordapp.com/attachments/866213404884860928/866649614597750814/pexels-artem-beliaikin-1485630.jpg"
                        text="Rich Culture"
                        label='Culture'
                        path="/destination"
                        />
                        <CardItem 
                        src="https://cdn.discordapp.com/attachments/866213404884860928/866649614001242112/pexels-navneet-shanu-672630.jpg"
                        text="Heritage"
                        label='Heritage'
                        path="/destination"
                        /> 
                    </ul>
                    <ul className="cards__items">
                        <CardItem 
                        src="images/yoga1.jpeg"
                        text="yoga mantra"
                        label='Yoga'
                        path="/destination"
                        />
                        
                        <CardItem 
                        src="images/adventure1.jpeg"
                        text="Aj kuch tufani karte hain"
                        label='Adventure'
                        path="/destination"
                        />
                        <CardItem 
                        src="https://cdn.discordapp.com/attachments/866213404884860928/866654007359045643/l2.jpg"
                        text="its more then money"
                        label='Luxury'
                        path="/destination"
                        />
                        
                    </ul>
                    <ul className="cards__items">
                        <CardItem 
                        src="https://cdn.discordapp.com/attachments/866213404884860928/866654015962218517/ii2.jpg"
                        text="Happy faces"
                        label='Kids'
                        path="/destination"
                        />
                        <CardItem 
                        src="https://cdn.discordapp.com/attachments/866213404884860928/866654590610178058/l3.jpg"
                        text="Rich Culture"
                        label='golden temple'
                        path="/destination"
                        />
                        <CardItem 
                        src="https://cdn.discordapp.com/attachments/866213404884860928/866653078899916800/food1.jpg"
                        text="Indian food is love"
                        label='Food'
                        path="/destination"
                        />
                        <CardItem 
                        src="images/culture1.jpeg"
                        text="Spirituality hub"
                        label='Spiritual'
                        path="/destination"
                        />
                        
                    </ul>
                    
                </div>
            </div>
        </div>
    );
};

export default Cards;
