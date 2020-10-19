/// --------------------------------------------------- TALLER 1
import { dataCourses } from './dataCourses.js';
// Recopilar información de los cursos
var coursesTbody = document.getElementById('courses');
var btnfilterByName = document.getElementById("button-filterByName");
var inputSearchBox = document.getElementById("search-box");
var totalCreditElm = document.getElementById("total-credits");
// Ejecución de los cursos 
btnfilterByName.onclick = function () { return applyFilterByName(); };
renderCoursesInTable(dataCourses);
totalCreditElm == null ? '' : totalCreditElm.innerHTML += "" + getTotalCredits(dataCourses);
// Función para llenar los cursos
function renderCoursesInTable(courses) {
    console.log('Desplegando cursos');
    courses.forEach(function (course) {
        var trElement = document.createElement("tr");
        trElement.innerHTML = "<td>" + course.name + "</td>\n                           <td>" + course.professor + "</td>\n                           <td>" + course.credits + "</td>";
        coursesTbody.appendChild(trElement);
    });
}
// Calcular creditos totales
function getTotalCredits(courses) {
    var totalCredits = 0;
    courses.forEach(function (course) { return totalCredits = totalCredits + course.credits; });
    return totalCredits;
}
// FILTRO
function applyFilterByName() {
    var text = inputSearchBox.value;
    text = (text == null) ? '' : text;
    clearCoursesInTable();
    var coursesFiltered = searchCourseByName(text, dataCourses);
    renderCoursesInTable(coursesFiltered);
}
function searchCourseByName(nameKey, courses) {
    return nameKey === '' ? dataCourses : courses.filter(function (c) {
        return c.name.match(nameKey);
    });
}
function clearCoursesInTable() {
    while (coursesTbody.hasChildNodes()) {
        if (coursesTbody.firstChild != null) {
            coursesTbody.removeChild(coursesTbody.firstChild);
        }
    }
}
import { dataStudent } from './dataStudent.js';
// Recopilar información del estudiante
var stuName = document.getElementById('stu-name');
var stuImg = document.getElementById('stu-img');
var stuTable = document.getElementById('stu-table');
// Recopilar rango de filtro
var min = document.getElementById('min-box');
var max = document.getElementById('max-box');
var btnfilterByRange = document.getElementById("button-filterByRange");
// Ejecutar lo pedido 
renderStudentTable(dataStudent);
btnfilterByRange.onclick = function () { return applyFilterByRange(); };
// Escribir la información del estudiante
function renderStudentTable(student) {
    console.log('Desplegando estudiante');
    stuName == null ? '' : stuName.innerHTML = "" + student.nombre;
    stuImg == null ? '' : stuImg.src = "" + student.image;
    var datos = document.createElement('tbody');
    datos.innerHTML = "<tr><td>C\u00F3digo</td><td>" + student.codigo + "</td></tr>\n                     <tr><td>Cedula</td><td>" + student.cedula + "</td></tr>\n                     <tr><td>Edad</td><td>" + student.edad + " A\u00F1os</td></tr>\n                     <tr><td>Direcci\u00F3n</td><td>" + student.direccion + "</td></tr>\n                     <tr><td>Tel\u00E9fono</td><td>" + student.telefono + "</td></tr>";
    stuTable.appendChild(datos);
}
// Filtro por rango
function applyFilterByRange() {
    var minimo = parseInt(min.value);
    var maximo = parseInt(max.value);
    clearCoursesInTable();
    var coursesFiltered = searchCourseByRange(minimo, maximo, dataCourses);
    renderCoursesInTable(coursesFiltered);
}
function searchCourseByRange(minimo, maximo, courses) {
    return courses.filter(function (c) { return c.credits >= minimo && c.credits <= maximo; });
}
