import React from 'react';
import Particles from 'react-particles-js';
import HeaderText from './headerText';

class ParticlesComp extends React.Component {

    render() {

        return (
            <div className="particleHeader row no-gutters">
                <Particles
                    canvasClassName="headerBack"
                />
                <HeaderText />
            </div>
        );
    }
}
export default ParticlesComp;