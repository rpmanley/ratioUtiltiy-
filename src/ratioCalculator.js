import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

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
    gcd (a, b) {
        return (b == 0) ? a : this.gcd (b, a%b);
    }
    updateInput ( propertyName, event ) {

      const inputs = this.state.inputs;
      inputs[propertyName] = event.target.value.replace(/\D/,'');

      if ( inputs.a && inputs.b ) {

          const gcd = this.gcd( inputs.a , inputs.b ),
            w = inputs.a / gcd,
            h = inputs.b / gcd,
            ratio = w + ":" + h;

          this.setState({ ratio: ratio });

          let targetInput = event.target.getAttribute('id');

          if ( targetInput == 'c' ) {
              let d = ( inputs.b / inputs.a ) * inputs.c;
              inputs.d = d.toFixed(1);
          }
          else if ( targetInput == 'd' )  {
              let c = ( inputs.a / inputs.b ) * inputs.d;
              inputs.c = c.toFixed(1);
          }
          else {
              inputs.c = inputs.d = '';
          }

      }

      this.setState({ inputs: inputs });
    }
    render () {
        return(
          <Grid
            container
            direction="row"
            justify="center"
            alignItems="center"
            >
              <div className="ratioCalc">
                  <h2>React ratio calculator</h2>
                  <aside><a href="https://github.com/rpmanley/ratioUtiltiy-">Github</a></aside>
                  <table>
                      <thead>
                          <tr>
                              <td><label htmlFor="a">A</label></td>
                              <td><label htmlFor="b">B</label></td>
                              <td><label htmlFor="c">C</label></td>
                              <td><label htmlFor="d">D</label></td>
                          </tr>
                      </thead>
                      <tbody>
                          <tr>
                              <td><input id="a" value={this.state.inputs.a} onChange={(e) => this.updateInput('a', e)} type="number" /></td>
                              <td><input id="b" value={this.state.inputs.b} onChange={(e) => this.updateInput('b', e)} type="number" /></td>
                              <td><input id="c" value={this.state.inputs.c} onChange={(e) => this.updateInput('c', e)} type="number" /></td>
                              <td><input id="d" value={this.state.inputs.d} onChange={(e) => this.updateInput('d', e)} type="number" /></td>
                          </tr>
                      </tbody>
                  </table>
                  <label htmlFor="ratio">Ratio</label>
                  <input readOnly={true} id="ratio" value={this.state.ratio} />
                  <Button variant="contained" color="primary">Reset</Button>
                  <p>
                      Using React, Material design - <a href="https://github.com/rpmanley/ratioUtiltiy-">Github</a>
                  </p>
              </div>
          </Grid>
        )
    }
}

export default RatioCalc;
