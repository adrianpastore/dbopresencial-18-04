const adcurso = document.querySelector('#adcurso');
const informecurso = document.querySelector('form#informecurso')
const select = document.querySelector('select#cursos');
informecurso.addEventListener('submit', function(e) {
    e.preventDefault();
        const adc = adcurso.value;
        const adcs = `<option>${adc}</option>`;
        select.innerHTML += adcs;
});

const forme = document.querySelector('form#escolher');
const selectCurso =
    document.querySelector('select#cursos');
const tbody = document.querySelector('tbody');
forme.addEventListener('submit', function(e) {
    e.preventDefault(e);
    tamanhomaxima = tbody.children.length;
    if(tamanhomaxima!==3){
        const Curso = selectCurso.value;
        const btup = `<button class="up">UP</button>`;
        const btdown = `<button class="down">Down</button>`;
        const bt = `<button class="excluir">Excluir</button>`;
        const tds = `<td>${Curso}</td> <td>${bt}</td> <td>${btup}</td> <td>${btdown}</td>`
        const row = `<tr>${tds}</tr>`;
        tbody.innerHTML += row;
    }
    console.log(tbody.children.children);
});

tbody.addEventListener('click', function(e) {
    console.log(e.target.className);
    if (e.target.className === 'excluir') {
        console.log('Excluir');
        if (confirm('Confirma?')) {
            e.target.parentElement.parentElement.remove();
        }
    }
});


