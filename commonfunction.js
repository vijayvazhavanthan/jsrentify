import { save } from './common.js';

export function anotherTimeSave(a=0){
    document.querySelectorAll('.js-save').forEach((button)=>{
        button.addEventListener('click',()=>{
            console.log('saved');
            let id=button.dataset.rentifyId;
            let save_element=[];
            let already_given='no';
    
            if(save.length === 0){
                save.push({userid:`${id}`});
                already_given='yes';
            }else{
                save.forEach((user)=>{
                    if(user.userid===id){
                        save_element.push(id);
    
                    }
                })
            }
    
            if(save_element.length===0 && already_given==='no'){
                save.push({userid:`${id}`});
            }
            if(a===1){
                savelength();
            }
            saved(button);
            localStorage.setItem('save',JSON.stringify(save));
            console.log(save);
        });
    });
    
}


export function anotherTimesaved(){
    if(save.length>0){
        document.querySelectorAll('.js-save').forEach((button)=>{
            console.log(save)
                let id=button.dataset.rentifyId;  
                save.forEach((saveid)=>{
                    if(saveid.userid===id){
                        saved(button);
                    }
                })
        })
    }
}

export function viewbutton(view){
    document.querySelectorAll('.js-view-button').forEach((button)=>{
            button.addEventListener('click',()=>{
                console.log(view);
            view = [];
            let id = button.dataset.rentifyId;
            let district = button.dataset.rentifyDistrict;
            let state = button.dataset.rentifyState;
            view.push({userid:`${id}`,district: `${district}`,
                state: `${state}`});
            localStorage.setItem('view',JSON.stringify(view));
            window.location.href=`view.html`;
        })
    })
}

export function savelength(){
    console.log('hi',save.length)
    document.querySelector('.js-save-total').innerHTML=`${save.length}`;
}

export function saved(button){
    button.innerHTML='Saved';
    button.classList.add('saved');   
}
