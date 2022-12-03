import { Player } from '@livepeer/react';
import Image from 'next/image';
import * as React from 'react';
 
//import waterfallsPoster from '/images/waterfalls-poster.png';
 
const PosterImage = () => {
  return (
    <Image
            src="/public/first.png"
            alt="Blender"
            layout="fill"
            objectFit="cover"
            priority
            placeholder="blur"
        />
  );
};
 
const playbackId =
  'bafybeigtqixg4ywcem3p6sitz55wy6xvnr565s6kuwhznpwjices3mmxoe';
 
const Livepeer = () => {
 return (
    <Player
            title="Waterfall"
            playbackId="bafybeigtqixg4ywcem3p6sitz55wy6xvnr565s6kuwhznpwjices3mmxoe"
            loop

            poster={<PosterImage />}
            showLoadingSpinner={false}
            controls={{ autohide: 0, hotkeys: false }}
            muted
            autoPlay
            objectFit="contain"
            showPipButton

            theme={{
                borderStyles: {
                  containerBorderStyle: 'hidden',
                },
                colors: {
                  accent: '#00a55f',
                },
                space: {
                  controlsBottomMarginX: '10px',
                  controlsBottomMarginY: '5px',
                  controlsTopMarginX: '15px',
                  controlsTopMarginY: '10px',
                },
                radii: {
                  containerBorderRadius: '0px',
                },
              }}
    />
  );
}

export default Livepeer