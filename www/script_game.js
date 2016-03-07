  window.onkeydown=(function(e) {
              n = 4, m = 4;  

      
 function random_number(random_i,random_j,random_b) { 
        
      var k=0;
        for (var i = 0; i < m; i++){
    for (var j = 0; j < n; j++){   
    
   if (mas[i][j]==0)
   {
      k++;
   }
    }}
       
       if(k>0)
           {
       
       
    for(var i=0; i<100; i++)   
        {  
    random_i = Math.floor(Math.random() * 4+0) ; 
    random_j = Math.floor(Math.random() * 4+0);  
    random_b = Math.floor(Math.random() * 10+0);    
       if(random_b==0){
           random_b=4
       }
       else{random_b=2}

         if(  mas[random_i][random_j] == 0)
            {
              mas[random_i][random_j]=random_b;
                 i=100;
                 }              
        }   
                    }
       else{alert('GAME OVER!');}
       
   }
        
  //start           
            if (e.keyCode == 32) {   
                
 l=0;      
mas = [];
mas_t2 = [];
 mas_t1 = [];               
   for (var i = 0; i < m; i++){
	mas[i] = [];
    mas_t1[i] = []; 
        mas_t2[i] = [];
	for (var j = 0; j < n; j++){
		mas[i][j] = 0;
         mas_t1[i][j] = 0;
        mas_t2[i][j] = 0;
}}      mas_t1=mas;  
 random_number();
 random_number();
     }     
      
            
      //     
   if (e.keyCode == 38) 
   {
     
   // прибираєм нулі  


         for (var c=0; c<m; c++){ 
          
       for (var i = 0; i < m; i++){
    for (var j = 0; j < n; j++){                
           if(mas[i][j]==0&&i!=3&&mas[i+1][j]!=0)   
        {
            mas[i][j]=mas[i+1][j]+mas[i][j];
            mas[i+1][j]=0;
          
          }	

}}}
          //  
    for (var j = 0; j < n; j++){   
        if (mas[0][j]!=0&&   mas[0][j]==mas[1][j]&&  mas[2][j]==mas[3][j])
        {
            mas[0][j]=mas[0][j]+mas[1][j]; l=l+mas[0][j];
            mas[1][j]=mas[2][j]+mas[3][j]; l=l+mas[1][j];
            mas[2][j]=0;
            mas[3][j]=0;
      
        }
        if (mas[0][j]!=0&&   mas[0][j]==mas[1][j]&&  mas[2][j]!=mas[3][j])
        {
            mas[0][j]=mas[0][j]+mas[1][j]; l=l+mas[0][j];
            mas[1][j]=mas[2][j];
            mas[2][j]=mas[3][j];
            mas[3][j]=0;
            
        }
        
       
        if (mas[0][j]!=0&&     mas[0][j]!=mas[1][j]&&  mas[1][j]==mas[2][j] )
        {
            mas[1][j]=mas[1][j]+mas[2][j];  l=l+mas[1][j];
            mas[2][j]=0;
            mas[3][j]=0;
           
        }
         if (mas[0][j]!=0&&   mas[0][j]!=mas[1][j]&&  mas[2][j]==mas[3][j])
        {
                mas[2][j]=mas[2][j]+mas[3][j];  l=l+mas[2][j];
                mas[3][j]=0;
      
        }
          
 
    } 
      
                   
   random_number();     

        }
        
            
            
            
            //стрілка вниз 
             if (e.keyCode == 40) 
   {
   
    
       for (var c=0; c<m; c++){ 
       for (var i = 0; i < m; i++){
    for (var j = 0; j < n; j++){                
              

        if(mas[i][j]==0&&i!=0)   
        {
            mas[i][j]=mas[i-1][j]+mas[i][j];
            mas[i-1][j]=0;
        }
           if(mas[i][j]!=0)   
        {
            mas[i][j]=mas[i][j];
        }
		
}}}
         
         for (var j = 0; j < n; j++){   
        if (mas[3][j]!=0&&   mas[3][j]==mas[2][j]&&  mas[1][j]==mas[0][j])
        {
            mas[3][j]=mas[3][j]+mas[2][j];       l=l+mas[3][j];       
            mas[2][j]=mas[1][j]+mas[0][j];     l=l+mas[2][j];         
            mas[1][j]=0;
            mas[0][j]=0;
     }
 
        if (mas[3][j]!=0&&   mas[3][j]==mas[2][j]&&  mas[1][j]!=mas[0][j])
        {
            mas[3][j]=mas[3][j]+mas[2][j];  l=l+mas[3][j];    
            mas[2][j]=mas[1][j];
            mas[1][j]=mas[0][j];
            mas[0][j]=0;
        }
               
        if (mas[3][j]!=0&&     mas[3][j]!=mas[2][j]&&  mas[2][j]==mas[1][j] )
        {
            mas[2][j]=mas[2][j]+mas[1][j];  l=l+mas[2][j];    
            mas[1][j]=0;
            mas[0][j]=0;
        }
         if (mas[3][j]!=0&&   mas[3][j]!=mas[2][j]&&  mas[1][j]==mas[0][j])
        {
                mas[1][j]=mas[1][j]+mas[0][j];  l=l+mas[1][j];    
                mas[0][j]=0;
        }
        
    } 
  
  
   random_number();    
       
       
       
        }
            
           // стрелка вліво
    if (e.keyCode == 37)        {
   // прибираєм нулі  
     
         for (var c=0; c<m; c++){ 
    for (var j = 0; j < n; j++){                
            for (var i = 0; i < m; i++){   

        if(mas[i][j]==0&&j!=3)   
        {
            mas[i][j]=mas[i][j+1]+mas[i][j];
            mas[i][j+1]=0;
        }
       
                
		
}}}
          //  
    for (var i = 0; i < n; i++){   
      
        if (mas[i][0]!=0&&   mas[i][0]==mas[i][1]&&  mas[i][2]==mas[i][3])
        {   mas[i][0]=mas[i][0]+mas[i][1];  l=l+mas[i][0];    
            mas[i][1]=mas[i][2]+mas[i][3];  l=l+mas[i][1];   
            mas[i][2]=0;
            mas[i][3]=0;
            
        }
        if (mas[i][0]!=0&&   mas[i][0]==mas[i][1]&&  mas[i][2]!=mas[i][3])
        {
            mas[i][0]=mas[i][0]+mas[i][1]; l=l+mas[i][0];   
            mas[i][1]=mas[i][2];
            mas[i][2]=mas[i][3];
            mas[i][3]=0;
            
        }

        if (mas[i][0]!=0&&     mas[i][0]!=mas[i][1]&&  mas[i][1]==mas[i][2] )
        {
            mas[i][1]=mas[i][1]+mas[i][2]; l=l+mas[i][1];   
            mas[i][2]=0;
            mas[i][3]=0;
            
        }
         if (mas[i][0]!=0&&   mas[i][0]!=mas[i][1]&&  mas[i][2]==mas[i][3])
        {
                mas[i][2]=mas[i][2]+mas[i][3]; l=l+mas[i][2];   
                mas[i][3]=0;
           
        }
       

        
    } 

random_number();
        }
            
            
  // стрілка вправо
     
     if (e.keyCode == 39) {   
      
       for (var c=0; c<m; c++){ 
       
    for (var j = 0; j < n; j++){                
        for (var i = 0; i < m; i++){      

        if(mas[i][j]==0&&j!=0)   
        {
            mas[i][j]=mas[i][j-1]+mas[i][j];
            mas[i][j-1]=0;
        }
		
}}}
         
         
         for (var i = 0; i < n; i++){   
        if (mas[i][3]!=0&&   mas[i][3]==mas[i][2]&&  mas[i][1]==mas[i][0])
        {
            mas[i][3]=mas[i][3]+mas[i][2];          l=l+mas[i][3];       
            mas[i][2]=mas[i][1]+mas[i][0];          l=l+mas[i][2];       
            mas[i][1]=0;
            mas[i][0]=0;
     }
 
        if (mas[i][3]!=0&&   mas[i][3]==mas[i][2]&&  mas[i][1]!=mas[i][0])
        {
            mas[i][3]=mas[i][3]+mas[i][2]; l=l+mas[i][3];   
            mas[i][2]=mas[i][1];
            mas[i][1]=mas[i][0];
            mas[i][0]=0;
        }
               
        if (mas[i][3]!=0&&     mas[i][3]!=mas[i][2]&&  mas[i][2]==mas[i][1] )
        {
            mas[i][2]=mas[i][2]+mas[i][1]; l=l+mas[i][2];   
            mas[i][1]=0;
            mas[i][0]=0;
        }
         if (mas[i][3]!=0&&   mas[i][3]!=mas[i][2]&&  mas[i][1]==mas[i][0])
        {
                mas[i][1]=mas[i][1]+mas[i][0];  l=l+mas[i][1];   
                mas[i][0]=0;
        }
            
        
         }
         
           
     random_number();
     
     }     
         
             mas_t = [];
     
           for (var i = 0; i < m; i++){
               mas_t[i] = [];
               
    for (var j = 0; j < n; j++){   
     mas_t2[i][j]=mas[i][j];   
        if(mas[i][j]==0){
            
        
        mas_t[i][j]="";
    }
        else{
            mas_t[i][j]=mas[i][j];
            }
    }}         
         
      
      
      
          
       for (var i = 0; i < m; i++){    
    for (var j = 0; j < n; j++){   
        
        if (mas[i][j]==2048)
            {alert('YOU WIN!');}
        
      var ti=i+1, tj=j+1;
         document.getElementById("block_"+ti+tj).style.display = "block";
      if (mas[i][j]==0)  
        {
          document.getElementById("block_"+ti+tj).style.display = "none"; 
          
        }
         else if(mas[i][j]==4)
  {             
      
      document.getElementById("block_"+ti+tj).style.backgroundColor = "#9ffe71";
      document.getElementById("txtHint"+i+j).innerHTML=mas_t[i][j];
    }
        
 else if(mas[i][j]==8)
  {             
      
      document.getElementById("block_"+ti+tj).style.backgroundColor = "#89bce7";
      document.getElementById("txtHint"+i+j).innerHTML=mas_t[i][j];
    }
   else if(mas[i][j]==16)
  {             
      
      document.getElementById("block_"+ti+tj).style.backgroundColor = "#3e77a7";
      document.getElementById("txtHint"+i+j).innerHTML=mas_t[i][j];
    }     
           else if(mas[i][j]==32)
  {             
      
      document.getElementById("block_"+ti+tj).style.backgroundColor = "#e2a57d";
      document.getElementById("txtHint"+i+j).innerHTML=mas_t[i][j];
    }     
        
           else if(mas[i][j]==64)
  {             
      
      document.getElementById("block_"+ti+tj).style.backgroundColor = "#c4ed83";
      document.getElementById("txtHint"+i+j).innerHTML=mas_t[i][j];
    }   
        
          else if(mas[i][j]==128)
  {             
      
      document.getElementById("block_"+ti+tj).style.backgroundColor = "#f95a5a";
      document.getElementById("txtHint"+i+j).innerHTML=mas_t[i][j];
    }  
          else if(mas[i][j]==256)
  {             
      
      document.getElementById("block_"+ti+tj).style.backgroundColor = "#8f41b3";
      document.getElementById("txtHint"+i+j).innerHTML=mas_t[i][j];
    }  
        
          else if(mas[i][j]==512)
  {             
      
      document.getElementById("block_"+ti+tj).style.backgroundColor = "#1f4cb9";
      document.getElementById("txtHint"+i+j).innerHTML=mas_t[i][j];
    }  
        
        else {
             document.getElementById("block_"+ti+tj).style.backgroundColor = "#c8c7c7";        
            document.getElementById("txtHint"+i+j).innerHTML=mas_t[i][j];   
             }
    }}
                 document.getElementById("block2").style.display = "block"; 
        
     document.getElementById("txtHint2").innerHTML=l; 
  // document.getElementById("txtHint333").innerHTML=mas_t1+"jj"+mas+"jj"+mas_t2+"jj"+l; 
    
                      
       } );    