import React from 'react';
import ReactDOM from 'react-dom';

class Calculator extends React.Component {
	constructor(props) {
		super(props);
			// Bindando this:
			this.handleNumericButtons = this.handleNumericButtons.bind(this);
			this.handlePlusButton = this.handlePlusButton.bind(this);
			this.handleMinusButton = this.handleMinusButton.bind(this);
			this.handleTimesButton = this.handleTimesButton.bind(this);
			this.handleDividedButton = this.handleDividedButton.bind(this);
			this.handleEqualButton = this.handleEqualButton.bind(this);
			this.handleACButton = this.handleACButton.bind(this);
			// States:
			this.state = {
				showingInScreen: " ",
				offScreen: "0",
				rememberLastOperation: " ",
			}
		}
	// Cuida dos botões número:
	handleNumericButtons(number) {
		const newResponse = this.state.showingInScreen + number;
		this.setState({showingInScreen: newResponse})
	}
	// Executa a soma:
	handlePlusButton() {
		this.setState({rememberLastOperation: "+"});
		this.setState({offScreen: parseInt(this.state.showingInScreen) + parseInt(this.state.offScreen)});
		this.setState({showingInScreen: " "});
	}
	// Executa a subtração:
	handleMinusButton() {
		this.setState({rememberLastOperation: "-"});
		if(this.state.offScreen === "0") {
			this.setState({offScreen: parseInt(this.state.showingInScreen)});
		}else {
			this.setState({offScreen: parseInt(this.state.offScreen) - parseInt(this.state.showingInScreen)});
		}
		this.setState({showingInScreen: " "});
	}
	// Executa a multiplicação:
	handleTimesButton() {
		this.setState({rememberLastOperation: "*"});
		// Caso haja multiplicação por 0:
		if(this.state.offScreen === "0") {
			this.setState({offScreen: parseInt(this.state.showingInScreen)});
		}else {
			this.setState({offScreen: parseInt(this.state.showingInScreen) * parseInt(this.state.offScreen)});
		}
		this.setState({showingInScreen: " "});
	}
	// Executa a divisão:
	handleDividedButton() {
		this.setState({rememberLastOperation: "/"});
		// Caso haja multiplicação por 0:
		if(this.state.offScreen === "0") {
			this.setState({offScreen: parseInt(this.state.showingInScreen)});
		}else {
			this.setState({offScreen: parseInt(this.state.offScreen) / parseInt(this.state.showingInScreen)});
		}
		this.setState({showingInScreen: " "});
	}
	// Cuida do botão equal =:
	handleEqualButton() {
		console.log(this.state.rememberLastOperation);
		console.log(this.state.showingInScreen);
		console.log(this.state.offScreen);
		const showingInScreenInt = parseInt(this.state.showingInScreen);
		// Caso showingInScreen não tenha sido definido
		if(this.state.showingInScreen === " ") {
			this.setState({showingInScreen: this.state.offScreen});
		}else {
			switch (this.state.rememberLastOperation) {
				case "+":
					this.setState({showingInScreen: this.state.offScreen + showingInScreenInt});
					this.setState({offScreen: 0});
					break;
				case "-":
					this.setState({showingInScreen: this.state.offScreen - showingInScreenInt});
					this.setState({offScreen: 0});
					break;
				case "*":
					this.setState({showingInScreen: this.state.offScreen * showingInScreenInt});
					this.setState({offScreen: 0});
					break;
				case "/":
					this.setState({showingInScreen: this.state.offScreen / showingInScreenInt});
					this.setState({offScreen: 0});
					break;
				default:
					console.log("sorry something goes wrong !!!");
			}
		}		
	}
	// Cuida do botão AC:
	handleACButton() {
		this.setState({showingInScreen: " "});
		this.setState({offScreen: "0"});
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
					<MathButtons
					handlePlus = {this.handlePlusButton}
					handleMinus = {this.handleMinusButton}
					handleTimes = {this.handleTimesButton}
					handleDivided = {this.handleDividedButton}
					/>
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
						<button className = "numericButtons" onClick = {this.handleEqualButton}>
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

class MathButtons extends React.Component {
	render() {
		return(
			<div className = "allMathButtons">
				<button className = "mathButtons" onClick = {this.props.handlePlus}>
					+
				</button><br/>
				<button className = "mathButtons" onClick = {this.props.handleMinus}>
					-
				</button><br/>
				<button className = "mathButtons" onClick = {this.props.handleTimes}>
					x
				</button><br/>
				<button className = "mathButtons" onClick = {this.props.handleDivided}>
					/
				</button>
			</div>
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