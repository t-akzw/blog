import React from 'react'
import _ from "lodash";

const ImgHtml = "https://lh3.googleusercontent.com/r52tNxsshZQsKdk1GmLjVUgUIsZfdUyoiqGCeLyJqWrsVZC_AB-FC4nopsrKwCcRLMArd4dTIgm-vnOZsGx_wlHziVRXRdCqxCcizQ6qQop9LpQHyyrVqSRQjBf1BRAxuA2uO43ZmaSJJ3zETDw_OeUB5LSeFHYCWas6JJjveNUsr2Ay9VA-_6mk7OeP4BaLsLb1XFb49mzgAxfFhILW8kWukG0X9i5RTsfJ7KfHUZkdI_XBdFQouNaDu5FcluhgmwbKbXgXX_cVB0ABqkAeu0RQqdJLm8wHXuvMpI4iWAFO1UDScqpwWlEaJbYoq2_jhg-aVRTMmv0ia37yHBzkPUrwwfFJL0SBzrGAZLUmWKbO7hQv7nMZsW8evTM6KcYy1K7xnT9BOW47r63dZD4FIE4ev0Inwhx1j7Vpo7WcCPLj1Ndua5XbLJPQiYE5531cxIymKnuvO_edUzCYQFbcR0J2C055wORER8LGzHfD3k3ZmZpZCv3S7ExNjc9Pt-38BPukU6PtJVRtL41i74scvTfqWFmRwN1WVBRQ_JPVqsBBUFpqDvP-254T0WUGfrnlkGix4DaBOM8B4-s7HjS2rTes1CAesByiWUMwfqvaghe_LTDJ_4tVYs6CNZITIIKek7JwBGFrmoEmmQBMOV9pmNNxR-s8ou8YolnJ-E9JAII2PWUYSh34SQPfvaO3PMXaJTAKC3HD171ZQ0Uxcio0tX-KyoZEToYAhOkpxsFd6d_BAUPOoQEmsdg=w1880-h692-no"

const hogestyle = {
  color: "red"
};

const imgstyle = {
  "max-width": "10%",
  "background-color": "#eee8aa",
  "margin": "0 auto",
  "text-align": "cover"
};

const topimg_div = {
  "color": "#FFFFFF",
  "background-image": `url(${ImgHtml})`,
  "background-position": "center center",
  "background-size": "cover",
  "min-height": "50%",
  "padding": "8% 2% 7%"
}

const topimg_div_p1 = {
  "text-align": "center",
  "font-size": "1.8em",
  "font-weight": "normal",
  "margin": "0.3em 0",
  "letter-spacing": "-1px",
  "text-shadow": "1px 2px 3px #808080"
}

const topimg_div_p2 = {
  "text-align": "center",
  "font-size": "1em",
  "font-weight": "normal",
  "margin": "0em 0",
  "letter-spacing": "-1px",
  "text-shadow": "1px 2px 3px #808080"
}

const TopImage = (props) => {
  return (
    <>
      <div style={topimg_div}>
        <div>
          <p style={topimg_div_p1}>あらゆる分野に精通したエンジニア王に、俺はなるっ！！</p>
          <p style={topimg_div_p2}>Machine Learning, Statistics, Argolithm, CloudNative, Frontend, Backend, etc..</p>
        </div>
      </div>
    </>
  )

}

export default TopImage