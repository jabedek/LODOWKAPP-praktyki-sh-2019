import React from 'react';
import io from 'socket.io-client';
import './Fridge.scss';

export interface FridgeViewProps {}

export interface FridgeViewState {
  src: string;
}

class FridgeView extends React.Component<FridgeViewProps, FridgeViewState> {
  state = { src: '' };
  getImageBase64() {
    console.log('B64');
    const script = document.createElement('script');
    script.src =
      'https://cdnjs.cloudflare.com/ajax/libs/socket.io/2.2.0/socket.io.js';
    script.async = true;
    document.body.appendChild(script);

    var socket = io('http://10.254.0.40:3000');
    socket.on('image', image => {
      this.setState({ src: `data:image/jpeg;base64,${image}` });
    });
  }

  onClick = e => {};

  componentDidMount() {
    this.getImageBase64();
  }

  render() {
    return (
      <div className="fridge">
        <img
          src={this.state.src}
          id="image"
          className="fridge__image"
          onClick={this.onClick}
        />
        <div className="fridge__tag" />
      </div>
    );
  }
}

export default FridgeView;
