import React, { Component } from 'react';

class RatioCalc extends Component {
    constructor ( props ) {
        super( props );
        this.state = {
            inputs: {
                a: '',
                b: '',
                c: '',
                d: ''
            },
            ratio: ''
        }
        this.updateInput = this.updateInput.bind( this );
    }
    updateInput ( propertyName, event ) {
      const inputs = this.state.inputs;
      inputs[propertyName] = event.target.value;

      if ( inputs.a && inputs.b ) {

          this.setState({ratio: inputs.a / inputs.b});

          if ( inputs.c || inputs.d ) {
              console.log('-- play ball -- ' );
          }

      }

      this.setState({ inputs: inputs });
    }
    reduceRatio (numerator, denominator) {
                // var gcd, temp, divisor;
                //         // from: http://pages.pacificcoast.net/~cazelais/euclid.html
                // gcd = function (a, b) {
                //     if (b === 0) return a;
                //     return gcd(b, a % b);
                // }
                //         // take care of some simple cases
                // if (!isInteger(numerator) || !isInteger(denominator)) return '? : ?';
                // if (numerator === denominator) return '1 : 1';
                //         // make sure numerator is always the larger number
                // if (+numerator < +denominator) {
                //     temp        = numerator;
                //     numerator   = denominator;
                //     denominator = temp;
                // }
                //         divisor = gcd(+numerator, +denominator);
                //         return 'undefined' === typeof temp ? (numerator / divisor) + ' : ' + (denominator / divisor) : (denominator / divisor) + ' : ' + (numerator / divisor);
    }
    render () {
        return(
          <div className="ratioCalc">
              <h2>Ratio calculator</h2>
              <table>
                  <thead>
                      <tr>
                          <td><label htmlFor="A">A</label></td>
                          <td><label htmlFor="B">B</label></td>
                          <td><label htmlFor="C">C</label></td>
                          <td><label htmlFor="D">D</label></td>
                      </tr>
                  </thead>
                  <tbody>
                      <tr>
                          <td><input id="A" value={this.state.inputs.a} onChange={(e) => this.updateInput('a', e)} type="number" /></td>
                          <td><input id="B" value={this.state.inputs.b} onChange={(e) => this.updateInput('b', e)} type="number" /></td>
                          <td><input id="C" value={this.state.inputs.c} onChange={(e) => this.updateInput('c', e)} type="number" /></td>
                          <td><input id="D" value={this.state.inputs.d} onChange={(e) => this.updateInput('d', e)} type="number" /></td>
                      </tr>
                  </tbody>
              </table>
              <label htmlFor="ratio">Ratio</label>
              <input type="number" readOnly={true} id="ratio" value={this.state.ratio} />
          </div>
        )
    }
}

export default RatioCalc;
