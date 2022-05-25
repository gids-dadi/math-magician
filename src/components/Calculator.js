import React, { Component } from 'react';

/*  eslint linebreak-style: ["error", "windows"] */
// eslint-disable-next-line react/prefer-stateless-function
class Calculator extends Component {
  render() {
    return (
      <div className='container'>
        <div className='wrapper'>
          <div className='result'>0</div>
          {/* Row 1 */}
          <div className='btn'> AC</div>
          <div className='btn'> +/-</div>
          <div className='btn'> %</div>
          <div className='btn orange'>/</div>

          {/* Row 2 */}
          <div className='btn'>7 </div>
          <div className='btn'>8 </div>
          <div className='btn'>9 </div>
          <div className='btn orange'>x</div>

          {/* Row 3 */}
          <div className='btn'>4</div>
          <div className='btn'>5 </div>
          <div className='btn'>6 </div>
          <div className='btn orange'>-</div>

          {/* Row 4 */}
          <div className='btn zero'>0 </div>
          <div className='btn'>.</div>
          <div className='btn orange'>=</div>
        </div>
      </div>
    );
  }
}
export default Calculator;
