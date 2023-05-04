var b1=document.getElementById("b1");
var ov=document.querySelector(".ov");
var cl1=document.querySelector(".cl1");
var cal1=document.querySelector(".cal1");



b1.addEventListener('click',()=>{
ov.style.display="block";
document.getElementById('pup1').play();
});

cl1.addEventListener("click",()=>{
    ov.style.display="none";
    document.getElementById('pup1').play();
});

var inhe=document.querySelector(".inhe");
var inwe=document.querySelector(".inwe");
var result=document.querySelector(".result");
var resultsta=document.querySelector(".resultsta");

var BMI,HEIGHT,WEIGHT;
cal1.addEventListener('click',()=>{
    HEIGHT=inhe.value;
    WEIGHT=inwe.value;
    //BMI= WEIGHT/(HEIGHT*HEIGHT); 
    document.getElementById('pup1').play();
 BMI=(WEIGHT / Math.pow( (HEIGHT/100), 2 )).toFixed(1);
    result.innerHTML=BMI;

    if(BMI < 18.5){
        resultsta.innerText = "Underweight 😒 our BMI falls within the underweight range";    
    }else if((BMI > 18.5) && (BMI <= 24.9)){
        resultsta.innerText = "Normal Weight 😍 Your BMI falls within the normal or healthy weight range";
    }else if((BMI >= 25) && (BMI <= 29.9 )){
        resultsta.innerText = " Overweight 😮 Your BMI falls within the overweight range";
    }else{
        resultsta.innerText = " Obese 😱 Your BMI falls within the obese range";
    }

});


//////mghz to hz
var ov1=document.querySelector(".ov1");
var cl2=document.getElementById("cl2");
var cal2=document.getElementById("cal2");
var b2=document.getElementById("b2");
var HZ,MGHZ;
var mgh=document.getElementById("mgh");
var hz=document.getElementById("hz");
var result1=document.getElementById("result1");

b2.addEventListener('click',()=>{
ov1.style.display="block";
document.getElementById('pup1').play();
});


cl2.addEventListener('click',()=>{
ov1.style.display="none";
document.getElementById('pup1').play();
});



cal2.addEventListener('click',()=>{
    MGHZ=mgh.value;
    HZ=MGHZ*1000000;
result1.innerHTML=HZ;

});

//////hz to mghz
var ov2=document.querySelector(".ov2");
var cl3=document.getElementById("cl3");
var cal3=document.getElementById("cal3");
var b3=document.getElementById("b3");
var HZ,MGHZ;
var mgh1=document.getElementById("mgh1");
var hz1=document.getElementById("hz1");
var result2=document.getElementById("result2");

b3.addEventListener('click',()=>{
    ov2.style.display="block";
    document.getElementById('pup1').play();
    });

    cl3.addEventListener('click',()=>{
        ov2.style.display="none";
        document.getElementById('pup1').play();
        });
        
        
        
        cal3.addEventListener('click',()=>{
            HZ=hz1.value;
            MGHZ=HZ/(1000000);
        result2.innerHTML=MGHZ;
        document.getElementById('pup1').play();
        });

        //pixel to mpixel
var ov3=document.querySelector(".ov3");
var cl4=document.getElementById("cl4");
var cal4=document.getElementById("cal4");
var b4=document.getElementById("b4");
var pixel,mgpixel;
var result3=document.getElementById("result3");
var mpix=document.getElementById("mpix");

b4.addEventListener('click',()=>{
    ov3.style.display="block";
    document.getElementById('pup1').play();
    });

    cl4.addEventListener('click',()=>{
        ov3.style.display="none";
        document.getElementById('pup1').play();
        });

        cal4.addEventListener('click',()=>{
            mgpixel=mpix.value;
            pixel=mgpixel*(1000000);
        result3.innerHTML=pixel;
        document.getElementById('pup1').play();
        });

////////Byte to kilobyte

var ov4=document.querySelector(".ov4");
var cl5=document.getElementById("cl5");
var cal5=document.getElementById("cal5");
var b5=document.getElementById("b5");
var BYTE,kilobyte;
var result4=document.getElementById("result4");
var byt=document.getElementById("byt");

b5.addEventListener('click',()=>{
    ov4.style.display="block";
    document.getElementById('pup1').play();
    });

    cl5.addEventListener('click',()=>{
        ov4.style.display="none";
        document.getElementById('pup1').play();
        });

  cal5.addEventListener('click',()=>{
BYTE=byt.value;
 kilobyte=BYTE/(1024);
 result4.innerHTML=kilobyte;
document.getElementById('pup1').play();
});

//////Bit to mBit
var ov5=document.querySelector(".ov5");
var cl6=document.getElementById("cl6");
var cal6=document.getElementById("cal6");
var b6=document.getElementById("b6");
var BIT,kilobit;
var result5=document.getElementById("result5");
var bit=document.getElementById("bit");

b6.addEventListener('click',()=>{
    ov5.style.display="block";
    document.getElementById('pup1').play();
    });
    cl6.addEventListener('click',()=>{
        ov5.style.display="none";
        document.getElementById('pup1').play();
        });
        cal6.addEventListener('click',()=>{
            BIT=bit.value;
            kilobit=BIT/(125);
             result5.innerHTML=kilobit;
            document.getElementById('pup1').play();
            });

///mile to kilometer
var ov6=document.querySelector(".ov6");
var cl7=document.getElementById("cl7");
var cal7=document.getElementById("cal7");
var b7=document.getElementById("b7");
var MILE,kMeter;
var result6=document.getElementById("result6");
var mile=document.getElementById("mile");

b7.addEventListener('click',()=>{
    ov6.style.display="block";
    document.getElementById('pup1').play();
    });
    cl7.addEventListener('click',()=>{
        ov6.style.display="none";
        document.getElementById('pup1').play();
        });
        cal7.addEventListener('click',()=>{
            MILE=mile.value;
            kMeter=MILE*(1.609);
             result6.innerHTML=kMeter;
            document.getElementById('pup1').play();
            });
///decimal to binary
var ov7=document.querySelector(".ov7");
var cl8=document.getElementById("cl8");
var cal8=document.getElementById("cal8");
var b8=document.getElementById("b8");
var Decimal,Binary;
var result7=document.getElementById("result7");
var dec=document.getElementById("dec");

b8.addEventListener('click',()=>{
    ov7.style.display="block";
    document.getElementById('pup1').play();
    });
    cl8.addEventListener('click',()=>{
        ov7.style.display="none";
        document.getElementById('pup1').play();
        });

        cal8.addEventListener('click',()=>{
            let Decimal=parseInt (dec.value) ;
            Binary=Decimal.toString(2);
             result7.innerHTML=Binary;
            document.getElementById('pup1').play();
            });