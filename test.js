//1
function Employee(first, last, salary) {
    this.firstName = first;
    this.lastName = last;
    this.salary = salary;
}
  
var test = new Employee("Usuario", "Prueba", 100);

Employee.prototype.increaseSalary = function(value) {
    return this.salary * value;
};

Employee.prototype.showDetails = function() {
    return this.firstName + " " + this.lastName + " " + this.salary;
};

console.log(test.increaseSalary(1000));
console.log(test.showDetails());

//2
function mul(x){
	return function(y) {
		return function(z) {
			return x*y*z;
		};
	}
}

console.log(mul(2)(3)(4));
console.log(mul(4)(3)(4));

//3
var countries = ["Australia", "Germany", "United States of America"];

var longest = countries.reduce((a, b) => a.length > b.length ? a : b, '');

console.log(longest);

//4
function removeColor() {
    var colors = document.getElementById("colorSelect");

    colors.options[colors.selectedIndex].remove();
}

//5
function insert_Row() {
    var table = document.getElementById('sampleTable');

    var newRow = table.rows[0].cloneNode(true);

    new_row.cells[0].innerHTML = '';
    new_row.cells[1].innerHTML = '';

    table.appendChild(newRow);
}