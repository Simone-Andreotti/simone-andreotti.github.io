import{S as j,C as x,P as E,W as L,A as z,R as P,E as S,M as H,T as R,a as k,b as Y,G as I,c as W,d as A,e as s}from"./tween.esm-fxhj7eK2.js";const a={x:-.66,y:.38,z:.75};function C(){const d=new j;d.background=new x(16777215);const l=new E(40,window.innerWidth/window.innerHeight,.1,1e3);l.position.z=5.1;const r=new L({powerPreference:"high-performance",antialias:!0});r.setSize(window.innerWidth,window.innerHeight),document.getElementById("canvas").appendChild(r.domElement),r.toneMapping=z,r.setPixelRatio(window.devicePixelRatio),new P().load("envmap.hdr",function(e){e.mapping=S,d.environment=e,r.toneMapping=z,r.toneMappingExposure=1});const b=new H({color:16777215,transmission:1,transparent:!0,roughness:.1,metalness:0,envMapIntensity:1}),f=new R().load("alluminio.jpg");f.wrapS=f.wrapT=k,f.repeat.set(10,10),f.rotation=-Math.PI/8;const M=new Y({color:16777215,roughness:.2,metalness:.6,map:f,roughnessMap:f,envMapIntensity:1}),v=new I;var t={obj:null,center:null,left:null,right:null,handle:null},c=0,g=0;v.load("finestra.glb",function(e){t.obj=e.scene,d.add(t.obj),t.obj.position.y-=6.4,t.obj.position.x+=.4,t.obj.scale.set(.006,.006,.006),t.obj.traverse(function(n){n.isMesh&&!n.name.includes("glass")?n.material=M:n.material=b,n.isMesh&&n.name.includes("inner")&&(n.material=new W({color:6710886})),n.name=="finestra"&&(t.center=n),n.name=="left"&&(t.left=n,c=n.rotation.y),n.name=="right"&&(t.right=n,g=n.rotation.y),n.name=="maniglia"&&(t.handle=n)}),t.center.rotation.set(a.x,a.y,a.z)});const i=new A;var T=1e3/60,p=0;function h(){Date.now()>=p&&(i.update(),window.scrollY<window.innerHeight*4&&(requestAnimationFrame(h),r.render(d,l)),p+=T,Date.now()>=p&&(p=Date.now())),requestAnimationFrame(h)}h();const o={};window.addEventListener("keydown",function(e){if(o[e.key]=!0,t.left&&t.right){if(o.a){const n=new s(t.left.rotation).to({y:t.left.rotation.y+1},500).start();i.add(n);const w=new s(t.right.rotation).to({y:t.right.rotation.y-1},500).start();i.add(w)}if(o.d){const n=new s(t.left.rotation).to({y:t.left.rotation.y-1},500).start();i.add(n);const w=new s(t.right.rotation).to({y:t.right.rotation.y+1},500).start();i.add(w)}}if(t.handle){if(o.w){const n=new s(t.handle.rotation).to({z:t.handle.rotation.z+Math.PI/2},500).start();i.add(n)}if(o.s){const n=new s(t.handle.rotation).to({z:t.handle.rotation.z-Math.PI/2},500).start();i.add(n)}}o.b&&(t.center.rotation.x+=.01),o.h&&(t.center.rotation.x-=.01),o.n&&(t.center.rotation.y+=.01),o.j&&(t.center.rotation.y-=.01),o.m&&(t.center.rotation.z+=.01),o.k&&(t.center.rotation.z-=.01),o.l&&console.log(t.center.rotation),o.p&&function(){let w=1.5;function y(){window.scrollBy(0,w),window.innerHeight+window.scrollY>=document.body.offsetHeight&&window.scrollTo(0,0),requestAnimationFrame(y)}y()}(),o.o&&document.documentElement.classList.toggle("hidden"),o.g&&(d.background=new x(65280))}),window.addEventListener("keyup",function(e){o[e.key]=!1});var u=!1,m=0;window.addEventListener("scroll",function(){const e=(window.scrollY-m)/1e3;if(m=window.scrollY,window.scrollY<window.innerHeight){if(e>0?(t.center.rotation.x+=e,t.center.rotation.x>0&&(t.center.rotation.x=0),t.center.rotation.y-=e,t.center.rotation.y<0&&(t.center.rotation.y=0),t.center.rotation.z-=e,t.center.rotation.z<0&&(t.center.rotation.z=0),t.obj.position.x-=e*2,t.obj.position.x<-.3&&(t.obj.position.x=-.3)):(t.center.rotation.x+=e,t.center.rotation.x<a.x&&(t.center.rotation.x=a.x),t.center.rotation.y-=e,t.center.rotation.y>a.y&&(t.center.rotation.y=a.y),t.center.rotation.z-=e,t.center.rotation.z>a.z&&(t.center.rotation.z=a.z),t.obj.position.x-=e*2,t.obj.position.x>.4&&(t.obj.position.x=.4)),l.position.z-=e*3,u==!0){const n=new s(t.handle.rotation).to({z:0},500).start();i.add(n),u=!1}t.left.rotation.y=c,t.right.rotation.y=g}else{if(t.center.rotation.x=0,t.center.rotation.y=0,t.center.rotation.z=0,u==!1){const n=new s(t.handle.rotation).to({z:Math.PI/2},500).start();i.add(n),u=!0}t.left.rotation.y+=e,t.left.rotation.y<c-1.3&&(t.left.rotation.y=c-1.3),t.right.rotation.y-=e,t.right.rotation.y>g+1.3&&(t.right.rotation.y=g+1.3),window.scrollY<window.innerHeight*1.4?l.position.z+=e*4:window.scrollY<window.innerHeight*4&&(l.position.z-=e)}}),window.addEventListener("resize",function(){l.aspect=window.innerWidth/window.innerHeight,l.updateProjectionMatrix(),r.setSize(window.innerWidth,window.innerHeight)}),window.onbeforeunload=function(){window.scrollTo(0,0)}}C();
