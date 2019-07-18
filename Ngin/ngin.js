W=450;
H=700;
C=document.querySelector('canvas');
C.width=W;
C.height=H;
c=C.getContext('2d');
l=window.addEventListener.bind(window);
r=Math.random;
k=[];
K=i=>j=>i.reduce((a,v)=>k[v]||a,0);
kl=K([65,37]);
kr=K([68,39]);
ku=K([87,37]);
kd=K([83,40]);
ka=K([32]);
l('keydown', i=>{
  k[i.keyCode]=1;
})
l('keyup', i=>{
  k[i.keyCode]=0;  
})
T=0;
e=[];
//systems is a list of objects with a function to apply to those objects
//each object is data and added to multiple systems
//update system does updates
//draw system does draws
//velocity system applies velocity
S=[
  o=>o.u(o),
  t=>{c.fillRect(t.x,t.y,t.w,t.h)},
  o=>{o.x+=o.vx*o.s;o.y+=o.vy*o.s},
  t=>{
    t.y%100?0:t.vx*=-1;
    t.D=t.y>H;
  },
  t=>{
    t.D=T>t.T+100;
    E[3].map(o=>{
      o.x+o.w>t.x&&o.x<t.x+t.w&&
        o.y+o.h>t.y&&o.y<t.y+t.h&&(o.l--,t.l--);
    })
  },
  t=>{
    t.l>0?0:t.D=1;
  },
];
E=S.map(i=>[]);
A=(o,e)=>{e.map(i=>{E[i].push(o)})}
u=i=>{
  T++;
  c.clearRect(0,0,W,H);
  r()>.9&&spawn();
  E.map((a,i)=>a.map(S[i],E[i]=a.filter(o=>!o.D)));
  e.map(o=>{
    o.u(o);
    o.d(o);
  });
  e=e.filter(o=>!o.D);
  window.requestAnimationFrame(u);
}
s=i=>{
  //player
  p={u:t=>{
    t.vx=kr()-kl();
    t.vy=kd()-ku();
    ka()&&A({x:t.x,y:t.y,w:5,h:6,T,vx:t.vx/2,vy:t.vy-5,s:1,l:1},[1,2,4,5])
  },x:0,y:0,w:10,h:10,s:5};
  //enemy
  spawn=i=>{
    A({vx:r()>.5?-1:1,vy:1,x:W*r(),y:0,w:40,h:20,t:100,l:20,s:1},[1,2,3,5])
  }
  A(p,[0,1,2]);
  A({x:40,y:40,w:100,h:100},[1]);
  u();
}
s();