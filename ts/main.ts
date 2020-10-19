
/// --------------------------------------------------- TALLER 1

// Importar materias
import { Course } from './course.js';
import { dataCourses } from './dataCourses.js';

// Recopilar información de los cursos

let coursesTbody: HTMLElement = document.getElementById('courses')!;
const btnfilterByName: HTMLElement = document.getElementById("button-filterByName")!;
const inputSearchBox: HTMLInputElement = <HTMLInputElement> document.getElementById("search-box")!;
const totalCreditElm: HTMLElement = document.getElementById("total-credits")!;

// Ejecución de los cursos 

btnfilterByName.onclick = () => applyFilterByName();
renderCoursesInTable(dataCourses);
totalCreditElm == null? '': totalCreditElm.innerHTML += `${getTotalCredits(dataCourses)}`

// Función para llenar los cursos

function renderCoursesInTable(courses: Course[]): void {
  console.log('Desplegando cursos');
  courses.forEach((course) => {
    let trElement = document.createElement("tr");
    trElement.innerHTML = `<td>${course.name}</td>
                           <td>${course.professor}</td>
                           <td>${course.credits}</td>`;
    coursesTbody.appendChild(trElement);
  });
}

// Calcular creditos totales

function getTotalCredits(courses: Course[]): number {
  let totalCredits: number = 0;
  courses.forEach((course) => totalCredits = totalCredits + course.credits);
  return totalCredits;
}

// FILTRO

function applyFilterByName() { 
  let text = inputSearchBox.value;
  text = (text == null) ? '' : text;
  clearCoursesInTable();
  let coursesFiltered: Course[] = searchCourseByName(text, dataCourses);
  renderCoursesInTable(coursesFiltered);
}

function searchCourseByName(nameKey: string, courses: Course[]) {
  return nameKey === '' ? dataCourses : courses.filter( c => 
    c.name.match(nameKey));
}

function clearCoursesInTable() {
  while (coursesTbody.hasChildNodes()) {
    if (coursesTbody.firstChild != null) {
      coursesTbody.removeChild(coursesTbody.firstChild);
     
    }
  }
}

/// --------------------------------------------------- TALLER 2

// Importar info del estudiante 
import { Student } from './student.js';
import { dataStudent } from './dataStudent.js';

// Recopilar información del estudiante

let stuName:   HTMLElement = document.getElementById('stu-name')!;
let stuImg:    HTMLImageElement = <HTMLImageElement> document.getElementById('stu-img')!;
let stuTable:  HTMLElement = document.getElementById('stu-table')!;

// Recopilar rango de filtro
const min : HTMLInputElement = <HTMLInputElement> document.getElementById('min-box');
const max : HTMLInputElement = <HTMLInputElement> document.getElementById('max-box');
const btnfilterByRange: HTMLElement = document.getElementById("button-filterByRange")!;

// Ejecutar lo pedido 

renderStudentTable(dataStudent);
btnfilterByRange.onclick = () => applyFilterByRange();


// Escribir la información del estudiante

function renderStudentTable(student:Student):void{
  
  console.log('Desplegando estudiante');

  stuName == null ? '' : stuName.innerHTML = `${student.nombre}`;
  stuImg == null ? '' : stuImg.src = `${student.image}`;

  let datos = document.createElement('tbody');

  datos.innerHTML = `<tr><td>Código</td><td>${student.codigo}</td></tr>
                     <tr><td>Cedula</td><td>${student.cedula}</td></tr>
                     <tr><td>Edad</td><td>${student.edad} Años</td></tr>
                     <tr><td>Dirección</td><td>${student.direccion}</td></tr>
                     <tr><td>Teléfono</td><td>${student.telefono}</td></tr>`;

  stuTable.appendChild(datos);
}

// Filtro por rango

function applyFilterByRange(){

  let minimo : number = parseInt(min.value);
  let maximo : number = parseInt(max.value);

  clearCoursesInTable();

  let coursesFiltered: Course[] = searchCourseByRange(minimo,maximo, dataCourses);
  renderCoursesInTable(coursesFiltered);
}

function searchCourseByRange(minimo:number, maximo:number, courses: Course[]): Course[]{
  return courses.filter(c => c.credits >= minimo && c.credits <= maximo);
}