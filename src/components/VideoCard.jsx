const VideoCard = ({ info }) => {
  const { snippet, statistics } = info;
  const { channelTitle, title, thumbnails } = snippet;
  return (
    <div className="p-1 m-2 w-80 shadow-md rounded-lg">
      <img
        src={thumbnails.medium.url}
        alt="video-thumbnail"
        className="rounded-md"
      />
      <ul>
        <li className="font-semibold py-2">{title}</li>
        <li>{channelTitle}</li>
        <li>{statistics.viewCount} views</li>
      </ul>
    </div>
  );
};

export default VideoCard;
