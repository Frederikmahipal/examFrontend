import {URL} from "../settings.js"
import {handleHttpErrors} from "../fetchUtils.js"
import { deleteById} from "../fetchUtils.js"
const cyclistURL = URL+ "/cyclists"

export function CyclistHandler(){
    document.getElementById("team-btn-sort").onclick = getCyclists
}

export async function getCyclists(){

    let URL = cyclistURL

    if (document.getElementById("teamName-input-sort").value !== "") {
        URL = URL + "?team="+document.getElementById("teamName-input-sort").value
    }

    try{
     const cyclists = await fetch(URL).then(res=>handleHttpErrors(res))
     console.log(cyclists)
     const rows = cyclists.map(c=>`
        <tr id= ${c.id}> 
          <td>${c.id}</td>
          <td>${c.name}</td>
          <td>${c.timeTotal}</td>
          <td>${c.mountainPoints}</td>
          <td>${c.sprintPoints}</td>
          <td>${c.team}</td>
          <th><button id="btn-delete" onclick="" delete>Slet</button></th>
        </tr>
     `).join("")
     document.getElementById("tbl-body").innerHTML = rows

    } catch(error){
        
        console.log(error.message)
    }
}



export  function deleteCyclist(id){
    let rowToDelete = document.getElementById(id)
    console.log(rowToDelete)  
    fetch(URL + "/" + id,
    {
        method: "DELETE",
        
    }
    ) .then(res => {
        if (res.status === 200) {
            rowToDelete.remove()
        }
    }
        )
} 

