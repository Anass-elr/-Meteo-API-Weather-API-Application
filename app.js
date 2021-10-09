    
   const weth = new Weather()
        ui = new UI();     
   
        let city = localStorage.getItem('city');
        
   
    weth.get(city)
    .then( data =>{

        if(data.cod == 200){
         ui.addData(data);
        }
        else {console.log(data.cod);}
    
      }); 
     
      


    document.getElementById('w-change-btn').addEventListener('click', () => {
      
            if( document.getElementById('city').value === ''){
                console.log('entrez une ville');
            }

            else{
                localStorage.setItem('city',document.getElementById('city').value);
                console.log(city);
                city = localStorage.getItem('city');
                weth.get(city)
                  .then( data =>{
            
                      if(data.cod == 200){
                       ui.addData(data);
                      }
                      else {console.log(data.cod);}
                  
                    }); 

           }
        })