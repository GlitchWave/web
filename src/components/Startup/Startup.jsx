require('./Startup.scss');
import React from 'react';

const Startup = () => {
    return(
        <section className="Startup" >
            <div className="Startup_Banner"
                 style={{backgroundImage: `url(${'https://image.ibb.co/cmjuzy/startup_banner_bg.png'})`,
                         backgroundSize: 'cover'
                        }}
             >
             <h2>Let your dreams come true</h2>
             <div className="Startup_Banner_Button">Let's do it!</div>
            </div>
            <div className="Startup_First_Text" >
                <h2>We offer you</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, nostrum! Nobis ad commodi labore autem reiciendis illo perspiciatis accusantium ducimus amet quaerat ullam facere necessitatibus voluptate sapiente dolores sit laborum incidunt neque, voluptatem, quidem atque, eveniet eum? Veritatis, quo numquam!</p>
            </div>
            <h3 className="Startup_Subtitle" >How it works</h3>
            <div className="Startup_Schema" >
                <div className="Startup_Schema_Item">
                    <img src="" alt=""/>
                    <img src="" alt=""/>
                </div>
                <div className="Startup_Schema_Item">
                    <img src="" alt=""/>
                    <img src="" alt=""/>
                    <img src="" alt=""/>
                </div>
            </div>
        </section>
    )
}

export default Startup;