import React from 'react';
import {useState,useEffect} from 'react';


function Retrive(){
  const[product,setProduct]=useState([{
      id:'',
      email:'',
      rate:''
  }])
    useEffect(()=>{
        fetch('/').then(res=>{
            if(res.ok){
                return res.json()
            }
        }).then(jsonRes=>setProduct(jsonRes));

    })

    return(
        <div>
            <table border="2px">
                <th >
                    <td>id</td>
                    <td>email</td>
                    <td>rate</td>
                </th>
                <tr>
                    {product.map(product=>{
                        return(
                            <div>{product.rate}</div>
                             
                            
                        )
                    })}
                    <td></td>
                    <td></td>
                </tr>
            </table>
        </div>
    );




}





export default Retrive;