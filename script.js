
var spinner = document.getElementById("spinner");
spinner.style.display = 'none'


function dohvatiPodatke(unos){
    spinner.style.display = 'none'
    fetch(`http://universities.hipolabs.com/search?country=${unos}`).then((rez) =>{
        return rez.json()
        
    }).then((data) =>{
        if(data.length == 0){
            spinner.style.display = 'block'
        }else{
            data = data.slice(0,10)
            let rezultat = data.map(elem => `<li><a href='${elem.web_pages[0]}'>${elem.name}</a></li>`).join('')
            document.querySelector('#rezultati').innerHTML = rezultat;
            spinner.style.display = 'none'
        }
        
    }).catch((er) =>{
        document.querySelector('#rezultati').innerHTML = `Nešto nije u redu! (${er})`

    })
}



let s = document.querySelector('#search');
s.addEventListener('keyup',() =>{
    dohvatiPodatke(s.value)
})

