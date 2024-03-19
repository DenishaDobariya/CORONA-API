const print = document.getElementById('print');

const display=()=>{
    fetch('https://data.covid19india.org/data.json')
    .then(res=>{
        return res.json();
    })
    .then((data)=>{

        const state = data.statewise;
        console.log("state",state);
    
        state.forEach(st => {
            // console.log("st",st);
            state.sort((a, b) => a.active - b.active);
                print.innerHTML += `<tr>
                <td>${st.state}</td>
                <td>${st.active}</td>
                <td>${st.lastupdatedtime}</td>
                <td>${st.confirmed}</td>
                <td>${st.deaths}</td>
            </tr>`;
           
            
        }); 

        // console.log("data",data);
    })
    .catch((err)=>{
        console.log("Error",err);
    })
}


display();