import * as React from 'react';
import YoutubeAPI from './YoutubeAPI';
import './YoutubeWidget.scss';
import { ReactComponent as PlayBtn } from '../../common/images/play-button.svg';
export interface YoutubeWidgetProps { }

export interface YoutubeWidgetState {
    videoId: string,
    thumbnailSrc: string
}

class YoutubeWidget extends React.Component<YoutubeWidgetProps, YoutubeWidgetState> {
    state = {
        videoId: '',
        thumbnailSrc: ''
    }
    downloadVideo = () => {
        YoutubeAPI.getLatestVideo()

            .then(resp => {
                const data = {
                    thumbnailSrc: resp.data.items[0].snippet.thumbnails.high.url,
                    videoId: resp.data.items[0].id.videoId
                }
                return data;
            }
            )
            .then(data => this.setState(
                {
                    videoId: data.videoId,
                    thumbnailSrc: data.thumbnailSrc,
                })
            )
            .catch(e => console.log(e))
    }
    componentDidMount() {
        this.downloadVideo();
    }
    render() {
        return (
            <div className='youtube-widget__container'>
                <img className='youtube-widget__thumbnail' src={this.state.thumbnailSrc} alt="Miniatura filmu YouTube" />
                <a href={`http://www.youtube.com/embed/${this.state.videoId}`}> {/* WYKORZYSTAĆ ROUTING  */}
                    <PlayBtn />
                </a>
            </div>
        )
    }
}

export default YoutubeWidget;
