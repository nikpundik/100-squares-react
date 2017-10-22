import React, { Component } from 'react';

const load = () => {
  if (window.twttr && window.twttr.widgets) {
    window.twttr.widgets.load();
  }
}

class Twitter extends Component {

  componentDidMount() {
    load();
  }

  componentDidUpdate() {
    load();
  }

  render() {
    const { text } = this.props;
    return (
      <div>
        <a
          className="twitter-share-button"
          href={`https://twitter.com/intent/tweet?text=${text}`}
          data-size="large"
        >
          Tweet
        </a>
      </div>
    );
  }

}

export default Twitter;