import React from 'react';

class InfinityScroll extends React.PureComponent {
  state = { index: 12 };

  onScroll = () => {
    if (
      this.getScrollRate() > 0.9 &&
      this.state.index < this.props.items.length
    ) {
      this.setState(({ index }) => ({ index: index + index / 2 }));
    }
  };

  getScrollRate = () =>
    window.pageYOffset /
    (document.body.scrollHeight - window.innerHeight);

  componentDidMount() {
    window.addEventListener('scroll', this.onScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.onScroll);
  }

  render() {
    return this.props.render({
      setOfItems: this.props.items.slice(0, this.state.index),
    });
  }
}

export default InfinityScroll;
