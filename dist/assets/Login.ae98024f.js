import{r as v,_ as L,u as T,a as B,o as p,c as u,b as e,w as C,d as m,n as D,t as I,e as f,f as h,v as g,g as N,p as V,h as E}from"./index.a90f3805.js";import{_ as M,a as w,e as O}from"./encryption.fb6bb8c3.js";const o=v({isShowAlert:!1,alertText:null,colorClass:""});function y(t,c){o.isShowAlert=!0,o.alertText=t,o.colorClass=c}const r=t=>(V("data-v-f690f8c9"),t=t(),E(),t),P={class:"text-center wrapper-login"},j={class:"form-signin w-100 m-auto"},J=["onSubmit"],K=r(()=>e("img",{class:"mb-4",src:M,alt:"",width:"72",height:"72"},null,-1)),U=r(()=>e("h1",{class:"h3 mb-3 fw-normal"},"Manajemen Asset Bangunan dan Gedung Kutai Kartanegara",-1)),$={class:"form-floating"},q=r(()=>e("label",{for:"email"},"Email address",-1)),F={class:"form-floating"},G=r(()=>e("label",{for:"password"},"Password",-1)),R=["disabled"],H={key:0},Q=r(()=>e("i",{class:"fa-solid fa-sync fa-spin"},null,-1)),W=[Q],X=r(()=>e("p",{class:"mt-5 mb-3 text-muted"},"\xA9 2023",-1)),Y={__name:"Login",setup(t){const c=T(),n=B(!1),a=v({email:null,password:null});async function b(i){const{id:s,role:l,tokens:S,username:k}=i,_=JSON.parse(S.replace(/'/g,'"')).access;try{const d=await w({method:"get",url:`https://backend.observer.xyz/organization_users/?user=${s}`,headers:{Authorization:`Bearer ${_}`}}),{results:z}=d.data,A={id:s,role:l,accessToken:_,username:k,organization:z[0].organization};sessionStorage.setItem("userData",O(JSON.stringify(A)))}catch(d){console.log(d)}}async function x(){if(a.email===null||a.password===null){y("All Field cannot empty!","alert-danger");return}const i={email:a.email,password:a.password};n.value=!0;try{const s=await w.post("https://backend.observer.xyz/auth/login/",i);b(s.data),c.push({path:"map-viewer",query:{project:"7d2e4643-ec20-484a-92a2-1ed63e24d34c",year:"2023"}}),n.value=!1}catch{y("Email or Password not correct","alert-danger"),a.password=null,n.value=!1}}return(i,s)=>(p(),u("div",P,[e("main",j,[e("form",{onSubmit:C(x,["prevent"])},[K,U,m(o).isShowAlert?(p(),u("div",{key:0,style:{padding:"8px 16px"},class:D(["text-start alert",m(o).colorClass]),role:"alert"},I(m(o).alertText),3)):f("",!0),e("div",$,[h(e("input",{type:"email","onUpdate:modelValue":s[0]||(s[0]=l=>a.email=l),class:"form-control",id:"email",placeholder:"name@example.com"},null,512),[[g,a.email]]),q]),e("div",F,[h(e("input",{type:"password","onUpdate:modelValue":s[1]||(s[1]=l=>a.password=l),class:"form-control",id:"password",placeholder:"Password"},null,512),[[g,a.password]]),G]),e("button",{class:"w-100 btn btn-lg btn-primary",type:"submit",disabled:n.value},[n.value?(p(),u("span",H,W)):f("",!0),N(" Login ")],8,R),X],40,J)])]))}},se=L(Y,[["__scopeId","data-v-f690f8c9"]]);export{se as default};
