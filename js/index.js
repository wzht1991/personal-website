// nav section
var list=[];
list=document.querySelectorAll(".list");
// 记录使用过的那个nav
var used=null;
for(let i=0;i<list.length;i++){
    list[i].addEventListener("click", function(){
         list[i].style.color="#191970";
         list[i].style.borderBottom="3px solid #191970";
        // 如果之前点过 就把之前点过的nav 变成原样 不然就会出现多个nav 有下滑线 和字体是蓝色
        if(used!=null){
        list[used].style.color="#8E939A";
        list[used].style.borderBottom="none";
        }
        // 记录成点击过的nav
         used=i
         
    });
}

