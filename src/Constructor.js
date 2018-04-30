import React, {Component} from 'react'
import styled from 'styled-components'

class Constructor extends Component {

    render() {
        return (
            <DivFlex id="input-container">
                <FormStyled>
                    <p>Height (up to 10)</p>
                    <DivFlexSpaceBetween>
                        <button onClick={this.props.incrementY}>+</button>
                        <h2>{this.props.valueY}</h2>
                        <button onClick={this.props.decrementY}>-</button>
                    </DivFlexSpaceBetween>
                    <p>Width (up to 10)</p>
                    <DivFlexSpaceBetween>
                        <button onClick={this.props.incrementX}>+</button>
                        <h2>{this.props.valueX}</h2>
                        <button onClick={this.props.decrementX}>-</button>
                    </DivFlexSpaceBetween>
                </FormStyled>
            </DivFlex>
        );
    }
}


const DivFlex = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: center;
`;

const DivFlexSpaceBetween = DivFlex.extend`
  justify-content: space-between;
`;

const FormStyled = styled.form`
  padding: 15px;
  background-color: rgb(83, 175, 19);
  border-radius: 25px;
  width: 17rem;
`;


export default styled(Constructor)`
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: center;
`
