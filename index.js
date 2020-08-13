
    validateFirst=()=>{
        var first = document.getElementById("firstInput").value
        if(!first){
            document.getElementById("msg1").innerText="Field can't be empty"
        }
        else{
            document.getElementById("msg1").innerText=""
        }
    }
    validateSecond=()=>{
        var second = document.getElementById("secondInput").value
        if(!second){
            document.getElementById("msg2").innerText="Field can't be empty"
        }
        else{
            document.getElementById("msg2").innerText=""
        }
    }
    operation=(value)=>{
        op = value
    }
    calculate=()=>{
        var first = document.getElementById("firstInput").value
        var second = document.getElementById("secondInput").value
        
        try{
        final = first + op + second
        document.getElementById("screen").innerHTML=final
        result = eval(final)
        document.getElementById("result").innerText=result
        }
        catch(error){
        document.getElementById("result").innerText="Something wrong!!"
        }
    }
