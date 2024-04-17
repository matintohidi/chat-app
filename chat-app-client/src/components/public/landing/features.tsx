import React from 'react';
// packages dependencies
import { WalletMoney } from 'iconsax-react';

const Features : React.FC = () => {
    return (
        <section className="mx-12 my-11">
            <h1 className="font-PoppinsBold text-primaryText text-3xl">Features for a better experience</h1>

            {/*feature cards*/}
            <div className="flex flex-col">
                <div className="flex flex-col">
                    <div>
                        <WalletMoney
                            color="#BA4141"
                            variant="Bold"
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Features;