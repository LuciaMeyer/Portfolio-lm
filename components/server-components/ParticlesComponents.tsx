import React from 'react'
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';

export const ParticlesComponents = () => {
    const particlesInit = async (main: any) => {
        await loadFull(main);
    };

    return (
        <Particles
            init={particlesInit}               
            options={{
                fullScreen:false,
                fpsLimit: 150,
                interactivity: {
                    events: {
                        onClick: {
                            enable: true,
                            mode: 'push',
                        },
                        onHover: {
                            enable: true,
                            mode: 'repulse',
                        },
                        resize: true,
                    },
                    modes: {
                        push: {
                            quantity: 4,
                        },
                        repulse: {
                            distance: 200,
                            duration: 0.4,
                        },
                    },
                },
                particles: {
                    color: {
                        value: ['#BD740F']
                    },
                    links: {
                        color: {
                            value: ['#BD740F']
                        },
                        distance: 150,
                        enable: true,
                        opacity: 0.1,
                        width: 2,
                    },
                    collisions: {
                        enable: true,
                    },
                    move: {
                        direction: 'none',
                        enable: true,
                        outModes: {
                            default: 'bounce',
                        },
                        random: false,
                        speed: 4,
                        straight: false,
                    },
                    number: {
                        density: {
                            enable: true,
                            area: 800,
                        },
                        value: 130,
                    },
                    opacity: {
                        value: 0.3,
                    },
                    shape: {
                        type: 'circle',
                    },
                    size: {
                        value: { min: 0.5, max: 4 },
                    },
                },
                detectRetina: true,
            }}
        />
    )
};