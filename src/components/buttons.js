import React from 'react';
import Button from "./button"

const buttonsData = [
    {
        id: 1,
        title: "Artstation",
        link: "https://simplyer1c.artstation.com",
        Icon: 'artstationLogo',
        description: "3D Art"
    },

    {
        id: 2,
        title: "Instagram",
        link: "https://instagram.com/simplyer1c_art",
        Icon: 'instagramLogo',
        description: "Brands, Drawings, 3D"
    },
];

function Buttons() {
    return (
        <div className="container w-3/4 mx-auto">
            <div className="grid sm:grid-cols-4 gap-8">
                {
                    buttonsData.map(({ title, link, Icon, description, id }) => (
                        <Button title={title} link={link} Icon={Icon} description={description} key={id} />
                    ))
                }
            </div>
        </div>
    )
}

export default Buttons