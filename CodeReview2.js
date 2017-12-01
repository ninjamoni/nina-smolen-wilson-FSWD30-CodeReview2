function Diff () {

Amsterdam = [1500, 500, 1800, 700];

London = [2500, 1500, 1000, 900];

Sum1 = Amsterdam [0] + Amsterdam [1] + Amsterdam [2] + Amsterdam [3];
Sum2 = London [0] + London [1] + London [2] + London [3];

Average1 = Sum1 / 4;
Average2 = Sum2 / 4;

Difference = Average2 - Average1;

	document.getElementById("diff").innerHTML = Difference + "€";
	document.getElementById("priceamst").innerHTML = Average1 + "€";
	document.getElementById("pricelon").innerHTML = Average2 + "€";
}
Diff();