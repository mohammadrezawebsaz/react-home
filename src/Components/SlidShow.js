import React, { Component } from "react";
import "./SlidShow.css";
import Img1 from "./../Image/1.jpg";
import Img2 from "./../Image/2.jpg";
import Img3 from "./../Image/3.jpg";
import Img4 from "./../Image/4.jpg";
import Img5 from "./../Image/5.jpg";
import Img6 from "./../Image/6.jpg";
import Img7 from "./../Image/7.jpg";
import Img8 from "./../Image/8.jpg";
import Img9 from "./../Image/9.jpg";

class SlidShow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Image: [
        {
          src: [Img1],
          cap: "شیخ صدوق شمالی"
        },
        {
          src: [Img2],
          cap: "زینبیه شمالی"
        },
        {
          src: [Img3],
          cap: "عباس آباد"
        },
        {
          src: [Img4],
          cap: "شهرضا"
        },
        {
          src: [Img5],
          cap: "ناژوان"
        },
        {
          src: [Img6],
          cap: "خمینی شهر"
        },
        {
          src: [Img7],
          cap: "شاهین شهر"
        },
        {
          src: [Img8],
          cap: "ممد آباد"
        },
        {
          src: [Img9],
          cap: "خورزوق"
        }
      ],
      index: 0,
      timeSet: 5000
    };
  }

  componentDidMount() {
    this.setTimer = setInterval(() => {
      this.changeImage();
    }, this.state.timeSet);
  }

  componentWillUnmount() {
    clearInterval(this.setTimer);
  }

  changeImage() {
    if (this.state.index === this.state.Image.length - 1) {
      this.setState({ index: 0 });
    } else if (this.state.index < this.state.Image.length) {
      this.setState({ index: this.state.index + 1 });
    }
  }

  onMouseOverSlid() {
    
  }

  render() {
    return (
      <div>
        <img
          src={this.state.Image[this.state.index].src}
          alt=""
          className="imgSlidShow"
          onMouseOver={this.onMouseOverSlid}
        />
        <caption className="captionSlidShow">
          {this.state.Image[this.state.index].cap}
        </caption>
      </div>
    );
  }
}

export default SlidShow;
