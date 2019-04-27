// set the background color / clear canvas
C("#444");
c.R(0,0,1e3,450);
// background
m=j=>{
  c.beginPath();i=0;
  c.moveTo(0,0);
  while(i<M)e=i+L*j/48,c.lineTo(i++*19, Math.cos(e/3/j)*9*j+50*j+200);
  c.lineTo(1e3,0);
  c.fill();
}
C('#555');
m(3);
C('#666');
m(2);
C(D?'#faa':W);
m(1);