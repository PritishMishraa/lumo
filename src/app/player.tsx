import {
    MediaController,
    MediaControlBar,
    MediaTimeRange,
    MediaTimeDisplay,
    MediaVolumeRange,
    MediaPlayButton,
    MediaSeekBackwardButton,
    MediaSeekForwardButton,
    MediaMuteButton,
    MediaPosterImage,
  } from 'media-chrome/react';
  
  const Player = () => {
    return (
      <MediaController>
        <video
          slot="media"
          src="https://my.real-debrid.com/QHGHDEAEGGUWY/torrents/The.Shawshank.Redemption.1994.BDREMUX_2160p.mkv/The.Shawshank.Redemption.1994.BDREMUX_2160p.mkv"
          preload="auto"
          crossOrigin=""
        />
        <MediaPosterImage slot="poster" src="https://image.tmdb.org/t/p/original/kXfqcdQKsToO0OUXHcrrNCHDBzO.jpg"></MediaPosterImage>
        <MediaControlBar>
          <MediaPlayButton></MediaPlayButton>
          <MediaSeekBackwardButton></MediaSeekBackwardButton>
          <MediaSeekForwardButton></MediaSeekForwardButton>
          <MediaTimeRange></MediaTimeRange>
          <MediaTimeDisplay showDuration></MediaTimeDisplay>
          <MediaMuteButton></MediaMuteButton>
          <MediaVolumeRange></MediaVolumeRange>
        </MediaControlBar>
      </MediaController>
    );
  };
  
  export default Player;