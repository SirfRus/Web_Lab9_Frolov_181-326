//Main function
window.onload = function() {
	
	let but1 = document.getElementById('1');
	let but2 = document.getElementById('2');
	let but3 = document.getElementById('3');
	let div1 = document.getElementById('div1');
	let div2 = document.getElementById('div2');
	let div3 = document.getElementById('div3');
	let output1 = document.getElementById('output1');
	let output2 = document.getElementById('output2');
	let output3 = document.getElementById('output3');
	
	//Buttons events
	but1.onclick = () => {
		(async () => {
			output1.innerHTML = '';
			output2.innerHTML = '';
			output3.innerHTML = '';
			let res = await ticket();			
			output1.innerHTML += 'Данные по билету: <br><br>';					
			for(var prop in res) {
				output1.innerHTML += prop + ': ' + res[prop] + '; <br>';
			}
			output1.innerHTML += '<br>';
			div1.setAttribute('style', 'pointer-events: none; opacity: 0.4;');
			div2.setAttribute('style', 'pointer-events: auto; opacity: 1;');
			div3.setAttribute('style', 'pointer-events: none; opacity: 0.4;');
		})();		
	}
	but2.onclick = () => {
		(async () => {
			let res = await hotel();
			output2.innerHTML += 'Данные по гостинице: <br><br>';	
			for(var prop in res) {
				output2.innerHTML += prop + ': ' + res[prop] + '; </br>';
			}
			output2.innerHTML += '<br>';	
			div1.setAttribute('style', 'pointer-events: none; opacity: 0.4;');
			div2.setAttribute('style', 'pointer-events: none; opacity: 0.4;');
			div3.setAttribute('style', 'pointer-events: auto; opacity: 1;');
		})();
	}
	but3.onclick = () => {
		(async () => {
			let res = await visa();
			output3.innerHTML += 'Данные по визе: <br><br>';
			for(var prop in res) {
				output3.innerHTML += prop + ': ' + res[prop] + '; <br>';
			}
			output3.innerHTML += '<br>';
			div1.setAttribute('style', 'pointer-events: auto; opacity: 1;');
			div2.setAttribute('style', 'pointer-events: none; opacity: 0.4;');
			div3.setAttribute('style', 'pointer-events: none; opacity: 0.4;');
		})();
	}
}
//Ticker order
async function ticket() {  
	
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			let sel1 = document.getElementById('sel1');
			let sel2 = document.getElementById('sel2');
			let sel22 = document.getElementById('sel22');
			let city = sel1.options[sel1.selectedIndex].text;
			let date = sel2.options[sel2.selectedIndex].text;
			let qual = sel22.options[sel22.selectedIndex].text;
			resolve(
			{ 'Город': city, 'Дата': date, 'Класс': qual, 'Цена': 'куча диняк',}
			);
		}, 2000);
	});					
}
//Hoter room order
async function hotel() {  
	
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			let sel3 = document.getElementById('sel3');
			let sel33 = document.getElementById('sel33');
			let hotel = sel3.options[sel3.selectedIndex].text;
			let room = sel33.options[sel33.selectedIndex].text;
			resolve(
				{ 'Отель': hotel, 'Номер': room,}
				);
		}, 2000);
	});
}
//Visa registration
async function visa() {  
	
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			let random = Math.floor(Math.random()) + 1;
			resolve(
				{ 'Вероятность получения': random,}
				);
		}, 2000);
	});
}
//random = Math.floor(Math.random() * (50 - 1 + 1)) + 1;