var name_array=[];

function submit(){
    var name1=document.getElementById("st1").value;
    var name2=document.getElementById("st2").value;
    var name3=document.getElementById("st3").value;
    var name4=document.getElementById("st4").value;
    var name5=document.getElementById("st5").value;

    name_array.push(name1);
    name_array.push(name2);
    name_array.push(name3);
    name_array.push(name4);
    name_array.push(name5);

    console.log(name_array);

    document.getElementById("disply_name").innerHTML=name_array;
    document.getElementById("submit_btn").style.display="none";
    document.getElementById("sort_btn").style.display="inline-block";
}

function sorting(){
    name_array.sort();
    console.log(name_array)
    document.getElementById("disply_name").innerHTML=name_array;
}