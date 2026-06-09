async function prikaz(){
    try{
        const cpu = await (await fetch('https://raw.githubusercontent.com/docyx/pc-part-dataset/refs/heads/main/data/json/cpu.json')).json();
        
        while(document.getElementById('prikaz').hasChildNodes()){
            document.getElementById('prikaz').removeChild(document.getElementById('prikaz').firstChild);
        }

        cpu.forEach(el => {
            if (el.name.includes('Ryzen 9') == true){
                document.getElementById('prikaz').insertAdjacentHTML('beforeend', `<p>${el.name}</p>`);
            }
        });
    }
    catch (error){ 
        alert(error)
    }
};

async function prikazMB(){
    try{
    const mb =await (await fetch('https://raw.githubusercontent.com/docyx/pc-part-dataset/refs/heads/main/data/json/motherboard.json')).json();

    while(document.getElementById('prikaz').hasChildNodes()){
            document.getElementById('prikaz').removeChild(document.getElementById('prikaz').firstChild);
    }

    mb.forEach(el => {
        if (el.name.includes('Gigabyte') && el.name.includes('GAMING') == true){
            document.getElementById('prikaz').insertAdjacentHTML('beforeend', `<p>${el.name}</p>`);
            }
    });
    }
    catch (error){ 
        alert(error)
    }
}

async function prikazK(){
    try{
    const k =await (await fetch('https://raw.githubusercontent.com/docyx/pc-part-dataset/refs/heads/main/data/json/case.json')).json();

    while(document.getElementById('prikaz').hasChildNodes()){
            document.getElementById('prikaz').removeChild(document.getElementById('prikaz').firstChild);
    }

    k.forEach(el => {
        if (el.name.includes('quiet') == true){
            document.getElementById('prikaz').insertAdjacentHTML('beforeend', `<p>${el.name}</p>`);
            }
    });
    }
    catch (error){ 
        alert(error)
    }
}

async function prikazS(){
    try{
    const s =await (await fetch('https://raw.githubusercontent.com/docyx/pc-part-dataset/refs/heads/main/data/json/internal-hard-drive.json')).json();

    while(document.getElementById('prikaz').hasChildNodes()){
            document.getElementById('prikaz').removeChild(document.getElementById('prikaz').firstChild);
    }

    s.forEach(el => {
        if (el.name.includes('Kingston') == true){
            document.getElementById('prikaz').insertAdjacentHTML('beforeend', `<p>${el.name}, ${el.capacity}GB</p>`);
            }
    });
    }
    catch (error){ 
        alert(error)
    }
}