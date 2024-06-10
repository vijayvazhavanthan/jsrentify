import { view } from './common.js';
import {rentify} from './rentify-details.js';


let fulldetailhtml='';

view.forEach((view)=>{
    rentify.forEach((rentify)=>{
        console.log(view.userid,rentify.userid);
        if(Number(view.userid)===Number(rentify.userid)){
            fulldetailhtml+=`
            <div>
                <img class="slideimage"src="${rentify.image}" style="width:100%">
            </div>
            `;
            
            document.querySelector('.js-myslides').innerHTML=fulldetailhtml;
        }
        
    })
})

let fulldetailhtml2='';
view.forEach((view)=>{
    rentify.forEach((rentify)=>{
        console.log(view.userid,rentify.userid);
        if(Number(view.userid)===Number(rentify.userid)){
            fulldetailhtml2+=`
              <div>      
                <table border="0">
                    <tr>
                        <td colspan="2"></td>
                        <td  class="texts" align="end">
                            <img class="logos" src="pngwing.com.png">
                        </td>
                        <td  class="texts" align="end">
                            Area :
                        </td>
                        <td colspan="7"  class="texts" style="color:rgb(12, 9, 95); padding-left:10px;">
                            ${rentify.street}, ${rentify.district},${rentify.state}.
                        </td>
                    </tr>
                    <tr>
                        <td align="end" colspan="2"  class="texts">
                            <img class="logos" src="shower.png">
                        
                        </td>
                        <td  class="texts" align="end">
                            Bath :
                        </td>
                        <td class="texts" style="color:rgb(12, 9, 95);padding-left:10px;">${rentify.bathroom}</td>
                        <td align="end" colspan="2"  class="texts">
                            <img class="logos" src="double-bed.png">
                            
                        </td>
                        <td  class="texts" align="end">
                            Bedroom :
                        </td>
                        <td class="texts" style="color:rgb(12, 9, 95); padding-left:10px;
                        ">${rentify.bedroom}</td>
                    </tr>
                    <tr>
                        <td align="end" class="texts">
                            <img class="logos" src="hospital-buildings (1).png">
                            
                        </td>
                        <td  class="texts" align="end">
                            Hospital :
                        </td>
                        <td  class="texts" style="color:rgb(12, 9, 95); padding-left:10px;">${rentify.hospital}</td>
                        <td align="end" class="texts">
                            <img class="logos" src="school.png">
                        
                        </td>
                        <td  class="texts" align="end">
                            School :
                        </td>
                        <td  class="texts" style="color:rgb(12, 9, 95); padding-left:10px;">${rentify.school}</td>
                        <td align="end" class="texts">
                            <img class="logos" src="college.png">
                            
                        </td>
                        <td  class="texts" align="end">
                            College :
                        </td>
                        <td  class="texts" style="color:rgb(12, 9, 95);padding-left:10px;">${rentify.college}</td>
                    </tr>
                    <tr>
                        <td align="end" colspan="3"  class="texts">
                            <img class="logos" src="email.png">
                        
                        </td>
                        <td  class="texts" align="end">
                            Email :
                        </td>
                        <td colspan="5"  class="texts" style="color:rgb(12, 9, 95);padding-left:10px;">
                            vijayvazhavantha@gmail.com
                        </td>
                        
                    </tr>
                    <tr>
                        <td align="end" colspan="3"  class="texts">
                            <img class="logos" src="phone-call.png">
                        
                        </td>
                        <td  class="texts" align="end">
                            call :
                        </td>
                        <td  class="texts" style="color:rgb(12, 9, 95); padding-left:10px;">
                            9943358011
                        </td>
                    </tr>
                </table>
            </div>
            `;
            
            document.querySelector('.js-full-details-more').innerHTML=fulldetailhtml2;
        }
        
    })
})

let fulldetailhtml3='';
view.forEach((view)=>{
    rentify.forEach((rentify)=>{
        console.log(view.userid,rentify.userid);
        if(Number(view.userid)===Number(rentify.userid)){
            fulldetailhtml3+=`
              <div>
                <table>
                        <tr>
                                    <td class="texts">
                                        <img class="logos" src="account.png">
                                        Name :
                                    </td>
                                    <td class="texts" style="color:black; padding-left:10px;">${rentify.name}</td>
                         </tr>
                </table>
              </div>
            `;
            
            document.querySelector('.js-owner-details').innerHTML=fulldetailhtml3;
        }
        
    })
})
