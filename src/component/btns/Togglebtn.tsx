import * as React from 'react';


interface IToggleBtnState{
    toggle: boolean;
}

interface IToggleBtnProps{
    onToggle?( isOn: boolean ): void;
    textOn: string;
    textOff: string;
    idName: string;
}

class Togglebtn extends React.Component<IToggleBtnProps, IToggleBtnState> {

    state = {
        toggle: false
    };
    constructor(props: IToggleBtnProps) {
        super(props);
    }

    setToggle = (isOn: boolean): void => {
        this.setState({
            ...this.state,
            toggle : isOn
        });
        if(this.state.toggle){
            this.props.onToggle!(isOn);
        }
    };

    public render() {
        return(
            <button
                onClick={(e: React.MouseEvent) => this.setToggle(!this.state.toggle)}
                className="toggle-btn btn" id={this.props.idName}
            >
                {this.state.toggle ? this.props.textOn : this.props.textOff}
            </button>
        )
    }
}


export default Togglebtn;