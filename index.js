import {rentify} from '../js/rentify-details.js';
import {save} from '../js/common.js';
import {view,changeviewtype} from '../js/common.js';
import {anotherTimeSave,anotherTimesaved,viewbutton,savelength} from '../js/commonfunction.js';


let loginopacity = 'no';

document.querySelector('.js-header-login').addEventListener('click',()=>{
    if(loginopacity === 'no'){
        let html = `
        <div class="login-side" style="background-color:rgba(255, 255, 255, 0.299);">
            <div class="buyer-tooltip">
                <a href="../save.html">
                        <div class="save-image">
                            <img class="header-save-image" src="../rentify-images/—Pngtree—line icon save_5784773.png">
                            <div class="save-total js-save-total">
                                <div class="save-total-number ">
                                                ${save.length}
                                </div>
                            </div>   
                        </div>
                    </a>
            </div>
            <div class="seller-tooltip">
                <div class="header-login" style="margin:0px;" >
                    <img class="header-save-image" style="width:30px; height:30px; margin:0px;" src="../rentify-images/user.png">
                     
                </div>
            </div>
        </div>  
        `;
         document.querySelector('.js-loginopacity').innerHTML=html;
         loginopacity = 'yes';
    }else{
        let html = ` `;
        document.querySelector('.js-loginopacity').innerHTML=html;
        loginopacity = 'no';
    } 
});



let html = '';

document.querySelector('.js-main-rentify-details').innerHTML = html;

rentify.forEach((rentify)=>{

    html += `<div class="flex-rentify" id="${rentify.userid}">
                <div class="rentifydetail">
                    <div class="rentify-image">
                            <img class="images" src="../rentify-images/${rentify.image}">
                    </div>
                    <div class="rentify-details">
                        <img class="location" src="../rentify-images/pngwing.com.png">
                        <div class="rentify-place">${rentify.district}, ${rentify.state}</div>
                        <div class="some-details">
                            <div class="some-detail">
                                <img style="width:12px;margin-right:8px;" src="../rentify-images/double-bed.png">
                                  Bedroom : ${rentify.bedroom}
                            </div>
                            <div class="dots">
                                .
                            </div>
                            <div class="some-detail">
                                <img style="width:12px;margin-right:8px;" src="../rentify-images/shower.png">
                                  Bath : ${rentify.bathroom}
                            </div>
                        </div>
                        <div class="design-line">

                        </div>
                        <div class="amount">
                            $ ${rentify.price}/-
                        </div>
                        <div>
                            <button class="save js-save"  data-rentify-id="${rentify.userid}">Save</button>
                            
                            <button class="view js-view-button" data-rentify-id="${rentify.userid}"  data-rentify-state="${rentify.state}" data-rentify-district="${rentify.district}">View</button>
                            
                        </div>
                    </div>
                </div>
            </div>
    `;
    document.querySelector('.js-main-rentify-details').innerHTML = html;
});


anotherTimeSave(1);


document.querySelector('.js-search').addEventListener('click',()=>{

    html='';

    let location = document.querySelector('.js-text1').value;
    let rentify_type = document.querySelector('.js-text2').value;
    let price= document.querySelector('.js-text3').value;
    
    document.querySelector('.js-main-rentify-details').innerHTML = html;

    let no_item = 'yes';

    rentify.forEach((rentify)=>{    
        if((location.toLowerCase()===rentify.district.toLowerCase()||location.toLowerCase()===rentify.state.toLocaleLowerCase()) && rentify_type.toLowerCase()===rentify.housetype.toLowerCase() && Number(price)===rentify.price){
            console.log('hlo');
                html +=`<div class="flex-rentify" id="${rentify.userid}">
                            <div class="rentifydetail">
                                <div class="rentify-image">
                                        <img class="images" src="../rentify-images/${rentify.image}">
                                </div>
                                <div class="rentify-details">
                                    <img class="location" src="../rentify-images/pngwing.com.png">
                                    <div class="rentify-place">${rentify.district}, ${rentify.state}</div>
                                    <div class="some-details">
                                        <div class="some-detail">
                                            <img style="width:12px;margin-right:8px;" src="../rentify-images/double-bed.png">
                                            Bedroom : ${rentify.bedroom}
                                        </div>
                                        <div class="dots">
                                            .
                                        </div>
                                        <div class="some-detail">
                                            <img style="width:12px;margin-right:8px;" src="../rentify-images/shower.png">
                                            Bath : ${rentify.bathroom}
                                        </div>
                                    </div>
                                    <div class="design-line">

                                    </div>
                                    <div class="amount">
                                        $ ${rentify.price}/-
                                    </div>
                                    <div>
                                        <button class="save js-save"  data-rentify-id="${rentify.userid}">Save</button>
                                         
                                        <button class="view js-view-button" data-rentify-id="${rentify.userid}" data-rentify-state="${rentify.state}" data-rentify-district="${rentify.district}">View</button>
                                       
                                    </div>
                                </div>
                            </div>
                    </div>
                `;
                no_item = 'no';
        }
        document.querySelector('.js-main-rentify-details').innerHTML = html;
    })

    if(no_item==='yes'){
        html=`No related item`;
        document.querySelector('.js-main-rentify-details').innerHTML = `
            <div>
                ${html}
            </div>
        `;
    }

    document.querySelector('.js-text1').value='';
    document.querySelector('.js-text2').value='';
    document.querySelector('.js-text3').value='';
    console.log(html);
    anotherTimeSave(1);
    anotherTimesaved();
    viewbutton(view);
});

console.log(save);



anotherTimesaved();

document.querySelector('.js-save-total').innerHTML=`${save.length}`;


viewbutton(view);

changeviewtype();