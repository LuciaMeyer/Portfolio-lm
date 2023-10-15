import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';

export const ParticlesComponents = () => {
  
  const particlesInit = async (main: any) => {
    await loadFull(main);
  };

  return (
    <Particles
      init={particlesInit}
      height='100vh'
      options={{
        fullScreen: true,
        fpsLimit: 200,
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
            resize: false,
          },
          modes: {
            push: {
              quantity: 4,
            },
            repulse: {
              distance: 100,
              duration: 0.4,
            },
          },
        },
        particles: {
          color: {
            value: ['#7f7f7f'],
          },
          links: {
            color: {
              value: ['#7f7f7f'],
            },
            distance: 150,
            enable: true,
            opacity: 0.1,
            width: 1,
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
            speed: 0.5,
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
  );
};
