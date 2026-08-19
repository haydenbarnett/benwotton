import ReactPlayer from "react-player";
import styles from "./Video.module.css";

type VideoProps = {
  url: string;
};

export const Video = ({ url }: VideoProps) => {
  return (
    <div className={styles.section}>
      <div className={styles.container}>
        <div className={styles.videoWrapper}>
          <ReactPlayer
            className={styles.video}
            src={url}
            width="100%"
            height="100%"
            controls
            config={{
              youtube: {
                rel: 0,
              },
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Video;
