var array = [{"x":"8/11/2009","y":0.026572007},{"x":"8/12/2009","y":0.725057454},{"x":"8/13/2009","y":0.024530916},{"x":"8/14/2009","y":0.031004457}]

var max_y = Math.max.apply(Math, array.map((o)=>{ return o.y}));

console.log(max_y);
