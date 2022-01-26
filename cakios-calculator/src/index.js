import React from 'react';
import ReactDOM from 'react-dom';

class Calculator extends React.Component {
	constructor(props) {
		super(props);
			// Bindando this:
			this.handleNumericButtons = this.handleNumericButtons.bind(this);
			this.handleMathButtons = this.handleMathButtons.bind(this);
			this.handleEqualButton = this.handleEqualButton.bind(this);
			this.handleACButton = this.handleACButton.bind(this);
			// States:
			this.state = {
				showingInScreen: " ",
				outOfScreen: 0,
			}
		}
	// Cuida dos botões número:
	handleNumericButtons(number) {
		const newResponse = this.state.showingInScreen + number;
		this.setState({showingInScreen: newResponse})
	}
	// Cuida dos botões matemáticos:
	handleMathButtons(simbol) {
		const convertToInt = parseInt(this.state.showingInScreen);
		const outOfScreen = this.state.outOfScreen;
		switch (simbol) {
			case "+":
			console.log(convertToInt + outOfScreen);
				this.setState({outOfScreen: convertToInt + outOfScreen});
			break;
			case "-":
				console.log(convertToInt - outOfScreen);
				this.setState({outOfScreen: outOfScreen - convertToInt});
			break;
			case "*":
				if(outOfScreen === 0) {
					// Caso a multiplicação seja 0 * convertToInt:
					console.log(convertToInt * 1);
					this.setState({outOfScreen: convertToInt * 1});
				}else {
					console.log(convertToInt * outOfScreen);
					this.setState({outOfScreen: convertToInt * outOfScreen});
				}
			break;
			case "/":
				console.log(convertToInt / outOfScreen);
				this.setState({outOfScreen: outOfScreen / convertToInt});
			break;

		}
		this.setState({showingInScreen: " "})
	}
	// Cuida do botão equal =:
	handleEqualButton() {
		this.setState({showingInScreen: this.state.outOfScreen});
	}
	// Cuida do botão AC:
	handleACButton() {
		this.setState({showingInScreen: " "});
		this.setState({outOfScreen: 0});
	}
	render() {
		return(
			<div className = "allScreen">
				{/* Bordas */}
				<div className = "screenBorder">
				</div>
				<div className = "calculatorBorder">
				</div>
					{/* Tela de resposta */}
					<div className = "responseScreen">
						<ResponseScreen content={this.state.showingInScreen}/>
					</div>
					{/* Botão AC */}
					<div className = "allACButton">
						<button className = "ACButton" onClick = {() => this.handleACButton()}>
							AC
						</button>
					</div>
					{/* Butões de calculo + - x / */}
					<div className = "allMathButtons">
						<button className = "mathButtons" onClick = {() => this.handleMathButtons("+")}>
							+
						</button><br/>
						<button className = "mathButtons" onClick = {() => this.handleMathButtons("-")}>
							-
						</button><br/>
						<button className = "mathButtons" onClick = {() => this.handleMathButtons("*")}>
							x
						</button><br/>
						<button className = "mathButtons" onClick = {() => this.handleMathButtons("/")}>
							/
						</button>
					</div>
					<div className = "allNumericButtons">
						{/* Butões númericos de 0 a 9 */}
						<button className = "numericButtons" onClick = {() => this.handleNumericButtons("9")}>
							9
						</button>
						<button className = "numericButtons" onClick = {() => this.handleNumericButtons("8")}>
							8
						</button>
						<button className = "numericButtons" onClick = {() => this.handleNumericButtons("7")}>
							7
						</button><br/>
						<button className = "numericButtons" onClick = {() => this.handleNumericButtons("6")}>
							6
						</button>
						<button className = "numericButtons" onClick = {() => this.handleNumericButtons("5")}>
							5
						</button>
						<button className = "numericButtons" onClick = {() => this.handleNumericButtons("4")}>
							4
						</button><br/>
						<button className = "numericButtons" onClick = {() => this.handleNumericButtons("3")}>
							3
						</button>
						<button className = "numericButtons" onClick = {() => this.handleNumericButtons("2")}>
							2
						</button>
						<button className = "numericButtons" onClick = {() => this.handleNumericButtons("1")}>
							1
						</button><br/>
						<button className = "numericButtons" onClick = {() => this.handleNumericButtons("0")}>
							0
						</button>
						{/* Botão de igual = */}
						<button className = "numericButtons" onClick = {() => this.handleEqualButton()}>
							=
						</button>
					</div>
			</div>
		)
	}
}
// Tela resposta:
class ResponseScreen extends React.Component {
	render() {
		const screenContent = this.props.content
		return(
			<h1>{screenContent}</h1>
		)
	}
}

ReactDOM.render(
	<Calculator/>,
	document.getElementById("root")
);

/*
	   <><><>        <>        <>    <>    <>     <><><>
	 <>            <>  <>      <>  <>           <>      <>     <><><>
	<>            <>    <>     <><>        <>  <>        <>   <>
	<>           <><><><><>    <>  <>      <>  <>        <>    <><>
	 <>         <>        <>   <>    <>    <>   <>      <>	 	  <>				
	   <><><>  <>          <>  <>      <>  <>     <><><>     <><><>
*/