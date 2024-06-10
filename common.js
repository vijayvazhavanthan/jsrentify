export let save=JSON.parse(localStorage.getItem('save'))||[];

export function changes(emp){
    save =emp;
    localStorage.setItem('save',JSON.stringify(save));
}

export let view =JSON.parse(localStorage.getItem('view'))||[];

export function changeviewtype(){
    view = [];
}