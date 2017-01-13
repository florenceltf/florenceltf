import React, { Component } from 'react';
import Gallery from '../../Components/Gallery';
import Information from '../../Components/Information';
import Index from '../../Components/Index';
import Header from '../../Components/Header';
import Footer from '../../Components/Footer';
import './Home.css';
/**
 * This is a smart component that is in control of the user flow
 */
class Home extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      page: 'Gallery',
      style: {
        backgroundColor: 'white',
      },
    };

    this.showInformation = this.showInformation.bind(this);
    this.showIndex = this.showIndex.bind(this);
    this.showHome = this.showHome.bind(this);
  }

  getPage(page) {
    switch (page) {
      case 'Information':
        return <Information />;
      case 'Index':
        return <Index />;
      default:
        return <Gallery />;
    }
  }

  showIndex() {
    this.setState({
      ...this.state,
      page: 'Index',
    });
    document.body.style.backgroundColor = 'white';
  }

  showInformation() {
    this.setState({
      ...this.state,
      page: 'Information',
    });
    document.body.style.backgroundColor = 'blue';
  }

  showHome() {
    this.setState({
      ...this.state,
      page: 'Home',
    });
    document.body.style.backgroundColor = 'white';
  }

  render() {
    return (
      <div className="home">
        <Header showHome={this.showHome} />
        {this.getPage(this.state.page)}
        <Footer
          showInformation={this.showInformation}
          showIndex={this.showIndex}
        />
      </div>
    );
  }
}

export default Home;
