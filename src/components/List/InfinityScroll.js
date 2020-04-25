import React from 'react';

class InfinityScroll extends React.PureComponent {
  state = { index: 12 };
  loadMoreThreshold = 0.9;

  areThereMoreItems = () =>
    this.state.index < this.props.items.length;

  getScrollProgress = () =>
    window.pageYOffset /
    (document.body.scrollHeight - window.innerHeight);

  shouldLoadMoreItems = () =>
    this.getScrollProgress() > this.loadMoreThreshold &&
    this.areThereMoreItems();

  onScroll = () => {
    if (this.shouldLoadMoreItems()) {
      this.setState(({ index }) => ({ index: index + index / 2 }));
    }
  };

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
