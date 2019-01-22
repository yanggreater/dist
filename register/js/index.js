window.onload=function(){
  
    var oBtn = document.getElementById('btn');
            oBtn.onclick = function(e){
  
                var vaccount = document.getElementById('account').value;
                var vpassword = document.getElementById('password').value;
                var vname = document.getElementById('name').value;
                var vemail = document.getElementById('email').value;
                var vphone = document.getElementById('phone').value;
                var vcollege = document.getElementById('college').value;
                var vAddress = document.getElementById('address').value;
                
                if ((vaccount=="")||(vpassword=="")||(vname=="")||(vemail=="")||(vphone=="")||(vcollege=="")||(vAddress=='')) {
                alert("请您完善信息");
                }else{
                var data= "account="+vaccount+"&password="+vpassword+"&name="+vname+"&Email="+vemail+"&phone="+vphone+"&college="+vcollege+"&Address="+vAddress;
                
                    ajax('POST','http://139.199.230.213:3000/register',function(str){
                        alert("register successfully!");
                    },function(str){
                        alert(str+"提交失败，请重新提交");
                    },data);
                    document.getElementById('account').value = '';
                    document.getElementById('password').value = '';
                    document.getElementById('name').value = '';
                    document.getElementById('email').value = '';
                    document.getElementById('phone').value = '';
                    document.getElementById('college').value = '';
                    document.getElementById('address').value = '';
                }
            
            }
  }