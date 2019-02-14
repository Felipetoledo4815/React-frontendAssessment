import React, { Component } from 'react';
import './Gnomes.sass';
import GnomeProfile from './gnome-profile/GnomeProfile';
import InfiniteScroll from 'react-infinite-scroll-component';

export default class Gnomes extends Component {
  
  state = {
    items: 20,
    hasMore: true
  };

  fetchMoreData = () => {
    debugger
    if (this.state.items >= this.props.numberOfGnomes) {
      this.setState({ hasMore: false });
      return;
    }
    setTimeout(() => {
      this.setState({items: this.state.items + 20})
    }, 500);
  };

  render() {
    return (
      <div className="Gnomes">
        <InfiniteScroll className="row"
          dataLength={this.state.items}
          next={this.fetchMoreData}
          hasMore={this.state.hasMore}
        > 
          {this.props.gnomes.slice(0,this.state.items).map((val, key) => (
            <GnomeProfile key={val.id ? val.id : key} gnome={val} />
          ))}
        </InfiniteScroll>
      </div>
    )
  }
}