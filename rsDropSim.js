//runescape drop simulator... just a quick fun project mostly for solidifying concepts.

const dropVal = Math.trunc(Math.random() * 128);

class DropCounter {
	constructor() {
		this.dropped = 0;
	}

	getDropped() {
		return this.dropped;
	}

	incrementDropped() {
		this.dropped += 1;
	}
}

class Armadyl {
	static dropCount = new DropCounter();
	constructor(yourVal, dropVal) {
		this.yourVal = yourVal;
		this.dropVal = dropVal;
		this.drop = false;
		this.checkDrop();
	}

	checkDrop() {
		if (this.yourVal === this.dropVal) this.logDrop();
	}

	getDrop() {
		return this.drop;
	}
	setDrop(val) {
		this.drop = val;
	}
}

class LogArmadylChest extends Armadyl {
	static dropCount = new DropCounter();
	constructor(yourVal) {
		super(yourVal, Math.trunc(Math.random() * 128));
	}

	logDrop() {
		this.setDrop(true);
		LogArmadylChest.dropCount.incrementDropped();
	}

	static getTotalDropped() {
		return LogArmadylChest.dropCount.getDropped();
	}
}

class LogArmadylLegs extends Armadyl {
	static dropCount = new DropCounter();
	constructor(yourVal) {
		super(yourVal, Math.trunc(Math.random() * 128));
	}

	logDrop() {
		this.setDrop(true);
		LogArmadylLegs.dropCount.incrementDropped();
	}

	static getTotalDropped() {
		return LogArmadylLegs.dropCount.getDropped();
	}
}

class LogArmadylCrossbow extends Armadyl {
	static dropCount = new DropCounter();
	constructor(yourVal) {
		super(yourVal, Math.trunc(Math.random() * 128));
	}

	logDrop() {
		this.setDrop(true);
		LogArmadylCrossbow.dropCount.incrementDropped();
	}

	static getTotalDropped() {
		return LogArmadylCrossbow.dropCount.getDropped();
	}
}

let timeThen;
let timeNow;
let duration;

// const runDropSimUnop = (runTime) => {
// 	console.log(`\nExecuting ${runTime} iterations...\n`);
// 	let i = 0;
// 	const percentArr = [];
// 	timeThen = Math.floor(Date.now() / 1000);
// 	while (i < runTime) {
// 		const myVal = Math.trunc(Math.random() * 128);
// 		const armadylLegs = new LogArmadylLegs(myVal);
// 		const armadylCrossbow = new LogArmadylCrossbow(myVal);
// 		const armadylChest = new LogArmadylChest(myVal);
// 		if (armadylLegs.getDrop()) i += 1;
// 		if (armadylCrossbow.getDrop()) i += 1;
// 		if (armadylChest.getDrop) i += 1;
// 		//highly unoptimized
// 		const percentDone = Math.trunc((i / runTime) * 100);
// 		console.log(`${percentDone}%`);
// 	}
// 	timeNow = Math.floor(Date.now() / 1000);
// 	duration = timeNow - timeThen;
// 	console.log(`Took ${duration} seconds`);

// 	const legs = `Legs: ${LogArmadylLegs.getTotalDropped()}`;
// 	const crossbow = `Crossbow: ${LogArmadylChest.getTotalDropped()}`;
// 	const chest = `Chest: ${LogArmadylCrossbow.getTotalDropped()}`;

// 	console.log(`${legs}\n${crossbow}\n${chest}`);
// };

const runDropSimOp = (runTime) => {
	console.log(`\nExecuting ${runTime} iterations...\n`);
	let i = 0;
	const percentArr = [];
	const percentTensArr = [
		10, 20, 30, 40, 50, 60, 70, 80, 90, 100,
	];
	//do recursive loader
	let loader = "[          ]";
	timeThen = Math.floor(Date.now() / 1000);
	while (i < runTime) {
		let prevPercent = 0;
		const myVal = Math.trunc(Math.random() * 128);
		const armadylLegs = new LogArmadylLegs(myVal);
		const armadylCrossbow = new LogArmadylCrossbow(myVal);
		const armadylChest = new LogArmadylChest(myVal);
		if (armadylLegs.getDrop()) i += 1;
		if (armadylCrossbow.getDrop()) i += 1;
		if (armadylChest.getDrop) i += 1;

		const percentDone = Math.trunc((i / runTime) * 100);
		//only print percent output once
		if (!percentArr.includes(percentDone)) {
			percentArr.push(percentDone);
			if (percentTensArr.includes(percentDone)) {
				if (percentDone === 10) {
					loader = "[=          ]";
				}
			}
			console.log(`${loader} ${percentDone}%`);
		}
		// //previous is good but could be better. Instead of adding values to arrray, why not check and see
		// //if current percent = previous percent + 1?
		// if (prevPercent === 0) {
		// 	console.log(`${percentDone}`);
		// }
		// if (prevPercent !== 0) {
		// 	if (percentDone === prevPercent + 1) {
		// 		prevPercent = percentDone;
		// 		console.log(`${percentDone}`);
		// 	}
		// }
		// -----------------------------------------------------------
		//previous is good as well, but how about checking the end of the array since the array will be in
		//order? faster than .includes() but not by much.
		// if (percentArr[percentDone] !== percentDone) {
		// 	percentArr.push(percentDone);
		// 	console.log(`${percentDone}%`);
		// }
	}
	timeNow = Math.floor(Date.now() / 1000);
	duration = timeNow - timeThen;
	console.log(`Took ${duration} seconds`);

	const legs = `Legs: ${LogArmadylLegs.getTotalDropped()}`;
	const crossbow = `Crossbow: ${LogArmadylChest.getTotalDropped()}`;
	const chest = `Chest: ${LogArmadylCrossbow.getTotalDropped()}`;

	console.log(`${legs}\n${crossbow}\n${chest}`);
};

const iter = 1000000;

//runDropSimUnop(iter);

runDropSimOp(iter);
