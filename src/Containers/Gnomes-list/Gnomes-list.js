import React, { Component } from 'react';
import './Gnomes.sass';
import {connect} from 'react-redux';
import GnomeProfile from '../../Components/Gnome-profile/GnomeProfile';
import InfiniteScroll from 'react-infinite-scroll-component';

class GnomesList extends Component {
 
  state = {
    items: 20,
    hasMore: true
  };

  fetchMoreData = () => {
    if (this.state.items >= this.props.allGnomes.length) {
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
          {this.props.filteredGnomes.slice(0,this.state.items).map((val) => (
            <GnomeProfile key={val.id} gnome={val} />
          ))}
        </InfiniteScroll>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    allGnomes: state.filters.allGnomes,
    filteredGnomes: state.filters.filteredGnomes
  };
}

export default connect(mapStateToProps)(GnomesList);