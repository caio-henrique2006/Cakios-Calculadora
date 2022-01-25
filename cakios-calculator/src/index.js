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
			this.state = {}
		}
	// Cuida dos botões número:
	handleNumericButtons(number) {
		return(
			console.log(number)
		)
	}
	// Cuida dos botões matemáticos:
	handleMathButtons(simbol) {
		return(
			console.log(simbol)
		)
	}
	// Cuida do botão equal =:
	handleEqualButton() {

	}
	// Cuida do botão AC:
	handleACButton() {

	}
	render() {
		return(
			<div className = "allScreen">
				<div>
					<ResponseScreen content="funcionou !!!"/>
				</div>
				{/* Butões de calculo + - x / */}
				<div>
					<button onClick = {() => this.handleMathButtons("+")}>
						+
					</button>
					<button onClick = {() => this.handleMathButtons("-")}>
						-
					</button>
					<button onClick = {() => this.handleMathButtons("*")}>
						x
					</button>
					<button onClick = {() => this.handleMathButtons("/")}>
						/
					</button>
				</div>
				{/* Butões númericos de 0 a 9 */}
				<div>
					<button onClick = {() => this.handleNumericButtons(0)}>
						0
					</button>
					<button onClick = {() => this.handleNumericButtons(1)}>
						1
					</button>
					<button onClick = {() => this.handleNumericButtons(2)}>
						2
					</button>
					<button onClick = {() => this.handleNumericButtons(3)}>
						3
					</button>
					<button onClick = {() => this.handleNumericButtons(4)}>
						4
					</button>
					<button onClick = {() => this.handleNumericButtons(5)}>
						5
					</button>
					<button onClick = {() => this.handleNumericButtons(6)}>
						6
					</button>
					<button onClick = {() => this.handleNumericButtons(7)}>
						7
					</button>
					<button onClick = {() => this.handleNumericButtons(8)}>
						8
					</button>
					<button onClick = {() => this.handleNumericButtons(9)}>
						9
					</button>
				</div>
					{/* Botão de igual = */}
				<div>
					<button onClick = {() => this.handleEqualButton()}>
						=
					</button>
				</div>
					{/* Botão AC */}
				<div>
					<button onClick = {() => this.handleACButton()}>
						AC
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