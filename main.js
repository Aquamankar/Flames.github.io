
const btn =document.getElementById("submit");
var f_name=document.getElementById("finput");
var s_name=document.getElementById("sinput");
var res =document.getElementById("res");
var reset =document.getElementById("reset");
reset.addEventListener("click",refresh())



function refresh(){
  document.getElementById("form").reset;  
}
  
var r=/\s/g;
// make sure you use an id not a class name to get input
function flames(){
   var a=f_name.value.toLowerCase();
   var b=s_name.value.toLowerCase();
   a=a.replace(r,"");
   b=b.replace(r,"");

   if(a!=""&&b!=""){
    for (i=0;i<a.length;i++){
        for(j=0;j<b.length;j++){
          if(a[i]==b[j]){
            a=a.replace(a[i],"*",1);
            b=b.replace(b[j],"*",1);
            // console.log(a,b)
            break;

          }
        }
      }

   }
   var countLetters=0;
   for (i=0;i<a.length;i++){
     if(a[i]!='*'){
       countLetters++;
     }
   }
   for (i=0;i<b.length;i++){
    if(b[i]!='*'){
      countLetters++;
    }
  }
  if(countLetters>1){
    // const FLAMES = {
    //     0: ["F","Friends"],
    //     1: ["L","Lovers"],
    //     2: ["A","Admirers"],
    //     3: ["M","Marriage"],
    //     4: ["E","Enemies"],
    //     5: ["S","Secret Lovers"]
    // };
    // while(FLAMES.length>1){
       
    // }
    var flames="FLAMES";
    c=0;
    s_index=1;
    for(i=0;flames.length!=1;i++){
      if( s_index==countLetters)
      {
        if(c>=flames.length)
        {
          c=0;
        }
        flames=flames.replace(flames[c],"");
        s_index=1;
      }  
      if(c>=flames.length)
      {
        c=0;
      }        
      s_index++;
      c++;
    }
    var color="#ff2b2b";
    switch(flames){
        case 'F':
          flames="Friend";
          color="#d9f814c";
          break;
        case 'L':
          flames="Love";
          color="#bf2e77";
          break;
        case 'A':
          flames="Affectionate";
          color="#2f662f";
          break;
        case 'M':
          flames="Marriage";
          color="#fff";
          break;
        case 'E':
          flames="Enemies";
           color="#ff2b2b";
          break;
        case 'S':
          flames="Sibling";
          color="#2af273";
          break;
      }
      if(countLetters==1){
        flames="Sibling";
      }
      if(countLetters==0){
        flames="Its Same Name";
      }
      // console.log(flames)

      res.innerHTML="<b style='color:#ff2b2b;'>"+s_name.value+"</b> and you are <b style='color:"+color+";'>"+flames+"</b>";
          
  }
  else{
    res.innerHTML="Please Enter Name";

  }


    
}
